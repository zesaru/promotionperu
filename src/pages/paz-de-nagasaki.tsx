import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import React from "react";

import Layout from "../components/Layout";

const PazNagasakiPage = () => {
  const { locale } = useRouter();

  const content = {
    jp: {
      title: "長崎の平和：花咲き誇る",
      metaTitle: "長崎の平和記念 | 80周年 | PERUINJAPAN",
      description: "長崎・広島被爆80周年にあたり、ペルー政府と国民が日本への連帯と世界平和・核兵器廃絶への決意を表明。平和と核なき未来への願いを込めて。",
      keywords: "長崎, 平和, 核兵器廃絶, ペルー, 日本, 80周年, 原爆, 世界平和, 外交関係",
      text: "広島および長崎の被爆80周年の節目にあたり、ペルー共和国政府および国民は、日本の皆様に対し、謹んで心からの連帯を表するとともに、世界平和と核兵器の廃絶、そして大量破壊兵器のない公平で安全な未来の実現に向けた揺るぎない決意を改めて表明します。",
    },
    en: {
      title: "Peace of Nagasaki: Blossoming",
      metaTitle: "Nagasaki Peace Memorial | 80th Anniversary | Peru in Japan",
      description: "On the 80th anniversary of Hiroshima and Nagasaki bombings, Peru expresses solidarity with Japan and commitment to world peace, nuclear disarmament, and a future free from weapons of mass destruction.",
      keywords: "Nagasaki, peace, nuclear disarmament, Peru, Japan, 80th anniversary, atomic bomb, world peace, diplomatic relations",
      text: "On the solemn occasion of the 80th anniversary of the atomic bombings of Hiroshima and Nagasaki, the Government and people of the Republic of Peru extend their deepest solidarity to the people of Japan. We further reaffirm our unwavering commitment to the achievement of lasting world peace, nuclear disarmament, and the realization of a just and secure future free from weapons of mass destruction.",
    },
    es: {
      title: "Paz de Nagasaki: Florecer",
      metaTitle: "Memorial de Paz de Nagasaki | 80º Aniversario | Perú en Japón",
      description: "En el 80º aniversario de los bombardeos de Hiroshima y Nagasaki, Perú expresa solidaridad con Japón y compromiso con la paz mundial, desarme nuclear y un futuro libre de armas de destrucción masiva.",
      keywords: "Nagasaki, paz, desarme nuclear, Perú, Japón, 80 aniversario, bomba atómica, paz mundial, relaciones diplomáticas",
      text: "Con ocasión del 80.º aniversario del bombardeo atómico de Hiroshima y Nagasaki, el Gobierno y pueblo peruanos expresan su más sentida solidaridad con el pueblo japonés y reafirman su compromiso inquebrantable con la paz mundial, el desarme nuclear y la promoción de un futuro justo, seguro y libre de armas de destrucción masiva.",
    },
  };

  const currentContent = locale === "en" ? content.en : locale === "jp" ? content.jp : content.es;

  // JSON-LD structured data for peace memorial
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": currentContent.title,
    "description": currentContent.description,
    "image": "https://res.cloudinary.com/de5ud82os/image/upload/v1694564001/WEB/gastronomia/150years_bdwrpn.jpg",
    "author": {
      "@type": "Organization",
      "name": "Peru in Japan"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Peru in Japan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.peruinjapan.org/apple-touch-icon.png"
      }
    },
    "datePublished": "2025-08-09",
    "dateModified": "2025-09-22",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.peruinjapan.org/paz-de-nagasaki"
    },
    "about": [
      {
        "@type": "Event",
        "name": "80th Anniversary of Nagasaki Atomic Bombing",
        "startDate": "1945-08-09",
        "location": {
          "@type": "Place",
          "name": "Nagasaki, Japan"
        }
      }
    ],
    "keywords": currentContent.keywords
  };

  return (
    <>
      <NextSeo
        title={currentContent.metaTitle}
        description={currentContent.description}
        canonical={`https://www.peruinjapan.org${locale === 'en' ? '/en' : ''}/paz-de-nagasaki`}
        openGraph={{
          type: 'article',
          locale: locale === 'jp' ? 'ja_JP' : locale === 'en' ? 'en_US' : 'es_ES',
          url: `https://www.peruinjapan.org${locale === 'en' ? '/en' : ''}/paz-de-nagasaki`,
          title: currentContent.metaTitle,
          description: currentContent.description,
          images: [
            {
              url: "https://res.cloudinary.com/de5ud82os/image/upload/v1694564001/WEB/gastronomia/150years_bdwrpn.jpg",
              width: 1200,
              height: 630,
              alt: currentContent.title,
              type: 'image/jpeg',
            },
          ],
          site_name: "Peru in Japan",
          article: {
            publishedTime: '2025-08-09T00:00:00.000Z',
            modifiedTime: '2025-09-22T00:00:00.000Z',
            authors: ['Peru in Japan'],
            tags: currentContent.keywords.split(', ')
          }
        }}
        twitter={{
          handle: "@peruinjapan",
          site: "@peruinjapan",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: currentContent.keywords
          },
          {
            name: 'author',
            content: 'Peru in Japan'
          },
          {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          },
          {
            property: 'article:author',
            content: 'Peru in Japan'
          },
          {
            property: 'article:published_time',
            content: '2025-08-09T00:00:00.000Z'
          },
          {
            property: 'article:modified_time',
            content: '2025-09-22T00:00:00.000Z'
          }
        ]}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Layout
        language={locale}
        title={currentContent.title}
        description={currentContent.description}
        image="https://res.cloudinary.com/de5ud82os/image/upload/v1694564001/WEB/gastronomia/150years_bdwrpn.jpg"
        type="article"
      >
        <article className="container py-4 md:py-12 px-2 mx-auto">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {currentContent.title}
              </h1>
              <div className="inline-flex items-center space-x-4 text-2xl mb-4">
                <span className="text-pink-500" role="img" aria-label="Cherry blossom">🌸</span>
                <span className="text-gray-600" role="img" aria-label="Peace dove">🕊️</span>
                <span className="text-pink-500" role="img" aria-label="Cherry blossom">🌸</span>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {currentContent.description}
              </p>
            </header>

            <div className="border-t pt-8">
              <div className="space-y-8">
                <section lang="ja">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">日本語</h2>
                  <p className="text-base text-gray-700 leading-relaxed">{content.jp.text}</p>
                </section>

                <section lang="en">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">English</h2>
                  <p className="text-base text-gray-700 leading-relaxed">{content.en.text}</p>
                </section>

                <section lang="es">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Español</h2>
                  <p className="text-base text-gray-700 leading-relaxed">{content.es.text}</p>
                </section>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default PazNagasakiPage;
