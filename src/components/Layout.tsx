import { Analytics } from '@vercel/analytics/react';
import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import React, { ReactNode } from "react";

import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
  language: string | undefined;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
};

const Footer = React.lazy(() => import('./Footer'));

const defaultDescriptions = {
  jp: "ペルーの多様で豊かな料理の文化を祝い、幅広い国際的な料理の実践と料理スタイルを歓迎する日本での良好な受け入れを示したいと思います。",
  en: "We want to celebrate the diversity and richness of Peruvian cuisine and show the good reception it enjoys in Japan, a country that welcomes a wide range of international cooking practices and culinary styles.",
  es: "Queremos celebrar la diversidad y riqueza de la cocina peruana y mostrar la buena acogida que tiene en Japón, un país que da la bienvenida a una amplia gama de prácticas culinarias internacionales y estilos gastronómicos."
};

export default function Layout({ 
  children, 
  language,  
  title = "Welcome", 
  description,
  image = "https://res.cloudinary.com/de5ud82os/image/upload/v1726638710/WEB/home/nhplhoz0fvmrbph1jbst.png",
  type = "website"
}: LayoutProps) {
  const { locale, asPath } = useRouter();
  
  const currentLocale = (locale as keyof typeof defaultDescriptions) || 'en';
  const finalDescription = description || defaultDescriptions[currentLocale];
  const canonicalUrl = `https://www.peruinjapan.org${asPath === '/' ? '' : asPath}`;
  const pageTitle = locale === 'jp' ? `ペルー・イン・ジャパン | ${title}` : `Peru in Japan | ${title}`;
  
  // Generate hreflang URLs
  const hreflangs = [
    { hrefLang: 'ja', href: `https://www.peruinjapan.org${asPath}` },
    { hrefLang: 'en', href: `https://www.peruinjapan.org/en${asPath === '/' ? '' : asPath}` },
    { hrefLang: 'x-default', href: `https://www.peruinjapan.org${asPath === '/' ? '' : asPath}` }
  ];

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Peru in Japan",
    "url": "https://www.peruinjapan.org",
    "logo": "https://www.peruinjapan.org/apple-touch-icon.png",
    "description": finalDescription,
    "sameAs": [
      "https://twitter.com/peruinjapan"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Japan"
    }
  };


  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <NextSeo
        title={pageTitle}
        description={finalDescription}
        canonical={canonicalUrl}
        languageAlternates={hreflangs}
        openGraph={{
          type: type as any,
          locale: locale === 'jp' ? 'ja_JP' : 'en_US',
          url: canonicalUrl,
          title: pageTitle,
          description: finalDescription,
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: pageTitle,
              type: 'image/png',
            },
          ],
          site_name: "Peru in Japan",
        }}
        twitter={{
          handle: "@peruinjapan",
          site: "@peruinjapan",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: locale === 'jp' 
              ? 'ペルー料理, 日本, ガストロノミー, レストラン, 投資, 外交関係'
              : 'Peruvian cuisine, Japan, gastronomy, restaurants, investment, diplomatic relations'
          },
          {
            name: 'author',
            content: 'Peru in Japan'
          },
          {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          }
        ]}
      />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
        {children}
        <Analytics />
      <Footer />
    </div>
  );
}
