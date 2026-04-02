import Layout from "@src/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import { getLatestNews } from "@/lib/investing-news-index";

const eyGuides = [
  {
    title: "Peru's Business and Investment Guide 2026/2027",
    category: "General",
    publisher: "EY",
    href: "https://www.ey.com/content/dam/ey-unified-site/ey-com/es-pe/insights/entrepreneurship/documents/ey-peru-business-investment-guide-2026-2027.pdf",
    cover: "/images/investment-guides/business-guide-2026-2027.png",
    alt: "Peru's Business and Investment Guide 2026/2027 cover",
  },
  {
    title: "Peru's Mining & Metals Investment Guide 2026/2027",
    category: "Mining",
    publisher: "EY",
    href: "https://www.ey.com/content/dam/ey-unified-site/ey-com/es-pe/insights/mining-metals/documents/ey-peru-mining-metals-guide-2026-2027.pdf",
    cover: "/images/investment-guides/mining-metals-guide-2026-2027.png",
    alt: "Peru's Mining and Metals Investment Guide 2026/2027 cover",
  },
  {
    title: "Peru's Business and Investment Guide in Agriculture and Agribusiness 2024/2025",
    category: "Agribusiness",
    publisher: "EY",
    href: "https://www.ey.com/content/dam/ey-unified-site/ey-com/es-pe/campaigns/guia-negocios-inversion-peru/ey-perus-business-investment-guide-agriculture-agribusiness-2024-2025-v2.pdf",
    cover: "/images/investment-guides/agribusiness-guide-2024-2025.png",
    alt: "Peru's Agriculture and Agribusiness Investment Guide 2024/2025 cover",
  },
  {
    title: "FinTech Business Guide 2024/2025",
    category: "FinTech",
    publisher: "EY",
    href: "https://www.ey.com/content/dam/ey-unified-site/ey-com/es-pe/insights/law/documents/ey-peru-fintech-business-guide-2024-2025-vf.pdf",
    cover: "/images/investment-guides/fintech-guide-2024-2025.png",
    alt: "FinTech Business Guide 2024/2025 cover",
  },
  {
    title: "Peru's Energy Investment Guide 2024/2025",
    category: "Energy",
    publisher: "EY",
    href: "https://www.ey.com/content/dam/ey-unified-site/ey-com/es-pe/insights/energy-resources/documents/ey-peru-energy-investment-guide-2024-2025-vf.pdf",
    cover: "/images/investment-guides/energy-guide-2024-2025.png",
    alt: "Peru's Energy Investment Guide 2024/2025 cover",
  },
  {
    title: "Guide to Investing in Infrastructure Projects in Peru 2024/2025",
    category: "Infrastructure",
    publisher: "EY",
    href: "https://www.ey.com/content/dam/ey-unified-site/ey-com/es-pe/campaigns/guia-negocios-inversion-peru/ey-guide-investing-infrastructure-projects-peru-2024-2025.pdf",
    cover: "/images/investment-guides/infrastructure-guide-2024-2025.png",
    alt: "Guide to Investing in Infrastructure Projects in Peru 2024/2025 cover",
  },
];

