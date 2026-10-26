import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { createClient } from "next-sanity";

const directory = path.dirname(fileURLToPath(import.meta.url));
const articles = JSON.parse(await readFile(path.join(directory, "../src/lib/legacy-news.json"), "utf8"));
assert.equal(articles.length, 39);
const paths = new Set(articles.map((article) => article.legacyPath));
assert.equal(paths.size, articles.length);
for (const article of articles) {
  assert(article.titleJp && article.bodyJp.length && article.publicationDate);
  assert(!article.titleEs && !article.bodyEs, "Legacy articles must remain Japanese-only.");
  assert.equal(Number(article.publicationDate.slice(0, 4)), article.year);
}
const args = process.argv.slice(2);
const pilot = args.includes("--pilot");
const publish = args.includes("--publish") || pilot;
const verify = args.includes("--verify");
// Include a table and a photo gallery in the pilot, rather than two simple articles.
const selected = pilot ? [
  articles.find((article) => article.bodyJp.some((block) => block._type === "newsTable")),
  articles.find((article) => article.slug.current === "peru-investment-seminar-tokyo-2025"),
] : articles;
if (!publish && !verify) {
  console.log(JSON.stringify(articles.map((article) => ({
    path: article.legacyPath, year: article.year, title: article.titleJp, blocks: article.bodyJp.length,
  })), null, 2));
  process.exit(0);
}
process.loadEnvFile(path.join(directory, "../.env"));
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET;
let token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN;
if (publish && !token) {
  token = JSON.parse(await readFile(path.join(homedir(), ".config/sanity/config.json"), "utf8")).authToken;
}
assert(projectId && dataset);
if (publish) assert(token);
const client = createClient({ projectId, dataset, token, apiVersion: "2026-10-26", useCdn: false });
if (publish) {
  const conflicts = await client.fetch(
    '*[_type == "newsArticle" && slug.current in $slugs]{_id, "slug": slug.current}',
    { slugs: selected.map((article) => article.slug.current) },
  );
  assert(conflicts.every((saved) => selected.some((article) => article._id === saved._id)), "A slug is already in use; no existing article was overwritten.");
  let transaction = client.transaction();
  for (const article of selected) transaction = transaction.createIfNotExists(article);
  // Preserve the October Spanish fields as an archive, but disable public translation by default.
  // The new Japanese-only renderer requires an explicit spanishEnabled=true to expose Spanish.
  const october = await client.fetch('*[_type == "newsArticle" && _id match "news-2026-*"]{_id,publishedAt}');
  for (const article of october) transaction = transaction.patch(article._id, { set: {
    spanishEnabled: false, category: "投資", publicationDate: article.publishedAt.slice(0, 10),
  } });
  await transaction.commit();
}
const saved = await client.fetch('*[_type == "newsArticle" && _id in $ids]', { ids: selected.map((article) => article._id) });
assert.equal(saved.length, selected.length);
for (const expected of selected) {
  const actual = saved.find((article) => article._id === expected._id);
  for (const [field, value] of Object.entries(expected)) {
    if (field === "publishedAt") assert.equal(Date.parse(actual[field]), Date.parse(value));
    else assert.deepEqual(actual[field], value, `Unexpected ${field} in ${expected.legacyPath}`);
  }
}
console.log(`Verified ${saved.length} legacy articles, including complete text, images, links, tables, dates and original URLs.`);
