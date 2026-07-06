import { getAllNewsArticles, getNewsArticlesByYear } from "lib/sanity.client";
import { NewsArticle } from "lib/sanity.queries";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";

type NewsYearPageProps = {
  articles: NewsArticle[];
  year: number;
};

const content = {
  en: {
    title: "News Archive",
    back: "All news",
    readMore: "Read article",
  },
  jp: {
    title: "ニュースアーカイブ",
    back: "ニュース一覧",
    readMore: "記事を読む",
  },
};

export default function NewsYearPage({ articles, year }: NewsYearPageProps) {
  const { locale } = useRouter();
  const currentLocale = locale === "en" ? "en" : "jp";
  const texts = content[currentLocale];

  return (
    <Layout
      language={locale}
      title={`${texts.title} ${year}`}
      description={`Peru in Japan news archive for ${year}.`}
    >
      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <Link href="/news" className="text-sm font-semibold text-red-700 hover:underline">
            ← {texts.back}
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">{year}</h1>
          <div className="mt-8 grid gap-5">
            {articles.map((article) => (
              <Link
                key={article._id}
                href={`/news/${article.year}/${article.slug}`}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{article.titleJp}</h2>
                    <p className="mt-1 text-sm text-gray-600">{article.titleEs}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {new Date(article.publishedAt).toLocaleDateString(currentLocale === "jp" ? "ja-JP" : "es-PE")}
                  </p>
                </div>
                <p className="mt-4 leading-7 text-gray-700">
                  {currentLocale === "jp" ? article.excerptJp : article.excerptEs}
                </p>
                <p className="mt-5 text-sm font-semibold text-red-700">{texts.readMore} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = (await getAllNewsArticles()) as NewsArticle[];
  const years: number[] = Array.from(new Set(articles.map((article) => article.year)));
  const locales = ["jp", "en"];
  const paths = locales.flatMap((locale) =>
    years.map((year) => ({
      params: { year: String(year) },
      locale,
    }))
  );

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<NewsYearPageProps> = async ({ params }) => {
  const year = Number(params?.year);
  const articles = Number.isFinite(year) ? ((await getNewsArticlesByYear(year)) as NewsArticle[]) : [];

  if (!articles.length) {
    return {
      notFound: true,
      revalidate: 60,
    };
  }

  return {
    props: {
      articles,
      year,
    },
    revalidate: 60,
  };
};
