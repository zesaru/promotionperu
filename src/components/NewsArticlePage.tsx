import { NewsArticle } from "lib/sanity.queries";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import ImageSlider, { SliderImage } from "@/components/ImageSlider";
import Layout from "@/components/Layout";
import NewsBody from "@/components/NewsBody";
import { formatNewsDate, newsHref } from "@/lib/news";

export type NewsArticlePageProps = {
  article: NewsArticle;
};

type NewsLanguage = "es" | "jp";

const interfaceText = {
  en: {
    back: "Back to archive",
    spanish: "Spanish",
    japanese: "Japanese",
  },
  jp: {
    back: "アーカイブに戻る",
    spanish: "スペイン語",
    japanese: "日本語",
  },
};

const defaultNewsImage =
  "https://res.cloudinary.com/de5ud82os/image/upload/v1726638710/WEB/home/nhplhoz0fvmrbph1jbst.png";

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
  const hasSpanish = Boolean(article.spanishEnabled && article.bodyEs?.length && article.titleEs && article.excerptEs);
  const [contentLanguage, setContentLanguage] = useState<NewsLanguage>("jp");
  const isJapaneseContent = !hasSpanish || contentLanguage === "jp";
  const title = isJapaneseContent ? article.titleJp : article.titleEs!;
  const description = isJapaneseContent ? article.excerptJp : article.excerptEs!;
  const galleryImages = getGalleryImages(article, contentLanguage);
  const body = isJapaneseContent ? article.bodyJp : article.bodyEs;
  const coverImage = article.coverImage || defaultNewsImage;
  const canonicalPath = newsHref(article);
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
          item: "https://peruinjapan.org/investing-in-peru/news",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: String(article.year),
          item: `https://peruinjapan.org/investing-in-peru/news/${article.year}`,
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
      japaneseOnly={!hasSpanish}
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
            href={`/investing-in-peru/news/${article.year}`}
            className="text-sm font-semibold text-red-700 hover:underline"
          >
            ← {texts.back}
          </Link>

          <div className="mt-6 rounded-3xl bg-gradient-to-br from-white via-stone-50 to-red-50 p-6 shadow-sm md:p-10">
            {isJapaneseContent && !article.legacyPath && (
              <p className="mb-4 text-right text-xs text-gray-500 md:text-sm">非公式翻訳</p>
            )}
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
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {hasSpanish && <><button
                aria-pressed={contentLanguage === "es"}
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
                aria-pressed={contentLanguage === "jp"}
                onClick={() => setContentLanguage("jp")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  contentLanguage === "jp"
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-red-50"
                }`}
              >
                {texts.japanese}
              </button></>}
              <p className="text-sm text-gray-500">
                {formatNewsDate(article, isJapaneseContent ? "ja-JP" : "es-PE")}
              </p>
            </div>
          </div>

          {galleryImages.length ? (
            <div className="mt-10">
              <ImageSlider images={galleryImages} interval={4500} />
            </div>
          ) : null}

          <article lang={isJapaneseContent ? "ja" : "es"} className="prose prose-lg mt-10 max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-red-700">
            <NewsBody body={body || []} />
          </article>
        </div>
      </section>
    </Layout>
  );
}
