import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const InvestmentPage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title="エネルギー鉱山省（MINEM）、アレキパ、リマ、アプリマックおよびプーノにおける送電プロジェクトの落札を予定">
      <Banner
        alt={"エネルギー鉱山省（MINEM）、アレキパ、リマ、アプリマックおよびプーノにおける送電プロジェクトの落札を予定"}
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
            エネルギー鉱山省（MINEM）
          </h1>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            エネルギー鉱山省（MINEM）、アレキパ、リマ、アプリマックおよびプーノにおける送電プロジェクトの落札を予定
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            2025年9月3日 午前9時51分
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            これらは、投資促進庁（ProInversión）に委託された<strong>送電計画2023-2032に含まれる18件のプロジェクトの第3グループ</strong>に属し、<strong>総投資額は2億1,438万米ドル</strong>に上ります。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            エネルギー鉱山省（MINEM）は、<strong>9月15日</strong>に投資促進庁（ProInversión）を通じて、<strong>アレキパ、リマ、アプリマックおよびプーノ地域の数百万人の国民に恩恵をもたらす4つの重要な電力プロジェクト</strong>の落札を行うことを発表しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            これらのプロジェクトは送電計画2023-2032の第3グループに属し、<strong>総額2億1,438万米ドルの投資</strong>を見込んでおり、<strong>全国統合電力システム（SEIN）を強化</strong>し、全国での電力サービスの安全性と信頼性を確保することを目的としています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            落札予定のプロジェクトは以下の通りです：
          </p>

          <ul className="mb-4 text-gray-800 leading-relaxed list-disc pl-6">
            <li className="mb-2">
              <strong>新パルカ変電所220 kV、LT 220 kV パルカ–ラ・パスカナ、拡張および関連変電所（アレキパ）</strong>（ITCプロジェクト）
            </li>
            <li className="mb-2">
              <strong>220 kV プラニシエ–インドゥストリアレス間連系線、第3回線への拡張</strong>（ITCプロジェクト）
            </li>
            <li className="mb-2">
              <strong>138 kV アバンカイ・ヌエバ–アンダワイラス間連系線、拡張および関連変電所</strong>（ITCプロジェクト）
            </li>
            <li className="mb-2">
              <strong>138 kV サン・ラファエル–アナネア分岐連系線、拡張および関連変電所</strong>（ITCプロジェクト）
            </li>
          </ul>

          <p className="mb-4 text-gray-800 leading-relaxed">
            これらのプロジェクトはいずれも、<strong>国家主導による自己資金型イニシアティブ18件</strong>の一環です。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            エネルギー総局長のエルビス・テジョ氏は、「<strong>エネルギーなくして発展なし。これらのプロジェクトは経済・社会の成長を可能にし、国民に直接的な利益をもたらすもの</strong>である」と強調しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            また、これらの事業によって、<strong>対象地域における電力需要の増加に効率的かつ高品質で対応する送電能力が強化</strong>され、商業、工業、サービス活動の発展を促進すると述べました。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            最後に、これらのプロジェクトが<strong>SEINを強化し、全国民にとってより安全で信頼性の高い電力サービス</strong>を提供することになると改めて強調しました。
          </p>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              エネルギー鉱山省（MINEM）
            </p>
            <p className="text-sm text-gray-600 mb-4">
              リマ、2025年9月3日
            </p>
            <p className="text-xs text-gray-500">
              [Ministerio de Energía y Minas, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">参考文献</h3>
            <p className="text-sm text-gray-700 mb-2">
              Ministerio de Energía y Minas. (2025年09月03日). MINEM otorgará buena pro para construcción de proyectos de transmisión eléctrica en Arequipa, Lima, Apurímac y Puno.
            </p>
            <p className="text-sm text-gray-600">
              参照先: Sitio Web del Estado Peruano:<br/>
              <Link href="https://www.gob.pe/institucion/minem/noticias/1239158-minem-otorgara-buena-pro-para-construccion-de-proyectos-de-transmision-electrica-en-arequipa-lima-apurimac-y-puno" className="text-blue-600 hover:underline text-xs break-all">
                https://www.gob.pe/institucion/minem/noticias/1239158-minem-otorgara-buena-pro-para-construccion-de-proyectos-de-transmision-electrica-en-arequipa-lima-apurimac-y-puno
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

export default InvestmentPage;