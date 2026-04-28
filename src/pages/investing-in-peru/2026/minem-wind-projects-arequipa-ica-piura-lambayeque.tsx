import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const MinemWindProjectsPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-04-20T10:50:00+09:00"
      title="Arequipa、Ica、Piura、Lambayequeの各州に大規模な風力発電パークプロジェクトが集中"
      description="MINEMは、Arequipa、Ica、Piura、Lambayequeの各州で進む5つの風力発電プロジェクトが恒久発電コンセッションを取得したと発表。合計988.2MW、10億7,360万米ドル超の投資を通じて、発電マトリックスの多様化とエネルギー安全保障の強化を後押しします。"
    >
      <Banner
        alt={"ペルーの風力発電プロジェクトを伝えるMINEMニュースバナー"}
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
            Arequipa、Ica、Piura、Lambayequeの各州に大規模な風力発電パークプロジェクトが集中
          </h1>
          <p className="text-xs md:text-sm text-gray-600 mb-2">プレスリリース</p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">2026年4月20日 - 午前10時50分</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              5つの風力発電プロジェクトは、合計988.2MWの設備容量と10億7,360万米ドル超の投資額を通じて、ペルーの発電マトリックス多様化とエネルギー安全保障の強化に貢献します。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            エネルギー鉱山省（MINEM）は、Arequipa、Ica、Piura、Lambayequeの各州で開発されている5つの風力発電所プロジェクトが恒久発電コンセッション（Concesión Definitiva de Generación）を取得したことを発表しました。これらのプロジェクトは、発電マトリックスの多様化と国のエネルギー安全保障の強化に貢献します。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            これらのイニシアチブは、合計で<strong>988.2メガワット（MW）</strong>の設備容量と<strong>10億7,360万米ドル</strong>の推定投資額に上り、全国相互接続送電システム（SEIN）に再生可能エネルギーを供給し、再生可能資源による発電を大幅に増加させるプロジェクトポートフォリオの一部です。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">州別プロジェクト配置</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              Arequipa州では2つのプロジェクトが進行中です。現在建設段階にある設備容量219.6MWの<strong>「カラベリ風力発電パーク」</strong>と、調査段階にある設備容量142.6MWの<strong>「ムユ風力発電パーク」</strong>です。Ica州では、設備容量330MWの<strong>「グアランゴ風力発電パーク」</strong>が開発されています。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              一方、Piura州では設備容量72MWの<strong>「エンマ風力発電パーク」</strong>が推進されており、Lambayeque州では設備容量224MWの<strong>「モロペ風力発電所」</strong>の建設が予定されています。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">主要な数字</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">5</p>
                <p className="text-sm text-gray-700 japanese-text">風力発電プロジェクト</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">988.2MW</p>
                <p className="text-sm text-gray-700 japanese-text">合計設備容量</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">US$1.0736B</p>
                <p className="text-sm text-gray-700 japanese-text">推定投資額</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">MINEMの見解</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              これについて、MINEMのエネルギー効率総局長であるジョンウェルト・レタモソ・ゲレ氏は、これらのプロジェクトがエネルギーマトリックスの多様化とエネルギー安全保障に対する同セクターのコミットメントを反映していると強調しました。
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic japanese-text">
              「国内の様々な地域で風力発電パークを開発することは、我々の再生可能エネルギーのポテンシャルを活用し、より持続可能で競争力のある電力システムへと前進することを可能にします」
            </blockquote>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">地域経済とエネルギー戦略への影響</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              MINEMは、これらのイニシアチブが再生可能エネルギーによる発電能力を高めるだけでなく、地域経済を活性化させ、住民に新たな機会を創出することも強調しました。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              同省は、持続可能な開発政策に沿って、国のエネルギー開発に貢献する投資を引き続き促進するというコミットメントを再確認しています。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            リマ、2026年4月20日
          </p>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">参考文献</h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              Ministerio de Energía y Minas. (2026年04月20日). Regiones Arequipa, Ica, Piura y Lambayeque concentran importantes proyectos de parques eólicos.
              <br />
              参照先:{" "}
              <a
                href="https://www.gob.pe/institucion/minem/noticias/1381108-regiones-arequipa-ica-piura-y-lambayeque-concentran-importantes-proyectos-de-parques-eolicos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Estado Peruano: https://www.gob.pe/institucion/minem/noticias/1381108-regiones-arequipa-ica-piura-y-lambayeque-concentran-importantes-proyectos-de-parques-eolicos
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

export default MinemWindProjectsPage;
