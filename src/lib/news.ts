import type { NewsArticle } from "lib/sanity.queries";

export function newsHref(article: Pick<NewsArticle, "legacyPath" | "year" | "slug">) {
  return article.legacyPath || `/news/${article.year}/${article.slug}`;
}

export function formatNewsDate(article: Pick<NewsArticle, "publicationDate" | "publishedAt">, locale = "ja-JP") {
  const date = article.publicationDate ? `${article.publicationDate}T12:00:00-05:00` : article.publishedAt;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric", month: "long", day: "numeric", timeZone: "America/Lima",
  }).format(new Date(date));
}
