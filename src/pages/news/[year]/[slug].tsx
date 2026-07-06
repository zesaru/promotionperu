import { getAllNewsArticles, getNewsArticleByYearAndSlug } from "lib/sanity.client";
import { NewsArticle } from "lib/sanity.queries";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import PortableText from "react-portable-text";

import ImageSlider, { SliderImage } from "@/components/ImageSlider";
import Layout from "@/components/Layout";

type NewsArticlePageProps = {
  article: NewsArticle;
};

type NewsLanguage = "es" | "jp";

const interfaceText = {
  en: {
    back: "Back to archive",
    gallery: "Photo gallery",
    sourceLabel: "Bilingual article",
    sourceValue: "Spanish and Japanese",
    spanish: "Spanish",
    japanese: "Japanese",
  },
  jp: {
    back: "アーカイブに戻る",
    gallery: "フォトギャラリー",
    sourceLabel: "バイリンガル記事",
    sourceValue: "スペイン語 / 日本語",
    spanish: "スペイン語",
    japanese: "日本語",
  },
};

const defaultNewsImage =
  "https://res.cloudinary.com/de5ud82os/image/upload/v1726638710/WEB/home/nhplhoz0fvmrbph1jbst.png";

function getDisplayLanguage(locale: string | undefined): NewsLanguage {
  return locale === "jp" ? "jp" : "es";
}

function getGalleryImages(article: NewsArticle, language: NewsLanguage): SliderImage[] {
  return (article.gallery || []).map((item, index) => ({
    src: item.src,
    alt:
      language === "jp"
        ? item.altJp || item.altEs || `${article.titleJp} ${index + 1}`
        : item.altEs || item.altJp || `${article.titleEs} ${index + 1}`,
    caption: language === "jp" ? item.captionJp || item.captionEs : item.captionEs || item.captionJp,
  }));
}

export default function NewsArticlePage({ article }: NewsArticlePageProps) {
  const { locale } = useRouter();
  const currentLocale = locale === "en" ? "en" : "jp";
  const texts = interfaceText[currentLocale];
  const defaultLanguage = getDisplayLanguage(locale);
  const [contentLanguage, setContentLanguage] = useState<NewsLanguage>(defaultLanguage);
  const isJapaneseContent = contentLanguage === "jp";
  const title = isJapaneseContent ? article.titleJp : article.titleEs;
  const description = isJapaneseContent ? article.excerptJp : article.excerptEs;
  const galleryImages = getGalleryImages(article, contentLanguage);
  const body = isJapaneseContent ? article.bodyJp : article.bodyEs;
  const coverImage = article.coverImage || defaultNewsImage;
  const canonicalPath = `/news/${article.year}/${article.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: title,
      description,
      image: [coverImage],
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      inLanguage: isJapaneseContent ? "ja" : "es",
      mainEntityOfPage: `https://peruinjapan.org${canonicalPath}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: currentLocale === "jp" ? "ニュース" : "News",
          item: "https://peruinjapan.org/news",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: String(article.year),
          item: `https://peruinjapan.org/news/${article.year}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: `https://peruinjapan.org${canonicalPath}`,
        },
      ],
    },
  ];

  return (
    <Layout
      language={locale}
      title={title}
      description={description}
      image={coverImage}
      type="article"
      articlePublishedTime={article.publishedAt}
      structuredData={structuredData}
    >
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href={`/news/${article.year}`}
            className="text-sm font-semibold text-red-700 hover:underline"
          >
            ← {texts.back}
          </Link>

          <div className="mt-6 rounded-3xl bg-gradient-to-br from-white via-stone-50 to-red-50 p-6 shadow-sm md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
                  Peru in Japan
                </p>
                <h1 className="mt-3 text-2xl font-bold leading-tight text-gray-900 md:text-4xl">
                  {title}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-gray-700">
                  {description}
                </p>
              </div>
              <div className="rounded-2xl border border-red-100 bg-white px-4 py-3 text-sm text-gray-600 shadow-sm">
                <p className="font-semibold text-gray-900">{texts.sourceLabel}</p>
                <p>{texts.sourceValue}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setContentLanguage("es")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  contentLanguage === "es"
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-red-50"
                }`}
              >
                {texts.spanish}
              </button>
              <button
                onClick={() => setContentLanguage("jp")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  contentLanguage === "jp"
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-red-50"
                }`}
              >
                {texts.japanese}
              </button>
              <p className="text-sm text-gray-500">
                {new Date(article.publishedAt).toLocaleDateString(
                  isJapaneseContent ? "ja-JP" : "es-PE",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </p>
            </div>
          </div>

          {galleryImages.length ? (
            <div className="mt-10">
              <h2 className="mb-5 text-xl font-semibold text-gray-900">{texts.gallery}</h2>
              <ImageSlider images={galleryImages} interval={4500} />
            </div>
          ) : null}

          <article className="prose prose-lg mt-10 max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-red-700">
            <PortableText content={body} />
          </article>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = (await getAllNewsArticles()) as NewsArticle[];
  const locales = ["jp", "en"];
  const paths = locales.flatMap((locale) =>
    articles.map((article: NewsArticle) => ({
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

  return {
    props: {
      article,
    },
    revalidate: 60,
  };
};
