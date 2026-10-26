import { getNewsArticleByYearAndSlug } from "lib/sanity.client";
import type { GetStaticProps } from "next";

import type { NewsArticlePageProps } from "@/components/NewsArticlePage";

export function getLegacyNewsProps(year: number, slug: string): GetStaticProps<NewsArticlePageProps> {
  return async () => {
    const article = await getNewsArticleByYearAndSlug(year, slug);
    if (!article) return { notFound: true, revalidate: 60 };
    return { props: { article }, revalidate: 60 };
  };
}
