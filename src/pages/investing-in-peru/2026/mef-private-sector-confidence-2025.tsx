import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const MefPrivateSectorPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      title="MEF：民間セクターの信頼が2025年の経済成長を支えた"
      description="経済財務省（MEF）は、2025年末の先行経済指標と民間投資関連指標の改善を受け、企業セクターの信頼がペルー経済の成長を支えたと報告しました。"
    >
      <Banner
        alt={"Peru investment and economic news banner"}
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
            経済財務省（MEF）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            MEF：民間セクターの信頼が2025年の経済成長を支えた
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-2">
            NP 20260108-5
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-2">
            プレスリリース
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2026年1月8日
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              2025年末、民間投資に関連する先行経済指標が好調な結果を記録し、ペルー経済に対する企業セクターの信頼を反映。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            デニス・ミラレス経済財務相は、民間投資に関連する先行経済指標が2025年末に好調な結果を記録し、ペルー経済に対する企業セクターの信頼を反映していると報告しました。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            2025年、ペルーのカントリーリスクは地域内で最も低い水準を維持し、資本財輸入の増加、鉱業投資の活況、民間投資の拡大とともに、ペルーが投資家にとって魅力的な国であることを確固たるものにしました。
          </p>

          {/* Leading Indicators Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">先行経済指標の好調な結果</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              経済財務省（MEF）は、2025年12月末時点で、経済活動に関する先行指標の大部分が、特に民間投資に関連するもので肯定的な結果を記録し、年間を通じて達成された経済成長の主要な支えの一つとなったと報告しました。この公式結果は2月中に発表される予定です。
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic mb-4 japanese-text">
              「先行指標は、民間セクターの投資判断が活発に維持されたことを示しており、これにより経済成長を支えることができました」
            </blockquote>

            <p className="text-xs md:text-sm text-gray-600 mb-2">— デニス・ミラレス経済財務相</p>
          </div>

          {/* Capital Goods Imports */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">資本財輸入の成長</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              MEFがまとめた情報によると、2025年の資本財輸入は年間<strong>16.9%</strong>の成長を記録し、2021年以来最も高い成長率となりました。
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>農業：</strong>52.6%の成長
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>工業：</strong>15.3%の成長
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>輸送機器：</strong>21.2%の成長
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>建設資材：</strong>11.6%の成長
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 japanese-text">
              この実績は生産的投資の持続的な回復を反映しています。
            </p>
          </div>

          {/* Mining Investment */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">鉱業投資の活況</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              鉱業分野では、2025年の投資額は<strong>57億米ドル</strong>を超え、<strong>15.5%</strong>の拡大となり、2021年以来の最高の成長率を記録したと推定されています。
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              この結果は、以下のプロジェクトによるものです：
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>操業中のプロジェクト：</strong>Las Bambas
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>維持投資：</strong>Southern、Shougang、Marcobre
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>完了間近のプロジェクト：</strong>ブエナベントゥーラ
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 japanese-text">
              これにより、国家経済における同セクターの戦略的役割が固まっています。
            </p>
          </div>

          {/* Country Risk */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">地域内で最も低いカントリーリスク</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              同様に、ペルーのカントリーリスクは2025年中に地域内で最も低い水準を維持し、平均で<strong>145ベーシスポイント</strong>でした。
            </p>

            <div className="-mx-4 sm:mx-0 overflow-x-auto">
              <table className="min-w-full text-sm md:text-base text-gray-700">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 md:px-4 py-2 md:py-3 text-left">国</th>
                    <th className="px-3 md:px-4 py-2 md:py-3 text-left">リスク（ベーシスポイント）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-semibold">チリ</td>
                    <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">113ポイント</td>
                  </tr>
                  <tr className="border-b bg-blue-50">
                    <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-semibold">ペルー</td>
                    <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">145ポイント</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">ブラジル</td>
                    <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">210ポイント</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">メキシコ</td>
                    <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">277ポイント</td>
                  </tr>
                  <tr>
                    <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">コロンビア</td>
                    <td className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm">311ポイント</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 japanese-text">
              この位置づけは、マクロ経済の基盤の強固さを示しています。
            </p>
          </div>

          {/* Other Indicators */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">その他の先行指標</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              年間を通じて、他の先行指標も肯定的な結果を示しました。
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>輸出額：</strong>過去最高の860億米ドルに達し、2024年比で100億米ドル以上の増加
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>電子商取引：</strong>暫定で9.6%の成長を遂げ、2022年以来の最高の拡大率を記録
                </p>
              </div>
            </div>
          </div>

          {/* 2026 Outlook */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">2026年の見通し</h3>

            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic mb-4 japanese-text">
              「2025年を締めくくる状況はペルー経済にとって有望であり、政治的なシナリオによる複雑な時期であると認識しつつも、来年に向けて好ましい見通しを持つことができます」
            </blockquote>

            <p className="text-xs md:text-sm text-gray-600 mb-4">— デニス・ミラレス経済財務相</p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              2026年に関して、MEFの長官は、政府が経済の安定を維持し、成長を持続させるための条件を創出するために取り組んでいると述べました。
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic mb-4 japanese-text">
              「私たちは、民間投資を加速させる『非官僚化ショック』や、今後数年間の責任ある予測可能な財政管理を保証するための合意形成を目指す『持続可能な成長のための財政協定』といったイニシアチブを推進しています」
            </blockquote>
          </div>

          {/* References */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">参考文献</h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              Ministerio de Economía y Finanzas. (2026年01月08日). MEF: La confianza del sector privado sustentó el crecimiento de la economía en 2025.<br />
              参照先: <a href="https://www.gob.pe/institucion/mef/noticias/1329453-mef-la-confianza-del-sector-privado-sustento-el-crecimiento-de-la-economia-en-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Estado Peruano: https://www.gob.pe/institucion/mef/noticias/1329453-mef-la-confianza-del-sector-privado-sustento-el-crecimiento-de-la-economia-en-2025</a>
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

export default MefPrivateSectorPage;
