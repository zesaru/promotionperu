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
              ペルーは新たな段階に入り、全国のインフラと公共サービスを変革するメガプロジェクト時代の幕開けを迎えています。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            リマ、2025年12月3日。民間投資促進庁（PROINVERSIÓN）は、2026年から2028年にかけて実施を見込む、210億米ドル超・66件のプロジェクトポートフォリオを提示しました。これは、ペルーの競争力強化と、数百万人規模の国民生活の質向上に直結するメガプロジェクト時代の本格始動を意味します。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            同庁のルイス・デル・カルピオ長官は、「ペルーは新たな段階に入っています。全国のインフラと公共サービスを変革する210億米ドル超・66件の案件を準備しており、22地域、2,500万人超の国民に変化をもたらします」と述べました。
          </p>

          {/* Main Projects Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">主要プロジェクト</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              このポートフォリオには、リマ・メトロ3号線および4号線を含む22件の輸送案件のほか、衛生、灌漑、エネルギー、保健、教育、鉱業、観光インフラ、不動産分野の案件が含まれます。
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
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">APP 5.0: ペルー型モデル</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              この推進は、プロジェクトの全サイクルにわたるPROINVERSIÓNの役割を強化し、高度なデジタル化、金融イノベーション、気候・社会レジリエンスの基準を組み込んだ新しい「APP 5.0」モデルによって可能になりました。
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic mb-4 japanese-text">
              「APP 5.0により、PROINVERSIÓNはプロジェクトの全工程に伴走し、デジタル化、金融革新、気候変動への対応を組み込みます。このモデルによって、メガプロジェクトを加速させ、投資を確実に実現へ結びつけます」
            </blockquote>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              デル・カルピオ長官は、このモデルが従来のアプローチを刷新し、プロジェクトの実行可能性と持続可能性を高めるものだと強調しました。
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

