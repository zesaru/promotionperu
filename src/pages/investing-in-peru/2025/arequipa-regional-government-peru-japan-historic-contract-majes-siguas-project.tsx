import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const InvestmentPage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} articlePublishedTime="2025-10-10T00:00:00+09:00" title="ãƒšãƒ«ãƒ¼ã¨æ—¥æœ¬ã€Majes Siguasè¨ˆç”»ã®æ”¹ä¿®ãƒ»æ‹¡å¼µã«é–¢ã™ã‚‹æ­´å²çš„å¥‘ç´„ã‚’ç· çµ">
      <Banner
        alt={"ãƒšãƒ«ãƒ¼ã¨æ—¥æœ¬ã€Majes Siguasè¨ˆç”»ã®æ”¹ä¿®ãƒ»æ‹¡å¼µã«é–¢ã™ã‚‹æ­´å²çš„å¥‘ç´„ã‚’ç· çµ"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl py-8">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600">åœ¨æ—¥ãƒšãƒ«ãƒ¼å¤§ä½¿é¤¨</p>
          <p className="text-xs md:text-sm text-gray-600">éžå…¬å¼ç¿»è¨³</p>
        </div>

        <div className="mb-6">
          <h1 className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            Arequipaå·žæ”¿åºœ
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            ãƒšãƒ«ãƒ¼ã¨æ—¥æœ¬ã€Majes Siguasè¨ˆç”»ã®æ”¹ä¿®ãƒ»æ‹¡å¼µã«é–¢ã™ã‚‹æ­´å²çš„å¥‘ç´„ã‚’ç· çµ
          </h2>
          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 japanese-text">
            ãƒ—ãƒ¬ã‚¹ãƒªãƒªãƒ¼ã‚¹
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025å¹´10æœˆ10æ—¥ï¼ˆé‡‘ï¼‰
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed japanese-text">
            Arequipaã®å¤§è¦æ¨¡ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã¯æ­¢ã¾ã‚Šã¾ã›ã‚“ã€‚å›½å†…å—éƒ¨ã®è¾²æ¥­ãƒ»çµŒæ¸ˆé–‹ç™ºã‚’è¦‹æ®ãˆã€2025å¹´10æœˆ10æ—¥ï¼ˆé‡‘ï¼‰ã«ã€<strong>ãƒšãƒ«ãƒ¼ã¨æ—¥æœ¬ã®é–“ã§å›½å®¶é–“å¥‘ç´„ãŒç· çµã•ã‚Œã¾ã—ãŸ</strong>ã€‚ã“ã‚Œã¯Arequipaå·žæ”¿åºœã®å°½åŠ›ã«ã‚ˆã£ã¦å®Ÿç¾ã—ãŸã‚‚ã®ã§ã€Majes Siguasè¨ˆç”»ã®æ”¹ä¿®ãƒ»æ‹¡å¼µã‚’ç›®çš„ã¨ã—ã¦ã„ã¾ã™ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed japanese-text">
            å¥‘ç´„ç· çµå¼ã¯ã‚»ãƒ«ãƒ­ãƒ»ãƒ•ãƒªå›½éš›ä¼šè­°ã‚»ãƒ³ã‚¿ãƒ¼ã§è¡Œã‚ã‚Œã€<strong>Arequipaå·žçŸ¥äº‹ã®ãƒ­ãƒ˜ãƒ«ãƒ»ã‚µãƒ³ãƒã‚§ã‚¹ãƒ»ã‚µãƒ³ãƒã‚§ã‚¹æ°ãŒä¸»å‚¬</strong>ã—ã¾ã—ãŸã€‚å¼å…¸ã¯ã¾ãšã€ãƒšãƒ«ãƒ¼æ”¿åºœã¨æ—¥æœ¬æ”¿åºœã«ã‚ˆã‚‹å”åŠ›è¦šæ›¸ï¼ˆMOCï¼‰ã®ç½²åã§å§‹ã¾ã‚Šã€è¾²æ¥­çŒæ¼‘é–‹ç™ºå¤§è‡£ã‚¢ãƒ³ãƒ˜ãƒ«ãƒ»ãƒžãƒãƒ­ãƒ»ã‚«ãƒ³ãƒã‚¹æ°ã¨ãƒšãƒ«ãƒ¼é§æ—¥ç‰¹å‘½å…¨æ¨©å¤§ä½¿ã€å±±æœ¬å‰›æ°ãŒç½²åã—ã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed japanese-text">
            ãã®å¾Œã€å›½å®¶é–“å¥‘ç´„ã®ç½²åãŒè¡Œã‚ã‚Œã¾ã—ãŸã€‚å¥‘ç´„ã¯è¾²æ¥­çŒæ¼‘é–‹ç™ºçœï¼ˆMIDAGRIï¼‰ã¨ã€<strong>Majes Siguas PMOã‚³ãƒ³ã‚½ãƒ¼ã‚·ã‚¢ãƒ ã®è²¬ä»»è€…ã§ã‚ã‚‹é‡‘äº•æ™´å½¦æ°</strong>ã¨ã®é–“ã§ç· çµã•ã‚Œã€åŒã‚³ãƒ³ã‚½ãƒ¼ã‚·ã‚¢ãƒ ã¯çŒæ¼‘ã‚·ã‚¹ãƒ†ãƒ ã®åŒ…æ‹¬çš„è¿‘ä»£åŒ–ã«å‘ã‘ãŸå°‚é–€æŠ€è¡“æ”¯æ´ã‚’æ‹…å½“ã—ã¾ã™ã€‚ã¾ãŸã€å›½ä¼šè¾²æ¥­å§”å“¡ä¼šã®å§”å“¡é•·ã€ã‚¸ã‚§ãƒ‹ãƒ¼ãƒ»ãƒ­ãƒšã‚¹ãƒ»ã‚«ã‚¹ãƒ†ã‚£ãƒ¼ã‚¸ãƒ§æ°ã‚‚å‡ºå¸­ã—ã¾ã—ãŸã€‚
          </p>

          <h3 className="text-base md:text-lg font-semibold text-blue-800 mb-3 mt-6 japanese-text">
            ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®æ¦‚è¦
          </h3>

          <p className="mb-4 text-gray-800 leading-relaxed japanese-text">
            Majes Siguasè¨ˆç”»ã®æ”¹ä¿®ã«ã‚ˆã‚Šã€<strong>Colcaå·æµåŸŸã‹ã‚‰Siguaså·æµåŸŸã¸æ°´ã‚’é‹ã¶çŒæ¼‘ã‚·ã‚¹ãƒ†ãƒ ãŒè¿‘ä»£åŒ–ãƒ»æœ€é©åŒ–ã•ã‚Œã€æœ€å¤§æµé‡34mÂ³/sã§åŠ¹çŽ‡çš„ã‹ã¤æŒç¶šå¯èƒ½ãªé‹ç”¨ãŒå¯èƒ½</strong>ã¨ãªã‚Šã¾ã™ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed japanese-text">
            æœ¬ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã«ã¯ä»¥ä¸‹ã®è¦ç´ ãŒå«ã¾ã‚Œã¾ã™ï¼š
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2 md:space-y-3 text-gray-800 japanese-text">
            <li className="leading-relaxed">
              <strong>Condoromaãƒ€ãƒ ã®å…¨é¢çš„ä¿®ç¹•ãŠã‚ˆã³è‡ªå‹•åŒ–</strong>
            </li>
            <li className="leading-relaxed">
              <strong>Tuti å–æ°´å£ï¼ˆCayllomaï¼‰ã®æ•´å‚™</strong>
            </li>
            <li className="leading-relaxed">
              <strong>ã‚¢ãƒ³ãƒ‡ã‚¹å±±è„ˆã‚’è²«ãå…¨é•·88kmã®ãƒˆãƒ³ãƒãƒ«ãŠã‚ˆã³13kmã®é‹æ²³ã®æ”¹ä¿®</strong>
            </li>
            <li className="leading-relaxed">
              <strong>Pitayå–æ°´å£ï¼ˆSanta Isabel de Siguasï¼‰ãŠã‚ˆã³Majesâ€“El Pedregalåœ°åŸŸã¸ã®æ°´è·¯ã¸ã®åˆ†å²</strong>
            </li>
          </ul>

          <h3 className="text-base md:text-lg font-semibold text-blue-800 mb-3 mt-6">
            æ—¥æœ¬ã¨ã®å”åŠ›ã®æ„ç¾©
          </h3>

          <p className="mb-4 text-gray-800 leading-relaxed japanese-text">
            æ—¥æœ¬ã¨ã®å”å®šã¯ã€<strong>æŠ€è¡“ãƒªã‚¹ã‚¯ã®ä½Žæ¸›ã€æ°´ã®ç§»é€åŠ¹çŽ‡ã®å‘ä¸Šã€å›½éš›åŸºæº–ã«åŸºã¥ãæ°´è³‡æºç®¡ç†ã®å¼·åŒ–ã¨ã„ã†æˆ¦ç•¥çš„å‰é€²</strong>ã‚’æ„å‘³ã—ã¾ã™ã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed japanese-text">
            ã•ã‚‰ã«ã€ã“ã®å”å®šã«ã‚ˆã‚ŠçŒæ¼‘ã‚·ã‚¹ãƒ†ãƒ ã®å†æ´»æ€§åŒ–ãŒä¿ƒé€²ã•ã‚Œã€ç¾åœ¨ãŠã‚ˆã³å°†æ¥ã®è¾²å®¶ã«åˆ©ç›Šã‚’ã‚‚ãŸã‚‰ã™ã¨ã¨ã‚‚ã«ã€<strong>ã‚¢ãƒ¼ãƒ†ã‚£ãƒãƒ§ãƒ¼ã‚¯ã€ã¶ã©ã†ã€ã‚¢ãƒœã‚«ãƒ‰ãªã©ã€ãƒšãƒ«ãƒ¼å—éƒ¨ã®çµŒæ¸ˆæˆé•·ã‚’ç‰½å¼•ã™ã‚‹ä¸»è¦è¾²ç”£ç‰©ã®è¼¸å‡ºæŒ¯èˆˆ</strong>ã«ã‚‚å¯„ä¸Žã—ã¾ã™ã€‚
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 my-6 md:my-8">
            <p className="text-sm md:text-base text-gray-800 leading-relaxed italic japanese-text">
              ã€Œã“ã®å”å®šã¯å˜ã«æˆ‘ã€…ã®æ°´åˆ©ã‚¤ãƒ³ãƒ•ãƒ©ã‚’è¿‘ä»£åŒ–ã™ã‚‹ã ã‘ã§ãªãã€<strong>ArequipaãŠã‚ˆã³å›½å†…å—éƒ¨ã«ãŠã‘ã‚‹ä¿¡é ¼ã€å”åŠ›ã€æŒç¶šå¯èƒ½ãªç™ºå±•ã®æ–°ãŸãªæ®µéšŽã®å§‹ã¾ã‚Š</strong>ã‚’æ„å‘³ã—ã¾ã™ã€
            </p>
            <p className="text-xs md:text-sm text-gray-600 mt-2 japanese-text">
              â€” Arequipaå·žçŸ¥äº‹ ãƒ­ãƒ˜ãƒ«ãƒ»ã‚µãƒ³ãƒã‚§ã‚¹ãƒ»ã‚µãƒ³ãƒã‚§ã‚¹æ°
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2 japanese-text">
              Arequipaå·žæ”¿åºœ
            </p>
            <p className="text-xs md:text-sm text-gray-600 mb-4 japanese-text">
              åºƒå ±å®¤
            </p>
            <p className="text-xs text-gray-500 japanese-text">
              [Gobierno Regional Arequipa, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-base md:text-lg font-semibold text-blue-800 mb-4 japanese-heading-3">å‚è€ƒæ–‡çŒ®</h3>
            <p className="text-xs md:text-sm text-gray-700 mb-2 japanese-text">
              Gobierno Regional Arequipa. (2025å¹´10æœˆ10æ—¥). PerÃº y JapÃ³n firman contrato histÃ³rico para la Puesta a Punto y ampliaciÃ³n del Proyecto Majes Siguas.
            </p>
            <p className="text-xs md:text-sm text-gray-600 japanese-text">
              å‚ç…§å…ˆ: Gob.pe - Estado Peruano:<br/>
              <Link href="https://www.gob.pe/institucion/regionarequipa/noticias/1262069-peru-y-japon-firman-contrato-historico-para-la-puesta-a-punto-y-ampliacion-del-proyecto-majes-siguas" className="text-blue-600 hover:underline text-xs break-all">
                https://www.gob.pe/institucion/regionarequipa/noticias/1262069-peru-y-japon-firman-contrato-historico-para-la-puesta-a-punto-y-ampliacion-del-proyecto-majes-siguas
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

