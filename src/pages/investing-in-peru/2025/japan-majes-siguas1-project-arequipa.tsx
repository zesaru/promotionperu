import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const InvestmentPage = () => {
  const { locale } = useRouter();
  
  return (
    <Layout language={locale} title="政府はアレキパへの約束を果たし、日本が Majes Siguas I の整備を担うことを発表">
      <Banner
        alt={"政府はアレキパへの約束を果たし、日本が Majes Siguas I の整備を担うことを発表"}
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
            農業灌漑省（MIDAGRI）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            政府はアレキパへの約束を果たし、日本が Majes Siguas I の整備を担うことを発表
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025年6月19日 13時26分
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            経済再活性化と灌漑プロジェクトの停滞解消を目的とした政府方針の一環として、農業灌漑省（MIDAGRI）は、<strong>Majes Siguas I の整備に関する技術支援を日本が担う</strong>ことを発表しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            「昨年11月に本件に関する国際公募を開始しました。最終的に世界の5つの有力国が本プロジェクトへの関心を表明し、本日、日本政府がMajes Siguas Iの総合的な整備技術支援を担う国として選ばれたことを発表いたします。これはアレキパおよびペルー南部にとって極めて重要なインフラです」と、MIDAGRIのアンヘル・マネロ大臣は記者会見で述べました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            Majes Siguas I の整備には、<strong>5億3,100万米ドルを超える投資</strong>が見込まれており、Majes平原にある1万6,000ヘクタールの農地の灌漑の継続性を保証することを目的としています。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            「Majes Siguas I のインフラを修復・近代化するということは、1万6,000ヘクタールの小規模農家に対する水の確保を意味します。そして、当初の計画である2万4,000ヘクタールへの拡張を完了させることにもなります。つまり、<strong>新たに8,000ヘクタールの農地が確保される</strong>ということです」と大臣は付け加えました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            これらの施策により、MIDAGRIは地域経済への好影響を見込み、<strong>3万3,120人の直接雇用の創出</strong>、農業活動の強化、および生産者家庭の生活向上を目指しています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            技術支援は、提出された提案に基づき選定された日本政府が、<strong>5年3か月にわたって実施する予定</strong>です。「保守的な見通しでは、工事の開始は2028年とされていますが、MIDAGRIは全力で手続きを加速させ、<strong>2027年中の工事開始を目指しています</strong>。Chavimochicプロジェクトと同様、スケジュールの短縮に取り組みます」とカンポス大臣は明言しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            「日本のように最先端の技術を有し、世界各国で水インフラの整備に協力してきた一流の国が、Majes Siguas I を担ってくれることを大変嬉しく思います。実際、日本は数十年前からペルーにおける水インフラの開発を支援してきました」とマネロ・カンポス大臣は強調しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            周知のとおり、<strong>G2G（政府間）連携</strong>は、技術的・財政的な協力を強化し、プロジェクトの効果的かつ適時な実行を保証する二国間の取り組みです。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            このように、MIDAGRIは、Majes Siguas I に関する今回の重要な発表が、<strong>農業フロンティアの拡大、高度技術の導入、地域の包括的発展の基盤</strong>となるものであり、食料安全保障と持続可能な成長に対する政府の確固たるコミットメントを再確認するものであると述べました。
          </p>


          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2 japanese-text">
              農業灌漑省（MIDAGRI）
            </p>
            <p className="text-sm text-gray-600 mb-4">
              広報・広報画像室
            </p>
            <p className="text-xs text-gray-500">
              [MINISTERIO DE DESARROLLO AGRARIO Y RIEGO - OFICINA DE COMUNICACIONES E IMAGEN INSTITUCIONAL, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">参考文献</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              MINISTERIO DE DESARROLLO AGRARIO Y RIEGO - OFICINA DE COMUNICACIONES E IMAGEN INSTITUCIONAL. (2025年6月19日). Gobierno cumple con Arequipa y anuncia que Japón se hará cargo de la puesta a punto de Majes Siguas I.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              参照先: Gog.pe - Plataforma Digital Única del Estado Peruano:<br/>
              <Link href="https://www.gob.pe/institucion/midagri/noticias/1190713-gobierno-cumple-con-arequipa-y-anuncia-que-japon-se-hara-cargo-de-la-puesta-a-punto-de-majes-siguas-i" className="text-blue-600 hover:underline text-xs break-all">
                https://www.gob.pe/institucion/midagri/noticias/1190713-gobierno-cumple-con-arequipa-y-anuncia-que-japon-se-hara-cargo-de-la-puesta-a-punto-de-majes-siguas-i
              </Link>
            </p>
          </div>

          <div className="text-right mt-8">
            <p className="text-xs md:text-sm text-gray-600">在日ペルー大使館</p>
            <p className="text-xs md:text-sm text-gray-600">非公式翻訳</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvestmentPage;