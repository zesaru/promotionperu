import Link from "next/link";
import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const MinemMiningRevenuePage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2025-11-18T00:00:00+09:00"
      title="MINEM：2025年9月までに鉱業活動で91億8,300万ソル以上を創出"
      description="ペルーのエネルギー鉱山省（MINEM）は、2025年9月までの鉱業活動が91億8,300万ソル超の経済効果を生み出したと発表しました。"
    >
      <Banner
        alt={"MINEMの鉱業収入に関するニュースバナー"}
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
            ã‚¨ãƒãƒ«ã‚®ãƒ¼é‰±å±±çœ
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            MINEMï¼š2025å¹´9æœˆã¾ã§ã«é‰±æ¥­æ´»å‹•ã§91å„„8,300ä¸‡ã‚½ãƒ«ä»¥ä¸Šã‚’å‰µå‡º
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-2">
            ãƒ—ãƒ¬ã‚¹ãƒªãƒªãƒ¼ã‚¹
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025å¹´11æœˆ18æ—¥
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              å…¨å›½å„åœ°åŸŸã¸ã®è³‡é‡‘ç§»è»¢ã¯ã€ä½æ°‘ã®ç”Ÿæ´»ã®è³ªå‘ä¸Šã‚’ç›®çš„ã¨ã—ãŸæŠ•è³‡ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã‚’æ”¯æ´ã™ã‚‹ãŸã‚ã«å®Ÿæ–½ã•ã‚Œã¦ã„ã¾ã™ã€‚
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            ã‚¨ãƒãƒ«ã‚®ãƒ¼é‰±å±±çœï¼ˆMINEMï¼‰ãŒç™ºè¡¨ã—ãŸæœ€æ–°ã®ã€Žé‰±æ¥­çµ±è¨ˆé€Ÿå ±ï¼ˆBEMï¼‰ã€ã«ã‚ˆã‚‹ã¨ã€2025å¹´9æœˆæœ«æ™‚ç‚¹ã§ã€é‰±æ¥­æ´»å‹•ã«ã‚ˆã‚‹è³‡é‡‘ç§»è»¢é¡ã¯91å„„8,300ä¸‡ã‚½ãƒ«ã«é”ã—ã¾ã—ãŸã€‚ã“ã‚Œã¯ã€é‰±æ¥­ç¨Žï¼ˆã‚«ãƒŽãƒ³ï¼‰ã€é‰±æ¥­ãƒ­ã‚¤ãƒ¤ãƒ«ãƒ†ã‚£ã€é‰±æ¥­æ¨©æ›´æ–°æ–™ãŠã‚ˆã³ç½°é‡‘ã«ã‚ˆã‚‹ã‚‚ã®ã§ã™ã€‚
          </p>

          {/* Revenue Breakdown */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">è³‡é‡‘ç§»è»¢ã®å†…è¨³</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">é‰±æ¥­ç¨Žï¼ˆã‚«ãƒŽãƒ³ï¼‰</h4>
                  <p className="text-sm md:text-base text-blue-600 font-medium mb-2 japanese-text">6,992å„„ã‚½ãƒ«ä»¥ä¸Š</p>
                  <p className="text-sm text-gray-700 leading-relaxed japanese-text">
                    è³‡é‡‘ç§»è»¢ã®æœ€å¤§ã®å‰²åˆã‚’å ã‚ã€é‰±æ¥­ä¼æ¥­ãŒæ”¯æ‰•ã†æ‰€å¾—ç¨Žã®50ï¼…ãŒåŽŸè³‡ã¨ãªã£ã¦ã„ã¾ã™ã€‚ã“ã®é‡‘é¡ã¯ã€åˆ¶åº¦å²ä¸Š2ç•ªç›®ã«å¤§ãã„æ°´æº–ã§ã™ã€‚
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">é‰±æ¥­ãƒ­ã‚¤ãƒ¤ãƒ«ãƒ†ã‚£</h4>
                  <p className="text-sm md:text-base text-blue-600 font-medium mb-2 japanese-text">19å„„3,300ä¸‡ã‚½ãƒ«ä»¥ä¸Š</p>
                  <div className="text-sm text-gray-700 leading-relaxed japanese-text">
                    <p className="mb-2">2025å¹´1æœˆã‹ã‚‰9æœˆã¾ã§ã«ç§»è»¢ã•ã‚ŒãŸå†…è¨³ï¼š</p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">â€¢</span>
                        <span><strong>æ³•å®šãƒ­ã‚¤ãƒ¤ãƒ«ãƒ†ã‚£ï¼š</strong>16å„„2,300ä¸‡ã‚½ãƒ«</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">â€¢</span>
                        <span><strong>å¥‘ç´„ãƒ­ã‚¤ãƒ¤ãƒ«ãƒ†ã‚£ï¼š</strong>3å„„900ä¸‡ã‚½ãƒ«</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">é‰±æ¥­æ¨©æ›´æ–°æ–™ãŠã‚ˆã³ç½°é‡‘</h4>
                  <p className="text-sm md:text-base text-blue-600 font-medium mb-2 japanese-text">2å„„5,600ä¸‡ã‚½ãƒ«ä»¥ä¸Š</p>
                  <p className="text-sm text-gray-700 leading-relaxed japanese-text">
                    2025å¹´8æœˆæ™‚ç‚¹ã§ç§»è»¢ã•ã‚Œã¾ã—ãŸã€‚é‰±æ¥­æ¨©æ›´æ–°æ–™ã¯ä»˜ä¸Žã•ã‚ŒãŸé‰±åŒºæ•°ã«åŸºã¥ãã€ç½°é‡‘ã¯é‰±åŒºãŒç”Ÿç”£ä¸­ã§ã‚ã‚‹ã‹ã€ã¾ãŸã¯æŠ•è³‡å®Ÿæ–½çŠ¶æ…‹ã«ã‚ã‚‹ã‹ã«ã‚ˆã£ã¦ç®—å‡ºã•ã‚Œã¾ã™ã€‚
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Purpose Statement */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">è³‡é‡‘ç§»è»¢ã®ç›®çš„</h3>
            <p className="text-sm text-gray-700 leading-relaxed japanese-text">
              MINEMã¯ã€å„åœ°åŸŸã¸ç§»è»¢ã•ã‚ŒãŸè³‡é‡‘ã¯ã€å›½ãƒ»åœ°åŸŸãƒ»åœ°æ–¹è‡ªæ²»ä½“ã«ã‚ˆã‚‹ç®¡ç†ã®ä¸‹ã€ä½æ°‘ã®ç”Ÿæ´»ã®è³ªå‘ä¸Šã«ã¤ãªãŒã‚‹æŠ•è³‡äº‹æ¥­ã‚„ç¤¾ä¼šã‚¤ãƒ³ãƒ•ãƒ©æ•´å‚™ã«å½¹ç«‹ã¦ã‚‰ã‚Œã¦ã„ã‚‹ã¨å¼·èª¿ã—ã¾ã—ãŸã€‚
            </p>
          </div>

          {/* Regional Distribution */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">åœ°åŸŸåˆ¥è³‡é‡‘ç§»è»¢é¡ï¼ˆä¸Šä½4åœ°åŸŸï¼‰</h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                <span className="text-sm font-semibold text-gray-900">Ancash</span>
                <span className="text-sm font-bold text-blue-600">167å„„5,000ä¸‡ã‚½ãƒ«ï¼ˆ18.2ï¼…ï¼‰</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                <span className="text-sm font-semibold text-gray-900">Arequipa</span>
                <span className="text-sm font-bold text-blue-600">122å„„2,000ä¸‡ã‚½ãƒ«ï¼ˆ13.3ï¼…ï¼‰</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                <span className="text-sm font-semibold text-gray-900">Moquegua</span>
                <span className="text-sm font-bold text-blue-600">92å„„4,000ä¸‡ã‚½ãƒ«ï¼ˆ10.1ï¼…ï¼‰</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                <span className="text-sm font-semibold text-gray-900">Tacna</span>
                <span className="text-sm font-bold text-blue-600">90å„„9,000ä¸‡ã‚½ãƒ«ï¼ˆ9.9ï¼…ï¼‰</span>
              </div>
            </div>
          </div>

          {/* MINEM Statement */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">MINEMã®æ–¹é‡</h3>
            <p className="text-sm text-gray-700 leading-relaxed japanese-text">
              MINEMã¯ã€é‰±æ¥­ãŒå¼•ãç¶šãå›½ã®çµŒæ¸ˆæˆé•·ã‚’ç‰½å¼•ã™ã‚‹ä¸»è¦ç”£æ¥­ã§ã‚ã‚‹ã“ã¨ã‚’å†ç¢ºèªã—ã€åœ°åŸŸæ”¿åºœã‚„å¸‚æ°‘ã¨ã®é€£æºã®ã‚‚ã¨ã€ç¾ä»£çš„ã§è²¬ä»»ã‚ã‚‹é‰±æ¥­æ´»å‹•ã‚’æŽ¨é€²ã™ã‚‹ã“ã¨ã§ã€ã™ã¹ã¦ã®å›½æ°‘ã«ã¨ã£ã¦æŒç¶šå¯èƒ½ã§å‡è¡¡ã®å–ã‚ŒãŸç™ºå±•ã®å®Ÿç¾ã‚’ç›®æŒ‡ã™ã¨è¿°ã¹ã¦ã„ã¾ã™ã€‚
            </p>
          </div>

          {/* References */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">å‚è€ƒæ–‡çŒ®</h3>
            <p className="text-sm text-gray-700 japanese-text">
              Ministerio de EnergÃ­a y Minas. (2025å¹´11æœˆ18æ—¥). MINEM: MÃ¡s de S/ 9,183 millones generÃ³ la actividad minera hasta setiembre de 2025.<br />
              å‚ç…§å…ˆ: <a href="https://www.gob.pe/institucion/minem/noticias/1292011-minem-mas-de-s-9-183-millones-genero-la-actividad-minera-hasta-setiembre-de-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Plataforma del Estado Peruano</a>
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

export default MinemMiningRevenuePage;
