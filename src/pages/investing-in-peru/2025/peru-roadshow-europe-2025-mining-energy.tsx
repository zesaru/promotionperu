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
      articlePublishedTime="2025-09-10T00:00:00+09:00"
      title="ペルー、鉱業・炭化水素・エネルギー分野で欧州大手投資家の関心を獲得: 第18回ロードショー・ヨーロッパ2025"
      description="ペルーは第18回ロードショー・ヨーロッパ2025を通じて、鉱業、炭化水素、エネルギー分野における主要プロジェクトへの欧州投資家の関心を集めました。"
    >
      <Banner
        alt={"ロードショー・ヨーロッパ2025に関する投資ニュースバナー"}
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
            å…¨å›½é‰±æ¥­ãƒ»çŸ³æ²¹ãƒ»ã‚¨ãƒãƒ«ã‚®ãƒ¼å”ä¼šï¼ˆSNMPEï¼‰
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            ãƒšãƒ«ãƒ¼ã€é‰±æ¥­ãƒ»ç‚­åŒ–æ°´ç´ ãƒ»ã‚¨ãƒãƒ«ã‚®ãƒ¼åˆ†é‡Žã§æ¬§å·žå¤§æ‰‹æŠ•è³‡å®¶ã®é–¢å¿ƒã‚’ç²å¾— â€• ç¬¬18å›žãƒ­ãƒ¼ãƒ‰ã‚·ãƒ§ãƒ¼ãƒ»ãƒ¨ãƒ¼ãƒ­ãƒƒãƒ‘2025
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            ãƒ—ãƒ¬ã‚¹ãƒªãƒªãƒ¼ã‚¹
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025å¹´9æœˆ10æ—¥ï¼ˆæ°´ï¼‰ç™ºè¡¨
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            ã‚¨ãƒãƒ«ã‚®ãƒ¼é‰±å±±å¤§è‡£ãƒ›ãƒ«ãƒ˜ãƒ»ãƒ¢ãƒ³ãƒ†ãƒ­æ°ã€<strong>ãƒ‰ã‚¤ãƒã‚§éŠ€è¡Œã€ã‚´ãƒ¼ãƒ«ãƒ‰ãƒžãƒ³ãƒ»ã‚µãƒƒã‚¯ã‚¹ã€EIGãªã©è‘—åãªå›½éš›çš„ãƒ•ã‚¡ãƒ³ãƒ‰ãƒ»éŠ€è¡Œã¨10ä»¶ã®ä¼šè«‡ã‚’å®Ÿæ–½</strong>
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ãƒšãƒ«ãƒ¼ã¯<strong>é‰±æ¥­ãƒ»ã‚¨ãƒãƒ«ã‚®ãƒ¼åˆ†é‡Žã«ãŠã‘ã‚‹å¤–å›½æŠ•è³‡ã®é­…åŠ›çš„ãªç›®çš„åœ°</strong>ã¨ã—ã¦ã®åœ°ä½ã‚’å¼•ãç¶šãç¢ºç«‹ã—ã¦ã„ã¾ã™ã€‚ã‚¨ãƒãƒ«ã‚®ãƒ¼é‰±å±±çœã®ãƒ›ãƒ«ãƒ˜ãƒ»ãƒ¢ãƒ³ãƒ†ãƒ­ãƒ»ã‚³ãƒ«ãƒãƒ›å¤§è‡£ã¯ã€ãƒ­ãƒ³ãƒ‰ãƒ³ã§é–‹å‚¬ã•ã‚ŒãŸ<strong>ç¬¬18å›žãƒ­ãƒ¼ãƒ‰ã‚·ãƒ§ãƒ¼ãƒ»ãƒ¨ãƒ¼ãƒ­ãƒƒãƒ‘2025åˆæ—¥</strong>ã®å‚åŠ å¾Œã«ã“ã®ã‚ˆã†ã«å¼·èª¿ã—ã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ãƒ¢ãƒ³ãƒ†ãƒ­å¤§è‡£ã¯ã€<strong>é‰±æ¥­ã€ç‚­åŒ–æ°´ç´ ã€å†ç”Ÿå¯èƒ½ã‚¨ãƒãƒ«ã‚®ãƒ¼ã€ç™ºé›»ã«é–¢é€£ã™ã‚‹ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã«å¼·ã„é–¢å¿ƒã‚’ç¤ºã—ãŸä¸»è¦ãªæŠ•è³‡ã‚°ãƒ«ãƒ¼ãƒ—ã‚„å›½éš›éŠ€è¡Œã¨10ä»¶ã®ä¼šè«‡</strong>ã‚’è¡Œã£ãŸã¨å ±å‘Šã—ã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ãã®ä¸­ã§ã€å¤§è‡£ã¯<strong>ãƒ‰ã‚¤ãƒã‚§éŠ€è¡ŒãŠã‚ˆã³ãƒ–ãƒ©ã‚¸ãƒ«ã®æŠ•è³‡éŠ€è¡ŒBTGãƒ‘ã‚¯ãƒãƒ¥ã‚¢ãƒ«</strong>ã¨ã®ä¼šè«‡ã‚’ç‰¹ã«å¼·èª¿ã—ã€ä¸¡è€…ãŒ<strong>ãƒšãƒ«ãƒ¼ã®æˆ¦ç•¥çš„åˆ†é‡Žã«ãŠã‘ã‚‹å‚å…¥æ‹¡å¤§ã¸ã®æ„æ¬²</strong>ã‚’è¡¨æ˜Žã—ãŸã“ã¨ã‚’æ˜Žã‚‰ã‹ã«ã—ã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã•ã‚‰ã«ã€<strong>ã‚´ãƒ¼ãƒ«ãƒ‰ãƒžãƒ³ãƒ»ã‚µãƒƒã‚¯ã‚¹</strong>ã¨ã®ä¼šè«‡ã§ã¯ã€<strong>çŸ³æ²¹ã®æŽ¢æŸ»ãƒ»ç”Ÿç”£ã€ãƒªãƒã‚¦ãƒ æŠ•è³‡ã€ãã—ã¦ãƒšãƒ«ãƒ¼ã«ãŠã‘ã‚‹å†¶é‡‘ç”£æ¥­ã®å¯èƒ½æ€§</strong>ã«ã¤ã„ã¦è­°è«–ãŒè¡Œã‚ã‚Œã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã¾ãŸã€ãƒ¢ãƒ³ãƒ†ãƒ­å¤§è‡£ã¯<strong>ã‚¨ãƒãƒ«ã‚®ãƒ¼åˆ†é‡Žã®ä¸»è¦ãƒ•ã‚¡ãƒ³ãƒ‰ã‚„ä¼æ¥­</strong>ã¨ã®ä¼šè«‡ã‚‚å®Ÿæ–½ã—ã€ä»£è¡¨è€…ã‚‰ã¯<strong>ãƒšãƒ«ãƒ¼ã§ã®æŠ•è³‡ç¶™ç¶šã‚„ã€æ–°ãŸãªå¤©ç„¶ã‚¬ã‚¹ã€å†ç”Ÿå¯èƒ½ã‚¨ãƒãƒ«ã‚®ãƒ¼ã€ç™ºé›»ã®æ©Ÿä¼š</strong>ã‚’æŽ¢ã‚‹æ„å‘ã‚’ç¤ºã—ã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            å¤§è‡£ã¯ã€ã€Œä»Šå›žã®ä¼šè«‡ã¯ã€<strong>ãƒšãƒ«ãƒ¼ãŒä¿¡é ¼æ€§ãŒé«˜ãç«¶äº‰åŠ›ã®ã‚ã‚‹æŠ•è³‡å…ˆã§ã‚ã‚‹ã“ã¨</strong>ã‚’æ”¹ã‚ã¦è£ä»˜ã‘ã‚‹ã‚‚ã®ã§ã™ã€‚<strong>æŠ•è³‡å®¶ã®æ–¹ã€…ã¯ãƒšãƒ«ãƒ¼ã§ã®å­˜åœ¨ã‚’ç¶­æŒã—ã€ã•ã‚‰ã«æ‹¡å¤§ã™ã‚‹å§¿å‹¢</strong>ã‚’ç¤ºã—ã¦ã„ã¾ã™ã€ã¨è¿°ã¹ã¾ã—ãŸã€‚
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã•ã‚‰ã«ãƒ¢ãƒ³ãƒ†ãƒ­å¤§è‡£ã¯æ¬¡ã®ã‚ˆã†ã«å¼·èª¿ã—ã¾ã—ãŸã€‚
          </p>

          <blockquote className="mb-4 pl-4 border-l-4 border-blue-500 text-gray-700 italic">
            ã€Œåˆæ—¥ã‹ã‚‰å¤§ããªæœŸå¾…ã‚’æŒã¦ã‚‹æˆæžœãŒã‚ã‚Šã¾ã—ãŸã€‚<strong>è³‡é‡‘åŠ›ã¨æˆç†Ÿã—ãŸãƒ“ã‚¸ãƒã‚¹ã‚’æœ‰ã—ã€ãƒšãƒ«ãƒ¼ã‚’ç†ŸçŸ¥ã—ã¦ã„ã‚‹é–¢ä¿‚è€…ã¨ã®è³ªã®é«˜ã„ä¼šè«‡</strong>ã‚’å®Ÿç¾ã§ãã¾ã—ãŸã€‚ä»Šå¾Œã¯ã“ã‚Œã‚‰ã®æŠ•è³‡ã‚’ã•ã‚‰ã«æŽ¨é€²ã—ã¦ã„ãã“ã¨ãŒæˆ‘ã€…ã®ä½¿å‘½ã§ã™ã€‚ã€
          </blockquote>

          <p className="mb-6 text-gray-800 leading-relaxed">
            <strong>ç¬¬18å›žãƒ­ãƒ¼ãƒ‰ã‚·ãƒ§ãƒ¼ãƒ»ãƒ¨ãƒ¼ãƒ­ãƒƒãƒ‘2025</strong>ã¯ã€<strong>9æœˆ8æ—¥ã¨9æ—¥ã«ãƒ­ãƒ³ãƒ‰ãƒ³ã§é–‹å‚¬</strong>ã•ã‚Œã€<strong>ãƒšãƒ«ãƒ¼ã‚’å¤–å›½æŠ•è³‡ã«ã¨ã£ã¦ä¿¡é ¼ã§ãã€ç«¶äº‰åŠ›ãŒã‚ã‚Šã€å®‰å…¨ãªæŠ•è³‡å…ˆã¨ã—ã¦ä½ç½®ã¥ã‘ã‚‹</strong>ã“ã¨ã‚’ç›®çš„ã«å®Ÿæ–½ã•ã‚Œã¾ã—ãŸã€‚
          </p>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2 japanese-text">
              å…¨å›½é‰±æ¥­ãƒ»çŸ³æ²¹ãƒ»ã‚¨ãƒãƒ«ã‚®ãƒ¼å”ä¼šï¼ˆSNMPEï¼‰
            </p>
            <p className="text-xs text-gray-500">
              [Sociedad Nacional de Mineria, Petroleo y Energia, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">å‚è€ƒæ–‡çŒ®</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              Sociedad Nacional de Mineria, Petroleo y Energia. (2025å¹´09æœˆ10æ—¥). desde adentro revista de la Sociedad Nacional de MinerÃ­a, PetrÃ³leo y EnergÃ­a.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              å‚ç…§å…ˆ: PerÃº atrae interÃ©s de grandes inversionistas en minerÃ­a, hidrocarburos y energÃ­a en el XVIII Road Show Europa 2025:<br/>
              <Link href="https://www.desdeadentro.pe/2025/09/peru-atrae-interes-de-grandes-inversionistas-en-mineria-hidrocarburos-y-energia-en-el-xviii-road-show-europa-2025/" className="text-blue-600 hover:underline text-xs break-all">
                https://www.desdeadentro.pe/2025/09/peru-atrae-interes-de-grandes-inversionistas-en-mineria-hidrocarburos-y-energia-en-el-xviii-road-show-europa-2025/
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
