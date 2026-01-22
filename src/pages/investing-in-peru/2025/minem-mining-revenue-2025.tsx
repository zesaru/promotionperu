import Link from "next/link";
import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const MinemMiningRevenuePage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title="MINEM：2025年9月までに鉱業活動で91億8,300万ソル以上を創出">
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
            エネルギー鉱山省
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            MINEM：2025年9月までに鉱業活動で91億8,300万ソル以上を創出
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-2">
            プレスリリース
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025年11月18日
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              全国各地域への資金移転は、住民の生活の質向上を目的とした投資プロジェクトを支援するために実施されています。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            エネルギー鉱山省（MINEM）が発表した最新の『鉱業統計速報（BEM）』によると、2025年9月末時点で、鉱業活動による資金移転額は91億8,300万ソルに達しました。これは、鉱業税（カノン）、鉱業ロイヤルティ、鉱業権更新料および罰金によるものです。
          </p>

          {/* Revenue Breakdown */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">資金移転の内訳</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">鉱業税（カノン）</h4>
                  <p className="text-sm md:text-base text-blue-600 font-medium mb-2 japanese-text">6,992億ソル以上</p>
                  <p className="text-sm text-gray-700 leading-relaxed japanese-text">
                    資金移転の最大の割合を占め、鉱業企業が支払う所得税の50％が原資となっています。この金額は、制度史上2番目に大きい水準です。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">鉱業ロイヤルティ</h4>
                  <p className="text-sm md:text-base text-blue-600 font-medium mb-2 japanese-text">19億3,300万ソル以上</p>
                  <div className="text-sm text-gray-700 leading-relaxed japanese-text">
                    <p className="mb-2">2025年1月から9月までに移転された内訳：</p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>法定ロイヤルティ：</strong>16億2,300万ソル</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>契約ロイヤルティ：</strong>3億900万ソル</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">鉱業権更新料および罰金</h4>
                  <p className="text-sm md:text-base text-blue-600 font-medium mb-2 japanese-text">2億5,600万ソル以上</p>
                  <p className="text-sm text-gray-700 leading-relaxed japanese-text">
                    2025年8月時点で移転されました。鉱業権更新料は付与された鉱区数に基づき、罰金は鉱区が生産中であるか、または投資実施状態にあるかによって算出されます。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Purpose Statement */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">資金移転の目的</h3>
            <p className="text-sm text-gray-700 leading-relaxed japanese-text">
              MINEMは、各地域へ移転された資金は、国・地域・地方自治体による管理の下、住民の生活の質向上につながる投資事業や社会インフラ整備に役立てられていると強調しました。
            </p>
          </div>

          {/* Regional Distribution */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">地域別資金移転額（上位4地域）</h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                <span className="text-sm font-semibold text-gray-900">Ancash</span>
                <span className="text-sm font-bold text-blue-600">167億5,000万ソル（18.2％）</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                <span className="text-sm font-semibold text-gray-900">Arequipa</span>
                <span className="text-sm font-bold text-blue-600">122億2,000万ソル（13.3％）</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                <span className="text-sm font-semibold text-gray-900">Moquegua</span>
                <span className="text-sm font-bold text-blue-600">92億4,000万ソル（10.1％）</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                <span className="text-sm font-semibold text-gray-900">Tacna</span>
                <span className="text-sm font-bold text-blue-600">90億9,000万ソル（9.9％）</span>
              </div>
            </div>
          </div>

          {/* MINEM Statement */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">MINEMの方針</h3>
            <p className="text-sm text-gray-700 leading-relaxed japanese-text">
              MINEMは、鉱業が引き続き国の経済成長を牽引する主要産業であることを再確認し、地域政府や市民との連携のもと、現代的で責任ある鉱業活動を推進することで、すべての国民にとって持続可能で均衡の取れた発展の実現を目指すと述べています。
            </p>
          </div>

          {/* References */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">参考文献</h3>
            <p className="text-sm text-gray-700 japanese-text">
              Ministerio de Energía y Minas. (2025年11月18日). MINEM: Más de S/ 9,183 millones generó la actividad minera hasta setiembre de 2025.<br />
              参照先: <a href="https://www.gob.pe/institucion/minem/noticias/1292011-minem-mas-de-s-9-183-millones-genero-la-actividad-minera-hasta-setiembre-de-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Plataforma del Estado Peruano</a>
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

export default MinemMiningRevenuePage;