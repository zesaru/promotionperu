import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const ProinversionApp5Page = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2025-12-03T00:00:00+09:00"
      title="PROINVERSIÓN、新モデル「APP 5.0」の下で210億米ドル超の投資サイクルを活性化"
      description="PROINVERSIÓNは、新モデル「APP 5.0」の下で、2026年から2028年に向けた210億米ドル超・66件のプロジェクト投資サイクルを提示しました。"
    >
      <Banner
        alt={"Peru public investment projects news banner"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-xs md:text-sm text-gray-600">非公式翻訳</p>
        </div>

        <div className="mb-8">
          <h1 className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            民間投資促進庁（PROINVERSIÓN）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            PROINVERSIÓN、新モデル「APP 5.0」の下で210億米ドル超の投資サイクルを活性化
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-2">
            プレスリリース
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025年12月3日
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              ãƒšãƒ«ãƒ¼ã¯æ–°ãŸãªæ®µéšŽã«å…¥ã‚Šã€å…¨å›½ã®ã‚¤ãƒ³ãƒ•ãƒ©ã¨å…¬å…±ã‚µãƒ¼ãƒ“ã‚¹ã‚’å¤‰é©ã™ã‚‹ãƒ¡ã‚¬ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆæ™‚ä»£ã®å¹•é–‹ã‘ã‚’å‘Šã’ã¦ã„ã¾ã™ã€‚
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            ãƒªãƒžã€2025 å¹´ 12 æœˆ 3 æ—¥ â€” æ°‘é–“æŠ•è³‡ä¿ƒé€²åºï¼ˆPROINVERSIÃ“Nï¼‰ã¯ã€2026ï½ž2028 å¹´ã®ã‚µã‚¤ã‚¯ãƒ«ã«å‘ã‘ãŸ 210 å„„ç±³ãƒ‰ãƒ«ã‚’è¶…ãˆã‚‹ 66 ã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆãƒ»ãƒãƒ¼ãƒˆãƒ•ã‚©ãƒªã‚ªã‚’æç¤ºã—ã¾ã—ãŸã€‚ã“ã‚Œã¯ã€ç«¶äº‰åŠ›ã¨æ•°ç™¾ä¸‡äººã®ãƒšãƒ«ãƒ¼å›½æ°‘ã®ç”Ÿæ´»ã®è³ªå‘ä¸Šã«å¤§ããªå½±éŸ¿ã‚’ä¸Žãˆã‚‹ãƒ¡ã‚¬ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆæ™‚ä»£ã®å¹•é–‹ã‘ã‚’å‘Šã’ã‚‹ã‚‚ã®ã§ã™ã€‚
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            åŒåºã®ãƒ«ã‚¤ã‚¹ãƒ»ãƒ‡ãƒ«ãƒ»ã‚«ãƒ«ãƒ”ã‚ªé•·å®˜ã¯ã€ã€Œãƒšãƒ«ãƒ¼ã¯æ–°ãŸãªæ®µéšŽã«å…¥ã£ã¦ã„ã¾ã™ã€‚å…¨å›½ã®ã‚¤ãƒ³ãƒ•ãƒ©ã¨å…¬å…±ã‚µãƒ¼ãƒ“ã‚¹ã‚’å¤‰é©ã™ã‚‹ 210 å„„ç±³ãƒ‰ãƒ«ä»¥ä¸Šã® 66 ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã‚’æ“ã—ã¦ãŠã‚Šã€22 åœ°åŸŸ 2,500 ä¸‡äººä»¥ä¸Šã®å›½æ°‘ã«å¤‰åŒ–ã‚’ã‚‚ãŸã‚‰ã™æ¡ˆä»¶ã®æº–å‚™ã‚’é€²ã‚ã¦ã„ã¾ã™ã€ã¨è©³è¿°ã—ã¾ã—ãŸã€‚
          </p>

          {/* Main Projects Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">ä¸»è¦ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆ</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ãƒãƒ¼ãƒˆãƒ•ã‚©ãƒªã‚ªã«ã¯ã€ãƒªãƒžãƒ»ãƒ¡ãƒˆãƒ­ 3 å·ç·šãŠã‚ˆã³ 4 å·ç·šã‚’å«ã‚€ 22 ã®è¼¸é€ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®ã»ã‹ã€è¡›ç”Ÿã€çŒæ¼‘ã€ã‚¨ãƒãƒ«ã‚®ãƒ¼ã€ä¿å¥ã€æ•™è‚²ã€é‰±æ¥­ã€è¦³å…‰ã‚¤ãƒ³ãƒ•ãƒ©ã€ä¸å‹•ç”£ã«é–¢ã™ã‚‹å–ã‚Šçµ„ã¿ãŒå«ã¾ã‚Œã¾ã™ã€‚
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">â€¢</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Loretoå·žã®æ–°æ¸¯æ¹¾ã‚¿ãƒ¼ãƒŸãƒŠãƒ«</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">â€¢</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">ç¬¬ 3 ã‚°ãƒ«ãƒ¼ãƒ—ã®ç©ºæ¸¯ç¾¤</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">â€¢</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Huascaranã®ãƒ†ãƒ¬ãƒ•ã‚§ãƒªãƒƒã‚¯</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">â€¢</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Arequipaãƒ»Moqueguaãƒ»Tacnaå·žã¸ã®å¤©ç„¶ã‚¬ã‚¹ç¶²ã®æ‹¡å¼µ</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">â€¢</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">PaitaãŠã‚ˆã³Talaraã®æ°´å‡¦ç†ãƒ»æµ·æ°´æ·¡æ°´åŒ–ãƒ—ãƒ©ãƒ³ãƒˆ</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">â€¢</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Lambayequeå·žã®é«˜æ©Ÿèƒ½ç—…é™¢</strong>
                </p>
              </div>
            </div>
          </div>

          {/* APP 5.0 Model */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">APP 5.0ï¼šãƒšãƒ«ãƒ¼åž‹ãƒ¢ãƒ‡ãƒ«</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ã“ã®æŽ¨é€²ã¯ã€ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®å…¨ã‚µã‚¤ã‚¯ãƒ«ã«ã‚ãŸã‚‹ PROINVERSIÃ“N ã®å½¹å‰²ã‚’å¼·åŒ–ã—ã€é«˜åº¦ãªãƒ‡ã‚¸ã‚¿ãƒ«åŒ–ã€é‡‘èžã‚¤ãƒŽãƒ™ãƒ¼ã‚·ãƒ§ãƒ³ã€æ°—å€™ãƒ»ç¤¾ä¼šçš„ãƒ¬ã‚¸ãƒªã‚¨ãƒ³ã‚¹ï¼ˆå›žå¾©åŠ›ï¼‰ã®åŸºæº–ã‚’çµ„ã¿è¾¼ã‚“ã æ–°ã—ã„ã€ŒAPP 5.0ã€ãƒ¢ãƒ‡ãƒ«ã«ã‚ˆã£ã¦å¯èƒ½ã¨ãªã‚Šã¾ã—ãŸã€‚
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic mb-4 japanese-text">
              ã€ŒAPP 5.0 ã«ã‚ˆã‚Šã€PROINVERSIÃ“N ã¯ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®å…¨å·¥ç¨‹ã«åŒè¡Œã—ã€ãƒ‡ã‚¸ã‚¿ãƒ«åŒ–ã€é‡‘èžé©æ–°ã€æ°—å€™å¤‰å‹•ã¸ã®å¯¾å¿œã‚’çµ„ã¿è¾¼ã¿ã¾ã™ã€‚ã“ã®ãƒ¢ãƒ‡ãƒ«ã«ã‚ˆã‚Šã€ãƒ¡ã‚¬ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã‚’åŠ é€Ÿã•ã›ã€æŠ•è³‡ãŒç¢ºå®Ÿã«ç¾å®Ÿã®ã‚‚ã®ã¨ãªã‚‹ã‚ˆã†åŠªã‚ã¾ã™ã€
            </blockquote>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              ãƒ‡ãƒ«ãƒ»ã‚«ãƒ«ãƒ”ã‚ªé•·å®˜ã¯ã€ã“ã®ãƒ¢ãƒ‡ãƒ«ãŒå¾“æ¥ã®ã‚¢ãƒ—ãƒ­ãƒ¼ãƒã‚’å¤‰é©ã—ã€ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®å®Ÿè¡Œå¯èƒ½æ€§ã¨æŒç¶šå¯èƒ½æ€§ã‚’é«˜ã‚ã‚‹ã¨å¼·èª¿ã—ã¾ã—ãŸã€‚
            </p>
          </div>

          {/* Impact Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">å½±éŸ¿ã¨æœŸå¾…</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ã“ã® 210 å„„ç±³ãƒ‰ãƒ«è¶…ã®æŠ•è³‡ã‚µã‚¤ã‚¯ãƒ«ã¯ã€ä»¥ä¸‹ã®ã‚ˆã†ãªé‡è¦ãªå½±éŸ¿ã‚’ã‚‚ãŸã‚‰ã™è¦‹è¾¼ã¿ã§ã™ï¼š
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">â€¢</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>22 åœ°åŸŸ</strong>ã«ã‚¤ãƒ³ãƒ•ãƒ©ã¨å…¬å…±ã‚µãƒ¼ãƒ“ã‚¹ã®å¤‰é©ã‚’ã‚‚ãŸã‚‰ã™
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">â€¢</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>2,500 ä¸‡äººä»¥ä¸Š</strong>ã®å›½æ°‘ã«æ©æµã‚’æä¾›
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">â€¢</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>66 ã®ãƒ¡ã‚¬ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆ</strong>ã§æ•°ç™¾ä¸‡äººã®ç”Ÿæ´»ã®è³ªã‚’å‘ä¸Š
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">â€¢</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>è¼¸é€ã€è¡›ç”Ÿã€ã‚¨ãƒãƒ«ã‚®ãƒ¼ã€ä¿å¥ã€æ•™è‚²ã€è¦³å…‰</strong>ãªã©å¤šå²ã«ã‚ãŸã‚‹åˆ†é‡Žã‚’ã‚«ãƒãƒ¼
                </p>
              </div>
            </div>
          </div>

          {/* Context Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">èƒŒæ™¯</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ãƒªãƒžå•†å·¥ä¼šè­°æ‰€ãŒä¸»å‚¬ã—ãŸã€Œãƒ“ã‚¸ãƒã‚¹ãƒ»ãƒªãƒ¼ãƒ€ãƒ¼ã‚·ãƒƒãƒ—ãƒ»ã‚µãƒ¼ã‚­ãƒƒãƒˆã€ã«ãŠã„ã¦ã€è¼¸é€ã€è¡›ç”Ÿã€ã‚¨ãƒãƒ«ã‚®ãƒ¼ã€ä¿å¥ã€æ•™è‚²ã€è¦³å…‰ã®å„åˆ†é‡Žã«ãŠã‘ã‚‹ 2026ï½ž2028 å¹´æœŸã®ãƒ¡ã‚¬ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆãŒç™ºè¡¨ã•ã‚Œã¾ã—ãŸã€‚
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              ã“ã®ã‚¤ãƒ‹ã‚·ã‚¢ãƒãƒ–ã¯ã€ãƒšãƒ«ãƒ¼ã®ç«¶äº‰åŠ›å¼·åŒ–ã¨æŒç¶šå¯èƒ½ãªçµŒæ¸ˆç™ºå±•ã‚’ç›®çš„ã¨ã—ã¦ãŠã‚Šã€æ°‘é–“æŠ•è³‡ã®æ´»æ€§åŒ–ã¨å®˜æ°‘é€£æºï¼ˆPPPï¼‰ã®å¼·åŒ–ã‚’å›³ã‚‹ã‚‚ã®ã§ã™ã€‚
            </p>
          </div>

          {/* References */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">å‚è€ƒæ–‡çŒ®</h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              PROINVERSION. (2025å¹´12æœˆ03æ—¥). PROINVERSIÃ“N activarÃ¡ ciclo de inversiones por mÃ¡s de USD 21 mil millones bajo el nuevo modelo APP 5.0.<br />
              å‚ç…§å…ˆ: <a href="https://www.investinperu.pe/proinversion-activara-ciclo-de-inversiones-por-mas-de-usd-21-mil-millones-bajo-el-nuevo-modelo-app-5-0/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PROINVERSION: https://www.investinperu.pe/proinversion-activara-ciclo-de-inversiones-por-mas-de-usd-21-mil-millones-bajo-el-nuevo-modelo-app-5-0/</a>
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

export default ProinversionApp5Page;

