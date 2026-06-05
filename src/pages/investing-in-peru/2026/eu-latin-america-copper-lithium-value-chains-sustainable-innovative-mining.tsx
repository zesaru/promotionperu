import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const EuLatinAmericaMiningPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-05-27T00:00:00+09:00"
      title="欧州連合（EU）と中南米、銅・リチウムのバリューチェーン強化に向け、持続可能かつ革新的な鉱業を推進"
      description="専門家や当局は、責任あるクリティカルミネラル供給と革新的かつ持続可能なバリューチェーン構築における中南米およびペルーの戦略的価値を強調しました。"
    >
      <Banner
        alt={"EUと中南米の鉱業協力を伝えるニュースバナー"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl">
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-xs md:text-sm text-gray-600">非公式翻訳</p>
        </div>

        <div className="mb-8">
          <p className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            鉱業・国際協力
          </p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            欧州連合（EU）と中南米、銅・リチウムのバリューチェーン強化に向け、持続可能かつ革新的な鉱業を推進
          </h1>
          <p className="text-xs md:text-sm text-gray-600 mb-2">業界ニュース</p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2026年5月27日
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              専門家や当局は、責任あるクリティカルミネラルの供給確保と、革新的かつ持続可能なバリューチェーン構築における中南米およびペルーの戦略的価値を強調しました。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            エネルギー移行が加速する中、欧州連合（EU）と中南米の協力関係は、銅やリチウムといったクリティカルミネラル（重要鉱物）の持続可能な供給を確保するための戦略的基軸として強固なものとなっています。これは、ペルー全国鉱業・石油・エネルギー協会（SNMPE）が主催した「SIMPOSIO – 第16回国際鉱業会議」の場において、専門家や当局によって改めて強調されました。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              EUと中南米の戦略的同盟
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              座談会「銅・リチウムのバリューチェーン強化に向けた機会：持続可能な鉱業におけるEUと中南米の同盟」の中で、駐ペルー欧州連合大使のJonathan Hatwell氏は、世界的なエネルギー移行における中南米の戦略的役割と、両地域間の関係強化の重要性を指摘しました。
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic japanese-text">
              「エネルギー移行は着実に進展しており、中南米、特にペルーは中心的な役割を果たしています。EUにとって、これは戦略的同盟であり、欧州が技術、イノベーション、高度な機械を提供し、ペルーが不可欠な資源と成長するバリューチェーン開発能力で貢献するという関係です」
            </blockquote>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            続いて、在ペルー・オランダ王国大使のAlexander Kofman氏と、EUクリティカル原材料プラットフォームの鉱業専門家Eduardo Barrera氏が、EUと中南米間の銅バリューチェーン強化の機会に関する調査結果を発表しました。
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              技術協力と効率化
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              調査の主な知見として、Barrera氏は次のように述べました。
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 mt-4 text-sm md:text-base text-gray-700 italic japanese-text">
              「EUは、水使用量の削減、デジタル化、鉱業への効率的応用において高度な能力を有しています。共通の課題に立ち向かうため、ペルーのような信頼できるパートナーとの協力を深めることを目指しています」
            </blockquote>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              専門家パネルでの論点
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              その後行われた専門家パネルでは、同セクターの主要な技術的・規制的課題が議論されました。エネルギー鉱山省（MINEM）の環境問題局長Michael Acosta氏は、「中南米では、現代的で包摂的、かつ環境・社会的に持続可能な鉱業のための競争力と能力を開発しています。この飛躍のためには、人的資源（タレント）が鍵となります」と強調しました。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ペルー鉱業イノベーション・ハブのゼネラルマネージャー、Pamela Antonioli氏は、「スマートで循環型、かつ地域に根ざした鉱業を実現するためには、技術革新が不可欠です。クリティカルミネラルの需要と供給のギャップに直面する中、テクノロジーと継続的な教育への投資が必要です」と指摘しました。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              また、アルカディス（ARCADIS）の環境責任者兼サステナビリティリーダーのElizabeth Morales氏は、「鉱業の競争力は地質学的資源だけでなく、新しい国際基準への適応能力や脱炭素化を推進するための技術導入能力に依存します」と付け加えました。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            パネルの結論として、欧州側の提案は、相互信頼と技術移転に基づくペルーでの持続可能な鉱業を支援することであり、これによりペルー人と欧州人の双方にプラスの影響を与えるバリューチェーンを創出することです。欧州における銅需要は
            <strong>1,120万トン</strong>
            と推定されており、国際鉱業の新たな段階において、戦略的パートナーとしてのペルーの重要性が改めて浮き彫りとなりました。
          </p>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">
              参考文献
            </h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              SIMPOSIO - Sociedad Nacional de Minería, Petróleo y Energía.
              <br />
              参照先:{" "}
              <a
                href="https://www.simposio.pe/union-europea-y-america-latina-apuestan-por-una-mineria-sostenible-e-innovadora-para-fortalecer-las-cadenas-de-valor-del-cobre-y-litio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                SIMPOSIO:
                https://www.simposio.pe/union-europea-y-america-latina-apuestan-por-una-mineria-sostenible-e-innovadora-para-fortalecer-las-cadenas-de-valor-del-cobre-y-litio/
              </a>
            </p>
          </div>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <p className="text-xs md:text-sm text-gray-600 mb-2">在日ペルー大使館</p>
            <p className="text-xs md:text-sm text-gray-600">経済商務担当</p>
          </div>

          <div className="text-right mt-8">
            <p className="text-xs md:text-sm text-gray-600">在日ペルー大使館</p>
            <p className="text-xs md:text-sm text-gray-600">非公式翻訳</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EuLatinAmericaMiningPage;
