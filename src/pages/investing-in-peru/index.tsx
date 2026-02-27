import Banner from "@src/components/Banner";
import Layout from "@src/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import { getLatestNews } from "@/lib/investing-news-index";

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
      latestNews: "最新ニュース",
      readMore: "続きを読む →"
    }
  };

  const texts = content[locale as keyof typeof content] || content.en;

  return (
    <Layout language={locale} title="Invest in Peru 2025">
      <Banner
        alt={"Invest in Peru 2025"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

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
