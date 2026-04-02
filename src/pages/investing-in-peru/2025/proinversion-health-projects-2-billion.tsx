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
      articlePublishedTime="2025-08-15T00:00:00+09:00"
      title="PROINVERSIÓN、約20億米ドル規模の保健分野7案件を推進"
      description="PROINVERSIÓNは、リマ、ピウラ、カハマルカなどで約20億米ドル規模の保健分野7案件を官民連携で推進。病院運営、設備更新、廃棄物管理を通じて医療サービスの質と効率の向上を目指す。"
    >
      <Banner
        alt={"PROINVERSIÓNによる保健分野7案件の推進を伝えるバナー"}
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
            ペルー投資促進庁（PROINVERSIÓN）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            PROINVERSIÓN、約20億米ドル規模の保健分野7件のプロジェクトを推進
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            発表日: 2025年8月15日（金）
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            ãƒšãƒ«ãƒ¼æŠ•è³‡ä¿ƒé€²åºï¼ˆPROINVERSIÃ“Nï¼‰ã¯ã€é–¢ä¿‚ã™ã‚‹å…¬çš„æ©Ÿé–¢ã¨é€£æºã—ã€ä¿å¥åˆ†é‡Žã«ãŠã‘ã‚‹<strong>7ä»¶ã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆï¼ˆç·é¡20å„„ç±³ãƒ‰ãƒ«è¶…ï¼‰</strong>ã‚’å®˜æ°‘é€£æºï¼ˆAPPï¼‰ã®å½¢æ…‹ã§æŽ¨é€²ã—ã¦ã„ã¾ã™ã€‚ç›®çš„ã¯ã€ãƒªãƒžã€ãƒ”ã‚¦ãƒ©ãŠã‚ˆã³ã‚«ãƒãƒžãƒ«ã‚«ã«ãŠã‘ã‚‹åŒ»ç™‚ã‚µãƒ¼ãƒ“ã‚¹ã¨ã‚¤ãƒ³ãƒ•ãƒ©ã‚’å¼·åŒ–ã—ã€ã‚ˆã‚ŠåŠ¹çŽ‡çš„ã‹ã¤è³ªã®é«˜ã„åŒ»ç™‚ã‚’ä½æ°‘ã«æä¾›ã™ã‚‹ã“ã¨ã§ã™ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ä»Šå¹´ã™ã§ã«ã€<strong>ã€Œæ–°ãƒ“ã‚¸ãƒ£ãƒ»ã‚¨ãƒ«ãƒ»ã‚µãƒ«ãƒãƒ‰ãƒ¼ãƒ«æ•‘æ€¥ç—…é™¢ï¼ˆHEVESï¼‰ã®é‹å–¶ãƒ»ç¶­æŒç®¡ç†ã€</strong>ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆãŒè½æœ­ã•ã‚Œã¾ã—ãŸã€‚æœ¬æ¡ˆä»¶ã¯ä¿å¥çœã¨ã®å…±åŒå‡ºè³‡åž‹APPã§ã‚ã‚Šã€ãƒªãƒžå—éƒ¨ï¼ˆãƒ“ã‚¸ãƒ£ãƒ»ã‚¨ãƒ«ãƒ»ã‚µãƒ«ãƒãƒ‰ãƒ¼ãƒ«ã€ãƒ«ãƒªãƒ³ã€ãƒ‘ãƒãƒ£ã‚«ãƒžãƒƒã‚¯ã€ãƒ—ã‚¯ã‚µãƒŠãŠã‚ˆã³5ã¤ã®æ²¿å²¸åœ°åŸŸï¼‰ã«ä½ã‚€<strong>ç´„100ä¸‡äººãŒæ©æµã‚’å—ã‘ã¾ã™</strong>ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ç¾è¡Œã®æ¡ˆä»¶ã®ä¸­ã§ç‰¹ã«æ³¨ç›®ã•ã‚Œã‚‹ã®ã¯<strong>ã€Œã‚µãƒ³ãƒ»ãƒœãƒ«ãƒå›½ç«‹å°å…ä¿å¥ç ”ç©¶æ‰€ï¼ˆINSN-SBï¼‰ã®é‹å–¶ãƒ»ç¶­æŒç®¡ç†ã€</strong>ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã§ã™ã€‚ã™ã§ã«12ç¤¾ãŒå‚åŠ æ¨©ã‚’å–å¾—ã—ã€å‹Ÿé›†è¦é …ã‚„å¥‘ç´„æ¡ˆã«å¯¾ã™ã‚‹è³ªå•ãƒ»ã‚³ãƒ¡ãƒ³ãƒˆã‚’æå‡ºã—ã¦ã„ã¾ã™ã€‚æ°‘é–“äº‹æ¥­è€…ãŒã€Œã‚°ãƒ¬ãƒ¼ã‚µãƒ¼ãƒ“ã‚¹ï¼ˆæ–½è¨­ãƒ»æ©Ÿæ¢°è¨­å‚™ã®ä¿å®ˆã€ãƒ©ãƒ³ãƒ‰ãƒªãƒ¼ã€æ¸…æŽƒã€çµ¦é£Ÿã€è­¦å‚™ï¼‰ã€ãŠã‚ˆã³ã€Œã‚°ãƒªãƒ¼ãƒ³ã‚µãƒ¼ãƒ“ã‚¹ï¼ˆæ»…èŒã€è‡¨åºŠç—…ç†ï¼‰ã€ã‚’æ‹…ã„ã¾ã™ã€‚<strong>å¥‘ç´„æœŸé–“ã¯17å¹´</strong>ã§ã€åŒ»ç™‚æ©Ÿå™¨ã®æ›´æ–°ã‚‚å«ã¾ã‚Œã¾ã™ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã‚‚ã†ä¸€ã¤ã®é‡è¦æ¡ˆä»¶ã¯ã€å›½é˜²çœï¼ˆMINDEFï¼‰ã®å§”è¨—ã«ã‚ˆã‚‹<strong>ã€Œæ–°ä¸­å¤®è»äº‹ç—…é™¢ã€</strong>ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã§ã™ã€‚æœ¬ä»¶ã¯å…±åŒå‡ºè³‡åž‹æ°‘é–“ææ¡ˆï¼ˆIPCï¼‰ã§ã‚ã‚Šã€2025å¹´ç¬¬4å››åŠæœŸã«é–¢å¿ƒè¡¨æ˜Žã€2026å¹´ã«è½æœ­äºˆå®šã§ã™ã€‚<strong>å¥‘ç´„ç·é¡ã¯4å„„4,200ä¸‡ç±³ãƒ‰ãƒ«ã€æœŸé–“ã¯30å¹´</strong>ã§ã€è¨­è¨ˆãƒ»å»ºè¨­ãƒ»é‹å–¶ãƒ»ç¶­æŒç®¡ç†ã«åŠ ãˆã€Œã‚°ãƒ¬ãƒ¼ã‚µãƒ¼ãƒ“ã‚¹ã€ã€Œã‚°ãƒªãƒ¼ãƒ³ã‚µãƒ¼ãƒ“ã‚¹ã€ã‚‚å«ã¾ã‚Œã¾ã™ã€‚<strong>ç´„30ä¸‡äººã®è»äººãŠã‚ˆã³ãã®æ‰¶é¤Šå®¶æ—</strong>ãŒå¯¾è±¡ã§ã™ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã•ã‚‰ã«ã€ä¿å¥çœã¨ã®å”åŠ›ã§<strong>ã€Œã‚¤ãƒãƒªãƒˆãƒ»ã‚¦ãƒŠãƒŒã‚¨ç—…é™¢ï¼ˆãƒ–ãƒ©ãƒœãƒ»ãƒã‚³ï¼‰ã®è¿‘ä»£åŒ–ã€</strong>ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã‚‚æŽ¨é€²ã•ã‚Œã¦ã„ã¾ã™ã€‚æœ¬æ¡ˆä»¶ã¯æ–°ç—…é™¢ã®å»ºè¨­ã€åŒ»ç™‚æ©Ÿå™¨ã®å…¨é¢å°Žå…¥ãƒ»æ›´æ–°ã€ãªã‚‰ã³ã«ç·åˆã‚µãƒ¼ãƒ“ã‚¹ã®é‹å–¶ãƒ»ç¶­æŒç®¡ç†ã‚’å«ã¿ã€<strong>ç´„310ä¸‡äººã®ç›´æŽ¥å½±éŸ¿äººå£ãŠã‚ˆã³40ä¸‡äººã®å®Ÿéœ€äººå£</strong>ã‚’ã‚«ãƒãƒ¼ã—ã¾ã™ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ãƒ”ã‚¦ãƒ©ã§ã¯<strong>ã€Œã‚¹ã‚¸ãƒ£ãƒ¼ãƒŠæ”¯æ´ç—…é™¢II-2ã®é‹å–¶ãƒ»ç¶­æŒç®¡ç†ã€</strong>ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆï¼ˆ<strong>æŠ•è³‡é¡ï¼š1å„„9,300ä¸‡ç±³ãƒ‰ãƒ«</strong>ï¼‰ãŒæŽ¨é€²ã•ã‚Œã¦ã„ã¾ã™ã€‚æœ¬äº‹æ¥­ã§ã¯ã€ç—…é™¢ã®ã‚¤ãƒ³ãƒ•ãƒ©ã‚„åŒ»ç™‚æ©Ÿå™¨ã®ç¶­æŒç®¡ç†ã«åŠ ãˆã€ã€Œã‚°ãƒ¬ãƒ¼ã‚µãƒ¼ãƒ“ã‚¹ã€ï¼ˆæ¸…æŽƒã€è­¦å‚™ã€ãƒ©ãƒ³ãƒ‰ãƒªãƒ¼ã€çµ¦é£Ÿã€å»ƒæ£„ç‰©ç®¡ç†ã€ç‰©æµã€æƒ…å ±ã‚·ã‚¹ãƒ†ãƒ ã€æ»…èŒï¼‰ã‚„ã€Œã‚°ãƒªãƒ¼ãƒ³ã‚µãƒ¼ãƒ“ã‚¹ã€ï¼ˆè‡¨åºŠæ¤œæŸ»ã€é€æžã€ç”»åƒè¨ºæ–­ï¼‰ã‚‚æä¾›ã•ã‚Œã¾ã™ã€‚ã“ã‚Œã«ã‚ˆã‚Šã€<strong>ç´„64ä¸‡5åƒäººãŒæ©æµã‚’å—ã‘ã‚‹</strong>è¦‹è¾¼ã¿ã§ã™ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã‚«ãƒãƒžãƒ«ã‚«ã§ã¯<strong>ã€ŒEsSaludå°‚é–€ç—…é™¢ã®é‹å–¶ãƒ»ç¶­æŒç®¡ç†ã€</strong>ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆï¼ˆ<strong>æŠ•è³‡é¡ï¼š1å„„8,900ä¸‡ç±³ãƒ‰ãƒ«</strong>ï¼‰ãŒé€²è¡Œä¸­ã§ã€ã‚¹ã‚¸ãƒ£ãƒ¼ãƒŠã¨åŒæ§˜ã®ã€Œã‚°ãƒ¬ãƒ¼ã‚µãƒ¼ãƒ“ã‚¹ã€ã¨ã€Œã‚°ãƒªãƒ¼ãƒ³ã‚µãƒ¼ãƒ“ã‚¹ã€ã‚’æä¾›ã—ã€åœ°åŸŸã®è¢«ä¿é™ºè€…ã«åˆ©ç›Šã‚’ã‚‚ãŸã‚‰ã—ã¾ã™ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã¾ãŸã€<strong>ã€Œãƒªãƒžé¦–éƒ½åœã«ãŠã‘ã‚‹ä¿å¥çœåŒ»ç™‚æ–½è¨­ã®å›ºå½¢å»ƒæ£„ç‰©ç·åˆç®¡ç†ã€</strong>ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆï¼ˆ<strong>æŠ•è³‡é¡ï¼š1å„„7,900ä¸‡ç±³ãƒ‰ãƒ«ã€20å¹´é–“ã®ã‚³ãƒ³ã‚»ãƒƒã‚·ãƒ§ãƒ³</strong>ï¼‰ã‚‚è¨ˆç”»ã•ã‚Œã¦ã„ã¾ã™ã€‚æœ¬æ¡ˆä»¶ã¯ç‰¹åˆ¥å»ƒæ£„ç‰©ãƒ»æ„ŸæŸ“æ€§å»ƒæ£„ç‰©ã®å‡¦ç†æ–½è¨­ã®å»ºè¨­ãƒ»é‹å–¶ãƒ»ç¶­æŒç®¡ç†ã‚’å«ã¿ã€<strong>430ã®åŒ»ç™‚æ–½è¨­</strong>ãŒå¯¾è±¡ã§ã™ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ä¸¦è¡Œã—ã¦ã€<strong>ãƒ­ãƒ¬ãƒˆã€ãƒ”ã‚¦ãƒ©ã€ãƒ©ãƒ³ãƒã‚¤ã‚¨ã‚±ã€ã‚¦ã‚¢ãƒŒã‚³ã§æ–°ãŸã«13ä»¶ã®ä¿å¥åˆ†é‡ŽAPPãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆ</strong>ã‚’è¿½åŠ äºˆå®šã§ã‚ã‚Šã€å„åœ°åŸŸã®å·žæ”¿åºœã¨å”è­°ã‚’é€²ã‚ã¦ã„ã¾ã™ã€‚
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            ä¿å¥åˆ†é‡Žãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®æ‹¡å¤§ã¯ã€APPã®æ´»ç”¨ã«å¯¾ã™ã‚‹å…¬çš„æ©Ÿé–¢ã®é–¢å¿ƒã®é«˜ã¾ã‚Šã‚’åæ˜ ã—ã¦ã„ã¾ã™ã€‚<strong>APPã¯åŠ¹çŽ‡çš„ãªé‹å–¶ã‚’å¯èƒ½ã«ã—ã€å›½éš›åŸºæº–ã«åŸºã¥ãç®¡ç†ã‚’ä¿è¨¼ã™ã‚‹ã¨ã¨ã‚‚ã«ã€å›½ãŒå¼•ãç¶šãå¸‚æ°‘ã¸ã®ç„¡å„ŸåŒ»ç™‚ã‚µãƒ¼ãƒ“ã‚¹ã®è²¬ä»»ã‚’æ‹…ã†</strong>ã“ã¨ã‚’ç¢ºå®Ÿã«ã—ã¾ã™ã€‚
          </p>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2 japanese-text">
              ãƒšãƒ«ãƒ¼æŠ•è³‡ä¿ƒé€²åºï¼ˆPROINVERSIÃ“Nï¼‰
            </p>
            <p className="text-xs text-gray-500">
              [PROINVERSIÃ“N, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">å‚è€ƒæ–‡çŒ®</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              PROINVERSIÃ“N. (2025å¹´08æœˆ15æ—¥). PROINVERSION impulsa el desarrollo de siete proyectos de Salud por aproximadamente US$ 2 000 mlls.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              å‚ç…§å…ˆ: PROINVERSION NOTICIAS:<br/>
              <Link href="https://www.investinperu.pe/es/pi/detalle-noticia/proinversion-impulsa-el-desarrollo-de-siete-proye" className="text-blue-600 hover:underline text-xs break-all">
                https://www.investinperu.pe/es/pi/detalle-noticia/proinversion-impulsa-el-desarrollo-de-siete-proye
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
