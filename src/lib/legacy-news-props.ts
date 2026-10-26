import { getNewsArticleByYearAndSlug } from "lib/sanity.client";
import type { NewsArticle } from "lib/sanity.queries";
import type { GetStaticProps } from "next";

import type { NewsArticlePageProps } from "@/components/NewsArticlePage";
import legacyArticles from "@/lib/legacy-news.json";

export function getLegacyNewsProps(year: number, slug: string): GetStaticProps<NewsArticlePageProps> {
  return async () => {
    const saved = await getNewsArticleByYearAndSlug(year, slug);
    const local = legacyArticles.find((item) => item.year === year && item.slug.current === slug);
    const article: NewsArticle | null = saved || (local ? { ...local, slug: local.slug.current, coverImage: local.coverImageUrl } : null);
    if (!article) return { notFound: true, revalidate: 60 };
    return { props: { article }, revalidate: 60 };
  };
}
