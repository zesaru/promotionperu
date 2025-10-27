import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const InvestmentPage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title="ペルーと日本、Majes Siguas計画の改修・拡張に関する歴史的契約を締結">
      <Banner
        alt={"ペルーと日本、Majes Siguas計画の改修・拡張に関する歴史的契約を締結"}
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
            Arequipa州政府
          </h1>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            ペルーと日本、Majes Siguas計画の改修・拡張に関する歴史的契約を締結
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            2025年10月10日（金）
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            Arequipaの大規模プロジェクトは止まりません。国内南部の農業・経済開発を見据え、2025年10月10日（金）に、<strong>ペルーと日本の間で国家間契約が締結されました</strong>。これはArequipa州政府の尽力によって実現したもので、Majes Siguas計画の改修・拡張を目的としています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            契約締結式はセルロ・フリ国際会議センターで行われ、<strong>Arequipa州知事のロヘル・サンチェス・サンチェス氏が主催</strong>しました。式典はまず、ペルー政府と日本政府による協力覚書（MOC）の署名で始まり、農業灌漑開発大臣アンヘル・マネロ・カンポス氏とペルー駐日特命全権大使、山本剛氏が署名しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            その後、国家間契約の署名が行われました。契約は農業灌漑開発省（MIDAGRI）と、<strong>Majes Siguas PMOコンソーシアムの責任者である金井晴彦氏</strong>との間で締結され、同コンソーシアムは灌漑システムの包括的近代化に向けた専門技術支援を担当します。また、国会農業委員会の委員長、ジェニー・ロペス・カスティージョ氏も出席しました。
          </p>

          <h3 className="text-lg font-semibold text-blue-800 mb-3 mt-6">
            プロジェクトの概要
          </h3>

          <p className="mb-4 text-gray-800 leading-relaxed">
            Majes Siguas計画の改修により、<strong>Colca川流域からSiguas川流域へ水を運ぶ灌漑システムが近代化・最適化され、最大流量34m³/sで効率的かつ持続可能な運用が可能</strong>となります。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            本プロジェクトには以下の要素が含まれます：
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
            <li className="leading-relaxed">
              <strong>Condoromaダムの全面的修繕および自動化</strong>
            </li>
            <li className="leading-relaxed">
              <strong>Tuti 取水口（Caylloma）の整備</strong>
            </li>
            <li className="leading-relaxed">
              <strong>アンデス山脈を貫く全長88kmのトンネルおよび13kmの運河の改修</strong>
            </li>
            <li className="leading-relaxed">
              <strong>Pitay取水口（Santa Isabel de Siguas）およびMajes–El Pedregal地域への水路への分岐</strong>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-blue-800 mb-3 mt-6">
            日本との協力の意義
          </h3>

          <p className="mb-4 text-gray-800 leading-relaxed">
            日本との協定は、<strong>技術リスクの低減、水の移送効率の向上、国際基準に基づく水資源管理の強化という戦略的前進</strong>を意味します。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            さらに、この協定により灌漑システムの再活性化が促進され、現在および将来の農家に利益をもたらすとともに、<strong>アーティチョーク、ぶどう、アボカドなど、ペルー南部の経済成長を牽引する主要農産物の輸出振興</strong>にも寄与します。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
            <p className="text-gray-800 leading-relaxed italic">
              「この協定は単に我々の水利インフラを近代化するだけでなく、<strong>Arequipaおよび国内南部における信頼、協力、持続可能な発展の新たな段階の始まり</strong>を意味します」
            </p>
            <p className="text-sm text-gray-600 mt-2">
              — Arequipa州知事 ロヘル・サンチェス・サンチェス氏
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              Arequipa州政府
            </p>
            <p className="text-sm text-gray-600 mb-4">
              広報室
            </p>
            <p className="text-xs text-gray-500">
              [Gobierno Regional Arequipa, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">参考文献</h3>
            <p className="text-sm text-gray-700 mb-2">
              Gobierno Regional Arequipa. (2025年10月10日). Perú y Japón firman contrato histórico para la Puesta a Punto y ampliación del Proyecto Majes Siguas.
            </p>
            <p className="text-sm text-gray-600">
              参照先: Gob.pe - Estado Peruano:<br/>
              <Link href="https://www.gob.pe/institucion/regionarequipa/noticias/1262069-peru-y-japon-firman-contrato-historico-para-la-puesta-a-punto-y-ampliacion-del-proyecto-majes-siguas" className="text-blue-600 hover:underline text-xs break-all">
                https://www.gob.pe/institucion/regionarequipa/noticias/1262069-peru-y-japon-firman-contrato-historico-para-la-puesta-a-punto-y-ampliacion-del-proyecto-majes-siguas
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
