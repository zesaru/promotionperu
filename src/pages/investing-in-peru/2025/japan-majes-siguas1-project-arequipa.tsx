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
      articlePublishedTime="2025-06-19T13:26:00+09:00"
      title="政府はアレキパへの約束を果たし、日本が Majes Siguas I の整備を担うことを発表"
      description="ペルー政府は、アレキパ州向けの重要灌漑インフラであるMajes Siguas Iの整備について、日本が技術支援を担う方針を発表しました。"
    >
      <Banner
        alt={"日本がMajes Siguas Iの整備を担うことを発表したニュースバナー"}
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
            農業灌漑省（MIDAGRI）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            政府はアレキパへの約束を果たし、日本が Majes Siguas I の整備を担うことを発表
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025年6月19日 13時26分
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            çµŒæ¸ˆå†æ´»æ€§åŒ–ã¨çŒæ¼‘ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®åœæ»žè§£æ¶ˆã‚’ç›®çš„ã¨ã—ãŸæ”¿åºœæ–¹é‡ã®ä¸€ç’°ã¨ã—ã¦ã€è¾²æ¥­çŒæ¼‘çœï¼ˆMIDAGRIï¼‰ã¯ã€<strong>Majes Siguas I ã®æ•´å‚™ã«é–¢ã™ã‚‹æŠ€è¡“æ”¯æ´ã‚’æ—¥æœ¬ãŒæ‹…ã†</strong>ã“ã¨ã‚’ç™ºè¡¨ã—ã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã€Œæ˜¨å¹´11æœˆã«æœ¬ä»¶ã«é–¢ã™ã‚‹å›½éš›å…¬å‹Ÿã‚’é–‹å§‹ã—ã¾ã—ãŸã€‚æœ€çµ‚çš„ã«ä¸–ç•Œã®5ã¤ã®æœ‰åŠ›å›½ãŒæœ¬ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã¸ã®é–¢å¿ƒã‚’è¡¨æ˜Žã—ã€æœ¬æ—¥ã€æ—¥æœ¬æ”¿åºœãŒMajes Siguas Iã®ç·åˆçš„ãªæ•´å‚™æŠ€è¡“æ”¯æ´ã‚’æ‹…ã†å›½ã¨ã—ã¦é¸ã°ã‚ŒãŸã“ã¨ã‚’ç™ºè¡¨ã„ãŸã—ã¾ã™ã€‚ã“ã‚Œã¯ã‚¢ãƒ¬ã‚­ãƒ‘ãŠã‚ˆã³ãƒšãƒ«ãƒ¼å—éƒ¨ã«ã¨ã£ã¦æ¥µã‚ã¦é‡è¦ãªã‚¤ãƒ³ãƒ•ãƒ©ã§ã™ã€ã¨ã€MIDAGRIã®ã‚¢ãƒ³ãƒ˜ãƒ«ãƒ»ãƒžãƒãƒ­å¤§è‡£ã¯è¨˜è€…ä¼šè¦‹ã§è¿°ã¹ã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            Majes Siguas I ã®æ•´å‚™ã«ã¯ã€<strong>5å„„3,100ä¸‡ç±³ãƒ‰ãƒ«ã‚’è¶…ãˆã‚‹æŠ•è³‡</strong>ãŒè¦‹è¾¼ã¾ã‚Œã¦ãŠã‚Šã€Majeså¹³åŽŸã«ã‚ã‚‹1ä¸‡6,000ãƒ˜ã‚¯ã‚¿ãƒ¼ãƒ«ã®è¾²åœ°ã®çŒæ¼‘ã®ç¶™ç¶šæ€§ã‚’ä¿è¨¼ã™ã‚‹ã“ã¨ã‚’ç›®çš„ã¨ã—ã¦ã„ã¾ã™ã€‚
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            ã€ŒMajes Siguas I ã®ã‚¤ãƒ³ãƒ•ãƒ©ã‚’ä¿®å¾©ãƒ»è¿‘ä»£åŒ–ã™ã‚‹ã¨ã„ã†ã“ã¨ã¯ã€1ä¸‡6,000ãƒ˜ã‚¯ã‚¿ãƒ¼ãƒ«ã®å°è¦æ¨¡è¾²å®¶ã«å¯¾ã™ã‚‹æ°´ã®ç¢ºä¿ã‚’æ„å‘³ã—ã¾ã™ã€‚ãã—ã¦ã€å½“åˆã®è¨ˆç”»ã§ã‚ã‚‹2ä¸‡4,000ãƒ˜ã‚¯ã‚¿ãƒ¼ãƒ«ã¸ã®æ‹¡å¼µã‚’å®Œäº†ã•ã›ã‚‹ã“ã¨ã«ã‚‚ãªã‚Šã¾ã™ã€‚ã¤ã¾ã‚Šã€<strong>æ–°ãŸã«8,000ãƒ˜ã‚¯ã‚¿ãƒ¼ãƒ«ã®è¾²åœ°ãŒç¢ºä¿ã•ã‚Œã‚‹</strong>ã¨ã„ã†ã“ã¨ã§ã™ã€ã¨å¤§è‡£ã¯ä»˜ã‘åŠ ãˆã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã“ã‚Œã‚‰ã®æ–½ç­–ã«ã‚ˆã‚Šã€MIDAGRIã¯åœ°åŸŸçµŒæ¸ˆã¸ã®å¥½å½±éŸ¿ã‚’è¦‹è¾¼ã¿ã€<strong>3ä¸‡3,120äººã®ç›´æŽ¥é›‡ç”¨ã®å‰µå‡º</strong>ã€è¾²æ¥­æ´»å‹•ã®å¼·åŒ–ã€ãŠã‚ˆã³ç”Ÿç”£è€…å®¶åº­ã®ç”Ÿæ´»å‘ä¸Šã‚’ç›®æŒ‡ã—ã¦ã„ã¾ã™ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            æŠ€è¡“æ”¯æ´ã¯ã€æå‡ºã•ã‚ŒãŸææ¡ˆã«åŸºã¥ãé¸å®šã•ã‚ŒãŸæ—¥æœ¬æ”¿åºœãŒã€<strong>5å¹´3ã‹æœˆã«ã‚ãŸã£ã¦å®Ÿæ–½ã™ã‚‹äºˆå®š</strong>ã§ã™ã€‚ã€Œä¿å®ˆçš„ãªè¦‹é€šã—ã§ã¯ã€å·¥äº‹ã®é–‹å§‹ã¯2028å¹´ã¨ã•ã‚Œã¦ã„ã¾ã™ãŒã€MIDAGRIã¯å…¨åŠ›ã§æ‰‹ç¶šãã‚’åŠ é€Ÿã•ã›ã€<strong>2027å¹´ä¸­ã®å·¥äº‹é–‹å§‹ã‚’ç›®æŒ‡ã—ã¦ã„ã¾ã™</strong>ã€‚Chavimochicãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã¨åŒæ§˜ã€ã‚¹ã‚±ã‚¸ãƒ¥ãƒ¼ãƒ«ã®çŸ­ç¸®ã«å–ã‚Šçµ„ã¿ã¾ã™ã€ã¨ã‚«ãƒ³ãƒã‚¹å¤§è‡£ã¯æ˜Žè¨€ã—ã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã€Œæ—¥æœ¬ã®ã‚ˆã†ã«æœ€å…ˆç«¯ã®æŠ€è¡“ã‚’æœ‰ã—ã€ä¸–ç•Œå„å›½ã§æ°´ã‚¤ãƒ³ãƒ•ãƒ©ã®æ•´å‚™ã«å”åŠ›ã—ã¦ããŸä¸€æµã®å›½ãŒã€Majes Siguas I ã‚’æ‹…ã£ã¦ãã‚Œã‚‹ã“ã¨ã‚’å¤§å¤‰å¬‰ã—ãæ€ã„ã¾ã™ã€‚å®Ÿéš›ã€æ—¥æœ¬ã¯æ•°åå¹´å‰ã‹ã‚‰ãƒšãƒ«ãƒ¼ã«ãŠã‘ã‚‹æ°´ã‚¤ãƒ³ãƒ•ãƒ©ã®é–‹ç™ºã‚’æ”¯æ´ã—ã¦ãã¾ã—ãŸã€ã¨ãƒžãƒãƒ­ãƒ»ã‚«ãƒ³ãƒã‚¹å¤§è‡£ã¯å¼·èª¿ã—ã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            å‘¨çŸ¥ã®ã¨ãŠã‚Šã€<strong>G2Gï¼ˆæ”¿åºœé–“ï¼‰é€£æº</strong>ã¯ã€æŠ€è¡“çš„ãƒ»è²¡æ”¿çš„ãªå”åŠ›ã‚’å¼·åŒ–ã—ã€ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®åŠ¹æžœçš„ã‹ã¤é©æ™‚ãªå®Ÿè¡Œã‚’ä¿è¨¼ã™ã‚‹äºŒå›½é–“ã®å–ã‚Šçµ„ã¿ã§ã™ã€‚
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            ã“ã®ã‚ˆã†ã«ã€MIDAGRIã¯ã€Majes Siguas I ã«é–¢ã™ã‚‹ä»Šå›žã®é‡è¦ãªç™ºè¡¨ãŒã€<strong>è¾²æ¥­ãƒ•ãƒ­ãƒ³ãƒ†ã‚£ã‚¢ã®æ‹¡å¤§ã€é«˜åº¦æŠ€è¡“ã®å°Žå…¥ã€åœ°åŸŸã®åŒ…æ‹¬çš„ç™ºå±•ã®åŸºç›¤</strong>ã¨ãªã‚‹ã‚‚ã®ã§ã‚ã‚Šã€é£Ÿæ–™å®‰å…¨ä¿éšœã¨æŒç¶šå¯èƒ½ãªæˆé•·ã«å¯¾ã™ã‚‹æ”¿åºœã®ç¢ºå›ºãŸã‚‹ã‚³ãƒŸãƒƒãƒˆãƒ¡ãƒ³ãƒˆã‚’å†ç¢ºèªã™ã‚‹ã‚‚ã®ã§ã‚ã‚‹ã¨è¿°ã¹ã¾ã—ãŸã€‚
          </p>


          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2 japanese-text">
              è¾²æ¥­çŒæ¼‘çœï¼ˆMIDAGRIï¼‰
            </p>
            <p className="text-sm text-gray-600 mb-4">
              åºƒå ±ãƒ»åºƒå ±ç”»åƒå®¤
            </p>
            <p className="text-xs text-gray-500">
              [MINISTERIO DE DESARROLLO AGRARIO Y RIEGO - OFICINA DE COMUNICACIONES E IMAGEN INSTITUCIONAL, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">å‚è€ƒæ–‡çŒ®</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              MINISTERIO DE DESARROLLO AGRARIO Y RIEGO - OFICINA DE COMUNICACIONES E IMAGEN INSTITUCIONAL. (2025å¹´6æœˆ19æ—¥). Gobierno cumple con Arequipa y anuncia que JapÃ³n se harÃ¡ cargo de la puesta a punto de Majes Siguas I.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              å‚ç…§å…ˆ: Gog.pe - Plataforma Digital Ãšnica del Estado Peruano:<br/>
              <Link href="https://www.gob.pe/institucion/midagri/noticias/1190713-gobierno-cumple-con-arequipa-y-anuncia-que-japon-se-hara-cargo-de-la-puesta-a-punto-de-majes-siguas-i" className="text-blue-600 hover:underline text-xs break-all">
                https://www.gob.pe/institucion/midagri/noticias/1190713-gobierno-cumple-con-arequipa-y-anuncia-que-japon-se-hara-cargo-de-la-puesta-a-punto-de-majes-siguas-i
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
