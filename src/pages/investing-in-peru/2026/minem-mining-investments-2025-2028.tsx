import Link from "next/link";
import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const MinemMiningInvestmentsPage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title="MINEM、2025～2028 年に 119 億 2,100 万米ドル超の鉱業投資の具体化を予測">
      <Banner
        alt={"Investment guide 2022"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-xs md:text-sm text-gray-600">非公式翻訳</p>
        </div>

        <div className="mb-8">
          <h1 className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            MINEM（エネルギー鉱山省）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            MINEM、2025～2028 年に 119 億 2,100 万米ドル超の鉱業投資の具体化を予測
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-2">
            プレスリリース
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025 年 12 月 15 日
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              ペルーは投資家の信頼を獲得しており、戦略的鉱物のポテンシャルを有効活用すべきであることを再確認。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            今年、ペルーは鉱業投資額において大幅な増加を達成しています。これにより、エネルギー鉱山省（MINEM）は、2025 年から 2028 年の期間に<strong>119 億 2,100 万米ドル</strong>を超える投資が具体化され、国に大きな利益をもたらすと予測しています。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            これは、カルロス・タラベラ・フローレス鉱山副大臣が、ペルー鉱山技術者協会（IIMP）主催の「Jueves Minero（鉱業の木曜日）」にて、「鉱業：2026 年に向けた総括と展望」と題した講演の中で述べたものです。
          </p>

          {/* Investment Portfolio */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">鉱業投資プロジェクト・ポートフォリオ</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              副大臣は、2025～2028 年の投資予測について、ペルーが魅力的で信頼できる国であり、全土で成長と機会を促進できる鉱業ポートフォリオを保持していることを裏付けるものであると断言しました。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-2">65</p>
                <p className="text-sm md:text-base text-gray-700 japanese-text">プロジェクト</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-2">19</p>
                <p className="text-sm md:text-base text-gray-700 japanese-text">州</p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
              <p className="text-center">
                <span className="text-4xl font-bold text-orange-900">72%</span>
                <span className="text-sm md:text-base text-gray-700 ml-2 japanese-text">プロジェクト総額に占める銅の割合</span>
              </p>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              これにより、ペルーは世界最大の銅生産国の一つとしての地位を固めています。
            </p>
          </div>

          {/* New Projects */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">期待される新規プロジェクト・拡張工事</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              タラベラ副大臣は、今後数年間で以下の新規プロジェクトや拡張工事の開始が期待されると言及しました。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">San Gabriel</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Reposición San Rafael</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Romina</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Cerro Verdeの最適化</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Corani</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Pampa de Pongo</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Zafranal</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Exploration */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">鉱物探査の世界的評価</h3>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 text-center">
              <p className="text-sm md:text-base text-gray-700 mb-2 japanese-text">世界の鉱物探査ランキング</p>
              <p className="text-5xl font-bold text-green-900">7位</p>
              <p className="text-sm md:text-base text-gray-700 mt-2 japanese-text">2024年 ペルー</p>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              また、2024 年にペルーが世界の鉱物探査ランキングで 7 位を占めたこと、現在、<strong>銅、金、スズ、亜鉛、銀</strong>の新埋蔵量の価値を高めることを目的とした、17 州 80 の探査投資プロジェクトが存在することを紹介しました。
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic mb-4 japanese-text">
              「我々は、世界的な供給拠点となる能力を備えた特権的な国である」
            </blockquote>

            <p className="text-xs md:text-sm text-gray-600 mb-4">— カルロス・タラベラ・フローレス鉱山副大臣</p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              副大臣は、エネルギー転換に必要なクリティカル（重要）鉱物や戦略的鉱物の探査・開発投資を引きつけるペルーの潜在能力を強調しました。
            </p>
          </div>

          {/* 2025 Performance */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">2025年の鉱業部門の実績</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              最後に、2025 年 1 月から 10 月の鉱業投資が前年同期比で<strong>36.7％</strong>増加したこと、および鉱業活動による税収がすでに 2024 年通年の総額を上回っていることを付け加え、鉱業が国の経済成長に大きく貢献していることを示しました。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-4xl font-bold text-blue-900 mb-2">+36.7%</p>
                <p className="text-sm md:text-base text-gray-700 japanese-text">鉱業投資の増加<br />(2025年1-10月、前年同期比)</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-4xl font-bold text-green-900 mb-2">↑</p>
                <p className="text-sm md:text-base text-gray-700 japanese-text">税収は2024年通年総額を上回る</p>
              </div>
            </div>
          </div>

          {/* Key Figures */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">主要な数字</h3>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>119 億 2,100 万米ドル超：</strong>2025～2028年の投資予測額
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>65 プロジェクト：</strong>国内 19 州にまたがる鉱業投資プロジェクト
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>72%：</strong>プロジェクト総額に占める銅の割合
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>80 プロジェクト：</strong>17 州における探査投資プロジェクト
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>世界第7位：</strong>2024年の鉱物探査ランキング
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>+36.7%：</strong>2025年1-10月の鉱業投資増加率（前年同期比）
                </p>
              </div>
            </div>
          </div>

          {/* Context */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">背景</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ペルー鉱山技術者協会（IIMP）が主催する「Jueves Minero（鉱業の木曜日）」において、「鉱業：2026 年に向けた総括と展望」と題した講演が行われました。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              このイベントは、ペルーの鉱業セクターの現状と今後の展望を共有する場であり、業界関係者による意見交換や情報発信が行われます。
            </p>
          </div>

          {/* References */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">参考文献</h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              Ministerio de Energía y Minas. (2025年12月15日). MINEM proyecta viabilizar inversiones mineras por más de US$ 11,921 millones entre 2025-2028.<br />
              参照先: <a href="https://www.gob.pe/institucion/minem/noticias/1312768-minem-proyecta-viabilizar-inversiones-mineras-por-mas-de-us-11-921-millones-entre-2025-2028" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Estado Peruano: https://www.gob.pe/institucion/minem/noticias/1312768-minem-proyecta-viabilizar-inversiones-mineras-por-mas-de-us-11-921-millones-entre-2025-2028</a>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <p className="text-xs md:text-sm text-gray-600 mb-2">
              在日ペルー大使館
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              経済商務担当
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

export default MinemMiningInvestmentsPage;
