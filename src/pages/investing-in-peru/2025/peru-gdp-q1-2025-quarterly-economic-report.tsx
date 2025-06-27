import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";
import Banner from "src/components/Banner";


import Layout from "@/components/Layout";

const GDPReportPage = () => {
  const { locale } = useRouter();
  
  return (
    <Layout language={locale} title="INFOCOMEX - GDP Quarterly Report Q1 2025">
      <Banner
        alt={"Peru GDP Q1 2025 Economic Report"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
        src2={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564004/WEB/gastronomia/inversiones400_nb0noc.jpg"
        }
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl bg-white japanese-text">
        {/* Header - exactly like PDF */}
        <div className="text-right mb-6 font-japanese">
          <p className="text-sm text-gray-700">在日ペルー大使館</p>
          <p className="text-sm text-gray-700">非公式翻訳</p>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-6">

          <div className="lg:col-span-2 border-l border-gray-300 pl-6">
            <div className="bg-red-600 text-white p-2 inline-block mb-2">
              <h1 className="text-xl font-bold">INFOCOMEX</h1>
            </div>
            <div className="bg-red-600 text-white p-1 inline-block mb-2">
              <p className="text-sm font-japanese">四半期報告</p>
            </div>
            <p className="text-xs text-gray-600 mb-4 font-japanese">2025年第1四半期の結果（2024年との業績比較を中心に）</p>

            <div className="bg-black text-white p-2 inline-block mb-4">
              <h2 className="text-lg font-bold font-japanese">国内総生産</h2>
            </div>

            <div className="bg-gray-200 p-4 mb-4">
              <div className="flex items-center mb-2">
                <span className="text-5xl font-bold mr-4">↗ 3.92%</span>
              </div>
              <p className="text-sm text-gray-800 mb-2">
                実質GDPは2007年基準価格で約391億6,000万米ドルに達しました。これは、前年同期比で約22億2,000万米ドルの増加に相当します。
              </p>
              <p className="text-sm text-gray-800 mb-2">
                特に個人消費の寄与が顕著であり、約9億3,800万米ドル増、+3.8%の成長を示しました。
              </p>
              <p className="text-sm text-gray-800">
                また、民間投資は公共投資の約4.5倍に相当し、22億4,400万ソル（約6億600万米ドル）増、+8.8%と大きく伸びました。（出典：ペルー中央準備銀行〔BCRP〕の推計）
              </p>
            </div>
          </div>
        </div>

        {/* Sectors section */}
        <div className="border-t-2 border-black pt-4 mb-6">
          <div className="bg-red-600 text-white p-2 inline-block mb-4">
            <h2 className="text-lg font-bold">部門別の業績</h2>
          </div>
          <p className="text-sm font-bold mb-4">第1四半期において、最も貢献度の高かった部門は以下のとおりです：</p>
          <p className="text-xs text-gray-600 mb-6">出典：INEI（ペルー国家統計情報機関） 作成：ComexPerú（ペルー対外貿易協会）</p>

          {/* Table format like PDF */}
          <div className="border border-gray-400 mb-6">
            <div className="bg-red-600 text-white p-2 border-b border-gray-400">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold">
                <span>1. その他のサービス業</span>
                <span>売上：約56億ドル</span>
                <span>増加額：約2億3,030万ドル（+4.3%）</span>
              </div>
            </div>
            <div className="bg-red-600 text-white p-2 border-b border-gray-400">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold">
                <span>2. 製造業</span>
                <span>売上：約45億9,300万ドル</span>
                <span>増加額：約1億7,810万ドル（+4.0%）</span>
              </div>
            </div>
            <div className="bg-red-600 text-white p-2 border-b border-gray-400">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold">
                <span>3. 運輸・通信</span>
                <span>売上：約42億3,000万ドル</span>
                <span>増加額：約1億4,780万ドル（+3.6%）</span>
              </div>
            </div>
            <div className="bg-red-600 text-white p-2 border-b border-gray-400">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold">
                <span>4. 商業</span>
                <span>売上：約38億ドル</span>
                <span>増加額：約1億2,400万ドル（+3.4%）</span>
              </div>
            </div>
            <div className="bg-red-600 text-white p-2">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold">
                <span>5. 建設業</span>
                <span>売上：約22億6,300万ドル</span>
                <span>増加額：約1億1,300万ドル（+5.3%）</span>
              </div>
            </div>
          </div>

          {/* Lowest growth section */}
          <div className="mb-6">
            <p className="font-bold text-sm mb-2">最も成長率が低かった部門：</p>
            <div className="text-sm mb-2">
              <strong>金融、保険、年金サービス部門</strong><br/>
              総額：約18億7,500万ドル<br/>
              増加額：約1,050万ドル<br/>
              成長率：+0.6%
            </div>
            <p className="text-sm text-gray-700">
              この結果は、主に金融サービスの活動が減少したことによるものです。また、2024年同時期に**-4.7%というマイナス成長を記録していたことからの反動（リバウンド）でもあります。
            </p>
          </div>
        </div>

        {/* Agricultural section - like PDF with graphics layout */}
        <div className="border-t border-gray-400 pt-4 mb-6">
          <p className="text-red-600 font-bold text-sm mb-4">農業部門**：</p>
          
          <div className="mb-4">
            <p className="font-bold text-sm">農林水産部門全体</p>
            <p className="text-sm">総額：約25億2,400万ドル</p>
            <p className="text-sm">増加額：約9,650万ドル</p>
            <p className="text-sm">成長率：+4%</p>
          </div>

          <p className="text-sm mb-4">ペルー農業灌漑省（MIDAGRI）の推計によると、これは以下の要因によります：</p>
          <ul className="text-sm mb-6 ml-4">
            <li>• 農業サブセクターの成長：+4.7%（全体の約3分の2を占める）</li>
            <li>• 畜産サブセクターの成長：+3%（好調なパフォーマンスを記録）</li>
          </ul>

          {/* Three column layout like PDF */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Ica region */}
            <div className="border border-gray-400 p-4">
              <div className="flex items-center mb-2">
                <span className="text-lg mr-2">🍇</span>
                <h4 className="font-bold text-sm font-japanese">最も成長した地域：イカ県</h4>
              </div>
              <p className="sm">総額：約3億6,570万ドル</p>
              <p className="sm">増加額：約4,840万ドル</p>
              <p className="sm font-bold">成長率：+18.7%</p>
              <p className="sm mt-2">この成長は、以下の作物の生産量の増加および寄与によるものです：</p>
              <p className="sm">ぶどう：+49.3%（トンベース）トマト：+27.6%</p>
              <p className="sm">硬質黄とうもろこし+25.8%</p>
            </div>

            {/* La Libertad */}
            <div className="border border-gray-400 p-4">
              <h4 className="font-bold text-sm mb-2 font-japanese">生産が減少した地域：ラ・リベルタ県（La Libertad）</h4>
              <p className="text-sm">総額：約2億9,320万ドル 減少額：約970万ドル</p>
              <p className="text-sm font-bold">成長率：–3.2%</p>
              <p className="text-sm mt-2">この減少は、以下の農産品の不振な生産実績によるものです：</p>
              <p className="text-sm">もみ米：–61.5%</p>
              <p className="text-sm">ブルーベリー：–15.7%</p>
            </div>

            {/* Mango */}
            <div className="border border-gray-400 p-4">
              <div className="flex items-center mb-2">
                <span className="text-lg mr-2">🥭</span>
                <h4 className="font-bold text-sm font-japanese">最も寄与した作物：マンゴー</h4>
              </div>
              <p className="text-sm">総額：約8,540万ドル</p>
              <p className="text-sm">増加額：約5,430万ドル</p>
              <p className="text-sm font-bold">成長率：+175.2%</p>
              <p className="text-sm">生産量の増加：+200,816トン</p>
              <p className="text-sm mt-2">特にPiura（ピウラ）地域での増加が顕著で、+160,500トンを記録しました。</p>
            </div>
          </div>

          <div className="text-right font-japanese">
            <p className="text-sm text-gray-600">在日ペルー大使館</p>
            <p className="text-sm text-gray-600">非公式翻訳</p>
          </div>
        </div>

        {/* Mining section */}
        <div className="border-t border-gray-400 pt-4 mb-6">
          <p className="text-red-600 font-bold text-sm mb-4">鉱業・炭化水素部門***：</p>
          
          <ul className="text-sm mb-4 ml-4">
            <li>• 総額：約4,675百万ドル</li>
            <li>• 増加額：約111.6百万ドル</li>
            <li>• 成長率：+2.4%</li>
          </ul>

          <p className="text-sm font-bold mb-2 font-japanese">成長に最も寄与した鉱産品：</p>
          <ul className="text-sm mb-4 ml-4">
            <li>• 銀（Plata）：生産量**+10.8%**</li>
            <li className="ml-4">→ 主にLimaでの生産増加（+87.6%）が寄与</li>
            <li>• 銅（Cobre）：生産量**+3.9%**</li>
            <li className="ml-4">→ 主にApurímacでの増産（+70.2%）による</li>
          </ul>
          <p className="text-sm text-gray-600 mb-4">※出典：ペルーエネルギー鉱山省（MINEM）</p>

          <div className="flex items-center mb-4">
            <span className="text-lg mr-2">⛏️</span>
            <p className="text-sm font-bold font-japanese">鉱業投資：</p>
          </div>
          <ul className="text-sm mb-4 ml-4">
            <li>• 総額：10億5,900万米ドル（+4.6%）</li>
            <li className="ml-4">うち：</li>
            <li className="ml-8">o 探鉱投資：1億6,700万米ドル（+62.2%）</li>
            <li className="ml-8">o 鉱石処理プラント（Planta de beneficio）投資：2億2,000万米ドル（+3.6%）</li>
          </ul>
          <p className="text-sm mb-4">主な投資先地域：</p>
          <ul className="text-sm mb-6 ml-4">
            <li>• Moquegua（モケグア）：1億7,600万米ドル（–9.1%）</li>
          </ul>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-400 pt-4 mb-6">
          <p className="text-sm font-bold mb-4">2025年5月28日現在の最新情報</p>
          <div className="text-xs text-gray-700 space-y-2 mb-6">
            <p>• *本資料における国内総生産（PBI）の実績は、ペルー中央準備銀行（BCRP）のデータに基づいています。</p>
            <p>セクター別の内訳については、**ペルー国家統計情報庁（INEI）の推計値を使用し、関連省庁の情報により補足しています。</p>
            <p>• **農業部門の業績は、農業灌漑開発省（MIDAGRI）が提供する農畜産業の粗付加価値額に基づき、サブセクター別、地域別および品目別に評価されています。</p>
            <p>• ***鉱業・炭化水素分野に関する業績は、エネルギー鉱山省（MINEM）の情報に基づき、鉱産品別、地域別および投資額別に整理されています。</p>
          </div>
          
          <p className="text-sm text-center mb-4">[COMEXPERU, 2025]</p>
        </div>

        {/* Download button */}
        <div className="text-center mb-6">
          <a href="https://mcusercontent.com/52e1146e92ef94295a8957364/files/d2ada55d-7072-9825-8d2b-80a3dd61ff2e/国内総生産_INFOCOMEX.pdf" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors mx-auto">
            <ImDownload2 />
            <span className="font-japanese">レポート完全版をダウンロード</span>
          </button>
          </a>
        </div>

        {/* References */}
        <div className="border-t border-gray-400 pt-4 mb-6">
          <h3 className="text-red-600 font-bold text-lg mb-4 font-japanese">参考文献</h3>
          <p className="text-sm mb-2">
            COMEXPERU. (2025年05月28日). INFOCOMEX PRODUCCION NACIONAL AVANCE TRIMESTRAL.
          </p>
          <p className="text-xs text-gray-600 mb-4">
            参照先: COMEXPERU Sociedad de Comercio Exterior del Perú:<br/>
            <Link href="https://www.comexperu.org.pe/upload/articles/infocomex/infocomex-produccion-nacional-038.pdf" className="text-blue-600 hover:underline break-all">
              https://www.comexperu.org.pe/upload/articles/infocomex/infocomex-produccion-nacional-038.pdf
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="text-right">
          <p className="text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-sm text-gray-600">非公式翻訳</p>
        </div>

        {/* Bottom branding */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-400">
          <div className="text-red-600 font-bold">#LibertadParaCrecer</div>
          <div className="flex items-center">
            <span className="text-red-600 font-bold text-lg mr-2">COMEXPERU</span>
            <span className="text-lg">⚙️</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GDPReportPage;