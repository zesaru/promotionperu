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
      articlePublishedTime="2025-08-04T00:00:00+09:00"
      title="PROINVERSIÓN、官民連携投資の歴史的データをまとめた2024年版年次統計書を発表"
      description="PROINVERSIÓNは、2002年から2024年までのAPP、資産活用プロジェクト、OxI、外国直接投資に関する実績をまとめた2024年版年次統計書を公表。2024年の過去最高水準の落札実績も紹介している。"
    >
      <Banner
        alt={"PROINVERSIÓNの2024年版年次統計書の発表を伝えるバナー"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600">åœ¨æ—¥ãƒšãƒ«ãƒ¼å¤§ä½¿é¤¨</p>
          <p className="text-xs md:text-sm text-gray-600">éžå…¬å¼ç¿»è¨³</p>
        </div>

        <div className="mb-6">
          <h1 className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            ãƒšãƒ«ãƒ¼æŠ•è³‡ä¿ƒé€²åºï¼ˆPROINVERSIÃ“Nï¼‰
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            PROINVERSIÃ“Nã€å®˜æ°‘é€£æºæŠ•è³‡ã«é–¢ã™ã‚‹æ­´å²çš„çµ±è¨ˆã‚’ã¾ã¨ã‚ãŸå¹´æ¬¡çµ±è¨ˆæ›¸ã‚’ç™ºè¡¨
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            ãƒ—ãƒ¬ã‚¹ãƒªãƒªãƒ¼ã‚¹
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            ãƒªãƒžã€2025å¹´8æœˆ4æ—¥
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            ãƒšãƒ«ãƒ¼æŠ•è³‡ä¿ƒé€²åºï¼ˆPROINVERSIÃ“Nï¼‰ã¯ã€<strong>2002å¹´ã‹ã‚‰2024å¹´ã¾ã§ã®å®˜æ°‘é€£æºäº‹æ¥­ï¼ˆAPPï¼‰ã€è³‡ç”£æ´»ç”¨ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆï¼ˆPAï¼‰ã€ãŠã‚ˆã³ç¨Žé‡‘ã«ã‚ˆã‚‹å…¬å…±å·¥äº‹ï¼ˆOxIï¼‰</strong>ã«é–¢ã™ã‚‹æƒ…å ±ã‚’é›†ç´„ã—ãŸã€Œ<strong>2024å¹´ç‰ˆå¹´æ¬¡çµ±è¨ˆæ›¸</strong>ã€ã‚’ç™ºè¡¨ã—ã¾ã—ãŸã€‚æœ¬æ›¸ã«ã¯ã€PROINVERSIÃ“Nã«ç™»éŒ²ã•ã‚ŒãŸå¤–å›½ç›´æŽ¥æŠ•è³‡ï¼ˆIEDï¼‰ã®ä¿ƒé€²ã«é–¢ã™ã‚‹ãƒ‡ãƒ¼ã‚¿ã‚‚å«ã¾ã‚Œã¦ã„ã¾ã™ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            æœ¬çµ±è¨ˆæ›¸ã«æŽ²è¼‰ã•ã‚ŒãŸæ³¨ç›®ã™ã¹ããƒ‡ãƒ¼ã‚¿ã¨ã—ã¦ã€<strong>2024å¹´ã«è¨˜éŒ²ã•ã‚ŒãŸéŽåŽ»æœ€é«˜ã®æˆæžœ</strong>ãŒã‚ã‚Šã¾ã™ã€‚ã™ãªã‚ã¡ã€APPãŠã‚ˆã³PAã‚’é€šã˜ã¦<strong>15ä»¶ã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆãŒè½æœ­ã•ã‚Œã€ãã®ç·é¡ã¯ç´„90å„„ç±³ãƒ‰ãƒ«</strong>ã«é”ã—ã€<strong>éŽåŽ»10å¹´é–“ã§æœ€ã‚‚é«˜ã„æ°´æº–</strong>ã¨ãªã‚Šã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            åŒæœŸé–“ä¸­ã«ã¯ã€OxIã‚’é€šã˜ã¦<strong>126ä»¶ã®æŠ•è³‡ãŒè½æœ­ã•ã‚Œã€ãã®ç·é¡ã¯42å„„4,000ä¸‡ã‚½ãƒ«</strong>ã«ä¸Šã‚Šã€<strong>ã“ã®ä»•çµ„ã¿ãŒå‰µè¨­ã•ã‚Œã¦ä»¥æ¥16å¹´é–“ã§æœ€é«˜æ°´æº–</strong>ã¨ãªã‚Šã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã•ã‚‰ã«ã€æŠ•è³‡ä¿ƒé€²ã®ä»•çµ„ã¿ã«é–¢ã—ã¦ã¯ã€<strong>8ä»¶ã®æ³•çš„å®‰å®šæ€§å”å®šã®ç· çµ</strong>ã€<strong>25ç¤¾ã«ã‚ˆã‚‹ä»˜åŠ ä¾¡å€¤ç¨Žï¼ˆIGVï¼‰ã®æ—©æœŸé‚„ä»˜ç‰¹åˆ¥åˆ¶åº¦ã®åˆ©ç”¨</strong>ã€<strong>1ç¤¾ã«ã‚ˆã‚‹ç¨Žé‡‘æ‰•ã„æˆ»ã—åˆ¶åº¦ã®åˆ©ç”¨</strong>ãŒã‚ã‚Šã¾ã—ãŸã€‚ã¾ãŸã€PROINVERSIÃ“Nã«ç™»éŒ²ã•ã‚ŒãŸ<strong>å¤–å›½ç›´æŽ¥æŠ•è³‡ï¼ˆIEDï¼‰ã®æ®‹é«˜ã¯303å„„6,100ä¸‡ç±³ãƒ‰ãƒ«</strong>ã«é”ã—ã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            æœ¬æ›¸ã¯<strong>3éƒ¨æ§‹æˆ</strong>ã¨ãªã£ã¦ãŠã‚Šã€<strong>ç¬¬1éƒ¨ã§ã¯å›½å†…å¤–ã®ãƒžã‚¯ãƒ­çµŒæ¸ˆåˆ†æž</strong>ã‚’è¡Œã„ã€<strong>ç¬¬2éƒ¨ã§ã¯APPã€è³‡ç”£æ´»ç”¨ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã€OxIã€IEDã€æ³•çš„å®‰å®šæ€§å”å®šã€IGVæ—©æœŸé‚„ä»˜ç‰¹åˆ¥åˆ¶åº¦ã€ç¨Žé‡‘æ‰•ã„æˆ»ã—åˆ¶åº¦ã«é–¢ã™ã‚‹æ­´å²çš„ãƒ‡ãƒ¼ã‚¿ã‚„çµ±åˆãƒ‡ãƒ¼ã‚¿</strong>ã‚’æä¾›ã—ã¦ã„ã¾ã™ã€‚<strong>ç¬¬3éƒ¨ã§ã¯ã€æŽ¨é€²ã•ã‚ŒãŸãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®åˆ†é‡Žåˆ¥ãƒ»åœ°åŸŸåˆ¥ã®æƒ…å ±</strong>ã‚’æŽ²è¼‰ã—ã¦ã„ã¾ã™ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            PROINVERSIÃ“Nã®ãƒ«ã‚¤ã‚¹ãƒ»ãƒ‡ãƒ«ãƒ»ã‚«ãƒ«ãƒ”ã‚ªäº‹å‹™å±€é•·ã¯ã€æœ¬æ›¸ã®ä½œæˆã‚’æ‹…å½“ã—ãŸ<strong>ã€Œãƒ‡ãƒ¼ã‚¿åˆ†æžãƒ»èª¿æŸ»ãƒ»æˆ¦ç•¥çš„æƒ…å ±éƒ¨ã€</strong>ã®å–ã‚Šçµ„ã¿ã‚’é«˜ãè©•ä¾¡ã—ã¾ã—ãŸã€‚åŒéƒ¨ã¯ã€<strong>ã™ã¹ã¦ã®è¡¨ã‚„ã‚°ãƒ©ãƒ•ã‚’Excelå½¢å¼ã§ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰å¯èƒ½ãªå½¢ã§å…¬é–‹</strong>ã—ã€åˆ©ç”¨è€…ã«ã‚ˆã‚‹æ´»ç”¨ãƒ»åˆ†æžãƒ»å†åˆ©ç”¨ã‚’å®¹æ˜“ã«ã—ãŸã“ã¨ã‚’å¼·èª¿ã—ã¾ã—ãŸã€‚
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            ã“ã®ã‚ˆã†ã«ã€åŒåºã¯è‡ªã‚‰ã®ç®¡ç†ãƒ»ãƒ¢ãƒ‹ã‚¿ãƒªãƒ³ã‚°ã‚’æ”¹å–„ã™ã‚‹ãŸã‚ã®æœ‰ç”¨ãªãƒ„ãƒ¼ãƒ«ã‚’æä¾›ã™ã‚‹ã¨ã¨ã‚‚ã«ã€<strong>å®˜æ°‘é€£æºæŠ•è³‡ã®ä»•çµ„ã¿ã«é–¢å¿ƒã‚’æŒã¤å…¬å…±éƒ¨é–€ã€æŠ•è³‡å®¶ã€ä¼æ¥­ã€å­¦è¡“ç•Œã€å›½éš›æ©Ÿé–¢ã€ãã—ã¦ä¸€èˆ¬å¸‚æ°‘ã«ã¨ã£ã¦æœ‰ç›Šãªå‡ºç‰ˆç‰©</strong>ã‚’ç™ºä¿¡ã—ç¶šã‘ã¦ã„ã¾ã™ã€‚
          </p>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2 japanese-text">
              ãƒšãƒ«ãƒ¼æŠ•è³‡ä¿ƒé€²åºï¼ˆPROINVERSIÃ“Nï¼‰
            </p>
            <p className="text-xs text-gray-500">
              [PROINVERSION, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">å‚è€ƒæ–‡çŒ®</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              PROINVERSION. (2025å¹´8æœˆ4æ—¥). PROINVERSIÃ“N lanza anuario estadÃ­stico con cifras histÃ³ricas en inversiÃ³n pÃºblico-privada.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              å‚ç…§å…ˆ: PROINVERSION NOTICIAS:<br/>
              <Link href="https://www.investinperu.pe/es/pi/detalle-noticia/proinversion-lanza-anuario-estadistico-con-cifras" className="text-blue-600 hover:underline text-xs break-all">
                https://www.investinperu.pe/es/pi/detalle-noticia/proinversion-lanza-anuario-estadistico-con-cifras
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
