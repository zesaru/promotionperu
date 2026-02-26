import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const RoqueBenavidesCopperPortfolioPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      title="ロケ・ベナビデス：ペルーは米州で最大の未開発銅プロジェクトのポートフォリオを保有"
      description="ロケ・ベナビデス氏は、ペルーが米州の未開発銅プロジェクト67件のうち19件を占めると指摘し、投資加速と競争条件の強化による世界的リーダーシップ確立の必要性を強調しました。"
    >
      <Banner
        alt={"Peru investment and mining news banner"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl ">
        <div className="m-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            ロケ・ベナビデス：ペルーは米州で最大の未開発銅プロジェクトのポートフォリオを保有
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-2">
            デ・ミナス・ブエナベントゥラ（Compañía de Minas Buenaventura S.A.A.）取締役会長
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            公開日：2026年2月18日（水）
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              ペルーは米州で最大の未開発銅プロジェクト・ポートフォリオを有する一方、その優位性を活かすには投資加速と競争条件の強化が不可欠です。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            戦略的鉱物へのアクセスを巡る国際競争が激化する中、ペルーは未だ開発されていない地質学的ポテンシャルが最も高い地域の一つとして位置付けられています。これは、デ・ミナス・ブエナベントゥラの取締役会長であり、ペルーで開催される2026年世界鉱業会議の講演者の一人でもあるロケ・ベナビデス氏が述べたものです。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              米州最大の未開発銅プロジェクト・ポートフォリオ
            </h3>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic mb-4 japanese-text">
              「ペルーは開発すべき銅プロジェクトの数が最も多い国です」
            </blockquote>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ベナビデス氏は、ペルー鉱業技術者協会（IIMP）とのインタビューにおいて、ペルーの真の強みは現時点の生産順位だけでなく、未だ開始されていない銅プロジェクトの厚いパイプラインにあると強調しました。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">19</p>
                <p className="text-sm text-gray-700 japanese-text">ペルーの銅プロジェクト数</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">67</p>
                <p className="text-sm text-gray-700 japanese-text">米州で確認された銅プロジェクト数</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">28.4%</p>
                <p className="text-sm text-gray-700 japanese-text">地域全体に占めるペルーの割合</p>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              ウッド・マッケンジーのデータに基づく集計では、ペルーは米州で確認された67の銅プロジェクトのうち19を占め、カナダ、チリ、米国を上回る規模のポートフォリオを保有しています。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              銅だけではない地質学的優位性
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              同氏は、ペルーの魅力は銅に限定されず、金、銀、亜鉛、鉛、錫の存在によって、世界でも極めて包括的な地質学的システムの一つを形成していると説明しました。
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic mb-4 japanese-text">
              「人類はその発展のために金属を必要としており、ペルーはそれらすべてを提供しています」
            </blockquote>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              また、アンデス山脈は世界で最も重要な金属生成帯の一つであり続けていると指摘し、ペルーの地質学的ポテンシャルの厚みを強調しました。
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              国内投資が示す構造的信頼
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ベナビデス氏は、国際分析で見過ごされがちな要素として、国内投資の比重の大きさを挙げました。これは、ペルー経済に対する長期的な信頼を示す重要なシグナルだとしています。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-green-200 rounded-lg p-4 text-center">
                <p className="text-4xl font-bold text-green-900 mb-2">80%</p>
                <p className="text-sm md:text-base text-gray-700 japanese-text">民間投資総額に占める国内投資</p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-4 text-center">
                <p className="text-4xl font-bold text-orange-900 mb-2">20%</p>
                <p className="text-sm md:text-base text-gray-700 japanese-text">民間投資総額に占める外国投資</p>
              </div>
            </div>

            <blockquote className="border-l-4 border-green-600 pl-4 text-sm md:text-base text-gray-700 italic japanese-text">
              「ペルー人自身が我が国への主要な投資家であることを指摘することが重要です」
            </blockquote>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              世界鉱業国としての位置づけと競争条件
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ベナビデス氏は、鉱業界の主要国としてオーストラリア、カナダ、米国、中国、そしてラテンアメリカではペルー、チリ、ブラジルを挙げました。その中でペルーは、地質学的ポテンシャルを持続可能で競争力のある生産へ転換できれば、さらにリーダーシップを強化できる余地があると述べています。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              同氏は、この利点を実際の成長へ結びつけるためには、投資の加速、制度面の予見可能性、そして国際競争力を高める条件整備が不可欠であると警告しました。
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              2026年世界鉱業会議に向けた視点
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              リマで2026年6月24日から26日まで開催される世界鉱業会議の出展者の一人として、ベナビデス氏は、世界的な議論の軸が「量」から「安定性・資源の質・長期ビジョン」へ移行していると見ています。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              今後の競争では、安定的な供給能力に加え、投資環境の一貫性と長期戦略を提示できる国が優位に立つとの見解を示しました。
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              要点まとめ
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  ペルーは米州の未開発銅プロジェクト67件のうち19件（28.4%）を占有
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  銅に加え、金・銀・亜鉛・鉛・錫を含む多様な鉱物資源が強み
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  民間投資総額の80%は国内投資、20%は外国投資
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  投資加速と競争条件の強化が、地質学的優位を世界的リーダーシップへ転換する鍵
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">
              引用文献
            </h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              DESDE ADENTRO. (2026年02月18日). Roque Benavides: Perú tiene el mayor portafolio de proyectos de cobre no desarrollados de América.
              <br />
              参照先:{" "}
              <a
                href="https://www.desdeadentro.pe/2026/02/roque-benavides-peru-tiene-el-mayor-portafolio-de-proyectos-de-cobre-no-desarrollados-de-america/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                DESDE ADENTRO: https://www.desdeadentro.pe/2026/02/roque-benavides-peru-tiene-el-mayor-portafolio-de-proyectos-de-cobre-no-desarrollados-de-america/
              </a>
            </p>
          </div>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <p className="text-xs md:text-sm text-gray-600 mb-2">在日ペルー大使館</p>
            <p className="text-xs md:text-sm text-gray-600">経済商務担当</p>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default RoqueBenavidesCopperPortfolioPage;
