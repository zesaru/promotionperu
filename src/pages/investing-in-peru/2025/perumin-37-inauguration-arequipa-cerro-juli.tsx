import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";
import Banner from "src/components/Banner";

import Layout from "@/components/Layout";

const Perumin37Page = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} articlePublishedTime="2025-09-22T00:00:00+09:00" title="PERUMIN 37 - ãƒšãƒ«ãƒ¼æœ€å¤§ã®é‰±æ¥­ã‚¤ãƒ™ãƒ³ãƒˆé–‹å¹•">
      <Banner
        alt={"PERUMIN 37 Mining Event Arequipa"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl bg-white japanese-text">
        {/* Header */}
        <div className="text-right mb-6 font-japanese">
          <p className="text-sm text-gray-700 japanese-text">åœ¨æ—¥ãƒšãƒ«ãƒ¼å¤§ä½¿é¤¨</p>
          <p className="text-sm text-gray-700 japanese-text">éžå…¬å¼ç¿»è¨³</p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <div className="lg:col-span-2  pl-6">
            <div className="bg-red-600 text-white p-2 inline-block mb-2">
              <h1 className="text-xl font-bold">PERUMIN 37</h1>
            </div>
            <div className="bg-red-600 text-white p-1 inline-block mb-2">
              <p className="text-sm font-japanese">é‰±æ¥­ã‚¤ãƒ™ãƒ³ãƒˆé–‹å¹•</p>
            </div>
            <p className="text-xs mb-4 font-japanese">2025å¹´9æœˆ22æ—¥ï¼ˆæœˆï¼‰ã‚¢ãƒ¬ã‚­ãƒ‘ã®ã‚»ãƒ­ãƒ»ãƒ•ãƒªå›½éš›ä¼šè­°å ´ã«ã¦</p>

            <div className="bg-black text-white p-2 inline-block mb-4">
              <h2 className="text-lg font-bold font-japanese">ãƒšãƒ«ãƒ¼ã€ã‚¢ãƒ¬ã‚­ãƒ‘ã®ã‚»ãƒ­ãƒ»ãƒ•ãƒªã§ã€Œãƒšãƒ«ãƒ¼ãƒŸãƒ³37ã€ã‚’é–‹å¹•</h2>
            </div>

            <div className="bg-gray-200 p-4 mb-4">
              <div className="flex items-center mb-2">
                <span className="text-5xl font-bold mr-4">ðŸ›ï¸</span>
              </div>
              <p className="text-sm text-gray-800 mb-2 font-japanese">
                ãƒšãƒ«ãƒ¼æœ€å¤§ã®é‰±æ¥­ã‚¤ãƒ™ãƒ³ãƒˆã€ŒPERUMIN 37ã€ãŒã€9æœˆ22æ—¥ï¼ˆæœˆï¼‰ã€ã‚¢ãƒ¬ã‚­ãƒ‘ã®ã‚»ãƒ­ãƒ»ãƒ•ãƒªå›½éš›ä¼šè­°å ´ã«ã¦é–‹å¹•ã—ã¾ã—ãŸã€‚
              </p>
              <p className="text-sm text-gray-800 mb-2 font-japanese">
                åˆæ—¥ã®å¼å…¸ã§ã¯ã€é‰±æ¥­æŠ€è¡“å±•ç¤ºä¼šï¼ˆEXTEMINï¼‰ã®ã‚ªãƒ¼ãƒ—ãƒ‹ãƒ³ã‚°ãŒè¡Œã‚ã‚Œã€æ”¿åºœå½“å±€ãŠã‚ˆã³å„å›½å¤–äº¤å›£ãŒå‚åŠ ã—ã¾ã—ãŸã€‚
              </p>
              <p className="text-sm text-gray-800 font-japanese">
                ãƒ›ãƒ«ãƒ˜ãƒ»ãƒ¢ãƒ³ãƒ†ãƒ­ã‚¨ãƒãƒ«ã‚®ãƒ¼é‰±æ¥­å¤§è‡£ã€ã‚¢ãƒ¬ã‚­ãƒ‘å·žçŸ¥äº‹ãƒ­ã‚¨ãƒ«ãƒ»ã‚µãƒ³ãƒã‚§ã‚¹ã€ãƒšãƒ«ãƒ¼å›½ä¼šè­°é•·ãƒ›ã‚»ãƒ»ã‚¸ã‚§ãƒªã€åœ¨ãƒšãƒ«ãƒ¼ãƒ»ãƒ‰ã‚¤ãƒ„å¤§ä½¿ã‚¶ãƒ“ãƒ¼ãƒãƒ»ãƒ–ãƒ­ãƒƒãƒ›æ°ã‚‰ãŒå‡ºå¸­ã€‚
              </p>
            </div>
          </div>
        </div>

        {/* Event details section */}
        <div className="border-t-2 border-black pt-4 mb-6">
          <div className="bg-red-600 text-white p-2 inline-block mb-4">
            <h2 className="text-lg font-bold font-japanese">ã‚¤ãƒ™ãƒ³ãƒˆæ¦‚è¦</h2>
          </div>

          <p className="text-sm mb-4 font-japanese">
            ä¼çµ±çš„ãªãƒ†ãƒ¼ãƒ—ã‚«ãƒƒãƒˆã«ã‚ˆã£ã¦å¹•ã‚’é–‹ã‘ãŸã“ã®å±•ç¤ºä¼šã¯ã€1é€±é–“ã«ã‚ãŸã‚Šãƒšãƒ«ãƒ¼é‰±æ¥­ã®æœ€æ–°æŠ€è¡“é©æ–°ã‚„å¤šåˆ†é‡Žã®å¯¾è©±ã®å ´ã‚’æä¾›ã—ã¾ã™ã€‚
          </p>

          {/* Participation details */}
          <div className="border mb-6">
            <div className="bg-red-600 text-white p-2 border-b">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold font-japanese">
                <span>å‚åŠ è¦æ¨¡</span>
                <span>16ã‹å›½ã‹ã‚‰800ç¤¾ä»¥ä¸Š</span>
                <span>ãƒ‰ã‚¤ãƒ„ãŒãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼å›½ã¨ã—ã¦å‡ºå±•</span>
              </div>
            </div>
          </div>

          <p className="text-sm mb-4 font-japanese">
            ãƒšãƒ«ãƒ¼ãƒŸãƒ³37çµ„ç¹”å§”å“¡é•·ã®ãƒ’ãƒ¡ãƒŠãƒ»ã‚½ãƒ­ã‚°ãƒ¬ãƒ³æ°ã¯ã€ä»Šå›žã®ãƒ•ã‚§ã‚¢ã«ã¯16ã‹å›½ã‹ã‚‰800ç¤¾ä»¥ä¸ŠãŒå‚åŠ ã—ã€ãƒ‰ã‚¤ãƒ„ãŒãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼å›½ã¨ã—ã¦å‡ºå±•ã—ã¦ã„ã‚‹ã“ã¨ã‚’å¼·èª¿ã—ã¾ã—ãŸã€‚
          </p>
        </div>

        {/* Key statements section */}
        <div className="border-t pt-4 mb-6">
          <div className="bg-red-600 text-white p-2 inline-block mb-4">
            <h2 className="text-lg font-bold font-japanese">ä¸»è¦ãªç™ºè¨€</h2>
          </div>

          {/* Sologuren quote */}
          <div className="bg-gray-100 p-4 mb-4">
            <p className="font-bold text-sm mb-2 font-japanese">ãƒ’ãƒ¡ãƒŠãƒ»ã‚½ãƒ­ã‚°ãƒ¬ãƒ³æ°ï¼ˆãƒšãƒ«ãƒ¼ãƒŸãƒ³37çµ„ç¹”å§”å“¡é•·ï¼‰ï¼š</p>
            <blockquote className="text-sm italic mb-2 font-japanese border-l-4 border-red-600 pl-4">
              ã€ŒEXTEMINã¯å˜ãªã‚‹å•†æ¥­å±•ç¤ºä¼šã§ã¯ãªãã€ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ã‚’é€šã˜ã¦ã„ã‹ã«æŒç¶šå¯èƒ½ã§ç«¶äº‰åŠ›ãŒã‚ã‚Šã€åœ°åŸŸç¤¾ä¼šã«è¿‘ã„é‰±æ¥­ã‚’æ§‹ç¯‰ã§ãã‚‹ã‹ã‚’æŽ¢ã‚‹å ´ã§ã™ã€‚ã€
            </blockquote>
            <p className="text-sm font-japanese">
              ã¾ãŸã€20ã®åœ°åŸŸã‹ã‚‰é›†ã¾ã£ãŸ37åã®å¥¨å­¦ç”Ÿã‚’å«ã‚€è‹¥æ‰‹å°‚é–€å®¶ã®å‚åŠ ã‚’æ­“è¿Žã—ã€å½¼ã‚‰ãŒæ¥­ç•Œã®æœªæ¥ã‚’æ‹…ã†å­˜åœ¨ã§ã‚ã‚‹ã“ã¨ã‚’å¼·èª¿ã—ã¾ã—ãŸã€‚
            </p>
          </div>

          {/* Segura quote */}
          <div className="bg-gray-100 p-4 mb-4">
            <p className="font-bold text-sm mb-2 font-japanese">ãƒ€ãƒªã‚ªãƒ»ã‚»ã‚¬ãƒ©ä¼šé•·ï¼ˆãƒšãƒ«ãƒ¼é‰±æ¥­æŠ€è¡“è€…å”ä¼šIIMPï¼‰ï¼š</p>
            <blockquote className="text-sm italic mb-2 font-japanese border-l-4 border-red-600 pl-4">
              ã€Œç§ãŸã¡ã®ç”£æ¥­ã¯ã€äººã€…ã‚’ä¸­å¿ƒã«æ®ãˆã€è²¬ä»»ã¨é€æ˜Žæ€§ã‚’æŒã£ã¦åˆã‚ã¦ç¶™ç¶šãƒ»æ­£å½“åŒ–ã•ã‚Œã¾ã™ã€‚å„å±•ç¤ºã‚„æŠ€è¡“ææ¡ˆã¯ã€ãƒšãƒ«ãƒ¼ãŠã‚ˆã³åœ°åŸŸç¤¾ä¼šã¸ã®ä¿¡é ¼ã®ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ã§ã™ã€‚ã€
            </blockquote>
            <p className="text-sm font-japanese">
              EXTEMINãŒé©æ–°ã€æŒç¶šå¯èƒ½æ€§ã€ãã—ã¦é›‡ç”¨å‰µå‡ºã«å¯¾ã™ã‚‹æ¥­ç•Œã®å–ã‚Šçµ„ã¿ã‚’åæ˜ ã—ã¦ã„ã‚‹ã¨å¼·èª¿ã—ã¾ã—ãŸã€‚
            </p>
          </div>
        </div>

        {/* Special initiatives section */}
        <div className="border-t pt-4 mb-6">
          <div className="bg-red-600 text-white p-2 inline-block mb-4">
            <h2 className="text-lg font-bold font-japanese">ç‰¹åˆ¥ãªå–ã‚Šçµ„ã¿</h2>
          </div>

          <p className="text-sm mb-4 font-japanese">
            é–‹ä¼šå¼ã§ã¯ä»¥ä¸‹ã®å–ã‚Šçµ„ã¿ã‚‚ç´¹ä»‹ã•ã‚Œã€ç”£æ¥­ã«ãŠã‘ã‚‹é©æ–°ã€ç ”ç©¶ã€èµ·æ¥­ã‚’é¡•å½°ã—ã¾ã—ãŸï¼š
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border p-4">
              <h4 className="font-bold text-sm mb-2 font-japanese">ðŸ”§ Perumin Hub</h4>
              <p className="text-sm font-japanese">æŠ€è¡“é©æ–°ã®ä¸­å¿ƒæ‹ ç‚¹</p>
            </div>

            <div className="border p-4">
              <h4 className="font-bold text-sm mb-2 font-japanese">ðŸ’¡ Perumin Inspira</h4>
              <p className="text-sm font-japanese">ã‚¤ãƒ³ã‚¹ãƒ”ãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³ã¨ã‚¢ã‚¤ãƒ‡ã‚¢ã®äº¤æµ</p>
            </div>

            <div className="border p-4">
              <h4 className="font-bold text-sm mb-2 font-japanese">ðŸ“‹ TISãƒ•ã‚©ãƒ¼ãƒ©ãƒ </h4>
              <p className="text-sm font-japanese">æŠ€è¡“æƒ…å ±ã‚·ã‚¹ãƒ†ãƒ ãƒ•ã‚©ãƒ¼ãƒ©ãƒ </p>
            </div>

            <div className="border p-4">
              <h4 className="font-bold text-sm mb-2 font-japanese">ðŸ›ï¸ ã‚¢ãƒ©ãƒ¡ãƒ€ãƒ»ãƒ‡ãƒ»ãƒ©ãƒ»ã‚¢ã‚«ãƒ‡ãƒŸã‚¢</h4>
              <p className="text-sm font-japanese">å­¦è¡“äº¤æµã®å ´</p>
            </div>
          </div>
        </div>

        {/* Conclusion section */}
        <div className="border-t pt-4 mb-6">
          <div className="bg-red-600 text-white p-2 inline-block mb-4">
            <h2 className="text-lg font-bold font-japanese">ã¾ã¨ã‚</h2>
          </div>

          <div className="bg-gray-100 p-4 mb-4">
            <p className="text-sm font-japanese mb-2">
              ã“ã‚Œã«ã‚ˆã‚Šã€ŒPERUMIN 37ã€ã¯å­¦è¡“ãƒ»æŠ€è¡“ãƒ»å•†æ¥­ã®æ´»å‹•ã‚’æ­£å¼ã«é–‹å§‹ã—ã€ãƒšãƒ«ãƒ¼ãŠã‚ˆã³ä¸–ç•Œã®é‰±æ¥­ã«ãŠã‘ã‚‹ç¤¾ä¼šãƒ»ç’°å¢ƒãƒ»çµŒæ¸ˆã®èª²é¡Œã‚’è­°è«–ã™ã‚‹ãŸã‚ã®é‡è¦ãªåœ°åŸŸã‚¤ãƒ™ãƒ³ãƒˆã¨ã—ã¦ã®åœ°ä½ã‚’æ”¹ã‚ã¦ç¢ºç«‹ã—ã¾ã—ãŸã€‚
            </p>
          </div>

          <div className="text-right font-japanese mb-6">
            <p className="text-xs md:text-sm text-gray-600">[Revista desde adentro, 2025]</p>
          </div>
        </div>

        {/* References */}
        <div className="border-t pt-4 mb-6">
          <h3 className="text-red-600 font-bold text-lg mb-4 font-japanese">å‚è€ƒæ–‡çŒ®</h3>
          <p className="text-sm mb-2">
            Revista desde adentro. (2025å¹´09æœˆ22æ—¥). Perumin 37 abriÃ³ sus puertas en Cerro Juli con presencia de autoridades y cuerpo diplomÃ¡tico.
          </p>
          <p className="text-xs text-gray-600 mb-4">
            å‚ç…§å…ˆ: Sociedad Nacional de MinerÃ­a, PetrÃ³leo y EnergÃ­a:<br/>
            <Link href="https://www.desdeadentro.pe/2025/09/perumin-37-abrio-sus-puertas-en-cerro-juli-con-presencia-de-autoridades-y-cuerpo-diplomatico/" className="text-blue-600 hover:underline break-all">
              https://www.desdeadentro.pe/2025/09/perumin-37-abrio-sus-puertas-en-cerro-juli-con-presencia-de-autoridades-y-cuerpo-diplomatico/
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="text-right">
          <p className="text-xs md:text-sm text-gray-600">åœ¨æ—¥ãƒšãƒ«ãƒ¼å¤§ä½¿é¤¨</p>
          <p className="text-xs md:text-sm text-gray-600">éžå…¬å¼ç¿»è¨³</p>
        </div>

        {/* Bottom branding */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t">
          <div className="text-red-600 font-bold">#PeruMinerÃ­a</div>
          <div className="flex items-center">
            <span className="text-red-600 font-bold text-lg mr-2">PERUMIN</span>
            <span className="text-lg">â›ï¸</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Perumin37Page;
