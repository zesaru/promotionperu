import { getAllNewsArticles, getNewsArticleByYearAndSlug } from "lib/sanity.client";
import type { NewsArticle } from "lib/sanity.queries";
import type { GetStaticPaths, GetStaticProps } from "next";

import type { NewsArticlePageProps } from "@/components/NewsArticlePage";

export { default } from "@/components/NewsArticlePage";

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = (await getAllNewsArticles()) as NewsArticle[];
  const locales = ["jp", "en"];
  const paths = locales.flatMap((locale) =>
    articles.filter((article) => !article.legacyPath).map((article: NewsArticle) => ({
      params: {
        year: String(article.year),
        slug: article.slug,
      },
      locale,
    }))
  );

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<NewsArticlePageProps> = async ({ params }) => {
  const year = Number(params?.year);
  const slug = typeof params?.slug === "string" ? params.slug : "";

  if (!Number.isFinite(year) || !slug) {
    return {
      notFound: true,
      revalidate: 60,
    };
  }

  const article = (await getNewsArticleByYearAndSlug(year, slug)) as NewsArticle | null;

  if (!article) {
    return {
      notFound: true,
      revalidate: 60,
    };
  }

  if (article.legacyPath) {
    return { redirect: { destination: article.legacyPath, permanent: true } };
  }

  return {
    props: {
      article,
    },
    revalidate: 60,
  };
};
