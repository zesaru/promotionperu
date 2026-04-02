import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const MiningInvestmentPage = () => {
  const { locale } = useRouter();
  
  return (
    <Layout
      language={locale}
      articlePublishedTime="2025-08-18T00:00:00+09:00"
      title="2025年上半期のペルー鉱業投資累計は23億600万米ドルに到達"
      description="ペルーの2025年上半期の鉱業投資は23億600万米ドルに達し、前年同期比7.2%増を記録。探鉱、インフラ、選鉱・処理設備への投資拡大が成長を後押しした。"
    >
      <Banner
        alt={"2025年上半期のペルー鉱業投資が23億600万米ドルに達したことを伝えるバナー"}
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
            Sociedad Nacional de Minería, Petróleo y Energía
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            2025年上半期のペルー鉱業投資累計は23億600万米ドルに到達
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025年8月18日（月）
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            æ•°å€¤ã¯ã€æŽ¢é‰±ãŠã‚ˆã³ã‚¤ãƒ³ãƒ•ãƒ©åˆ†é‡Žã§ã®æ–°ãŸãªå–ã‚Šçµ„ã¿ã«å¯¾ã—ã¦åŒå›½ãŒç”Ÿã¿å‡ºã™ä¿¡é ¼æ„Ÿã®é«˜ã¾ã‚Šã‚’åæ˜ 
          </p>

          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-blue-800 mb-2">é‰±æ¥­æŠ•è³‡</h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">ç™ºè¡¨æ—¥ï¼š2025å¹´8æœˆ18æ—¥ï¼ˆæœˆï¼‰</p>
          </div>

          <p className="mb-4 text-gray-800 leading-relaxed">
            æœ¬å¹´æœ€åˆã®6ã‹æœˆé–“ã«ãŠã‘ã‚‹<strong>é‰±æ¥­æŠ•è³‡ç´¯è¨ˆé¡ã¯23å„„600ä¸‡ç±³ãƒ‰ãƒ«ã«é”ã—ã€2024å¹´åŒæ™‚æœŸã¨æ¯”ã¹7.2ï¼…ã®æˆé•·ã‚’è¨˜éŒ²</strong>ã—ãŸã€‚æ©æµå‡¦ç†æ–½è¨­ã€æŽ¢é‰±ã€ã‚¤ãƒ³ãƒ•ãƒ©åˆ†é‡Žã«ãŠã‘ã‚‹é¡•è‘—ãªæ´»ç™ºåŒ–ãŒãã®è¦å› ã§ã‚ã‚‹ã¨ã€ã‚¨ãƒãƒ«ã‚®ãƒ¼é‰±å±±çœï¼ˆMINEMï¼‰ãŒå ±å‘Šã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            æœ€æ–°å·ã®ã€Žé‰±æ¥­çµ±è¨ˆé€Ÿå ±ï¼ˆBEMï¼‰ã€ã«ã‚ˆã‚‹ã¨ã€ã“ã®æˆé•·ã¯<strong>æŽ¢é‰±ï¼ˆï¼‹34.9ï¼…ï¼‰ãŠã‚ˆã³ã‚¤ãƒ³ãƒ•ãƒ©ï¼ˆï¼‹12.2ï¼…ï¼‰ã«ãŠã‘ã‚‹è‘—ã—ã„å¢—åŠ </strong>ã«æ”¯ãˆã‚‰ã‚Œã¦ãŠã‚Šã€é‰±æ¥­æ´»å‹•ã®æŒç¶šçš„ãªå›žå¾©ã‚’åæ˜ ã—ã¦ã„ã‚‹ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            MINEMã®é‰±æ¥­æŽ¨é€²ãƒ»æŒç¶šå¯èƒ½æ€§ç·å±€ãŒä½œæˆã—ãŸåŒæ–‡æ›¸ã¯ã€ã“ã‚Œã‚‰ã®æ•°å€¤ãŒ<strong>è‰¯å¥½ãªæŠ•è³‡ç’°å¢ƒã€ãƒžã‚¯ãƒ­çµŒæ¸ˆã®å¥½æ¡ä»¶ã€ãã—ã¦æ–°è¦ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆé–‹ç™ºã«å¯¾ã™ã‚‹æ°‘é–“éƒ¨é–€ã®ä¿¡é ¼å›žå¾©</strong>ã«ã‚ˆã‚Šå¾—ã‚‰ã‚ŒãŸã‚‚ã®ã§ã‚ã‚‹ã¨å¼·èª¿ã—ã¦ã„ã‚‹ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã¾ãŸã€<strong>2025å¹´6æœˆã®é‰±æ¥­æŠ•è³‡ã¯4å„„6,700ä¸‡ç±³ãƒ‰ãƒ«ã«é”ã—</strong>ã€å½“å¹´5æœˆï¼ˆ4å„„200ä¸‡ç±³ãƒ‰ãƒ«ï¼‰ã¨æ¯”ã¹16.1ï¼…ã®å¢—åŠ ã‚’ç¤ºã—ãŸã€‚ã•ã‚‰ã«å‰å¹´åŒæœˆï¼ˆ3å„„8,500ä¸‡ç±³ãƒ‰ãƒ«ï¼‰ã¨æ¯”ã¹ã¦ã‚‚<strong>21.4ï¼…ã®æˆé•·ã‚’è¨˜éŒ²ã—ã€å¥½èª¿ãªæŽ¨ç§»</strong>ã‚’è¦‹ã›ãŸã€‚
          </p>

          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
            <h4 className="font-bold text-green-800 mb-2">2025å¹´6æœˆã®åˆ†é‡Žåˆ¥æŠ•è³‡å¢—åŠ çŽ‡</h4>
            <ul className="text-sm text-gray-800 space-y-1">
              <li>â€¢ æ©æµå‡¦ç†æ–½è¨­æŠ•è³‡ï¼š<strong>ï¼‹33.1ï¼…</strong></li>
              <li>â€¢ é‰±å±±æ©Ÿæ¢°è¨­å‚™ï¼š<strong>ï¼‹59.0ï¼…</strong></li>
              <li>â€¢ æŽ¢é‰±ï¼š<strong>ï¼‹16.5ï¼…</strong></li>
              <li>â€¢ ã‚¤ãƒ³ãƒ•ãƒ©ï¼š<strong>ï¼‹28.4ï¼…</strong></li>
              <li>â€¢ ãã®ä»–ï¼š<strong>ï¼‹13.1ï¼…</strong></li>
            </ul>
          </div>

          <p className="mb-4 text-gray-800 leading-relaxed">
            è©³ç´°åˆ†æžã«ã‚ˆã‚‹ã¨ã€2025å¹´6æœˆã®<strong>æ©æµå‡¦ç†æ–½è¨­åˆ†é‡Žã®æŠ•è³‡ã¯å‰å¹´åŒæœˆæ¯”ã§33.1ï¼…ã®å¢—åŠ </strong>ã‚’è¨˜éŒ²ã—ã€å‡¦ç†èƒ½åŠ›ã®æœ€é©åŒ–ãƒ»æ‹¡å¼µã«å‘ã‘ãŸæ”¯å‡ºã‚„ã€å„ç”Ÿç”£ãƒ¦ãƒ‹ãƒƒãƒˆã«ãŠã‘ã‚‹æŠ€è¡“æ”¹å–„ã®å®Ÿæ–½ã‚’åæ˜ ã™ã‚‹é‡è¦ãªå›žå¾©ãŒè¦‹ã‚‰ã‚ŒãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            é‰±å±±æ©Ÿæ¢°è¨­å‚™åˆ†é‡Žã§ã¯ã€<strong>2025å¹´6æœˆã®æŠ•è³‡ãŒå‰å¹´åŒæœˆæ¯”59.0ï¼…ã®å¢—åŠ </strong>ã‚’ç¤ºã—ã€å¤§åž‹æ©Ÿæ¢°ã‚„è£œåŠ©è¨­å‚™ã®å–å¾—ã«ãŠã‘ã‚‹æ”¯å‡ºå¢—åŠ ã«èµ·å› ã™ã‚‹ã‚‚ã®ã¨ãªã£ãŸã€‚ã“ã‚Œã‚‰ã¯å„é‰±å±±ãƒ¦ãƒ‹ãƒƒãƒˆã®ã‚ªãƒšãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³å¼·åŒ–ã«ä¸å¯æ¬ ã§ã‚ã‚‹ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            æŽ¢é‰±åˆ†é‡Žã«é–¢ã—ã¦ã¯ã€<strong>2025å¹´6æœˆã®æŠ•è³‡ãŒå‰å¹´åŒæœˆæ¯”16.5ï¼…ã®ä¼¸ã³</strong>ã‚’è¦‹ã›ã€åˆæœŸæ®µéšŽãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®æ´»ç™ºåŒ–ã®ã‚‚ã¨ã€åŒå›½ã«ãŠã‘ã‚‹æŽ¢é‰±æ´»å‹•ã®æŒç¶šçš„ãªå›žå¾©ã‚’è£ä»˜ã‘ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã¾ãŸã€<strong>2025å¹´1æœˆã‹ã‚‰6æœˆã¾ã§ã®ç´¯è¨ˆã§ã€æŽ¢é‰±æŠ•è³‡ã¯å‰å¹´åŒæœŸæ¯”34.9ï¼…ã®å¢—åŠ </strong>ã‚’ç¤ºã—ã€å›½å†…é‰±æ¥­æŠ•è³‡ã®ä¸­ã§æœ€ã‚‚é«˜ã„æˆé•·çŽ‡ã‚’ç¤ºã™åˆ†é‡Žã®ä¸€ã¤ã¨ã—ã¦å®šç€ã—ãŸã€‚ç·æŠ•è³‡ã«å ã‚ã‚‹å‰²åˆã¯14.1ï¼…ã¨ãªã£ãŸã€‚
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            ä¸€æ–¹ã€<strong>2025å¹´6æœˆã®ã‚¤ãƒ³ãƒ•ãƒ©åˆ†é‡Žã®æŠ•è³‡ã¯ã€å‰å¹´åŒæœˆï¼ˆ8,600ä¸‡ç±³ãƒ‰ãƒ«ï¼‰ã¨æ¯”ã¹ã¦28.4ï¼…å¢—åŠ </strong>ã—ãŸã€‚ã“ã®çµæžœã¯ã€é‰±æ¥­éƒ¨é–€ãŒãã®é‹å–¶ã‚¤ãƒ³ãƒ•ãƒ©ã®å¼·åŒ–ã«å¼•ãç¶šãå–ã‚Šçµ„ã‚“ã§ã„ã‚‹ã“ã¨ã‚’æ”¹ã‚ã¦ç¤ºã™ã‚‚ã®ã¨ãªã£ãŸã€‚
          </p>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2">
              Sociedad Nacional de MinerÃ­a, PetrÃ³leo y EnergÃ­a
            </p>
            <p className="text-xs text-gray-500">
              [Sociedad Nacional de MinerÃ­a, PetrÃ³leo y EnergÃ­a, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">å‚è€ƒæ–‡çŒ®</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              Sociedad Nacional de MinerÃ­a, PetrÃ³leo y EnergÃ­a. (2025å¹´08æœˆ18æ—¥). InversiÃ³n minera acumulada alcanzÃ³ los US$ 2,306 millones en el primer semestre de 2025.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              å‚ç…§å…ˆ: desde adentro, Revista de la Sociedad Nacional de MinerÃ­a, PetrÃ³leo y EnergÃ­a:<br/>
              <Link href="https://www.desdeadentro.pe/2025/08/inversion-minera-acumulada-alcanzo-los-us-2306-millones-en-el-primer-semestre-de-2025/" className="text-blue-600 hover:underline text-xs break-all">
                https://www.desdeadentro.pe/2025/08/inversion-minera-acumulada-alcanzo-los-us-2306-millones-en-el-primer-semestre-de-2025/
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

export default MiningInvestmentPage;
