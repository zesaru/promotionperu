import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { createClient } from "next-sanity";

// Dry run: node scripts/import-news-october-2026.mjs
// Publish: node scripts/import-news-october-2026.mjs --publish --images-dir <folder>
// Verify:  node scripts/import-news-october-2026.mjs --verify
// Dates are the source publications' local times in Peru (UTC-05:00).
const directory = path.dirname(fileURLToPath(import.meta.url));
const japanese = JSON.parse(await readFile(path.join(directory, "news-october-2026.json"), "utf8"));
const spanish = JSON.parse(await readFile(path.join(directory, "news-october-2026-es.json"), "utf8"));
const args = process.argv.slice(2);
const publish = args.includes("--publish");
const verify = args.includes("--verify");
assert(!(publish && verify), "Choose --publish or --verify.");
const imagesOption = args.indexOf("--images-dir");
const imagesDirectory = imagesOption >= 0 ? args[imagesOption + 1] : undefined;

function block(text, key, headings = []) {
  return {
    _type: "block",
    _key: key,
    style: headings.includes(text) ? "h2" : "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `${key}-text`, text, marks: [] }],
  };
}

function body(paragraphs, headings, article, language) {
  const blocks = paragraphs.map((text, index) => block(text, `${language}-${index + 1}`, headings));
  blocks.push(block(`${language === "jp" ? "引用文献：" : "Fuente: "}${article.source}`, `${language}-source`));
  const link = block(article.sourceUrl, `${language}-source-link`);
  link.markDefs.push({ _type: "link", _key: "source-link", href: article.sourceUrl });
  link.children[0].marks = ["source-link"];
  blocks.push(link);
  return blocks;
}

assert.equal(japanese.length, 4);
assert.equal(spanish.length, 4);
assert.equal(new Set(japanese.map((article) => article.slug)).size, 4);
const documents = japanese.map((article) => {
  const translation = spanish.find((item) => item.number === article.number);
  assert(translation, `Missing Spanish translation for article ${article.number}.`);
  assert.equal(translation.paragraphsEs.length, article.paragraphsJp.length, "Paragraph counts must match.");
  assert(Number.isFinite(Date.parse(article.publishedAt)), "Invalid publication date.");
  assert.match(article.sourceUrl, /^https:\/\/www\.gob\.pe\//);
  assert.match(article.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  return {
    _id: `news-2026-${article.slug}`,
    _type: "newsArticle",
    slug: { _type: "slug", current: article.slug },
    year: 2026,
    publishedAt: article.publishedAt,
    titleJp: article.titleJp,
    titleEs: translation.titleEs,
    excerptJp: article.excerptJp,
    excerptEs: translation.excerptEs,
    coverImageAltJp: article.altJp,
    coverImageAltEs: translation.altEs,
    bodyJp: body(article.paragraphsJp, article.headingsJp, article, "jp"),
    bodyEs: body(translation.paragraphsEs, translation.headingsEs, article, "es"),
  };
});

if (!publish && !verify) {
  if (imagesDirectory) {
    for (const article of japanese) {
      const image = await readFile(path.join(imagesDirectory, `${article.number}.png`));
      assert.equal(image.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", "Expected PNG image.");
    }
  }
  console.log(JSON.stringify(documents.map((doc) => ({
    id: doc._id,
    title: doc.titleJp,
    publishedAt: doc.publishedAt,
    paragraphs: { jp: doc.bodyJp.length, es: doc.bodyEs.length },
    url: `/news/2026/${doc.slug.current}`,
  })), null, 2));
} else {
  process.loadEnvFile(path.join(directory, "../.env"));
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET;
  assert(projectId && dataset, "Sanity project and dataset must be configured.");
  let token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN;
  if (publish && !token) {
    const config = JSON.parse(await readFile(path.join(homedir(), ".config/sanity/config.json"), "utf8"));
    token = config.authToken;
  }
  if (publish) assert(token, "Sign in with the Sanity CLI before publishing.");
  const client = createClient({ projectId, dataset, token, apiVersion: "2026-10-26", useCdn: false });
  if (publish) {
    assert(imagesDirectory, "--images-dir is required when publishing.");
    // Check every file before uploading anything or creating documents.
    const images = await Promise.all(japanese.map(async (article) => {
      const bytes = await readFile(path.join(imagesDirectory, `${article.number}.png`));
      assert.equal(bytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
      return bytes;
    }));
    const existing = await client.fetch(
      '*[_type == "newsArticle" && year == 2026 && slug.current in $slugs]{_id, "slug": slug.current}',
      { slugs: documents.map((doc) => doc.slug.current) },
    );
    for (const article of existing) {
      assert(documents.some((doc) => doc._id === article._id && doc.slug.current === article.slug),
        `A document already uses slug ${article.slug}. No content was overwritten.`);
    }
    for (let index = 0; index < documents.length; index++) {
      const doc = documents[index];
      const asset = await client.assets.upload("image", images[index], {
        filename: `${doc.slug.current}.png`,
        contentType: "image/png",
      });
      doc.coverImage = { _type: "image", asset: { _type: "reference", _ref: asset._id } };
      doc.gallery = [{
        _type: "object",
        _key: "cover",
        image: doc.coverImage,
        altJp: doc.coverImageAltJp,
        altEs: doc.coverImageAltEs,
      }];
    }
    // Deterministic IDs and createIfNotExists preserve any later editorial changes.
    let transaction = client.transaction();
    for (const doc of documents) transaction = transaction.createIfNotExists(doc);
    await transaction.commit();
    console.log(`Created missing October articles in ${projectId}/${dataset}.`);
  }
  const saved = await client.fetch(
    '*[_type == "newsArticle" && _id in $ids] | order(publishedAt desc){..., "coverUrl": coverImage.asset->url}',
    { ids: documents.map((doc) => doc._id) },
  );
  assert.equal(saved.length, documents.length, "All four articles must exist.");
  for (const expected of documents) {
    const actual = saved.find((doc) => doc._id === expected._id);
    for (const key of ["titleJp", "titleEs", "excerptJp", "excerptEs", "slug", "year", "bodyJp", "bodyEs", "coverImageAltJp", "coverImageAltEs"]) {
      assert.deepEqual(actual[key], expected[key], `Unexpected ${key} in ${expected._id}.`);
    }
    assert.equal(Date.parse(actual.publishedAt), Date.parse(expected.publishedAt));
    assert(actual.coverUrl?.startsWith("https://cdn.sanity.io/images/"), "Missing Sanity cover image.");
    assert.equal(actual.gallery[0].image.asset._ref, actual.coverImage.asset._ref);
  }
  console.log(JSON.stringify(saved.map((doc) => ({
    title: doc.titleJp,
    url: `https://peruinjapan.org/news/2026/${doc.slug.current}`,
    image: doc.coverUrl,
  })), null, 2));
}