const InvesmentPage = () => {
  const { locale } = useRouter();

  const content = {
    en: {
      heroTitle: "Invest in Peru 2025",
      heroDescription: "Peru's economic landscape offers macroeconomic stability and sustained growth. Explore our 2025 Investment Guide and learn why Japanese companies choose Peru as their strategic partner in the region.",
      download: "Download",
      investmentGuide: "Investment Guide 2025",
      guideTitle: "Investment Guide 2025 \"VALE UN PERÚ\"",
      guideDescription: "The most comprehensive and updated investment guide for 2025. Explore new opportunities and economic indicators.",
      viewPrevious: "View Previous Versions →",
      eyGuidesTitle: "Specialized Investment Guides",
      eyGuidesDescription: "Explore sector-specific EY publications for investors evaluating Peru across mining, agribusiness, fintech, energy, infrastructure, and broader business opportunities.",
      openGuide: "Open PDF →",
      latestNews: "Latest News",
      readMore: "Read More →"
    },
    jp: {
      heroTitle: "ペルーへの投資 2025",
      heroDescription: "ペルーと日本は友好と協力の歴史を共有し、確かなビジネスチャンスを生み出しています。ラテンアメリカへの玄関口として、資源豊富で安定したペルー市場の可能性をぜひご確認ください。",
      download: "ダウンロード",
      investmentGuide: "投資ガイド 2025",
      guideTitle: "投資ガイド 2025 「VALE UN PERÚ」",
      guideDescription: "2025年向けの最も包括的で最新の投資ガイド。新たな投資機会と経済指標を探索してください。",
      viewPrevious: "過去のバージョンを見る →",
      eyGuidesTitle: "Specialized Investment Guides",
      eyGuidesDescription: "Explore sector-specific EY publications for investors evaluating Peru across mining, agribusiness, fintech, energy, infrastructure, and broader business opportunities.",
      openGuide: "Open PDF ?",
      latestNews: "最新ニュース",
      readMore: "続きを読む →"
    }
  };

  const texts = content[locale as keyof typeof content] || content.en;
  const investmentDescription =
    locale === "en"
      ? "Explore Peru investment opportunities, infrastructure projects, and economic updates tailored for Japanese companies and investors."
      : "日本企業・投資家向けに、ペルーの投資機会、インフラ案件、経済動向を分かりやすく紹介します。";

  const homepagePath = locale === "en" ? "/en" : "";
  const localizedPath = locale === "en" ? "/en/investing-in-peru" : "/investing-in-peru";
  const previousVersionsLabel =
    locale === "en" ? "Previous Investment Guides" : "過去の投資ガイド";
  const homeLabel = locale === "en" ? "Home" : "ホーム";
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": texts.heroTitle,
      "description": investmentDescription,
      "url": `https://peruinjapan.org${localizedPath}`,
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": texts.guideTitle,
            "url": "https://embperujapan.org/guia_de_inversiones-2025.pdf",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": previousVersionsLabel,
            "url": `https://peruinjapan.org${homepagePath}/investing-in-peru/previous-versions`,
          },
          ...eyGuides.map((guide, index) => ({
            "@type": "ListItem",
            "position": index + 3,
            "name": guide.title,
            "url": guide.href,
          })),
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": homeLabel,
          "item": `https://peruinjapan.org${homepagePath}`,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": texts.heroTitle,
          "item": `https://peruinjapan.org${localizedPath}`,
        },
      ],
    },
  ];

  return (
    <Layout language={locale} title={texts.heroTitle} description={investmentDescription} structuredData={structuredData}>
      {/* Hero Section with New Image */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight japanese-heading-1">
                {texts.heroTitle}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 md:mb-6 japanese-text">
                {texts.heroDescription}
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <a
                  href="https://embperujapan.org/guia_de_inversiones-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold px-5 md:px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl text-sm md:text-base"
                >
                  <ImDownload2 className="mr-2" />
                  {texts.download}
                </a>
                <Link
                  href="/investing-in-peru/previous-versions"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors text-base md:text-lg py-3"
                >
                  {texts.viewPrevious}
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                src="https://res.cloudinary.com/de5ud82os/image/upload/v1768974608/vale_un_peru_2025_fuphdw.png"
                width={330}
                height={468}
                alt="Peru Investment Opportunities"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="bg-white container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-2">$54B</div>
              <div className="text-xs md:text-sm lg:text-base text-gray-700">Mining Investment Pipeline</div>
            </div>
            <div className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-2">3.2%</div>
              <div className="text-xs md:text-sm lg:text-base text-gray-700">GDP Growth 2025</div>
            </div>
            <div className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-xs md:text-sm lg:text-base text-gray-700">Japanese Companies</div>
            </div>
            <div className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-2">#2</div>
              <div className="text-xs md:text-sm lg:text-base text-gray-700">World Copper Producer</div>
            </div>
          </div>
        </div>
      </section>

      {locale === "en" && (
        <section className="bg-gradient-to-br from-white to-slate-50 container mx-auto px-4 py-8 md:py-12 lg:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {texts.eyGuidesTitle}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {texts.eyGuidesDescription}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {eyGuides.map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200"
                >
                  <div className="bg-slate-100 p-4">
                    <Image
                      src={guide.cover}
                      alt={guide.alt}
                      width={540}
                      height={765}
                      className="w-full h-auto rounded-xl shadow-lg group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="inline-flex items-center rounded-full bg-red-100 text-red-700 text-xs font-semibold px-3 py-1">
                        {guide.category}
                      </span>
                      <span className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                        {guide.publisher}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-red-700 transition-colors">
                      {guide.title}
                    </h3>
                    <span className="inline-flex items-center text-red-600 font-semibold text-sm group-hover:text-red-700 transition-colors">
                      {texts.openGuide}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest News Section - Only show in Japanese */}
      {locale === "jp" && (
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12 japanese-heading-1">
              {texts.latestNews}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {getLatestNews(6).map((news) => (
                <Link
                  key={news.slug}
                  href={`/investing-in-peru/${news.year}/${news.slug}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-2 md:px-3 py-1 rounded-full">
                        {news.category}
                      </span>
                      <span className="text-xs md:text-sm text-gray-500">
                        {new Date(news.date).toLocaleDateString("ja-JP", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-red-600 transition-colors line-clamp-2 japanese-heading-3">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3 japanese-text">
                      {news.excerpt}
                    </p>
                    <span className="text-red-600 font-semibold text-xs md:text-sm group-hover:text-red-700 transition-colors">
                      {texts.readMore}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </Layout>
  );
};

export default InvesmentPage;

