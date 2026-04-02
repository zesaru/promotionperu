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
      articlePublishedTime="2025-10-17T00:00:00+09:00"
      title="PROINVERSIÓN、ピウラ・ランバイエケ・フニン・アヤクチョで4件の送電プロジェクト入札を開始"
      description="PROINVERSIÓNは、総額2億3,100万米ドル規模の4件の送電プロジェクトの国際入札を開始。ピウラ、ランバイエケ、フニン、アヤクチョの約160万人に安定した電力供給の改善をもたらす見込み。"
    >
      <Banner
        alt={"4件の送電プロジェクト入札開始を伝えるPROINVERSIÓNのバナー"}
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
            民間投資促進庁（PROINVERSIÓN）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            PROINVERSIÓN、ピウラ、ランバイエケ、フニンとアヤクチョで4件の送電プロジェクトの入札を開始
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025年10月17日
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            <strong>ãƒªãƒžã€2025å¹´10æœˆ17æ—¥</strong> â€“ çµŒæ¸ˆè²¡å‹™çœå‚˜ä¸‹ã®æ°‘é–“æŠ•è³‡ä¿ƒé€²åºï¼ˆPROINVERSIÃ“Nï¼‰ã¯ã€æœ¬æ—¥ã€<strong>4ä»¶ã®é›»åŠ›ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã‚’ã‚³ãƒ³ã‚»ãƒƒã‚·ãƒ§ãƒ³æ–¹å¼ã§å®Ÿæ–½ã™ã‚‹ãŸã‚ã®å›½éš›ç·åˆãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆå…¬é–‹å…¥æœ­</strong>ã‚’ç™ºè¡¨ã—ã¾ã—ãŸã€‚ã“ã‚Œã‚‰ã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã¯ã€Piuraã€Lambayequeã€JunÃ­nã¨Ayacuchoã®<strong>160ä¸‡äººã«åˆ©ç›Šã‚’ã‚‚ãŸã‚‰ã—ã¾ã™</strong>ã€‚
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            ã“ã‚Œã‚‰ã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã¯ã€<strong>ç·é¡2å„„3,100ä¸‡ç±³ãƒ‰ãƒ«ã®æŠ•è³‡</strong>ã‚’è¦ã™ã‚‹äºˆå®šã§ã€2025ï½ž2034å¹´é€é›»è¨ˆç”»ã®ã‚°ãƒ«ãƒ¼ãƒ—1ã«å±žã—ã¾ã™ã€‚
          </p>

          <div className="bg-blue-50 rounded-lg p-6 my-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-700">2.31å„„</p>
                <p className="text-sm text-gray-700 mt-2 japanese-text">ç±³ãƒ‰ãƒ«</p>
                <p className="text-xs text-gray-600">ç·æŠ•è³‡é¡</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-700">160ä¸‡</p>
                <p className="text-sm text-gray-700 mt-2 japanese-text">äºº</p>
                <p className="text-xs text-gray-600">å—ç›Šè€…æ•°</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-700">4å·ž</p>
                <p className="text-sm text-gray-700 mt-2 japanese-text">åœ°åŸŸ</p>
                <p className="text-xs text-gray-600">å¯¾è±¡ã‚¨ãƒªã‚¢</p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-blue-800 mb-4 mt-8">
            ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆè©³ç´°
          </h3>

          {/* Project 1 */}
          <div className="bg-white border-l-4 border-purple-500 shadow-md rounded-r-lg p-5 mb-6">
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <span className="text-purple-700 font-bold">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                Miguel Grau â€“ PariÃ±as 500 kVé€é›»ç·šãŠã‚ˆã³PariÃ±as 500/220 kVå¤‰é›»æ‰€ã®æ‹¡å¼µãƒ»é–¢é€£æ–½è¨­
              </h4>
            </div>
            <div className="ml-11">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase">æ‰€åœ¨åœ°</p>
                  <p className="text-sm font-semibold text-gray-800">Piuraå·ž</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">æŠ•è³‡é¡</p>
                  <p className="text-sm font-semibold text-gray-800">ç´„8,100ä¸‡ç±³ãƒ‰ãƒ«</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">å—ç›Šè€…</p>
                  <p className="text-sm font-semibold text-gray-800">130ä¸‡äººä»¥ä¸Š</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed japanese-text">
                Talaraã€PariÃ±asã€Tumbesåœ°åŸŸã®ä½æ°‘ã«å®‰å®šã—ãŸé›»åŠ›ä¾›çµ¦ã‚’ã‚‚ãŸã‚‰ã—ã¾ã™ã€‚
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white border-l-4 border-green-500 shadow-md rounded-r-lg p-5 mb-6">
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <span className="text-green-700 font-bold">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                Felam â€“ Tierras Nuevas â€“ Salitral 220 kVé€é›»ç·šã€æ‹¡å¼µãŠã‚ˆã³é–¢é€£å¤‰é›»æ‰€
              </h4>
            </div>
            <div className="ml-11">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase">æ‰€åœ¨åœ°</p>
                  <p className="text-sm font-semibold text-gray-800">Lambayequeå·ž</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">æŠ•è³‡é¡</p>
                  <p className="text-sm font-semibold text-gray-800">ç´„7,000ä¸‡ç±³ãƒ‰ãƒ«</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">å—ç›Šè€…</p>
                  <p className="text-sm font-semibold text-gray-800">12ä¸‡äºº</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed japanese-text">
                Tierras Nuevas â€“ Pampa PaÃ±alÃ¡ ãŠã‚ˆã³Motupe â€“ Olmosåœ°åŸŸã®é›»åŠ›ä¾›çµ¦ã‚’æ”¹å–„ã—ã¾ã™ã€‚
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white border-l-4 border-orange-500 shadow-md rounded-r-lg p-5 mb-6">
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <span className="text-orange-700 font-bold">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                æ–°PaliÃ¡n 220/60 kVå¤‰é›»æ‰€ãŠã‚ˆã³220 kVãƒ»60 kVé€é›»ç·š
              </h4>
            </div>
            <div className="ml-11">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase">æ‰€åœ¨åœ°</p>
                  <p className="text-sm font-semibold text-gray-800">JunÃ­nå·ž</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">æŠ•è³‡é¡</p>
                  <p className="text-sm font-semibold text-gray-800">ç´„7,300ä¸‡ç±³ãƒ‰ãƒ«</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">å—ç›Šè€…</p>
                  <p className="text-sm font-semibold text-gray-800">ç´„13ä¸‡äºº</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white border-l-4 border-red-500 shadow-md rounded-r-lg p-5 mb-6">
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 bg-red-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <span className="text-red-700 font-bold">4</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                Muyurina â€“ Mollepata 220 kVé€é›»ç·šã€æ‹¡å¼µãŠã‚ˆã³é–¢é€£å¤‰é›»æ‰€
              </h4>
            </div>
            <div className="ml-11">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase">æ‰€åœ¨åœ°</p>
                  <p className="text-sm font-semibold text-gray-800">Ayacuchoå·ž</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">æŠ•è³‡é¡</p>
                  <p className="text-sm font-semibold text-gray-800">ç´„800ä¸‡ç±³ãƒ‰ãƒ«</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">å—ç›Šè€…</p>
                  <p className="text-sm font-semibold text-gray-800">ç´„3ä¸‡äºº</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-blue-800 mb-3 mt-8">
            å®Ÿæ–½æ–¹å¼ã¨æœŸé–“
          </h3>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ã“ã‚Œã‚‰ã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã¯ã€<strong>ã‚¨ãƒãƒ«ã‚®ãƒ¼é‰±æ¥­çœï¼ˆMINEMï¼‰ã®å§”è¨—ã«ã‚ˆã‚Šã€PROINVERSIÃ“NãŒæŽ¨é€²ã™ã‚‹å®˜æ°‘é€£æºï¼ˆAPPï¼‰æ–¹å¼</strong>ã§å®Ÿæ–½ã•ã‚Œã¾ã™ã€‚ã‚³ãƒ³ã‚»ãƒƒã‚·ãƒ§ãƒ³ã¯ã€å»ºè¨­æœŸé–“ã«åŠ ãˆã€<strong>30å¹´é–“ã®é‹å–¶ãƒ»ç¶­æŒç®¡ç†ã‚’å«ã‚€è‡ªå·±è³‡é‡‘ã«ã‚ˆã‚‹å›½å®¶ã‚¤ãƒ‹ã‚·ã‚¢ãƒ†ã‚£ãƒ–æ–¹å¼</strong>ã§ä»˜ä¸Žã•ã‚Œã¾ã™ã€‚
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-5 my-6">
            <h4 className="text-md font-semibold text-blue-900 mb-3">å…¥æœ­åŸºæº–</h4>
            <p className="text-sm text-gray-800 leading-relaxed">
              ã‚°ãƒ«ãƒ¼ãƒ—1ã®4ä»¶ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã®è½æœ­è€…ã¯ã€<strong>ç·ã‚µãƒ¼ãƒ“ã‚¹è²»ç”¨ãŒæœ€ã‚‚ä½Žã„å…¥æœ­è€…</strong>ã¨ãªã‚Šã€æœ€çµ‚çš„ã«<strong>ãƒ¦ãƒ¼ã‚¶ãƒ¼ã¸ã®é›»æ°—æ–™é‡‘ãŒä½Žæ¸›</strong>ã•ã‚Œã¾ã™ã€‚
            </p>
          </div>

          <h3 className="text-lg font-semibold text-blue-800 mb-3 mt-8">
            ä»Šå¾Œã®è¨ˆç”»
          </h3>

          <p className="mb-4 text-gray-800 leading-relaxed">
            2025å¹´æ®‹ã‚ŠæœŸé–“ã«ã‚°ãƒ«ãƒ¼ãƒ—2ï¼ˆ4ä»¶ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆï¼‰ã‚‚å…¥æœ­äºˆå®šã§ã‚ã‚Šã€2026å¹´ã«ã¯ã‚°ãƒ«ãƒ¼ãƒ—3ãƒ»4ï¼ˆå„5ä»¶ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆï¼‰ãŒé †æ¬¡å…¥æœ­ã•ã‚Œã¾ã™ã€‚
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">
                    ã‚°ãƒ«ãƒ¼ãƒ—
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">
                    ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆæ•°
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">
                    å…¥æœ­æ™‚æœŸ
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">ã‚°ãƒ«ãƒ¼ãƒ— 1</td>
                  <td className="px-6 py-4 text-sm text-gray-800">4ä»¶</td>
                  <td className="px-6 py-4 text-sm text-gray-800">2025å¹´10æœˆï¼ˆå®Ÿæ–½æ¸ˆã¿ï¼‰</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">ã‚°ãƒ«ãƒ¼ãƒ— 2</td>
                  <td className="px-6 py-4 text-sm text-gray-800">4ä»¶</td>
                  <td className="px-6 py-4 text-sm text-gray-800">2025å¹´æ®‹ã‚ŠæœŸé–“</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">ã‚°ãƒ«ãƒ¼ãƒ— 3</td>
                  <td className="px-6 py-4 text-sm text-gray-800">5ä»¶</td>
                  <td className="px-6 py-4 text-sm text-gray-800">2026å¹´</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">ã‚°ãƒ«ãƒ¼ãƒ— 4</td>
                  <td className="px-6 py-4 text-sm text-gray-800">5ä»¶</td>
                  <td className="px-6 py-4 text-sm text-gray-800">2026å¹´</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6 text-gray-800 leading-relaxed">
            ã“ã‚Œã‚‰å…¨ã¦ã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆç¾¤ã¯ã€<strong>å›½å†…é€é›»ã‚¤ãƒ³ãƒ•ãƒ©ã®å¼·åŒ–ã‚’ç›®çš„ã¨ã—ã€ãƒšãƒ«ãƒ¼åŒ—éƒ¨ãŠã‚ˆã³ä¸­éƒ¨ã®å„éƒ½å¸‚ã§ã€ã‚ˆã‚Šå®‰å®šçš„ã‹ã¤åŠ¹çŽ‡çš„ãªé›»åŠ›ä¾›çµ¦ã‚’ç¢ºä¿ã™ã‚‹</strong>ã‚‚ã®ã§ã™ã€‚
          </p>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2 japanese-text">
              æ°‘é–“æŠ•è³‡ä¿ƒé€²åºï¼ˆPROINVERSIÃ“Nï¼‰
            </p>
            <p className="text-sm text-gray-600 mb-4">
              åºƒå ±å®¤
            </p>
            <p className="text-xs text-gray-500">
              [PROINVERSIÃ“N, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">å‚è€ƒæ–‡çŒ®</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              PROINVERSIÃ“N. (2025å¹´10æœˆ17æ—¥). PROINVERSIÃ“N convoca a concurso cuatro proyectos de transmisiÃ³n elÃ©ctrica en Piura, Lambayeque, JunÃ­n y Ayacucho.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              å‚ç…§å…ˆ: PROINVERSIÃ“N:<br/>
              <Link href="https://www.investinperu.pe/proinversion-convoca-a-concurso-cuatro-proyectos-de-transmision-electrica-en-piura-lambayeque-junin-y-ayacucho/" className="text-blue-600 hover:underline text-xs break-all">
                https://www.investinperu.pe/proinversion-convoca-a-concurso-cuatro-proyectos-de-transmision-electrica-en-piura-lambayeque-junin-y-ayacucho/
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

