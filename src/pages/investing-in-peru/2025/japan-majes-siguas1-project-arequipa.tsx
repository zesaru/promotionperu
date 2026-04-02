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
            経済活性化と灌漑プロジェクトの停滞解消を目的とする政府方針の一環として、農業灌漑省（MIDAGRI）は、<strong>Majes Siguas I の整備に関する技術支援を日本が担う</strong>ことを発表しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            MIDAGRIのアンヘル・マネロ大臣は記者会見で、「昨年11月に本件に関する国際公募を開始しました。最終的に世界の5か国が関心を示し、本日、日本政府がMajes Siguas Iの総合的な整備技術支援を担う国として選定されたことを発表します。これはアレキパおよびペルー南部にとって極めて重要なインフラです」と述べました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            Majes Siguas I の整備には、<strong>5億3,100万米ドルを超える投資</strong>が見込まれており、Majes平原にある1万6,000ヘクタールの農地に対する灌漑の継続性を確保することを目的としています。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            大臣はさらに、「Majes Siguas I のインフラを修復・近代化することは、1万6,000ヘクタールの小規模農家に対する水の確保を意味します。そして、当初計画されていた2万4,000ヘクタールへの拡張を完了させることにもつながります。つまり、<strong>新たに8,000ヘクタールの農地が確保される</strong>ということです」と付け加えました。
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
