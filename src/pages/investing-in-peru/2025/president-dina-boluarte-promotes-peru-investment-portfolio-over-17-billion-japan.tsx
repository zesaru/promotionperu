import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";
import Banner from "@/components/Banner";

import Layout from "@/components/Layout";

const PresidentBoluarteInvestmentPage = () => {
  const { locale } = useRouter();
  
  return (
    <Layout language={locale} title="President Dina Boluarte Promotes Peru's Investment Portfolio of Over US$ 17 Billion in Japan">
      <Banner
        alt={"President Dina Boluarte Promotes Peru's Investment Portfolio of Over US$ 17 Billion in Japan"}
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
            ペルー共和国大統領府
          </h1>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            ディナ・ボルアルテ大統領、日本で170億米ドル超のペルー投資案件を推進
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <ul className="text-sm text-gray-600 mb-6 list-disc ml-6">
            <li>大統領は、日本の企業関係者に対し、外国投資に有利な条件を強化することを目的とした第2次規制緩和パッケージについて説明しました。</li>
          </ul>
          <p className="text-sm text-gray-600 mb-6">
            2025年8月6日 20時56分
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            <strong>東京、2025年8月6日</strong> ― ペルー共和国大統領ディナ・エルシリア・ボルアルテ・セガラは、本日、日本公式訪問の一環として、第16回ペルー・日本経済協議会（CEPEJA）会合を開会しました。この場で、大統領は日本の経済界関係者に対し、<strong>総額173億米ドル規模のペルー投資案件ポートフォリオ</strong>を紹介しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            東京で開催されたこの経済会合で、大統領は、今年ペルーが提供する重要なポートフォリオは<strong>28件の案件で構成され、2025年中に入札・落札が行われる予定であり、その総額は82億米ドルを超える</strong>と強調しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            「これらの案件は、<strong>保健、上下水道、教育、運輸、通信、インフラ、鉱業、炭化水素、かんがい事業</strong>などの重要分野に向けられています。また、2026年には、総額91億米ドル超に相当する48件の追加案件が入札予定です」と述べました。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            続けて、大統領は、ペルー政府の主要な目標の一つは、国際市場の拡大、明確なルールに基づく対外貿易の強化、そして国の発展を促す投資誘致を通じて、<strong>ペルー経済の持続可能な成長を推進する</strong>ことであると表明しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            「これらすべては、不平等を是正し、より高い付加価値を持つ非伝統的製品を生産・輸出できる経済へと前進するためのものです」と強調しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            その上で、大統領は、外国投資に有利な環境を確立するため、政府が集中的に取り組んでいることを説明しました。具体的には、<strong>官僚的な障壁を撤廃し、行政手続きを簡素化することを目的とした第1次規制緩和パッケージを実施済み</strong>であると述べました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            「現在、<strong>行政コストを削減し、投資に対するあらゆる官僚的障害を取り除くことを目的とした第2次規制緩和パッケージを間もなく発表する予定</strong>です」と述べました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            さらに、ボルアルテ大統領は、ペルーと日本は現代的な経済法制度の枠組みを有しており、それにより貿易や投資が安全かつ円滑に行えると指摘しました。この枠組みには、<strong>経済連携協定（EPA）、投資の相互促進・保護協定、二重課税回避・脱税防止条約</strong>が含まれます。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            また、ペルーは、その地理的多様性と卓越した生物多様性により、国際的に高く評価される農産物および水産物の輸出供給力を持つことを強調しました。加えて、経済開放政策と主要な貿易協定（<strong>包括的かつ先進的な環太平洋パートナーシップ協定＝CPTPP</strong>など）への参加により、<strong>160を超える国際市場へのアクセス</strong>を有していると述べました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            「国際情勢の課題の中で、ペルーは信頼できるパートナーとしての地位を確立しています。ペルーは、高い栄養価を有する食品や、日本のハイテク産業および共同産業プロジェクトの発展に不可欠な重要鉱物の供給において、<strong>日本にとって戦略的な同盟国となる潜在力</strong>を持っています」と強調しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            最後に、大統領は、日本の経済界関係者に対し、<strong>2025年9月22日から26日までアレキパ市で開催される「PERUMIN第37回鉱業大会」</strong>への参加を招請しました。この重要なイベントは、ペルーの鉱業ポテンシャルを紹介し、日本にとって戦略的供給国としての地位を確立する絶好の機会になると述べました。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            この会合には、大統領に同行して、<strong>ラウル・ペレス・レジェス・エスペホ経済財務大臣、ホルヘ・ルイス・モンテロ・コルネホ エネルギー鉱山大臣、エルメール・シアレル・サルセド 外務大臣、ウルスラ・レオン・チェンペン 外貿観光大臣、セサル・サンドバル・ポソ 運輸通信大臣、アンヘル・マネロ・カンポス 農業灌漑開発大臣</strong>が出席しました。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            [Presidencia de la República del Perú, 2025]
          </p>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">参考文献</h3>
            <p className="text-sm text-gray-700 mb-2">
              Presidencia de la República del Perú. (2025年08月06日). Presidenta Dina Boluarte promueve cartera de proyectos del Perú por más de US$ 17 000 millones en Japón.
            </p>
            <p className="text-sm text-gray-600">
              参照先: Estado Peruano:<br/>
              <Link href="https://www.gob.pe/institucion/presidencia/noticias/1222261-presidenta-dina-boluarte-promueve-cartera-de-proyectos-del-peru-por-mas-de-us-17-000-millones-en-japon" className="text-blue-600 hover:underline text-xs break-all">
                https://www.gob.pe/institucion/presidencia/noticias/1222261-presidenta-dina-boluarte-promueve-cartera-de-proyectos-del-peru-por-mas-de-us-17-000-millones-en-japon
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

export default PresidentBoluarteInvestmentPage;