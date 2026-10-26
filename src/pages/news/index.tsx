import { getAllNewsArticles } from "lib/sanity.client";
import { NewsArticle } from "lib/sanity.queries";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import { newsHref } from "@/lib/news";

type NewsIndexPageProps = {
  years: number[];
  latestNews: NewsArticle[];
};

const content = {
  en: {
    title: "News",
    description: "News from Peru in Japanese, covering investment, trade and bilateral relations.",
    intro: "Browse the latest news from Peru in Japanese and explore the archive by year.",
    latest: "Latest Articles",
    browseYear: "Browse by year",
    readMore: "Read article",
    bilingualLabel: "Spanish and Japanese",
  },
  jp: {
    title: "ニュース",
    description: "ペルーの投資、貿易、日秘関係に関する最新ニュースを日本語でお届けします。",
    intro: "ペルーの最新ニュースを日本語でお届けします。年別アーカイブから過去の記事もご覧いただけます。",
    latest: "最新記事",
    browseYear: "年別アーカイブ",
    readMore: "記事を読む",
    bilingualLabel: "スペイン語 / 日本語",
  },
};

export default function NewsIndexPage({ years, latestNews }: NewsIndexPageProps) {
  const { locale } = useRouter();
  const currentLocale = locale === "en" ? "en" : "jp";
  const texts = content[currentLocale];

  return (
    <Layout language={locale} title={texts.title} description={texts.description}>
      <section className="bg-gradient-to-br from-stone-50 via-white to-red-50">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
                Peru in Japan
              </span>
              <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
                {texts.title}
              </h1>
              <p className="mt-4 text-base leading-8 text-gray-700 md:text-lg">
                {texts.intro}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-5 text-xl font-semibold text-gray-900 md:text-2xl">
                {texts.browseYear}
              </h2>
              <div className="flex flex-wrap gap-3">
                {years.map((year) => (
                  <Link
                    key={year}
                    href={`/news/${year}`}
                    className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-red-300 hover:text-red-700"
                  >
                    {year}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-5 text-xl font-semibold text-gray-900 md:text-2xl">
                {texts.latest}
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {latestNews.map((article) => (
                  <Link
                    key={article._id}
                    href={newsHref(article)}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                      日本語
                    </p>
                    <h3 className="text-lg font-bold text-gray-900">{article.titleJp}</h3>
                    {article.spanishEnabled && article.titleEs && <p className="mt-2 text-sm text-gray-600">{article.titleEs}</p>}
                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-700">
                      {article.excerptJp}
                    </p>
                    <p className="mt-5 text-sm font-semibold text-red-700">{texts.readMore} →</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<NewsIndexPageProps> = async () => {
  const articles = (await getAllNewsArticles()) as NewsArticle[];
  const years: number[] = Array.from(new Set(articles.map((article) => article.year))).sort((a, b) => b - a);

  return {
    props: {
      years,
      latestNews: articles.slice(0, 10),
    },
    revalidate: 60,
  };
};
