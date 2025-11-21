import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const MiningInvestmentPage = () => {
  const { locale } = useRouter();
  
  return (
    <Layout language={locale} title="2025年上半期の鉱業投資累計は23億600万米ドルに到達">
      <Banner
        alt={"2025年上半期の鉱業投資累計は23億600万米ドルに到達"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
        src2={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564004/WEB/gastronomia/inversiones400_nb0noc.jpg"
        }
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-sm text-gray-600">非公式翻訳</p>
        </div>

        <div className="mb-6">
          <h1 className="text-lg font-normal text-gray-800 mb-4">
            Sociedad Nacional de Minería, Petróleo y Energía
          </h1>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            2025年上半期の鉱業投資累計は23億600万米ドルに到達
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            2025年8月18日（月）
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            数値は、探鉱およびインフラ分野での新たな取り組みに対して同国が生み出す信頼感の高まりを反映
          </p>

          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-blue-800 mb-2">鉱業投資</h3>
            <p className="text-sm text-gray-700">発表日：2025年8月18日（月）</p>
          </div>

          <p className="mb-4 text-gray-800 leading-relaxed">
            本年最初の6か月間における<strong>鉱業投資累計額は23億600万米ドルに達し、2024年同時期と比べ7.2％の成長を記録</strong>した。恩恵処理施設、探鉱、インフラ分野における顕著な活発化がその要因であると、エネルギー鉱山省（MINEM）が報告した。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            最新号の『鉱業統計速報（BEM）』によると、この成長は<strong>探鉱（＋34.9％）およびインフラ（＋12.2％）における著しい増加</strong>に支えられており、鉱業活動の持続的な回復を反映している。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            MINEMの鉱業推進・持続可能性総局が作成した同文書は、これらの数値が<strong>良好な投資環境、マクロ経済の好条件、そして新規プロジェクト開発に対する民間部門の信頼回復</strong>により得られたものであると強調している。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            また、<strong>2025年6月の鉱業投資は4億6,700万米ドルに達し</strong>、当年5月（4億200万米ドル）と比べ16.1％の増加を示した。さらに前年同月（3億8,500万米ドル）と比べても<strong>21.4％の成長を記録し、好調な推移</strong>を見せた。
          </p>

          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
            <h4 className="font-bold text-green-800 mb-2">2025年6月の分野別投資増加率</h4>
            <ul className="text-sm text-gray-800 space-y-1">
              <li>• 恩恵処理施設投資：<strong>＋33.1％</strong></li>
              <li>• 鉱山機械設備：<strong>＋59.0％</strong></li>
              <li>• 探鉱：<strong>＋16.5％</strong></li>
              <li>• インフラ：<strong>＋28.4％</strong></li>
              <li>• その他：<strong>＋13.1％</strong></li>
            </ul>
          </div>

          <p className="mb-4 text-gray-800 leading-relaxed">
            詳細分析によると、2025年6月の<strong>恩恵処理施設分野の投資は前年同月比で33.1％の増加</strong>を記録し、処理能力の最適化・拡張に向けた支出や、各生産ユニットにおける技術改善の実施を反映する重要な回復が見られた。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            鉱山機械設備分野では、<strong>2025年6月の投資が前年同月比59.0％の増加</strong>を示し、大型機械や補助設備の取得における支出増加に起因するものとなった。これらは各鉱山ユニットのオペレーション強化に不可欠である。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            探鉱分野に関しては、<strong>2025年6月の投資が前年同月比16.5％の伸び</strong>を見せ、初期段階プロジェクトの活発化のもと、同国における探鉱活動の持続的な回復を裏付けた。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            また、<strong>2025年1月から6月までの累計で、探鉱投資は前年同期比34.9％の増加</strong>を示し、国内鉱業投資の中で最も高い成長率を示す分野の一つとして定着した。総投資に占める割合は14.1％となった。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            一方、<strong>2025年6月のインフラ分野の投資は、前年同月（8,600万米ドル）と比べて28.4％増加</strong>した。この結果は、鉱業部門がその運営インフラの強化に引き続き取り組んでいることを改めて示すものとなった。
          </p>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              Sociedad Nacional de Minería, Petróleo y Energía
            </p>
            <p className="text-xs text-gray-500">
              [Sociedad Nacional de Minería, Petróleo y Energía, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">参考文献</h3>
            <p className="text-sm text-gray-700 mb-2">
              Sociedad Nacional de Minería, Petróleo y Energía. (2025年08月18日). Inversión minera acumulada alcanzó los US$ 2,306 millones en el primer semestre de 2025.
            </p>
            <p className="text-sm text-gray-600">
              参照先: desde adentro, Revista de la Sociedad Nacional de Minería, Petróleo y Energía:<br/>
              <Link href="https://www.desdeadentro.pe/2025/08/inversion-minera-acumulada-alcanzo-los-us-2306-millones-en-el-primer-semestre-de-2025/" className="text-blue-600 hover:underline text-xs break-all">
                https://www.desdeadentro.pe/2025/08/inversion-minera-acumulada-alcanzo-los-us-2306-millones-en-el-primer-semestre-de-2025/
              </Link>
            </p>
          </div>

          <div className="text-right mt-8">
            <p className="text-sm text-gray-600">在日ペルー大使館</p>
            <p className="text-sm text-gray-600">非公式翻訳</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MiningInvestmentPage;