import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { JSDOM } = createRequire(require.resolve("jest-environment-jsdom/package.json"))("jsdom");
const articles = JSON.parse(await readFile(new URL("../src/lib/legacy-news.json", import.meta.url), "utf8"));
const compact = (text) => text.replace(/\s+/g, "");
const base = "https://peruinjapan.org";
let cursor = 0;
let checked = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (cursor < articles.length) {
    const article = articles[cursor++];
    const response = await fetch(base + article.legacyPath);
    assert.equal(response.status, 200, article.legacyPath);
    const dom = new JSDOM(await response.text());
    const document = dom.window.document;
    const body = document.querySelector("article[lang=ja]");
    assert(body, `Missing Japanese article: ${article.legacyPath}`);
    const original = article.bodyJp.map((block) => block._type === "block"
      ? block.children.map((span) => span.text).join("")
      : block._type === "newsTable" ? block.rows.map((row) => row.cells.join("")).join("") : "").join("");
    assert.equal(compact(body.textContent), compact(original), `Incomplete text: ${article.legacyPath}`);
    assert.equal(body.querySelectorAll("img").length, article.bodyJp.filter((block) => block._type === "newsImage").length);
    assert.equal(body.querySelectorAll("table").length, article.bodyJp.filter((block) => block._type === "newsTable").length);
    assert.equal(document.querySelector('link[rel="canonical"]').href, base + article.legacyPath);
    for (const mark of article.bodyJp.flatMap((block) => block.markDefs || [])) {
      assert([...body.querySelectorAll("a")].some((link) => link.getAttribute("href") === mark.href), `Missing source/download: ${mark.href}`);
    }
    dom.window.close();
    checked++;
  }
}));
console.log(`Verified ${checked} public original URLs: full Japanese text, 52 images, two tables, sources/downloads and canonical links.`);

const found = new Set();
for (const year of [2025, 2026]) {
  const response = await fetch(`${base}/investing-in-peru/news/${year}`);
  assert.equal(response.status, 200);
  const dom = new JSDOM(await response.text());
  const data = JSON.parse(dom.window.document.getElementById("__NEXT_DATA__").textContent);
  for (const article of data.props.pageProps.articles) if (article.legacyPath) found.add(article.legacyPath);
  dom.window.close();
}
assert.equal(found.size, articles.length, "The archive is still cached or missing migrated articles; retry after ISR revalidates.");
const hub = await fetch(`${base}/investing-in-peru`);
const hubDom = new JSDOM(await hub.text());
const hubData = JSON.parse(hubDom.window.document.getElementById("__NEXT_DATA__").textContent);
assert.equal(hubData.props.pageProps.latestNews.length, 6);
assert.equal(hubData.props.pageProps.latestNews[0].slug, "proinversion-infracon-2026-27-billion-financing-since-2023");
hubDom.window.close();
console.log("Verified the 2025/2026 archives and the six latest Sanity articles on the investment hub.");
