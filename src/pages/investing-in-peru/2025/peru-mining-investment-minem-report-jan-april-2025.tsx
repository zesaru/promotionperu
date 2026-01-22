import Link from "next/link";
import { useRouter } from "next/router";
import Banner from "src/components/Banner";

import Layout from "@/components/Layout";

const MiningInvestmentPage = () => {
  const { locale } = useRouter();
  
  return (
    <Layout language={locale} title="MINEM Mining Investment Report Jan-April 2025">
      <Banner
        alt={"Peru Mining Investment Report 2025"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600 japanese-text">在日ペルー大使館</p>
          <p className="text-xs md:text-sm text-gray-600 japanese-text">非公式翻訳</p>
        </div>

        <div className="mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            MINEM: 2025年1月から4月の鉱業投資は14億4,300万米ドルを超える
          </h1>
          <h2 className="text-lg text-gray-800 mb-4">
            探鉱投資は48.9％増加、鉱山インフラが最も活発な分野として定着
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            発表日：2025年6月16日（月）
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            ペルーのエネルギー鉱山省（MINEM）は、2025年最初の4か月間における国内の鉱業投資が<strong>14億4,300万米ドル</strong>に達し、前年同期比で<strong>7.3％の成長</strong>を記録したと発表しました。これにより、鉱業分野におけるポジティブな成長傾向がさらに確実なものとなっています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            MINEMの鉱業促進・持続可能性総局が作成した「鉱業統計速報（BEM）」によると、「探鉱」分野の投資額は1月から4月までで<strong>2億1,500万米ドル</strong>に達し、2024年の同期間と比べて<strong>48.9％の増加</strong>となりました。この伸びは、全国的な探査活動の持続的な再活性化を裏付けるものです。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            この分野で特に活発だったプロジェクトとしては、<strong>Los Chancas（アプリマク県）、Zafranal（アレキパ県）、San Gabriel（モケグア県）、Tambomayo（アレキパ県）</strong>が挙げられます。これらの投資は、重要鉱物の国際的な需要の高まりを背景に、ポートフォリオ強化への関心が高まっていることを反映しています。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            「探鉱分野の成長は、市場環境の改善だけでなく、持続可能性と将来の拡大を見据えた鉱業投資家の長期的な視点を示すものです」とMINEMは述べています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            また、<strong>インフラ分野の投資額</strong>は、累計で<strong>3億1,500万米ドル</strong>となり、前年同期比で<strong>11％増</strong>、3月から4月の単月比較では<strong>35.6％の急増</strong>となりました。これにより、鉱業全体の投資の中で最も大きな割合（<strong>21.8％</strong>）を占める分野となっています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            この拡大は、抽出環境における技術的・物流的課題に対応するため、主要企業が運営インフラの強化に取り組んできた結果です。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            この分野の成長をけん引した主な企業には、<strong>Southern Peru Copper Corporation（Cuajone鉱山およびLa Fundición工場）、Compañía Minera Antamina、Minera Las Bambas（Ferrobambaユニット）、Sociedad Minera Cerro Verde</strong>が含まれます。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            「これら4社の投資行動は、技術の近代化、能力の拡張、そしてより持続可能な操業への明確な戦略を反映しています」とMINEMの報告書は強調しています。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            最後に、地域別では<strong>モケグア県</strong>が国内最大の鉱業投資先として引き続き首位に立ち、全体の<strong>15％</strong>を占めました。これに続いて、<strong>アレキパ県</strong>が<strong>11.37％のシェア</strong>を記録しました。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            (Sociedad Nacional de Minería, Petróleo y Energía, 2025)
          </p>


          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">参考文献</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              Sociedad Nacional de Minería, Petróleo y Energía. (2025年6月16日). MINEM: Inversión minera superó los US$ 1,443 millones entre enero y abril de 2025.
            </p>
            <p className="text-xs md:text-sm text-gray-600 japanese-text">
              参照先: desde adentro:<br/>
              <Link href="https://www.desdeadentro.pe/2025/06/minem-inversion-minera-supero-los-us-1443-millones-entre-enero-y-abril-de-2025/" className="text-blue-600 hover:underline text-xs break-all">
                https://www.desdeadentro.pe/2025/06/minem-inversion-minera-supero-los-us-1443-millones-entre-enero-y-abril-de-2025/
              </Link>
            </p>
          </div>

          <div className="text-right mt-8">
            <p className="text-xs md:text-sm text-gray-600 japanese-text">在日ペルー大使館</p>
            <p className="text-xs md:text-sm text-gray-600 japanese-text">非公式翻訳</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MiningInvestmentPage;