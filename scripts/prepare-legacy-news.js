const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const ts = require('typescript');
const { JSDOM } = createRequire(require.resolve('jest-environment-jsdom/package.json'))('jsdom');

const root = path.join(__dirname, '..');
const output = path.join(root, 'src/lib/legacy-news.json');
const normalize = (value) => value.replace(/\s+/g, ' ').trim();
const absolute = (url) => url.startsWith('/') ? `https://peruinjapan.org${url}` : url;
const docs = [];
for (const year of ['2025', '2026']) {
  const directory = path.join(root, 'src/pages/investing-in-peru', year);
  for (const file of fs.readdirSync(directory).filter((name) => name.endsWith('.tsx')).sort()) {
    const filename = path.join(directory, file);
    let source = fs.readFileSync(filename, 'utf8');
    if (source.includes('getLegacyNewsProps')) {
      source = execFileSync('git', ['show', `34c1d62:src/pages/investing-in-peru/${year}/${file}`], { cwd: root, encoding: 'utf8' });
    }
    assert(!source.includes('getLegacyNewsProps'), 'Original pages are unavailable at the pre-migration revision; retain the verified migration snapshot.');
    let metadata;
    const moduleExports = {};
    const image = ({ src, alt }) => React.createElement('img', { src, alt: alt || '' });
    const layout = (props) => { metadata = props; return React.createElement('main', null, props.children); };
    const slider = ({ images }) => React.createElement('div', null, images.map((item, index) => {
      const img = typeof item === 'string' ? { src: item } : item;
      return React.createElement('figure', { key: index },
        image(img), img.caption ? React.createElement('figcaption', null, img.caption) : null);
    }));
    const mockedRequire = (name) => {
      if (name === 'react/jsx-runtime') return require(name);
      if (name === 'next/router') return { useRouter: () => ({ locale: 'jp' }) };
      if (name === 'next/image' || name.endsWith('/Banner')) return { default: image, __esModule: true };
      if (name.endsWith('/Layout')) return { default: layout, __esModule: true };
      if (name.endsWith('/ImageSlider')) return { default: slider, __esModule: true };
      if (name === 'next/link') return { default: ({ children, href, className }) => React.createElement('a', { href, className }, children), __esModule: true };
      if (name === 'react-icons/im') return { ImDownload2: () => null };
      throw new Error(`Unhandled import ${name} in ${filename}`);
    };
    const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText;
    vm.runInNewContext('(function(require,exports){' + code + '\n})', {}, { filename })(mockedRequire, moduleExports);
    const html = renderToStaticMarkup(React.createElement(moduleExports.default));
    const dom = new JSDOM(html);
    const main = dom.window.document.querySelector('main');
    assert(main && metadata?.articlePublishedTime, `Missing article metadata: ${file}`);
    const body = [];
    let serial = 0;
    const key = () => `m${++serial}`;
    function paragraph(nodes, style = 'normal', listItem, level) {
      const children = [];
      const markDefs = [];
      function inline(node, marks = []) {
        if (node.nodeType === 3) { if (node.textContent) children.push({ _type: 'span', _key: key(), text: node.textContent, marks }); return; }
        if (node.nodeType !== 1) return;
        const tag = node.tagName.toLowerCase();
        if (tag === 'br') { children.push({ _type: 'span', _key: key(), text: '\n', marks }); return; }
        const decorated = [...marks];
        if (['strong', 'b'].includes(tag)) decorated.push('strong');
        if (['em', 'i'].includes(tag)) decorated.push('em');
        if (['sup', 'sub', 'code'].includes(tag)) decorated.push(tag);
        if (tag === 'a' && node.getAttribute('href')) {
          const id = key();
          markDefs.push({ _type: 'link', _key: id, href: node.getAttribute('href') }); decorated.push(id);
        }
        for (const child of node.childNodes) inline(child, decorated);
      }
      nodes.forEach((node) => inline(node));
      if (normalize(children.map((child) => child.text).join(''))) body.push({ _type: 'block', _key: key(), style, children, markDefs, ...(listItem ? { listItem, level } : {}) });
    }
    const blockTags = new Set(['DIV', 'SECTION', 'ARTICLE', 'HEADER', 'FOOTER', 'MAIN', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'UL', 'OL', 'LI', 'BLOCKQUOTE', 'TABLE', 'FIGURE', 'IMG', 'TIME']);
    function walk(parent, listItem, level = 1) {
      let pending = [];
      const flush = () => { paragraph(pending, 'normal', listItem, level); pending = []; };
      for (const node of parent.childNodes) {
        if (node.nodeType !== 1 || !blockTags.has(node.tagName)) { pending.push(node); continue; }
        flush();
        const tag = node.tagName;
        if (tag === 'TABLE') {
          const rows = [...node.querySelectorAll('tr')].map((row) => ({ _type: 'newsTableRow', _key: key(), cells: [...row.cells].map((cell) => normalize(cell.textContent)), header: Boolean(row.querySelector('th')) }));
          body.push({ _type: 'newsTable', _key: key(), rows });
        } else if (tag === 'IMG') {
          body.push({ _type: 'newsImage', _key: key(), url: absolute(node.getAttribute('src')), alt: node.getAttribute('alt') || '' });
        } else if (tag === 'FIGURE') {
          walk(node, listItem, level);
        } else if (tag === 'UL' || tag === 'OL') {
          walk(node, tag === 'UL' ? 'bullet' : 'number', parent.tagName === 'LI' ? level + 1 : level);
        } else if (tag === 'LI') {
          walk(node, listItem || 'bullet', level);
        } else if (/^H\d$/.test(tag)) {
          paragraph([...node.childNodes], tag === 'H1' ? 'h2' : tag.toLowerCase());
        } else if (tag === 'BLOCKQUOTE') {
          paragraph([...node.childNodes], 'blockquote');
        } else if (tag === 'P' || tag === 'TIME') {
          paragraph([...node.childNodes], 'normal', listItem, level);
        } else walk(node, listItem, level);
      }
      flush();
    }
    walk(main);
    const migratedText = body.map((item) => item._type === 'block' ? item.children.map((child) => child.text).join('') : item._type === 'newsTable' ? item.rows.map((row) => row.cells.join('')).join('') : '').join('');
    // Ignore whitespace only: every visible character must survive conversion, including table cells and captions.
    const compact = (text) => text.replace(/\s+/g, '');
    assert.equal(compact(migratedText), compact(main.textContent), `Lost or reordered text in ${file}`);
    const links = [...main.querySelectorAll('a[href]')].map((link) => link.getAttribute('href'));
    const migratedLinks = body.flatMap((item) => item.markDefs || []).map((mark) => mark.href);
    assert.deepEqual(migratedLinks, links, `Lost links in ${file}`);
    const images = body.filter((item) => item._type === 'newsImage');
    assert.equal(images.length, main.querySelectorAll('img').length);
    const title = file === 'peru-gdp-q1-2025-quarterly-economic-report.tsx'
      ? '\u30da\u30eb\u30fc2025\u5e74\u7b2c1\u56db\u534a\u671fGDP\u5831\u544a'
      : normalize(main.querySelector('.japanese-heading-1')?.textContent || metadata.title);
    const firstParagraph = body.find((item) => item._type === 'block' && item.children.map((span) => span.text).join('').length > 70);
    const date = metadata.articlePublishedTime.slice(0, 10);
    const slug = file.replace(/\.tsx$/, '');
    const legacyPath = `/investing-in-peru/${year}/${slug}`;
    docs.push({
      _id: `news-legacy-${year}-${slug}`, _type: 'newsArticle',
      titleJp: title, slug: { _type: 'slug', current: slug },
      year: Number(date.slice(0, 4)), publishedAt: metadata.articlePublishedTime, publicationDate: date,
      excerptJp: metadata.description || normalize(firstParagraph?.children.map((span) => span.text).join('') || title),
      bodyJp: body, legacyPath, category: '投資',
      coverImageUrl: metadata.image || images[0]?.url || null,
      coverImageAltJp: images[0]?.alt || title,
    });
    dom.window.close();
  }
}
assert.equal(docs.length, 39);
fs.writeFileSync(output, JSON.stringify(docs, null, 2) + '\n');
console.log(JSON.stringify({ articles: docs.length, images: docs.reduce((n, doc) => n + doc.bodyJp.filter((block) => block._type === 'newsImage').length, 0), tables: docs.reduce((n, doc) => n + doc.bodyJp.filter((block) => block._type === 'newsTable').length, 0), output }, null, 2));
