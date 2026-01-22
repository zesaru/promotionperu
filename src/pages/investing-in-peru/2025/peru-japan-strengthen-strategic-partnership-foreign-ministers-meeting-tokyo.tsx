import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const PeruJapanStrategicPartnershipPage = () => {
  const { locale } = useRouter();
  
  return (
    <Layout language={locale} title="Peru and Japan Strengthen Strategic Partnership in Foreign Ministers Meeting in Tokyo">
      <Banner
        alt={"Peru and Japan Strengthen Strategic Partnership in Foreign Ministers Meeting in Tokyo"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600 japanese-text">在日ペルー大使館</p>
          <p className="text-xs md:text-sm text-gray-600 japanese-text">非公式翻訳</p>
        </div>

        <div className="mb-6">
          <h1 className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            ペルー外務省
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            ペルーと日本、東京での外相会談で戦略的パートナーシップを強化
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <ul className="text-xs md:text-sm text-gray-600 mb-6 list-disc ml-6">
            <li>2024年ロードマップの進展と、わずか8か月間で実行された10の合意が強調されました。</li>
          </ul>
          <p className="text-sm text-gray-600 mb-4">
            2025年8月8日 17時38分
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            プレスリリース No.171-25
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            ディナ・ボルアルテ大統領の日本公式訪問の一環として、<strong>エルメール・シアレル外務大臣</strong>は、日本の<strong>岩屋毅外務大臣</strong>と会談し、卓越した二国間関係を再確認し、さらに強化しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            会談では、<strong>2016年に確立された戦略的パートナーシップ</strong>によって推進されてきた作業計画の活発な進展が強調され、2024年に採択されたペルー・日本ロードマップの顕著な成果が紹介されました。これらは、貿易・協力関係の深化に向けた双方の強いコミットメントを示すものです。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            <strong>わずか8か月の間に、10の合意が実行されました</strong>。その中には、ペルー国民に対するビザ免除の再導入、ビジネスマッチングや投資促進イベント、第16回ペルー・日本経済協議会（CEPEJA）会合の開催などが含まれます。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            また、日本からペルーへの投資拡大、特に<strong>インフラおよび鉱業分野</strong>での可能性についても議論されました。シアレル外相は、<strong>総額82億米ドル超の28件の投資プロジェクト、および2026年に予定される48件の追加案件</strong>を紹介し、これらの投資を保護するための強固な法的枠組みが存在することを強調しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            さらに同外相は、ペルーの輸出潜在力にも言及し、<strong>ペルーが4年連続で生鮮ブルーベリーの世界最大の輸出国</strong>であることを紹介しました。また、このブルーベリーが近い将来日本市場に参入することへの期待を表明し、すでに輸出されているペルー産ブドウ、マンゴー、アボカドなどを補完する存在となると述べました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            一方、日本の外相は、<strong>150年以上にわたる友好な外交関係</strong>と、南米で2番目に大きい日系人・日本人移民コミュニティを有する重要な国ペルーとの関係をさらに強化したいとの意向を表明しました。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            最後に、協力の証として、両外相は<strong>総額3億円（約220万米ドル）相当の書簡交換</strong>を行い、ペルー向けの物品・サービスの取得に充てることとしました。さらに、トーレ・タグレ宮（外務省本庁舎）の長は、<strong>日本からペルーへの消防車10台の寄贈</strong>に感謝の意を表し、これは防災分野における強固な協力をさらに強めるものであると述べました。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            [Ministerio de Relaciones Exteriores, 2025]
          </p>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">参考文献</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              Ministerio de Relaciones Exteriores. (2025年08月08日). Perú y Japón fortalecen su asociación estratégica en reunión de cancilleres en Tokio.
            </p>
            <p className="text-xs md:text-sm text-gray-600 japanese-text">
              参照先: Estado Peruano:<br/>
              <Link href="https://www.gob.pe/institucion/rree/noticias/1223456-peru-y-japon-fortalecen-su-asociacion-estrategica-en-reunion-de-cancilleres-en-tokio" className="text-blue-600 hover:underline text-xs break-all">
                https://www.gob.pe/institucion/rree/noticias/1223456-peru-y-japon-fortalecen-su-asociacion-estrategica-en-reunion-de-cancilleres-en-tokio
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

export default PeruJapanStrategicPartnershipPage;