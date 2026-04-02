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
              <strong>Chagualé£›è¡Œå ´ã®ãƒã‚¤ãƒ–ãƒªãƒƒãƒ‰å¤ªé™½å…‰ã‚·ã‚¹ãƒ†ãƒ </strong>
            </li>
            <li className="leading-relaxed">
              <strong>æ–°ãŸãªã‚°ãƒªãƒ¼ãƒ³é›»åŠ›ä¾›çµ¦å¥‘ç´„</strong>
            </li>
            <li className="leading-relaxed">
              <strong>BESSLa Morenaã‚·ã‚¹ãƒ†ãƒ </strong> â€” ãƒ”ãƒ¼ã‚¯æ™‚ã®é›»åŠ›æ¶ˆè²»ã¨åŒ–çŸ³ç‡ƒæ–™ä½¿ç”¨ã‚’å‰Šæ¸›ï¼ˆ2024å¹´ã®CONAMINè³žã‚’å—è³žï¼‰
            </li>
            <li className="leading-relaxed">
              <strong>Santa MarÃ­aã‚­ãƒ£ãƒ³ãƒ—ã§ã®åˆ†æ•£åž‹ç™ºé›»ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆ</strong>ï¼ˆ2024å¹´å®Ÿæ–½ï¼‰ â€” ã‚¨ãƒãƒ«ã‚®ãƒ¼å®‰å…¨ä¿éšœã‚’å‘ä¸Š
            </li>
            <li className="leading-relaxed">
              <strong>7MWpã®å¤ªé™½å…‰ç™ºé›»ã‚·ã‚¹ãƒ†ãƒ </strong>ï¼ˆé–‹ç™ºä¸­ï¼‰ â€” ä¸€éƒ¨ã®é‰±å±±ä½œæ¥­ã«é›»åŠ›ã‚’ä¾›çµ¦äºˆå®š
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-blue-800 mb-3 mt-6">
            é›»å‹•åŒ–ãƒ»æŒç¶šå¯èƒ½æ€§ã¸ã®å–ã‚Šçµ„ã¿
          </h3>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã‚¨ã‚¹ãƒ†ãƒ©æ°ã¯ã€Minera Poderosaç¤¾ã®ã‚¨ãƒãƒ«ã‚®ãƒ¼æˆ¦ç•¥ãŒ<strong>è„±ç‚­ç´ åŒ–ã ã‘ã§ãªãã€åŠ¹çŽ‡æ€§ã¨é›»åŠ›éœ€è¦å¢—åŠ ã«å¯¾ã™ã‚‹ãƒ¬ã‚¸ãƒªã‚¨ãƒ³ã‚¹</strong>ã«ã‚‚ç„¦ç‚¹ã‚’å½“ã¦ã¦ã„ã‚‹ã“ã¨ã‚’å¼·èª¿ã—ã¾ã—ãŸã€‚
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-5 my-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-green-700">55%</p>
                <p className="text-sm text-gray-700 mt-1 japanese-text">2022å¹´</p>
                <p className="text-xs text-gray-600">å†ç”Ÿå¯èƒ½ã‚¨ãƒãƒ«ã‚®ãƒ¼æ¯”çŽ‡</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-700">76%</p>
                <p className="text-sm text-gray-700 mt-1 japanese-text">2024å¹´</p>
                <p className="text-xs text-gray-600">å†ç”Ÿå¯èƒ½ã‚¨ãƒãƒ«ã‚®ãƒ¼æ¯”çŽ‡</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-700">100%</p>
                <p className="text-sm text-gray-700 mt-1 japanese-text">2030å¹´ç›®æ¨™</p>
                <p className="text-xs text-gray-600">ã‚«ãƒ¼ãƒœãƒ³ãƒ‹ãƒ¥ãƒ¼ãƒˆãƒ©ãƒ«é”æˆ</p>
              </div>
            </div>
          </div>

          <p className="mb-4 text-gray-800 leading-relaxed">
            åŠ ãˆã¦ã€åŒç¤¾ã¯ä»¥ä¸‹ã®å–ã‚Šçµ„ã¿ã«ã‚‚æ³¨åŠ›ã—ã¦ã„ã¾ã™ï¼š
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
            <li className="leading-relaxed">
              <strong>é›»å‹•ãƒ¢ãƒ“ãƒªãƒ†ã‚£</strong>ã®æŽ¨é€²
            </li>
            <li className="leading-relaxed">
              <strong>740ä¸‡æœ¬ä»¥ä¸Šã®æ¤æž—</strong>
            </li>
            <li className="leading-relaxed">
              <strong>å†ç”Ÿåž‹æ–‡åŒ–ã®æŽ¨é€²</strong> â€” æ°´è³‡æºã€è³‡æã€ç”Ÿç‰©å¤šæ§˜æ€§ã®ãƒ•ãƒƒãƒˆãƒ—ãƒªãƒ³ãƒˆç®¡ç†ã‚’çµ±åˆ
            </li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
            <p className="text-gray-800 leading-relaxed italic">
              ã€Œèª²é¡Œã¯ã€<strong>ã‚°ãƒªãƒ¼ãƒ³ãƒžã‚¤ãƒ‹ãƒ³ã‚°ã‹ã‚‰è‡ªç„¶ç’°å¢ƒã‚’ã‚ˆã‚Šè‰¯ãã™ã‚‹å†ç”Ÿåž‹ãƒžã‚¤ãƒ‹ãƒ³ã‚°ã¸ã¨é€²åŒ–ã•ã›ã‚‹ã“ã¨</strong>ã§ã™ã€
            </p>
            <p className="text-sm text-gray-600 mt-2">
              â€” ã‚¨ãƒãƒ«ã‚®ãƒ¼ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆæ‹…å½“ãƒªãƒ¼ãƒ€ãƒ¼ ãƒ›ã‚»ãƒ»ã‚¨ã‚¹ãƒ†ãƒ©ãƒ»ãƒ©ãƒŸãƒ¬ã‚¹æ°
            </p>
          </div>

          <h3 className="text-lg font-semibold text-blue-800 mb-3 mt-6">
            ç’°å¢ƒã‚¤ãƒ³ãƒ‘ã‚¯ãƒˆã®æˆæžœ
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
                  <p className="text-base md:text-lg font-semibold text-gray-900 japanese-text">106,893ãƒˆãƒ³</p>
                  <p className="text-xs md:text-sm text-gray-600">COâ‚‚æŽ’å‡ºå›žé¿</p>
                  <p className="text-xs text-gray-500 mt-1">æ°—å€™ç›®æ¨™ã®62%é”æˆ</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold text-gray-900 japanese-text">8,910ä¸‡ç±³ãƒ‰ãƒ«</p>
                  <p className="text-xs md:text-sm text-gray-600">2030å¹´ã¾ã§ã®ç¯€ç´„è¦‹è¾¼ã¿</p>
                  <p className="text-xs text-gray-500 mt-1">ãƒ‡ã‚£ãƒ¼ã‚¼ãƒ«æ¶ˆè²»å‰Šæ¸›</p>
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

