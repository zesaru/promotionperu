import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const MiningInvestmentPage = () => {
  const { locale } = useRouter();
  
  return (
    <Layout
      language={locale}
      articlePublishedTime="2025-08-18T00:00:00+09:00"
      title="2025年上半期のペルー鉱業投資累計は23億600万米ドルに到達"
      description="ペルーの2025年上半期の鉱業投資は23億600万米ドルに達し、前年同期比7.2%増を記録。探鉱、インフラ、選鉱・処理設備への投資拡大が成長を後押しした。"
    >
      <Banner
        alt={"2025年上半期のペルー鉱業投資が23億600万米ドルに達したことを伝えるバナー"}
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
            Sociedad Nacional de Minería, Petróleo y Energía
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            2025年上半期のペルー鉱業投資累計は23億600万米ドルに到達
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025年8月18日（月）
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            この結果は、探鉱およびインフラ分野における新たな取り組みに対して、ペルーが投資家の信頼を着実に高めていることを示しています。
          </p>

          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-blue-800 mb-2">鉱業投資</h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">発表日: 2025年8月18日（月）</p>
          </div>

          <p className="mb-4 text-gray-800 leading-relaxed">
            エネルギー鉱山省（MINEM）によると、2025年最初の6か月間における<strong>鉱業投資累計額は23億600万米ドルに達し、2024年同期比で7.2％の成長</strong>を記録しました。恩恵処理施設、探鉱、インフラ分野における顕著な活性化が、その主な要因とされています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            最新版の『鉱業統計速報（BEM）』によれば、この成長は<strong>探鉱（＋34.9％）およびインフラ（＋12.2％）の大幅な増加</strong>に支えられており、鉱業活動の持続的な回復を反映しています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            MINEM鉱業推進・持続可能性総局が作成した同報告書は、これらの数値が<strong>良好な投資環境、マクロ経済の安定、そして新規プロジェクト開発に対する民間部門の信頼回復</strong>によって支えられていることを強調しています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            また、<strong>2025年6月の鉱業投資は4億6,700万米ドルに達し</strong>、同年5月（4億200万米ドル）と比べて16.1％増加しました。前年同月（3億8,500万米ドル）比でも<strong>21.4％の成長</strong>を記録しており、力強い推移が続いています。
          </p>

          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
            <h4 className="font-bold text-green-800 mb-2">2025年6月の分野別投資増加率</h4>
            <ul className="text-sm text-gray-800 space-y-1">
              <li>・恩恵処理施設投資: <strong>+33.1％</strong></li>
              <li>・鉱山機械設備: <strong>+59.0％</strong></li>
              <li>・探鉱: <strong>+16.5％</strong></li>
              <li>・インフラ: <strong>+28.4％</strong></li>
              <li>・その他: <strong>+13.1％</strong></li>
            </ul>
          </div>

          <p className="mb-4 text-gray-800 leading-relaxed">
            詳細分析によると、2025年6月の<strong>恩恵処理施設分野の投資は前年同月比で33.1％増</strong>となりました。これは、処理能力の最適化・拡張に向けた支出や、生産ユニットごとの技術改善が進んだことを反映しています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            鉱山機械設備分野では、<strong>2025年6月の投資が前年同月比59.0％増</strong>となりました。大型機械や補助設備の取得に向けた支出拡大が背景にあり、各鉱山ユニットの操業強化に直結しています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            探鉱分野では、<strong>2025年6月の投資が前年同月比16.5％増</strong>となり、初期段階プロジェクトの活発化を背景に、国内の探鉱活動が持続的に回復していることを裏付けました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            また、<strong>2025年1月から6月までの累計で、探鉱投資は前年同期比34.9％増</strong>となり、鉱業投資の中でも最も高い成長率を示す分野の一つとなりました。総投資に占める構成比は14.1％です。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            一方、<strong>2025年6月のインフラ分野の投資は前年同月比28.4％増</strong>となりました。これは、鉱業部門が操業インフラの強化に継続して取り組んでいることを改めて示す結果です。
          </p>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2">
              Sociedad Nacional de MinerÃ­a, PetrÃ³leo y EnergÃ­a
            </p>
            <p className="text-xs text-gray-500">
              [Sociedad Nacional de MinerÃ­a, PetrÃ³leo y EnergÃ­a, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">å‚è€ƒæ–‡çŒ®</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              Sociedad Nacional de MinerÃ­a, PetrÃ³leo y EnergÃ­a. (2025å¹´08æœˆ18æ—¥). InversiÃ³n minera acumulada alcanzÃ³ los US$ 2,306 millones en el primer semestre de 2025.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              å‚ç…§å…ˆ: desde adentro, Revista de la Sociedad Nacional de MinerÃ­a, PetrÃ³leo y EnergÃ­a:<br/>
              <Link href="https://www.desdeadentro.pe/2025/08/inversion-minera-acumulada-alcanzo-los-us-2306-millones-en-el-primer-semestre-de-2025/" className="text-blue-600 hover:underline text-xs break-all">
                https://www.desdeadentro.pe/2025/08/inversion-minera-acumulada-alcanzo-los-us-2306-millones-en-el-primer-semestre-de-2025/
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

export default MiningInvestmentPage;
