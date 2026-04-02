import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";
import Banner from "src/components/Banner";

import Layout from "@/components/Layout";

const GDPReportPage = () => {
  const { locale } = useRouter();
  
  return (
    <Layout language={locale} articlePublishedTime="2025-05-28T00:00:00+09:00" title="INFOCOMEX - GDP Quarterly Report Q1 2025">
      <Banner
        alt={"Peru GDP Q1 2025 Economic Report"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl bg-white japanese-text">
        {/* Header - exactly like PDF */}
        <div className="text-right mb-6 font-japanese">
          <p className="text-sm text-gray-700 japanese-text">åœ¨æ—¥ãƒšãƒ«ãƒ¼å¤§ä½¿é¤¨</p>
          <p className="text-sm text-gray-700 japanese-text">éžå…¬å¼ç¿»è¨³</p>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-6">

          <div className="lg:col-span-2 border-l border-gray-300 pl-6">
            <div className="bg-red-600 text-white p-2 inline-block mb-2">
              <h1 className="text-xl font-bold">INFOCOMEX</h1>
            </div>
            <div className="bg-red-600 text-white p-1 inline-block mb-2">
              <p className="text-sm font-japanese">å››åŠæœŸå ±å‘Š</p>
            </div>
            <p className="text-xs text-gray-600 mb-4 font-japanese">2025å¹´ç¬¬1å››åŠæœŸã®çµæžœï¼ˆ2024å¹´ã¨ã®æ¥­ç¸¾æ¯”è¼ƒã‚’ä¸­å¿ƒã«ï¼‰</p>

            <div className="bg-black text-white p-2 inline-block mb-4">
              <h2 className="text-lg font-bold font-japanese">å›½å†…ç·ç”Ÿç”£</h2>
            </div>

            <div className="bg-gray-200 p-4 mb-4">
              <div className="flex items-center mb-2">
                <span className="text-5xl font-bold mr-4">â†— 3.92%</span>
              </div>
              <p className="text-sm text-gray-800 mb-2">
                å®Ÿè³ªGDPã¯2007å¹´åŸºæº–ä¾¡æ ¼ã§ç´„391å„„6,000ä¸‡ç±³ãƒ‰ãƒ«ã«é”ã—ã¾ã—ãŸã€‚ã“ã‚Œã¯ã€å‰å¹´åŒæœŸæ¯”ã§ç´„22å„„2,000ä¸‡ç±³ãƒ‰ãƒ«ã®å¢—åŠ ã«ç›¸å½“ã—ã¾ã™ã€‚
              </p>
              <p className="text-sm text-gray-800 mb-2">
                ç‰¹ã«å€‹äººæ¶ˆè²»ã®å¯„ä¸ŽãŒé¡•è‘—ã§ã‚ã‚Šã€ç´„9å„„3,800ä¸‡ç±³ãƒ‰ãƒ«å¢—ã€+3.8%ã®æˆé•·ã‚’ç¤ºã—ã¾ã—ãŸã€‚
              </p>
              <p className="text-sm text-gray-800">
                ã¾ãŸã€æ°‘é–“æŠ•è³‡ã¯å…¬å…±æŠ•è³‡ã®ç´„4.5å€ã«ç›¸å½“ã—ã€22å„„4,400ä¸‡ã‚½ãƒ«ï¼ˆç´„6å„„600ä¸‡ç±³ãƒ‰ãƒ«ï¼‰å¢—ã€+8.8%ã¨å¤§ããä¼¸ã³ã¾ã—ãŸã€‚ï¼ˆå‡ºå…¸ï¼šãƒšãƒ«ãƒ¼ä¸­å¤®æº–å‚™éŠ€è¡Œã€”BCRPã€•ã®æŽ¨è¨ˆï¼‰
              </p>
            </div>
          </div>
        </div>

        {/* Sectors section */}
        <div className="border-t-2 border-black pt-4 mb-6">
          <div className="bg-red-600 text-white p-2 inline-block mb-4">
            <h2 className="text-lg font-bold">éƒ¨é–€åˆ¥ã®æ¥­ç¸¾</h2>
          </div>
          <p className="text-sm font-bold mb-4">ç¬¬1å››åŠæœŸã«ãŠã„ã¦ã€æœ€ã‚‚è²¢çŒ®åº¦ã®é«˜ã‹ã£ãŸéƒ¨é–€ã¯ä»¥ä¸‹ã®ã¨ãŠã‚Šã§ã™ï¼š</p>
          <p className="text-xs text-gray-600 mb-6">å‡ºå…¸ï¼šINEIï¼ˆãƒšãƒ«ãƒ¼å›½å®¶çµ±è¨ˆæƒ…å ±æ©Ÿé–¢ï¼‰ ä½œæˆï¼šComexPerÃºï¼ˆãƒšãƒ«ãƒ¼å¯¾å¤–è²¿æ˜“å”ä¼šï¼‰</p>

          {/* Table format like PDF */}
          <div className="border border-gray-400 mb-6">
            <div className="bg-red-600 text-white p-2 border-b border-gray-400">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold">
                <span>1. ãã®ä»–ã®ã‚µãƒ¼ãƒ“ã‚¹æ¥­</span>
                <span>å£²ä¸Šï¼šç´„56å„„ãƒ‰ãƒ«</span>
                <span>å¢—åŠ é¡ï¼šç´„2å„„3,030ä¸‡ãƒ‰ãƒ«ï¼ˆ+4.3%ï¼‰</span>
              </div>
            </div>
            <div className="bg-red-600 text-white p-2 border-b border-gray-400">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold">
                <span>2. è£½é€ æ¥­</span>
                <span>å£²ä¸Šï¼šç´„45å„„9,300ä¸‡ãƒ‰ãƒ«</span>
                <span>å¢—åŠ é¡ï¼šç´„1å„„7,810ä¸‡ãƒ‰ãƒ«ï¼ˆ+4.0%ï¼‰</span>
              </div>
            </div>
            <div className="bg-red-600 text-white p-2 border-b border-gray-400">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold">
                <span>3. é‹è¼¸ãƒ»é€šä¿¡</span>
                <span>å£²ä¸Šï¼šç´„42å„„3,000ä¸‡ãƒ‰ãƒ«</span>
                <span>å¢—åŠ é¡ï¼šç´„1å„„4,780ä¸‡ãƒ‰ãƒ«ï¼ˆ+3.6%ï¼‰</span>
              </div>
            </div>
            <div className="bg-red-600 text-white p-2 border-b border-gray-400">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold">
                <span>4. å•†æ¥­</span>
                <span>å£²ä¸Šï¼šç´„38å„„ãƒ‰ãƒ«</span>
                <span>å¢—åŠ é¡ï¼šç´„1å„„2,400ä¸‡ãƒ‰ãƒ«ï¼ˆ+3.4%ï¼‰</span>
              </div>
            </div>
            <div className="bg-red-600 text-white p-2">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold">
                <span>5. å»ºè¨­æ¥­</span>
                <span>å£²ä¸Šï¼šç´„22å„„6,300ä¸‡ãƒ‰ãƒ«</span>
                <span>å¢—åŠ é¡ï¼šç´„1å„„1,300ä¸‡ãƒ‰ãƒ«ï¼ˆ+5.3%ï¼‰</span>
              </div>
            </div>
          </div>

          {/* Lowest growth section */}
          <div className="mb-6">
            <p className="font-bold text-sm mb-2">æœ€ã‚‚æˆé•·çŽ‡ãŒä½Žã‹ã£ãŸéƒ¨é–€ï¼š</p>
            <div className="text-sm mb-2">
              <strong>é‡‘èžã€ä¿é™ºã€å¹´é‡‘ã‚µãƒ¼ãƒ“ã‚¹éƒ¨é–€</strong><br/>
              ç·é¡ï¼šç´„18å„„7,500ä¸‡ãƒ‰ãƒ«<br/>
              å¢—åŠ é¡ï¼šç´„1,050ä¸‡ãƒ‰ãƒ«<br/>
              æˆé•·çŽ‡ï¼š+0.6%
            </div>
            <p className="text-sm text-gray-700 japanese-text">
              ã“ã®çµæžœã¯ã€ä¸»ã«é‡‘èžã‚µãƒ¼ãƒ“ã‚¹ã®æ´»å‹•ãŒæ¸›å°‘ã—ãŸã“ã¨ã«ã‚ˆã‚‹ã‚‚ã®ã§ã™ã€‚ã¾ãŸã€2024å¹´åŒæ™‚æœŸã«**-4.7%ã¨ã„ã†ãƒžã‚¤ãƒŠã‚¹æˆé•·ã‚’è¨˜éŒ²ã—ã¦ã„ãŸã“ã¨ã‹ã‚‰ã®åå‹•ï¼ˆãƒªãƒã‚¦ãƒ³ãƒ‰ï¼‰ã§ã‚‚ã‚ã‚Šã¾ã™ã€‚
            </p>
          </div>
        </div>

        {/* Agricultural section - like PDF with graphics layout */}
        <div className="border-t border-gray-400 pt-4 mb-6">
          <p className="text-red-600 font-bold text-sm mb-4">è¾²æ¥­éƒ¨é–€**ï¼š</p>
          
          <div className="mb-4">
            <p className="font-bold text-sm">è¾²æž—æ°´ç”£éƒ¨é–€å…¨ä½“</p>
            <p className="text-sm">ç·é¡ï¼šç´„25å„„2,400ä¸‡ãƒ‰ãƒ«</p>
            <p className="text-sm">å¢—åŠ é¡ï¼šç´„9,650ä¸‡ãƒ‰ãƒ«</p>
            <p className="text-sm">æˆé•·çŽ‡ï¼š+4%</p>
          </div>

          <p className="text-sm mb-4">ãƒšãƒ«ãƒ¼è¾²æ¥­çŒæ¼‘çœï¼ˆMIDAGRIï¼‰ã®æŽ¨è¨ˆã«ã‚ˆã‚‹ã¨ã€ã“ã‚Œã¯ä»¥ä¸‹ã®è¦å› ã«ã‚ˆã‚Šã¾ã™ï¼š</p>
          <ul className="text-sm mb-6 ml-4">
            <li>â€¢ è¾²æ¥­ã‚µãƒ–ã‚»ã‚¯ã‚¿ãƒ¼ã®æˆé•·ï¼š+4.7%ï¼ˆå…¨ä½“ã®ç´„3åˆ†ã®2ã‚’å ã‚ã‚‹ï¼‰</li>
            <li>â€¢ ç•œç”£ã‚µãƒ–ã‚»ã‚¯ã‚¿ãƒ¼ã®æˆé•·ï¼š+3%ï¼ˆå¥½èª¿ãªãƒ‘ãƒ•ã‚©ãƒ¼ãƒžãƒ³ã‚¹ã‚’è¨˜éŒ²ï¼‰</li>
          </ul>

          {/* Three column layout like PDF */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Ica region */}
            <div className="border border-gray-400 p-4">
              <div className="flex items-center mb-2">
                <span className="text-lg mr-2">ðŸ‡</span>
                <h4 className="font-bold text-sm font-japanese">æœ€ã‚‚æˆé•·ã—ãŸåœ°åŸŸï¼šã‚¤ã‚«çœŒ</h4>
              </div>
              <p className="sm">ç·é¡ï¼šç´„3å„„6,570ä¸‡ãƒ‰ãƒ«</p>
              <p className="sm">å¢—åŠ é¡ï¼šç´„4,840ä¸‡ãƒ‰ãƒ«</p>
              <p className="sm font-bold">æˆé•·çŽ‡ï¼š+18.7%</p>
              <p className="sm mt-2">ã“ã®æˆé•·ã¯ã€ä»¥ä¸‹ã®ä½œç‰©ã®ç”Ÿç”£é‡ã®å¢—åŠ ãŠã‚ˆã³å¯„ä¸Žã«ã‚ˆã‚‹ã‚‚ã®ã§ã™ï¼š</p>
              <p className="sm">ã¶ã©ã†ï¼š+49.3%ï¼ˆãƒˆãƒ³ãƒ™ãƒ¼ã‚¹ï¼‰ãƒˆãƒžãƒˆï¼š+27.6%</p>
              <p className="sm">ç¡¬è³ªé»„ã¨ã†ã‚‚ã‚ã“ã—+25.8%</p>
            </div>

            {/* La Libertad */}
            <div className="border border-gray-400 p-4">
              <h4 className="font-bold text-sm mb-2 font-japanese">ç”Ÿç”£ãŒæ¸›å°‘ã—ãŸåœ°åŸŸï¼šãƒ©ãƒ»ãƒªãƒ™ãƒ«ã‚¿çœŒï¼ˆLa Libertadï¼‰</h4>
              <p className="text-sm">ç·é¡ï¼šç´„2å„„9,320ä¸‡ãƒ‰ãƒ« æ¸›å°‘é¡ï¼šç´„970ä¸‡ãƒ‰ãƒ«</p>
              <p className="text-sm font-bold">æˆé•·çŽ‡ï¼šâ€“3.2%</p>
              <p className="text-sm mt-2">ã“ã®æ¸›å°‘ã¯ã€ä»¥ä¸‹ã®è¾²ç”£å“ã®ä¸æŒ¯ãªç”Ÿç”£å®Ÿç¸¾ã«ã‚ˆã‚‹ã‚‚ã®ã§ã™ï¼š</p>
              <p className="text-sm">ã‚‚ã¿ç±³ï¼šâ€“61.5%</p>
              <p className="text-sm">ãƒ–ãƒ«ãƒ¼ãƒ™ãƒªãƒ¼ï¼šâ€“15.7%</p>
            </div>

            {/* Mango */}
            <div className="border border-gray-400 p-4">
              <div className="flex items-center mb-2">
                <span className="text-lg mr-2">ðŸ¥­</span>
                <h4 className="font-bold text-sm font-japanese">æœ€ã‚‚å¯„ä¸Žã—ãŸä½œç‰©ï¼šãƒžãƒ³ã‚´ãƒ¼</h4>
              </div>
              <p className="text-sm">ç·é¡ï¼šç´„8,540ä¸‡ãƒ‰ãƒ«</p>
              <p className="text-sm">å¢—åŠ é¡ï¼šç´„5,430ä¸‡ãƒ‰ãƒ«</p>
              <p className="text-sm font-bold">æˆé•·çŽ‡ï¼š+175.2%</p>
              <p className="text-sm">ç”Ÿç”£é‡ã®å¢—åŠ ï¼š+200,816ãƒˆãƒ³</p>
              <p className="text-sm mt-2">ç‰¹ã«Piuraï¼ˆãƒ”ã‚¦ãƒ©ï¼‰åœ°åŸŸã§ã®å¢—åŠ ãŒé¡•è‘—ã§ã€+160,500ãƒˆãƒ³ã‚’è¨˜éŒ²ã—ã¾ã—ãŸã€‚</p>
            </div>
          </div>

          <div className="text-right font-japanese">
            <p className="text-xs md:text-sm text-gray-600">åœ¨æ—¥ãƒšãƒ«ãƒ¼å¤§ä½¿é¤¨</p>
            <p className="text-xs md:text-sm text-gray-600">éžå…¬å¼ç¿»è¨³</p>
          </div>
        </div>

        {/* Mining section */}
        <div className="border-t border-gray-400 pt-4 mb-6">
          <p className="text-red-600 font-bold text-sm mb-4">é‰±æ¥­ãƒ»ç‚­åŒ–æ°´ç´ éƒ¨é–€***ï¼š</p>
          
          <ul className="text-sm mb-4 ml-4">
            <li>â€¢ ç·é¡ï¼šç´„4,675ç™¾ä¸‡ãƒ‰ãƒ«</li>
            <li>â€¢ å¢—åŠ é¡ï¼šç´„111.6ç™¾ä¸‡ãƒ‰ãƒ«</li>
            <li>â€¢ æˆé•·çŽ‡ï¼š+2.4%</li>
          </ul>

          <p className="text-sm font-bold mb-2 font-japanese">æˆé•·ã«æœ€ã‚‚å¯„ä¸Žã—ãŸé‰±ç”£å“ï¼š</p>
          <ul className="text-sm mb-4 ml-4">
            <li>â€¢ éŠ€ï¼ˆPlataï¼‰ï¼šç”Ÿç”£é‡**+10.8%**</li>
            <li className="ml-4">â†’ ä¸»ã«Limaã§ã®ç”Ÿç”£å¢—åŠ ï¼ˆ+87.6%ï¼‰ãŒå¯„ä¸Ž</li>
            <li>â€¢ éŠ…ï¼ˆCobreï¼‰ï¼šç”Ÿç”£é‡**+3.9%**</li>
            <li className="ml-4">â†’ ä¸»ã«ApurÃ­macã§ã®å¢—ç”£ï¼ˆ+70.2%ï¼‰ã«ã‚ˆã‚‹</li>
          </ul>
          <p className="text-sm text-gray-600 mb-4">â€»å‡ºå…¸ï¼šãƒšãƒ«ãƒ¼ã‚¨ãƒãƒ«ã‚®ãƒ¼é‰±å±±çœï¼ˆMINEMï¼‰</p>

          <div className="flex items-center mb-4">
            <span className="text-lg mr-2">â›ï¸</span>
            <p className="text-sm font-bold font-japanese">é‰±æ¥­æŠ•è³‡ï¼š</p>
          </div>
          <ul className="text-sm mb-4 ml-4">
            <li>â€¢ ç·é¡ï¼š10å„„5,900ä¸‡ç±³ãƒ‰ãƒ«ï¼ˆ+4.6%ï¼‰</li>
            <li className="ml-4">ã†ã¡ï¼š</li>
            <li className="ml-8">o æŽ¢é‰±æŠ•è³‡ï¼š1å„„6,700ä¸‡ç±³ãƒ‰ãƒ«ï¼ˆ+62.2%ï¼‰</li>
            <li className="ml-8">o é‰±çŸ³å‡¦ç†ãƒ—ãƒ©ãƒ³ãƒˆï¼ˆPlanta de beneficioï¼‰æŠ•è³‡ï¼š2å„„2,000ä¸‡ç±³ãƒ‰ãƒ«ï¼ˆ+3.6%ï¼‰</li>
          </ul>
          <p className="text-sm mb-4">ä¸»ãªæŠ•è³‡å…ˆåœ°åŸŸï¼š</p>
          <ul className="text-sm mb-6 ml-4">
            <li>â€¢ Moqueguaï¼ˆãƒ¢ã‚±ã‚°ã‚¢ï¼‰ï¼š1å„„7,600ä¸‡ç±³ãƒ‰ãƒ«ï¼ˆâ€“9.1%ï¼‰</li>
          </ul>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-400 pt-4 mb-6">
          <p className="text-sm font-bold mb-4">2025å¹´5æœˆ28æ—¥ç¾åœ¨ã®æœ€æ–°æƒ…å ±</p>
          <div className="text-xs text-gray-700 space-y-2 mb-6">
            <p>â€¢ *æœ¬è³‡æ–™ã«ãŠã‘ã‚‹å›½å†…ç·ç”Ÿç”£ï¼ˆPBIï¼‰ã®å®Ÿç¸¾ã¯ã€ãƒšãƒ«ãƒ¼ä¸­å¤®æº–å‚™éŠ€è¡Œï¼ˆBCRPï¼‰ã®ãƒ‡ãƒ¼ã‚¿ã«åŸºã¥ã„ã¦ã„ã¾ã™ã€‚</p>
            <p>ã‚»ã‚¯ã‚¿ãƒ¼åˆ¥ã®å†…è¨³ã«ã¤ã„ã¦ã¯ã€**ãƒšãƒ«ãƒ¼å›½å®¶çµ±è¨ˆæƒ…å ±åºï¼ˆINEIï¼‰ã®æŽ¨è¨ˆå€¤ã‚’ä½¿ç”¨ã—ã€é–¢é€£çœåºã®æƒ…å ±ã«ã‚ˆã‚Šè£œè¶³ã—ã¦ã„ã¾ã™ã€‚</p>
            <p>â€¢ **è¾²æ¥­éƒ¨é–€ã®æ¥­ç¸¾ã¯ã€è¾²æ¥­çŒæ¼‘é–‹ç™ºçœï¼ˆMIDAGRIï¼‰ãŒæä¾›ã™ã‚‹è¾²ç•œç”£æ¥­ã®ç²—ä»˜åŠ ä¾¡å€¤é¡ã«åŸºã¥ãã€ã‚µãƒ–ã‚»ã‚¯ã‚¿ãƒ¼åˆ¥ã€åœ°åŸŸåˆ¥ãŠã‚ˆã³å“ç›®åˆ¥ã«è©•ä¾¡ã•ã‚Œã¦ã„ã¾ã™ã€‚</p>
            <p>â€¢ ***é‰±æ¥­ãƒ»ç‚­åŒ–æ°´ç´ åˆ†é‡Žã«é–¢ã™ã‚‹æ¥­ç¸¾ã¯ã€ã‚¨ãƒãƒ«ã‚®ãƒ¼é‰±å±±çœï¼ˆMINEMï¼‰ã®æƒ…å ±ã«åŸºã¥ãã€é‰±ç”£å“åˆ¥ã€åœ°åŸŸåˆ¥ãŠã‚ˆã³æŠ•è³‡é¡åˆ¥ã«æ•´ç†ã•ã‚Œã¦ã„ã¾ã™ã€‚</p>
          </div>
          
          <p className="text-sm text-center mb-4">[COMEXPERU, 2025]</p>
        </div>

        {/* Download button */}
        <div className="text-center mb-6">
          <a href="https://mcusercontent.com/52e1146e92ef94295a8957364/files/d2ada55d-7072-9825-8d2b-80a3dd61ff2e/å›½å†…ç·ç”Ÿç”£_INFOCOMEX.pdf" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors mx-auto">
            <ImDownload2 />
            <span className="font-japanese">ãƒ¬ãƒãƒ¼ãƒˆå®Œå…¨ç‰ˆã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰</span>
          </button>
          </a>
        </div>

        {/* References */}
        <div className="border-t border-gray-400 pt-4 mb-6">
          <h3 className="text-red-600 font-bold text-lg mb-4 font-japanese">å‚è€ƒæ–‡çŒ®</h3>
          <p className="text-sm mb-2">
            COMEXPERU. (2025å¹´05æœˆ28æ—¥). INFOCOMEX PRODUCCION NACIONAL AVANCE TRIMESTRAL.
          </p>
          <p className="text-xs text-gray-600 mb-4">
            å‚ç…§å…ˆ: COMEXPERU Sociedad de Comercio Exterior del PerÃº:<br/>
            <Link href="https://www.comexperu.org.pe/upload/articles/infocomex/infocomex-produccion-nacional-038.pdf" className="text-blue-600 hover:underline break-all">
              https://www.comexperu.org.pe/upload/articles/infocomex/infocomex-produccion-nacional-038.pdf
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="text-right">
          <p className="text-xs md:text-sm text-gray-600">åœ¨æ—¥ãƒšãƒ«ãƒ¼å¤§ä½¿é¤¨</p>
          <p className="text-xs md:text-sm text-gray-600">éžå…¬å¼ç¿»è¨³</p>
        </div>

        {/* Bottom branding */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-400">
          <div className="text-red-600 font-bold">#LibertadParaCrecer</div>
          <div className="flex items-center">
            <span className="text-red-600 font-bold text-lg mr-2">COMEXPERU</span>
            <span className="text-lg">âš™ï¸</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GDPReportPage;
