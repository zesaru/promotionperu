import { Analytics } from '@vercel/analytics/react';
import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import React, { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
  language: string | undefined;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  disableDefaultSeo?: boolean;
};

function toTitleCase(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

const defaultDescriptions = {
  jp: {
    home: "Peru in Japanの公式サイト。ペルー料理、文化、投資情報、日秘交流に関する最新情報を日本語と英語で発信しています。",
    gastronomy: "日本で楽しめるペルー料理の魅力を紹介。レストラン情報、レシピ、動画を通じて本場の味と文化をお届けします。",
    recipes: "ペルー料理のレシピ集。家庭で作れる定番メニューから人気料理まで、手順と食材情報をわかりやすく紹介します。",
    restaurants: "日本全国のペルー料理レストラン情報。エリア別に店舗を探して、ペルーの味を身近に楽しめます。",
    pisco: "ペルーの蒸留酒ピスコの魅力を紹介。レシピ、輸入企業情報、関連コンテンツを通じてピスコ文化を発信します。",
    products: "ペルー産のカカオ、コーヒー、ピスコなどの注目商品を紹介。品質と魅力を日本向けにわかりやすく案内します。",
    coffee: "ペルー産コーヒーの特徴や供給情報、関連資料を紹介。香り豊かなペルーコーヒーの魅力を発信します。",
    cacao: "ペルー産カカオの産地や特徴、活用情報を紹介。高品質なカカオの魅力を日本の皆さまへお届けします。",
    investing: "ペルーの投資機会、インフラ案件、経済ニュースを発信。日本企業・投資家向けに最新情報を提供します.",
    peace: "日秘友好と平和へのメッセージを発信。歴史的節目における連帯と核兵器廃絶への取り組みを紹介します。",
    fallback: "Peru in Japanは、ペルーの文化・食・経済・投資情報を日本向けに発信する公式情報プラットフォームです。"
  },
  en: {
    home: "Official Peru in Japan website featuring Peruvian culture, gastronomy, investment opportunities, and bilateral updates in Japan.",
    gastronomy: "Discover Peruvian gastronomy in Japan with restaurant guides, recipes, and videos that showcase authentic flavors and culinary traditions.",
    recipes: "Explore Peruvian recipes, from classic dishes to home-cooking favorites, with practical preparation ideas and ingredient guidance.",
    restaurants: "Find Peruvian restaurants across Japan by city and explore where to enjoy authentic Peruvian cuisine near you.",
    pisco: "Learn about Peruvian Pisco through recipes, importer listings, and cultural content focused on Peru's signature spirit.",
    products: "Explore featured Peruvian products in Japan, including cacao, coffee, and Pisco, with curated information for consumers and businesses.",
    coffee: "Discover Peruvian coffee origins, quality, and supplier-related content, including resources for the Japanese market.",
    cacao: "Learn about Peruvian cacao, its origins, quality, and value for culinary and commercial use in Japan.",
    investing: "Explore investment opportunities in Peru, including infrastructure projects, economic updates, and strategic business insights.",
    peace: "Read Peru in Japan peace messages and commemorative content promoting solidarity, remembrance, and global peace.",
    fallback: "Peru in Japan is an official platform sharing Peruvian culture, gastronomy, economic updates, and investment information for audiences in Japan."
  }
};

const defaultKeywords = {
  jp: {
    home: "ペルー, 日本, ペルー文化, ペルー料理, 日秘関係, Peru in Japan",
    gastronomy: "ペルー料理, ガストロノミー, 日本のペルー料理店, ペルーレシピ, ペルーグルメ",
    recipes: "ペルーレシピ, ペルー料理レシピ, セビーチェ, ロモサルタード, 南米料理",
    restaurants: "ペルー料理店, 日本のレストラン, ペルーグルメ, ペルーレストラン",
    pisco: "ピスコ, ペルー蒸留酒, ピスコレシピ, ピスコ輸入, Pisco",
    products: "ペルー産品, カカオ, コーヒー, ピスコ, ペルー食品",
    coffee: "ペルーコーヒー, アラビカ, コーヒー輸出, ペルー農産品",
    cacao: "ペルーカカオ, カカオ豆, チョコレート原料, ペルー農産品",
    investing: "ペルー投資, インフラ案件, 鉱業投資, エネルギー, PROINVERSIÓN",
    peace: "平和, 長崎, 広島, 日秘友好, 核兵器廃絶",
    fallback: "ペルー, 日本, 文化, 料理, 投資, Peru in Japan"
  },
  en: {
    home: "Peru in Japan, Peruvian culture, Peru Japan relations, Peruvian gastronomy, Peru investment",
    gastronomy: "Peruvian gastronomy, Peruvian food in Japan, Peruvian restaurants, Peruvian cuisine",
    recipes: "Peruvian recipes, Peruvian dishes, ceviche, lomo saltado, Peruvian cooking",
    restaurants: "Peruvian restaurants in Japan, Peruvian food guide, Peru cuisine Japan",
    pisco: "Pisco, Peruvian spirit, Pisco recipes, Pisco importers, Peru drinks",
    products: "Peruvian products, cacao, coffee, Pisco, Peru exports",
    coffee: "Peruvian coffee, Arabica coffee, Peru coffee origins, coffee suppliers",
    cacao: "Peruvian cacao, cacao beans, chocolate origin, Peru cacao",
    investing: "invest in Peru, Peru investment opportunities, infrastructure projects Peru, mining Peru",
    peace: "peace message, Hiroshima, Nagasaki, Peru Japan solidarity",
    fallback: "Peru in Japan, Peruvian culture, gastronomy, investment, bilateral relations"
  }
};

function getDefaultDescription(localeCode: "jp" | "en", normalizedPath: string) {
  const section = normalizedPath === "/" ? "home" : normalizedPath.split("/").filter(Boolean)[0];

  if (section === "investing-in-peru") return defaultDescriptions[localeCode].investing;
  if (section === "paz-de-hiroshima" || section === "paz-de-nagasaki") return defaultDescriptions[localeCode].peace;
  if (section === "gastronomy") return defaultDescriptions[localeCode].gastronomy;
  if (section === "recipes") return defaultDescriptions[localeCode].recipes;
  if (section === "restaurants") return defaultDescriptions[localeCode].restaurants;
  if (section === "pisco") return defaultDescriptions[localeCode].pisco;
  if (section === "products") return defaultDescriptions[localeCode].products;
  if (section === "coffee") return defaultDescriptions[localeCode].coffee;
  if (section === "cacao") return defaultDescriptions[localeCode].cacao;
  if (section === "home") return defaultDescriptions[localeCode].home;

  return defaultDescriptions[localeCode].fallback;
}

function getDefaultKeywords(localeCode: "jp" | "en", normalizedPath: string) {
  const section = normalizedPath === "/" ? "home" : normalizedPath.split("/").filter(Boolean)[0];

  if (section === "investing-in-peru") return defaultKeywords[localeCode].investing;
  if (section === "paz-de-hiroshima" || section === "paz-de-nagasaki") return defaultKeywords[localeCode].peace;
  if (section === "gastronomy") return defaultKeywords[localeCode].gastronomy;
  if (section === "recipes") return defaultKeywords[localeCode].recipes;
  if (section === "restaurants") return defaultKeywords[localeCode].restaurants;
  if (section === "pisco") return defaultKeywords[localeCode].pisco;
  if (section === "products") return defaultKeywords[localeCode].products;
  if (section === "coffee") return defaultKeywords[localeCode].coffee;
  if (section === "cacao") return defaultKeywords[localeCode].cacao;
  if (section === "home") return defaultKeywords[localeCode].home;

  return defaultKeywords[localeCode].fallback;
}

export default function Layout({ 
  children, 
  language,  
  title, 
  description,
  keywords,
  image = "https://res.cloudinary.com/de5ud82os/image/upload/v1726638710/WEB/home/nhplhoz0fvmrbph1jbst.png",
  type = "website",
  disableDefaultSeo = false
}: LayoutProps) {
  const { locale, asPath } = useRouter();
  const pathWithoutQuery = asPath.split("#")[0]?.split("?")[0] || "/";
  const normalizedPath = pathWithoutQuery.replace(/^\/(en|jp)(?=\/|$)/, "") || "/";
  const currentLocaleCode: "jp" | "en" = locale === "en" ? "en" : "jp";
  const localizedPath =
    currentLocaleCode === "en"
      ? normalizedPath === "/"
        ? "/en"
        : `/en${normalizedPath}`
      : normalizedPath;
  
  const finalDescription = description || getDefaultDescription(currentLocaleCode, normalizedPath);
  const finalKeywords = keywords || getDefaultKeywords(currentLocaleCode, normalizedPath);
  const canonicalUrl = `https://www.peruinjapan.org${localizedPath === '/' ? '' : localizedPath}`;
  const pathTitle =
    normalizedPath === "/"
      ? locale === "jp"
        ? "ホーム"
        : "Home"
      : toTitleCase(normalizedPath.split("/").filter(Boolean).pop()?.replace(/-/g, " ") || "");
  const resolvedTitle = title || pathTitle;
  const pageTitle = locale === 'jp' ? `PERUINJAPAN | ${resolvedTitle}` : `Peru in Japan | ${resolvedTitle}`;
  
  // Generate hreflang URLs
  const hreflangs = [
    {
      hrefLang: 'ja',
      href: `https://www.peruinjapan.org${normalizedPath === "/" ? "" : normalizedPath}`,
    },
    {
      hrefLang: 'en',
      href: `https://www.peruinjapan.org${normalizedPath === "/" ? "/en" : `/en${normalizedPath}`}`,
    },
    {
      hrefLang: 'x-default',
      href: `https://www.peruinjapan.org${normalizedPath === "/" ? "" : normalizedPath}`,
    }
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
    <div className="bg-white text-gray-600 work-sans leading-loose text-base tracking-normal">
      {!disableDefaultSeo && (
        <>
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
                content: finalKeywords
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
        </>
      )}
      
      <Header />
        {children}
        <Analytics />
      <Footer />
    </div>
  );
}
