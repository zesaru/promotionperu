import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const InvestmentPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2025-10-09T00:00:00+09:00"
      title="Minera Poderosa社、クリーンエネルギーに2,500万米ドルを投資、2030年までに8,910万米ドルの節約を見込む"
      description="Minera Poderosaは、クリーンエネルギー転換プロジェクトに2,500万米ドルを投資し、2030年までにディーゼル消費削減などで8,910万米ドルの節約を見込んでいます。"
    >
      <Banner
        alt={"Minera Poderosa社のクリーンエネルギー投資に関するニュースバナー"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-xs md:text-sm text-gray-600">非公式翻訳</p>
        </div>

        <div className="mb-6">
          <h1 className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            ペルー全国鉱業・石油・エネルギー協会
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            Minera Poderosa社、クリーンエネルギーに2,500万米ドルを投資、2030年までに8,910万米ドルの節約を見込む
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025年10月9日（木）
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            <strong>ペルー第2位の金生産企業であるMinera Poderosa社</strong>は、「Perumin 37」において、エネルギー転換プロジェクトに<strong>2,500万米ドルを投資した</strong>ことを発表しました。この投資により、<strong>2030年までにディーゼル消費の削減を通じて累計8,910万米ドルの節約</strong>が見込まれるほか、同社のカーボンフットプリント削減にもつながります。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            同社のエネルギープロジェクト責任者である<strong>ホセ・エステラ・ラミレス氏</strong>によれば、これらの施策はMinera Poderosa社の脱炭素化計画の一環であり、<strong>2030年までに100％再生可能エネルギーで操業することを目標</strong>としています。これまでに同社は<strong>106,893トンのCO2排出を回避</strong>しており、これは同社の気候目標の62％に相当します。
          </p>

          <h3 className="text-lg font-semibold text-blue-800 mb-3 mt-6">
            実施済みプロジェクト
          </h3>

          <p className="mb-4 text-gray-800 leading-relaxed">
            すでに実施済みの主なプロジェクトは以下のとおりです。
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-800">
            <li className="leading-relaxed">
              <strong>Chagual飛行場におけるハイブリッド型太陽光発電システムの導入</strong>
            </li>
            <li className="leading-relaxed">
              <strong>新たなグリーン電力供給契約の締結</strong>
            </li>
            <li className="leading-relaxed">
              <strong>BESS La Morenaシステムの導入</strong> - ピーク時の電力消費と化石燃料使用を削減（2024年のCONAMIN賞を受賞）
            </li>
            <li className="leading-relaxed">
              <strong>Santa Mariaキャンプにおける分散型発電プロジェクト</strong>（2024年実施） - エネルギー安全保障を向上
            </li>
            <li className="leading-relaxed">
              <strong>7MWp規模の太陽光発電システム</strong>（開発中） - 鉱山操業の一部に再生可能電力を供給予定
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-blue-800 mb-3 mt-6">
            電動化・持続可能性への取り組み
          </h3>

          <p className="mb-4 text-gray-800 leading-relaxed">
            エステラ氏は、Minera Poderosa社のエネルギー戦略が<strong>脱炭素化だけでなく、効率性の向上と電力需要の増加に対応するレジリエンス強化</strong>にも重点を置いていると説明しました。
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-5 my-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-green-700">55%</p>
                <p className="text-sm text-gray-700 mt-1 japanese-text">2022年</p>
                <p className="text-xs text-gray-600">再生可能エネルギー比率</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-700">76%</p>
                <p className="text-sm text-gray-700 mt-1 japanese-text">2024年</p>
                <p className="text-xs text-gray-600">再生可能エネルギー比率</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-700">100%</p>
                <p className="text-sm text-gray-700 mt-1 japanese-text">2030年目標</p>
                <p className="text-xs text-gray-600">再生可能エネルギーによる操業</p>
              </div>
            </div>
          </div>

          <p className="mb-4 text-gray-800 leading-relaxed">
            さらに同社は、次のような取り組みにも注力しています。
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
            <li className="leading-relaxed">
              <strong>電動モビリティ</strong>の推進
            </li>
            <li className="leading-relaxed">
              <strong>740万本以上の植林</strong>
            </li>
            <li className="leading-relaxed">
              <strong>再生型の企業文化の推進</strong> - 水資源、資材、生物多様性のフットプリント管理を統合
            </li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
            <p className="text-gray-800 leading-relaxed italic">
              「課題は、<strong>グリーンマイニングから、自然環境をより良くする再生型マイニングへと進化させること</strong>です」
            </p>
            <p className="text-sm text-gray-600 mt-2">
              - エネルギープロジェクト責任者 ホセ・エステラ・ラミレス氏
            </p>
          </div>

          <h3 className="text-lg font-semibold text-blue-800 mb-3 mt-6">
            環境インパクトの成果
          </h3>

          <div className="bg-gray-50 rounded-lg p-5 my-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold text-gray-900 japanese-text">106,893トン</p>
                  <p className="text-xs md:text-sm text-gray-600">CO2排出回避量</p>
                  <p className="text-xs text-gray-500 mt-1">気候目標の62%を達成</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold text-gray-900 japanese-text">8,910万米ドル</p>
                  <p className="text-xs md:text-sm text-gray-600">2030年までの節約見込み</p>
                  <p className="text-xs text-gray-500 mt-1">ディーゼル消費削減による効果</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2">
              ãƒšãƒ«ãƒ¼å…¨å›½é‰±æ¥­ãƒ»çŸ³æ²¹ãƒ»ã‚¨ãƒãƒ«ã‚®ãƒ¼å”ä¼š
            </p>
            <p className="text-sm text-gray-600 mb-4">
              åºƒå ±å®¤
            </p>
            <p className="text-xs text-gray-500">
              [Sociedad Nacional de Mineria, Petroleo y Energia, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">å‚è€ƒæ–‡çŒ®</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              Sociedad Nacional de Mineria, Petroleo y Energia. (2025å¹´10æœˆ9æ—¥). Poderosa invertirÃ¡ US$ 25 millones en energÃ­as limpias y generarÃ¡ ahorros de US$ 89 millones al 2030.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              å‚ç…§å…ˆ: desde adentro revista de la Sociedad Nacional de MinerÃ­a, PetrÃ³leo y EnergÃ­a:<br/>
              <Link href="https://www.desdeadentro.pe/2025/10/poderosa-invertira-us-25-millones-en-energias-limpias-y-generara-ahorros-de-us-89-millones-al-2030/" className="text-blue-600 hover:underline text-xs break-all">
                https://www.desdeadentro.pe/2025/10/poderosa-invertira-us-25-millones-en-energias-limpias-y-generara-ahorros-de-us-89-millones-al-2030/
              </Link>
            </p>
          </div>

          <div className="text-right mt-8">
            <p className="text-xs md:text-sm text-gray-600">åœ¨æ—¥ãƒšãƒ«ãƒ¼å¤§ä½¿é¤¨</p>
            <p className="text-xs md:text-sm text-gray-600">éžå…¬å¼ç¿»è¨³</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvestmentPage;

