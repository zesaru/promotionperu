import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const InvestmentPage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title="PROINVERSIÓN、ピウラ、ランバイエケ、フニン、アヤクーチョで4件の電力送電プロジェクトの入札を開始">
      <Banner
        alt={"PROINVERSIÓN、4件の電力送電プロジェクトの入札を開始"}
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
            民間投資促進庁（PROINVERSIÓN）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            PROINVERSIÓN: Piura、Lambayeque、JuninとAyacuchoで4件の電力送電プロジェクトの入札を開始
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025年10月17日
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            <strong>リマ、2025年10月17日</strong> – 経済財務省傘下の民間投資促進庁（PROINVERSIÓN）は、本日、<strong>4件の電力プロジェクトをコンセッション方式で実施するための国際総合プロジェクト公開入札</strong>を発表しました。これらのプロジェクトは、Piura、Lambayeque、JunínとAyacuchoの<strong>160万人に利益をもたらします</strong>。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            これらのプロジェクトは、<strong>総額2億3,100万米ドルの投資</strong>を要する予定で、2025～2034年送電計画のグループ1に属します。
          </p>

          <div className="bg-blue-50 rounded-lg p-6 my-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-700">2.31億</p>
                <p className="text-sm text-gray-700 mt-2 japanese-text">米ドル</p>
                <p className="text-xs text-gray-600">総投資額</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-700">160万</p>
                <p className="text-sm text-gray-700 mt-2 japanese-text">人</p>
                <p className="text-xs text-gray-600">受益者数</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-700">4州</p>
                <p className="text-sm text-gray-700 mt-2 japanese-text">地域</p>
                <p className="text-xs text-gray-600">対象エリア</p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-blue-800 mb-4 mt-8">
            プロジェクト詳細
          </h3>

          {/* Project 1 */}
          <div className="bg-white border-l-4 border-purple-500 shadow-md rounded-r-lg p-5 mb-6">
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <span className="text-purple-700 font-bold">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                Miguel Grau – Pariñas 500 kV送電線およびPariñas 500/220 kV変電所の拡張・関連施設
              </h4>
            </div>
            <div className="ml-11">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase">所在地</p>
                  <p className="text-sm font-semibold text-gray-800">Piura州</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">投資額</p>
                  <p className="text-sm font-semibold text-gray-800">約8,100万米ドル</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">受益者</p>
                  <p className="text-sm font-semibold text-gray-800">130万人以上</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed japanese-text">
                Talara、Pariñas、Tumbes地域の住民に安定した電力供給をもたらします。
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white border-l-4 border-green-500 shadow-md rounded-r-lg p-5 mb-6">
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <span className="text-green-700 font-bold">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                Felam – Tierras Nuevas – Salitral 220 kV送電線、拡張および関連変電所
              </h4>
            </div>
            <div className="ml-11">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase">所在地</p>
                  <p className="text-sm font-semibold text-gray-800">Lambayeque州</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">投資額</p>
                  <p className="text-sm font-semibold text-gray-800">約7,000万米ドル</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">受益者</p>
                  <p className="text-sm font-semibold text-gray-800">12万人</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed japanese-text">
                Tierras Nuevas – Pampa Pañalá およびMotupe – Olmos地域の電力供給を改善します。
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white border-l-4 border-orange-500 shadow-md rounded-r-lg p-5 mb-6">
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <span className="text-orange-700 font-bold">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                新Palián 220/60 kV変電所および220 kV・60 kV送電線
              </h4>
            </div>
            <div className="ml-11">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase">所在地</p>
                  <p className="text-sm font-semibold text-gray-800">Junín州</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">投資額</p>
                  <p className="text-sm font-semibold text-gray-800">約7,300万米ドル</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">受益者</p>
                  <p className="text-sm font-semibold text-gray-800">約13万人</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white border-l-4 border-red-500 shadow-md rounded-r-lg p-5 mb-6">
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 bg-red-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <span className="text-red-700 font-bold">4</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                Muyurina – Mollepata 220 kV送電線、拡張および関連変電所
              </h4>
            </div>
            <div className="ml-11">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase">所在地</p>
                  <p className="text-sm font-semibold text-gray-800">Ayacucho州</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">投資額</p>
                  <p className="text-sm font-semibold text-gray-800">約800万米ドル</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">受益者</p>
                  <p className="text-sm font-semibold text-gray-800">約3万人</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-blue-800 mb-3 mt-8">
            実施方式と期間
          </h3>

          <p className="mb-4 text-gray-800 leading-relaxed">
            これらのプロジェクトは、<strong>エネルギー鉱業省（MINEM）の委託により、PROINVERSIÓNが推進する官民連携（APP）方式</strong>で実施されます。コンセッションは、建設期間に加え、<strong>30年間の運営・維持管理を含む自己資金による国家イニシアティブ方式</strong>で付与されます。
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-5 my-6">
            <h4 className="text-md font-semibold text-blue-900 mb-3">入札基準</h4>
            <p className="text-sm text-gray-800 leading-relaxed">
              グループ1の4件プロジェクトの落札者は、<strong>総サービス費用が最も低い入札者</strong>となり、最終的に<strong>ユーザーへの電気料金が低減</strong>されます。
            </p>
          </div>

          <h3 className="text-lg font-semibold text-blue-800 mb-3 mt-8">
            今後の計画
          </h3>

          <p className="mb-4 text-gray-800 leading-relaxed">
            2025年残り期間にグループ2（4件プロジェクト）も入札予定であり、2026年にはグループ3・4（各5件プロジェクト）が順次入札されます。
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">
                    グループ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">
                    プロジェクト数
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">
                    入札時期
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">グループ 1</td>
                  <td className="px-6 py-4 text-sm text-gray-800">4件</td>
                  <td className="px-6 py-4 text-sm text-gray-800">2025年10月（実施済み）</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">グループ 2</td>
                  <td className="px-6 py-4 text-sm text-gray-800">4件</td>
                  <td className="px-6 py-4 text-sm text-gray-800">2025年残り期間</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">グループ 3</td>
                  <td className="px-6 py-4 text-sm text-gray-800">5件</td>
                  <td className="px-6 py-4 text-sm text-gray-800">2026年</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">グループ 4</td>
                  <td className="px-6 py-4 text-sm text-gray-800">5件</td>
                  <td className="px-6 py-4 text-sm text-gray-800">2026年</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6 text-gray-800 leading-relaxed">
            これら全てのプロジェクト群は、<strong>国内送電インフラの強化を目的とし、ペルー北部および中部の各都市で、より安定的かつ効率的な電力供給を確保する</strong>ものです。
          </p>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2 japanese-text">
              民間投資促進庁（PROINVERSIÓN）
            </p>
            <p className="text-sm text-gray-600 mb-4">
              広報室
            </p>
            <p className="text-xs text-gray-500">
              [PROINVERSIÓN, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">参考文献</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              PROINVERSIÓN. (2025年10月17日). PROINVERSIÓN convoca a concurso cuatro proyectos de transmisión eléctrica en Piura, Lambayeque, Junín y Ayacucho.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              参照先: PROINVERSIÓN:<br/>
              <Link href="https://www.investinperu.pe/proinversion-convoca-a-concurso-cuatro-proyectos-de-transmision-electrica-en-piura-lambayeque-junin-y-ayacucho/" className="text-blue-600 hover:underline text-xs break-all">
                https://www.investinperu.pe/proinversion-convoca-a-concurso-cuatro-proyectos-de-transmision-electrica-en-piura-lambayeque-junin-y-ayacucho/
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
