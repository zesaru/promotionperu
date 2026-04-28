import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const MinemPunoExplorationPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-04-16T09:22:00+09:00"
      title="Puno州、国内鉱山探査投資ポートフォリオで首位に"
      description="MINEMは、Puno州が5つの鉱山探査プロジェクト、総額1億4,620万米ドルで国内首位に立ったと報告。金、銅、銀、錫、ウランの高いポテンシャルを背景に、2026年探査ポートフォリオの19.3%を占めます。"
    >
      <Banner
        alt={"Puno州の鉱山探査投資ポートフォリオを伝えるMINEMニュースバナー"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl">
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-xs md:text-sm text-gray-600">非公式翻訳</p>
        </div>

        <div className="mb-8">
          <p className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            エネルギー鉱山省（MINEM）
          </p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            Puno州、国内鉱山探査投資ポートフォリオで首位に
          </h1>
          <p className="text-xs md:text-sm text-gray-600 mb-2">プレスリリース</p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">2026年4月16日 - 午前9時22分</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              Puno州は5つのプロジェクト、総額1億4,620万米ドルで、2026年鉱山探査ポートフォリオの19.3%を占め、国内首位に立っています。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            Puno州はペルー鉱業における重要なプレーヤーとしての地位を確立し、国内の鉱山探査投資誘致で首位となっています。5つのプロジェクトで総額<strong>1億4,620万米ドル</strong>に上り、これは2026年鉱山探査プロジェクトポートフォリオの登録額の<strong>19.3%</strong>に相当すると、エネルギー鉱山省（MINEM）が報告しました。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            金、銅、銀、錫、ウランの高いポテンシャルで注目されるPuno州は、Minsur S.A.社の錫プロジェクト<strong>「ケナマリ」</strong>の半詳細環境影響調査第2次修正（2da MEIAsd）で重要な役割を果たしています。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">州別ランキングの構図</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              第2位はArequipa州で、8つの鉱山探査プロジェクトが<strong>1億4,510万米ドル</strong>で評価されています。これには、Tambomayoプロジェクトの半詳細環境影響調査第4次修正（4ta MEIAsd）、Iluminadoraプロジェクトの環境影響宣言第1次修正（1ra MDIA）、Los Chapitosの第2次MEIAsdなどが含まれます。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              これらのプロジェクトは主に銅と金であり、ペルー南部山岳地帯における鉱業セクター拡大におけるArequipa州の戦略的役割を強化します。これは、戦略的鉱物の探査への関心の高まりを示しており、将来の探査への魅力を高め、国内産業への影響を強化しています。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">Ayacucho州とApurímac州の位置付け</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              Ayacucho州は第3位で、5つのプロジェクトで<strong>1億2,410万米ドル</strong>、総投資額の<strong>16.4%</strong>を占めています。その中でも、半詳細環境影響調査（EIAsd）を持つ<strong>「ソンブレロ」</strong>プロジェクトが<strong>1億620万米ドル</strong>でポートフォリオをリードしています。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              一方、Apurímac州は<strong>1億200万米ドル</strong>の投資で第4位に位置し、エネルギー転換と世界の脱炭素化に不可欠な赤色金属（銅）の探査において、ペルーの主要な州としての役割を再確認しました。
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">主要な数字</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">5</p>
                <p className="text-sm text-gray-700 japanese-text">Puno州のプロジェクト</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">US$146.2M</p>
                <p className="text-sm text-gray-700 japanese-text">Puno州投資額</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">19.3%</p>
                <p className="text-sm text-gray-700 japanese-text">全国ポートフォリオ比率</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">39</p>
                <p className="text-sm text-gray-700 japanese-text">その他州のプロジェクト</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">投資分散と鉱業競争力</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              残りの投資はMoquegua、Junín、Cusco、Lima、Pasco、Áncash、Huancavelica、Tacna、Cajamarca、Lambayeque、La Libertad、Piura、Icaに分散しており、<strong>39のプロジェクト</strong>で合計<strong>2億3,960万米ドル</strong>に達し、総投資額の<strong>31.7%</strong>を占めています。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              この投資の多様化は、国内の鉱業活動の拡大と持続可能性へのコミットメントを再確認するものです。また、アンデス山脈の豊かな地質学的資源を活用し、鉱業競争力をさらに強化しようとする継続的な関心を示しています。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            リマ、2026年4月16日
          </p>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">参考文献</h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              Ministerio de Energía y Minas. (2026年04月16日). Puno lidera cartera de inversiones en exploraciones mineras a nivel nacional.
              <br />
              参照先:{" "}
              <a
                href="https://www.gob.pe/institucion/minem/noticias/1379648-puno-lidera-cartera-de-inversiones-en-exploraciones-mineras-a-nivel-nacional"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Estado Peruano: https://www.gob.pe/institucion/minem/noticias/1379648-puno-lidera-cartera-de-inversiones-en-exploraciones-mineras-a-nivel-nacional
              </a>
            </p>
          </div>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <p className="text-xs md:text-sm text-gray-600 mb-2">在日ペルー大使館</p>
            <p className="text-xs md:text-sm text-gray-600">経済商務担当</p>
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

export default MinemPunoExplorationPage;
