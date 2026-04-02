import Link from "next/link";
import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const ProinversionProjectsPage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} articlePublishedTime="2025-11-18T00:00:00+09:00" title="PROINVERSIONã€8å„„5,000ä¸‡ç±³ãƒ‰ãƒ«ä»¥ä¸Šã®æ¸¯æ¹¾ãƒ»é“è·¯ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã‚’æŽ¨é€²">
      <Banner
        alt={"Investment guide 2022"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600">åœ¨æ—¥ãƒšãƒ«ãƒ¼å¤§ä½¿é¤¨</p>
          <p className="text-xs md:text-sm text-gray-600">éžå…¬å¼ç¿»è¨³</p>
        </div>

        <div className="mb-8">
          <h1 className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            PROINVERSIONã€8å„„5,000ä¸‡ç±³ãƒ‰ãƒ«ä»¥ä¸Šã®æ¸¯æ¹¾ãƒ»é“è·¯ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã‚’æŽ¨é€²
          </h1>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            ãƒªãƒžã€2025å¹´11æœˆ18æ—¥
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              ã“ã‚Œã‚‰ã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®å®Ÿæ–½ã«ã‚ˆã‚Šã€å›½å†…ã®ç‰©æµãƒãƒƒãƒˆãƒ¯ãƒ¼ã‚¯ã®å¼·åŒ–ã¨å›½åœŸçµ±åˆã®ä¿ƒé€²ã‚’ç›®æŒ‡ã—ã¦ã„ã¾ã™ã€‚
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            ãƒšãƒ«ãƒ¼æ”¿åºœã¯ã€è¼¸å‡ºä¿ƒé€²ã€æˆ¦ç•¥çš„ã‚»ã‚¯ã‚¿ãƒ¼ã®æ´»æ€§åŒ–ã€ãã—ã¦å›½åœŸçµ±åˆã‚’ç›®çš„ã¨ã—ãŸã€ç·é¡8å„„5,000ä¸‡ç±³ãƒ‰ãƒ«ä»¥ä¸Šã®æ¸¯æ¹¾ãƒ»é“è·¯ã®å®˜æ°‘é€£æºï¼ˆPPPï¼‰ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆãƒãƒ¼ãƒˆãƒ•ã‚©ãƒªã‚ªã‚’é€šã˜ã€è¿‘ä»£çš„ã§ç«¶äº‰åŠ›ã®ã‚ã‚‹ç‰©æµãƒãƒƒãƒˆãƒ¯ãƒ¼ã‚¯ã®æ§‹ç¯‰ã‚’é€²ã‚ã¦ã„ã¾ã™ã€‚
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            COMEXä¸»å‚¬ã®ã€Œå¤–å›½è²¿æ˜“ã¨ã‚¤ãƒ³ãƒ•ãƒ©ã€ã‚»ãƒŸãƒŠãƒ¼ã§ã¯ã€PROINVERSIÃ“Nã®ã‚¨ã‚°ã‚¼ã‚¯ãƒ†ã‚£ãƒ–ãƒ»ãƒ‡ã‚£ãƒ¬ã‚¯ã‚¿ãƒ¼ã€ãƒ«ã‚¤ã‚¹ãƒ»ãƒ‡ãƒ«ãƒ»ã‚«ãƒ«ãƒ”ã‚ªæ°ï¼ˆLuis Del Carpioï¼‰ãŒã€åŒåºãŒçµŒæ¸ˆè²¡å‹™çœã«ä»˜å±žã™ã‚‹æ©Ÿé–¢ã¨ã—ã¦ç®¡ç†ã™ã‚‹ä¸»è¦ãªæ¸¯æ¹¾ãŠã‚ˆã³é“è·¯ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã«ã¤ã„ã¦ç™ºè¡¨ã—ã¾ã—ãŸã€‚
          </p>

          {/* Port Projects Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">æ¸¯æ¹¾ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆ</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">ãƒãƒ³ãƒœãƒ†æ¸¯ã‚¿ãƒ¼ãƒŸãƒŠãƒ«</h4>
                <p className="text-sm md:text-base text-blue-600 font-medium mb-2 japanese-text">3å„„5,400ä¸‡ç±³ãƒ‰ãƒ«</p>
                <p className="text-sm text-gray-700 leading-relaxed japanese-text">
                  ã“ã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã¯ã€Ãncashã€La Libertadã€Huanucoã€åŒ—éƒ¨Limaã®ç´„120ä¸‡äººã®ä½æ°‘ã«æ©æµã‚’ã‚‚ãŸã‚‰ã—ã¾ã™ã€‚ã“ã®æ–½è¨­ã¯ã€åœ’èŠ¸ã€æ¼æ¥­ã€é‰±æ¥­éƒ¨é–€ã®ç‰©æµãƒã‚§ãƒ¼ãƒ³ã‚’æœ€é©åŒ–ã—ã€åŒ—éƒ¨ãƒšãƒ«ãƒ¼ã®è¼¸å‡ºç«¶äº‰åŠ›ã‚’å¼·åŒ–ã—ã¾ã™ã€‚
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">SaramirizaãŠã‚ˆã³Iquitosæ¸¯ã‚¿ãƒ¼ãƒŸãƒŠãƒ«</h4>
                <p className="text-sm md:text-base text-blue-600 font-medium mb-2 japanese-text">1å„„8,100ä¸‡ç±³ãƒ‰ãƒ«</p>
                <p className="text-sm text-gray-700 leading-relaxed japanese-text">
                  Loretoåœ°åŸŸã§ã®å»ºè¨­ãŒè¨ˆç”»ã•ã‚Œã¦ãŠã‚Šã€æ²³å·è¼¸é€ã®ä¿ƒé€²ã¨ã‚¢ãƒžã‚¾ãƒ³åœ°åŸŸã®ç‰©æµé€£çµæ€§å‘ä¸Šã«ä¸å¯æ¬ ãªã‚¤ãƒ³ãƒ•ãƒ©ã¨ãªã‚Šã¾ã™ã€‚ã“ã‚Œã‚‰ã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã«ã‚ˆã‚Šã€100ä¸‡äººä»¥ä¸Šã®ä½æ°‘ãŒæ©æµã‚’å—ã‘ã€ã‚¢ãƒžã‚¾ãƒ³åœ°åŸŸã®çµŒæ¸ˆãƒ»å•†æ¥­ç™ºå±•ãŒä¿ƒé€²ã•ã‚Œã‚‹è¦‹è¾¼ã¿ã§ã™ã€‚
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">ãƒ—ã‚«ãƒ«ãƒ‘æ¸¯ã‚¿ãƒ¼ãƒŸãƒŠãƒ«è¿‘ä»£åŒ–</h4>
                <p className="text-sm md:text-base text-blue-600 font-medium mb-2 japanese-text">3å„„1,500ä¸‡ç±³ãƒ‰ãƒ«</p>
                <p className="text-sm text-gray-700 leading-relaxed japanese-text">
                  Ucayaliåœ°åŸŸã§é€²ã‚ã‚‰ã‚Œã¦ãŠã‚Šã€åœ°åŸŸã®ç‰©æµèƒ½åŠ›ã‚’å‘ä¸Šã•ã›ã€åˆå¹´åº¦ã«ã¯80ä¸‡ãƒˆãƒ³ä»¥ä¸Šã®è²¨ç‰©ã‚’å–ã‚Šæ‰±ã†è¦‹è¾¼ã¿ã§ã™ã€‚ã“ã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã«ã‚ˆã‚Šç‰©æµã‚³ã‚¹ãƒˆãŒå‰Šæ¸›ã•ã‚Œã€Limaã€Ucayaliã€Loretoé–“ã®å•†å–å¼•ãŒå¼·åŒ–ã•ã‚Œã€ç´„60ä¸‡äººã®ä½æ°‘ãŒæ©æµã‚’å—ã‘ã¾ã™ã€‚
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-300">
              <p className="text-sm text-gray-700 leading-relaxed japanese-text">
                å…¨ä½“ã¨ã—ã¦ã€ãƒãƒ¼ãƒˆãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®å®Ÿæ–½ã«ã‚ˆã‚Šã€1,450ä»¥ä¸Šã®ç›´æŽ¥é›‡ç”¨ãŒå‰µå‡ºã•ã‚Œã€çµŒæ¸ˆå†æ´»æ€§åŒ–ã¨æˆ¦ç•¥çš„ã‚¤ãƒ³ãƒ•ãƒ©ã®å¼·åŒ–ã«è²¢çŒ®ã—ã¾ã™ã€‚
              </p>
            </div>
          </div>

          {/* Port Community System */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">Port Community Systemï¼ˆPCSï¼‰å°Žå…¥</h3>
            <p className="text-sm text-gray-700 leading-relaxed japanese-text">
              ã•ã‚‰ã«ã€å›½å†…æ¸¯æ¹¾ã‚·ã‚¹ãƒ†ãƒ ã®è¿‘ä»£åŒ–ã®ä¸€ç’°ã¨ã—ã¦ã€PROINVERSIONã¯Port Community Systemï¼ˆPCSï¼‰ã®å°Žå…¥ã‚‚æŽ¨é€²ã—ã¦ãŠã‚Šã€æ¸¯æ¹¾äº‹æ¥­è€…é–“ã®æƒ…å ±äº¤æ›ã‚’çµ±åˆã™ã‚‹ã“ã¨ã§ã€ãƒ—ãƒ­ã‚»ã‚¹ã®æœ€é©åŒ–ã€ã‚³ã‚¹ãƒˆå‰Šæ¸›ã€ç‰©æµãƒã‚§ãƒ¼ãƒ³ã®ç«¶äº‰åŠ›å‘ä¸Šã‚’å›³ã‚Šã¾ã™ã€‚
            </p>
          </div>

          {/* New PPP Framework */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">æ–°ãŸãªå®˜æ°‘é€£æºï¼ˆPPPï¼‰åˆ¶åº¦</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4 japanese-text">
              ãƒ‡ãƒ«ãƒ»ã‚«ãƒ«ãƒ”ã‚ªæ°ã¯ã¾ãŸã€æ–°ãŸãªå®˜æ°‘é€£æºï¼ˆPPPï¼‰åˆ¶åº¦ãŒPROINVERSIÃ“Nã®å½¹å‰²ã‚’å¼·åŒ–ã—ã€ã‚ˆã‚Šç§©åºã‚ã‚‹äºˆæ¸¬å¯èƒ½ã§ãƒãƒ©ãƒ³ã‚¹ã®å–ã‚ŒãŸåœ°åŸŸé–‹ç™ºã¸ã®é‡è¦ãªä¸€æ­©ã«ãªã‚‹ã“ã¨ã‚’æŒ‡æ‘˜ã—ã¾ã—ãŸã€‚
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm text-gray-700 italic">
              ã€Œã“ã®è¦åˆ¶æ›´æ–°ã«ã‚ˆã‚Šã€æŠ•è³‡ä¿ƒé€²ã®åŠ é€Ÿã¨å…¨å›½è¦æ¨¡ã§ã®æˆ¦ç•¥çš„ã‚¤ãƒ³ãƒ•ãƒ©ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®å®Ÿæ–½æ”¹å–„ãŒå¯èƒ½ã¨ãªã‚Šã¾ã™ã€‚Anillo Vial Perifericoã€Longitudinal de la Sierra â€“ Tramo 4ã€Huancayoâ€“Huancavelicaé‰„é“ãªã©ã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã¯ã€ç‰©æµã®æŽ¥ç¶šæ€§ã«ç›´æŽ¥å½±éŸ¿ã‚’ä¸Žãˆã€è¼¸é€æ™‚é–“ã®çŸ­ç¸®ã¨åœ°åŸŸé–“çµ±åˆã®å¼·åŒ–ã«è²¢ä¸Žã™ã‚‹ã§ã—ã‚‡ã†ã€
            </blockquote>
          </div>

          {/* Road Projects */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">é“è·¯ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆ</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4 japanese-text">
              åŒæ™‚ã«ã€ãƒ‡ãƒ«ãƒ»ã‚«ãƒ«ãƒ”ã‚ªæ°ã¯ã€å®˜æ°‘é€£æºï¼ˆPPPï¼‰ã«ã‚ˆã‚‹åœ°åŸŸçµ±åˆã‚’å¼·åŒ–ã™ã‚‹22ä»¶ã®é“è·¯ç¶­æŒãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã‚‚ç´¹ä»‹ã—ã¾ã—ãŸã€‚ç·æŠ•è³‡é¡ã¯550ä¸‡ç±³ãƒ‰ãƒ«ã‚’è¶…ãˆã€15åœ°åŸŸã«æ©æµã‚’ã‚‚ãŸã‚‰ã™è¦‹è¾¼ã¿ã§ã™ã€‚ã“ã‚Œã‚‰ã®æŠ•è³‡ã«ã‚ˆã‚Šã€å¹´é–“ã‚’é€šã˜ãŸäº¤é€šã®ç¶™ç¶šæ€§ãŒç¢ºä¿ã•ã‚Œã€åˆ©ç”¨è€…ã®ã‚µãƒ¼ãƒ“ã‚¹æ°´æº–ãŒå‘ä¸Šã—ã¾ã™ã€‚
            </p>

            <div className="bg-white border border-gray-300 rounded-lg p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-3">ãƒžã‚¯ãƒ­åœ°åŸŸåˆ¥ã®æŠ•è³‡é…åˆ†</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">â€¢</span>
                  <span><strong>ä¸­å¤®åœ°åŸŸï¼š</strong>10ä»¶ã€21å„„6,200ä¸‡ç±³ãƒ‰ãƒ«</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">â€¢</span>
                  <span><strong>å—éƒ¨åœ°åŸŸï¼š</strong>8ä»¶ã€23å„„6,800ä¸‡ç±³ãƒ‰ãƒ«</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">â€¢</span>
                  <span><strong>åŒ—éƒ¨åœ°åŸŸï¼š</strong>2ä»¶ã€5å„„6,000ä¸‡ç±³ãƒ‰ãƒ«</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">â€¢</span>
                  <span><strong>æ±éƒ¨åœ°åŸŸï¼š</strong>1ä»¶ã€3å„„9,000ä¸‡ç±³ãƒ‰ãƒ«</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">â€¢</span>
                  <span><strong>ãƒªãƒžï¼š</strong>1ä»¶ã€9,300ä¸‡ç±³ãƒ‰ãƒ«</span>
                </li>
              </ul>
            </div>

            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm text-gray-700 italic mt-4">
              ãƒ‡ãƒ«ãƒ»ã‚«ãƒ«ãƒ”ã‚ªæ°ã¯ã€ã“ã‚Œã‚‰ã®é“è·¯å›žå»Šã®æ•´å‚™ã«ã‚ˆã‚Šã€åœ°åŸŸé–“æŽ¥ç¶šãŒå¼·åŒ–ã•ã‚Œã€ç§»å‹•æ™‚é–“ã‚„ç‰©æµã‚³ã‚¹ãƒˆã®å‰Šæ¸›ã€å›½å†…å¤–å¸‚å ´ã®é€£æºä¿ƒé€²ãŒå¯èƒ½ã«ãªã‚‹ã¨è¿°ã¹ã€ã€Œåœ°åŸŸçµŒæ¸ˆã®å†æ´»æ€§åŒ–ã¨ã‚ˆã‚ŠåŠ¹çŽ‡çš„ã‹ã¤æŒç¶šå¯èƒ½ãªç§»å‹•ã®å®Ÿç¾ã«å¤§ããè²¢çŒ®ã™ã‚‹ã“ã¨ãŒæœŸå¾…ã•ã‚Œã¾ã™ã€ã¨ä»˜ã‘åŠ ãˆã¾ã—ãŸã€‚
            </blockquote>
          </div>

          {/* Results */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">PROINVERSIONã®æˆæžœ</h3>
            <p className="text-sm text-gray-700 leading-relaxed japanese-text">
              2002å¹´ã®å‰µè¨­ä»¥æ¥ã€PROINVERSIONã¯è¼¸é€é–¢é€£ã§33ä»¶ã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã‚’ç·é¡170å„„ç±³ãƒ‰ãƒ«ã§å—æ³¨ã—ã¦ãŠã‚Šã€å›½å†…è¼¸å‡ºã¯10å€ã«æ‹¡å¤§ã—ã€2024å¹´ã«ã¯740å„„ç±³ãƒ‰ãƒ«ã«é”ã—ã¾ã—ãŸã€‚
            </p>
          </div>

          {/* References */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">å‚è€ƒæ–‡çŒ®</h3>
            <p className="text-sm text-gray-700 japanese-text">
              PROINVERSION. (2025å¹´11æœˆ18æ—¥). PROINVERSION promueve proyectos portuarios y viales por mÃ¡s de US$ 850 millones.<br />
              å‚ç…§å…ˆ: <a href="https://www.investinperu.pe/proinversion-promueve-proyectos-portuarios-y-viales-por-mas-de-us-850-millones/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PROINVERSION</a>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <p className="text-xs md:text-sm text-gray-600 mb-2">
              åœ¨æ—¥ãƒšãƒ«ãƒ¼å¤§ä½¿é¤¨
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              çµŒæ¸ˆå•†å‹™æ‹…å½“
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

export default ProinversionProjectsPage;
