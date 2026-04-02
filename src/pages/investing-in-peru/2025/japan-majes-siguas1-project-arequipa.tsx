import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const InvestmentPage = () => {
  const { locale } = useRouter();
  
  return (
    <Layout
      language={locale}
      articlePublishedTime="2025-06-19T13:26:00+09:00"
      title="政府はアレキパへの約束を果たし、日本が Majes Siguas I の整備を担うことを発表"
      description="ペルー政府は、アレキパ州向けの重要灌漑インフラであるMajes Siguas Iの整備について、日本が技術支援を担う方針を発表しました。"
    >
      <Banner
        alt={"日本がMajes Siguas Iの整備を担うことを発表したニュースバナー"}
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
            経済活性化と灌漑プロジェクトの停滞解消を目的とする政府方針の一環として、農業灌漑省（MIDAGRI）は、<strong>Majes Siguas I の整備に関する技術支援を日本が担う</strong>ことを発表しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            MIDAGRIのアンヘル・マネロ大臣は記者会見で、「昨年11月に本件に関する国際公募を開始しました。最終的に世界の5か国が関心を示し、本日、日本政府がMajes Siguas Iの総合的な整備技術支援を担う国として選定されたことを発表します。これはアレキパおよびペルー南部にとって極めて重要なインフラです」と述べました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            Majes Siguas I の整備には、<strong>5億3,100万米ドルを超える投資</strong>が見込まれており、Majes平原にある1万6,000ヘクタールの農地に対する灌漑の継続性を確保することを目的としています。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            大臣はさらに、「Majes Siguas I のインフラを修復・近代化することは、1万6,000ヘクタールの小規模農家に対する水の確保を意味します。そして、当初計画されていた2万4,000ヘクタールへの拡張を完了させることにもつながります。つまり、<strong>新たに8,000ヘクタールの農地が確保される</strong>ということです」と付け加えました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            これらの施策により、MIDAGRIは地域経済への波及効果を見込み、<strong>3万3,120人の直接雇用創出</strong>、農業活動の強化、そして生産者世帯の生活向上を目指しています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            技術支援は、提出された提案に基づいて選定された日本政府が、<strong>5年3か月にわたり実施する予定</strong>です。MIDAGRIは現在の想定よりも手続きを前倒しし、<strong>2027年中の工事開始</strong>を目指しています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            マネロ大臣はまた、「日本は最先端の技術を有し、長年にわたり世界各国で水インフラ整備を支援してきた実績があります。ペルーでも数十年にわたり水関連インフラの発展を支えてきました」と述べ、日本の経験と技術力への期待を示しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            <strong>G2G（政府間）連携</strong>は、技術面・財政面の協力を強化し、重要インフラ事業をより効率的かつ適時に実行するための二国間枠組みです。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            MIDAGRIは、今回の発表が<strong>農業フロンティアの拡大、高度技術の導入、地域の包摂的な発展の基盤</strong>となると位置づけており、食料安全保障と持続可能な成長に対する政府の強いコミットメントを改めて示しました。
          </p>


          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2 japanese-text">
              è¾²æ¥­çŒæ¼‘çœï¼ˆMIDAGRIï¼‰
            </p>
            <p className="text-sm text-gray-600 mb-4">
              åºƒå ±ãƒ»åºƒå ±ç”»åƒå®¤
            </p>
            <p className="text-xs text-gray-500">
              [MINISTERIO DE DESARROLLO AGRARIO Y RIEGO - OFICINA DE COMUNICACIONES E IMAGEN INSTITUCIONAL, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">å‚è€ƒæ–‡çŒ®</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              MINISTERIO DE DESARROLLO AGRARIO Y RIEGO - OFICINA DE COMUNICACIONES E IMAGEN INSTITUCIONAL. (2025å¹´6æœˆ19æ—¥). Gobierno cumple con Arequipa y anuncia que JapÃ³n se harÃ¡ cargo de la puesta a punto de Majes Siguas I.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              å‚ç…§å…ˆ: Gog.pe - Plataforma Digital Ãšnica del Estado Peruano:<br/>
              <Link href="https://www.gob.pe/institucion/midagri/noticias/1190713-gobierno-cumple-con-arequipa-y-anuncia-que-japon-se-hara-cargo-de-la-puesta-a-punto-de-majes-siguas-i" className="text-blue-600 hover:underline text-xs break-all">
                https://www.gob.pe/institucion/midagri/noticias/1190713-gobierno-cumple-con-arequipa-y-anuncia-que-japon-se-hara-cargo-de-la-puesta-a-punto-de-majes-siguas-i
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

export default InvestmentPage;
