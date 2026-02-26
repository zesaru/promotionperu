import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const MefPeruGrowth2025Page = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      title="MEFの予測通り、ペルーは2025年に3.4%の成長を達成"
      description="MEFは、ペルーが2025年に3.4%成長し、2025年12月単月でも3.8%成長して21カ月連続の拡大を記録したと発表。内需、投資、建設・商業・サービスの回復が成長を牽引しました。"
    >
      <Banner
        alt={"Peru economic growth and MEF news banner"}
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
          <h1 className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            経済財務省（MEF）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            MEFの予測通り、ペルーは2025年に3.4%の成長を達成
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-2">プレスリリース</p>
          <p className="text-xs md:text-sm text-gray-600 mb-2">
            WhatsApp Image 2026-02-15 at 12.08.02 PM
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2026年2月15日 - 午後12時15分
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              2025年12月の単月成長率は3.8%。ペルー経済は21カ月連続の拡大を記録し、2025年通年ではMEF予測どおり3.4%成長を達成しました。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            デニッセ・ミライェス（前）経済財務大臣は、この結果によりペルーが地域で最もダイナミックな経済国の一つとして位置づけられると断言しました。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              2025年通年成長：MEF予測どおり3.4%
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ペルーは2025年に<strong>3.4%</strong>の成長を記録し、これは経済財務省（MEF）の公式予測と一致するものであり、経済回復を確固たるものとし、同国のマクロ経済ファンダメンタルズの堅固さを再確認するものです。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              国家統計情報院（INEI）の報告によると、この結果によりペルー経済は2年連続の拡大を達成しました。背景には、内需の強化、民間投資の回復、公共事業の執行拡大があります。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              前MEF大臣の評価
            </h3>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic mb-4 japanese-text">
              「2025年に記録された経済実績は、我が国の堅実かつ秩序ある回復を裏付けるものであり、今後数年間の持続的な拡大に向けた基盤を固めるものです。これらの結果により、私たちは地域で最もダイナミックな経済国の一つに位置づけられます」
            </blockquote>
            <p className="text-xs md:text-sm text-gray-600">— デニッセ・ミライェス（前）経済財務大臣</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              成長を牽引した非一次産品セクター
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              2025年のGDP拡大は、主に非一次産品セクターのダイナミズムに支えられました。民間投資の回復、公共投資の進展、家計消費の改善が、雇用創出を後押ししました。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">6.7%</p>
                <p className="text-sm text-gray-700 japanese-text">建設</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">3.6%</p>
                <p className="text-sm text-gray-700 japanese-text">商業</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">3.0%</p>
                <p className="text-sm text-gray-700 japanese-text">サービス</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">1.9%</p>
                <p className="text-sm text-gray-700 japanese-text">非一次産品製造業</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              一次産品セクターの動向
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>農業：</strong>4.8%成長（ブルーベリー、ブドウ、アボカド、コーヒー、ジャガイモの収穫増、および畜産サブセクターの改善）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>漁業：</strong>2.9%増（直接人間消費向けの漁獲増）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>鉱業・炭化水素：</strong>1.4%成長（銅、亜鉛、銀の生産増）
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              マクロ経済ファンダメンタルズの堅固さ
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ミライェス（前）大臣は、観察された拡大が同国のマクロ経済ファンダメンタルズの堅固さを反映していると強調しました。
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic japanese-text">
              「責任ある財政政策、適切な金融管理、そして高水準の外貨準備高が、依然として困難な国際環境下においても経済の安定を維持することを可能にしました」
            </blockquote>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              2025年12月：3.8%成長、21カ月連続拡大
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              2025年12月の経済活動は、2024年12月の5.1%という強い統計的逆効果にもかかわらず<strong>3.8%</strong>成長し、21カ月連続の拡大を記録しました。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              同月は、建設（12.0%、2024年1月以来の最高率）と非一次産品製造業（6.0%、2024年10月以来の最高）の力強いダイナミズムに加え、商業（4.9%）とサービス（3.3%）の成長が際立ち、内需回復と一致していました。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border border-blue-200 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-900">12.0%</p>
                <p className="text-xs text-gray-700 japanese-text">建設</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-900">6.0%</p>
                <p className="text-xs text-gray-700 japanese-text">非一次製造業</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-900">4.9%</p>
                <p className="text-xs text-gray-700 japanese-text">商業</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-900">3.3%</p>
                <p className="text-xs text-gray-700 japanese-text">サービス</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              2026年初の先行指標
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              前MEF大臣は、2026年もペルー経済が地域諸国の中で成長をリードし続ける可能性が高いと述べました。これは、年初の経済活動指標の改善と整合的です。
            </p>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>電力需要：</strong>1月に年率3.9%増（12月2.4%、11月0.9%から加速）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>資本財輸入：</strong>1月に11.6%増、22カ月連続成長（企業信頼・投資決定の増加を示唆）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>消費財輸入：</strong>1月に10.6%増、17カ月連続拡大
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>消費ビッグデータ指標：</strong>18.3%成長、26カ月連続プラス
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              MEFの継続方針
            </h3>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic mb-4 japanese-text">
              「安定とマクロ経済規律は、投資を惹きつけ、それを長期的に維持するために不可欠な条件です。MEFは、より多くの正規雇用を創出し、生産性を向上させることを目的に、官民プロジェクトの障害を取り除き、企業の信頼を強化し、国家の効率性を改善するための措置を引き続き推進しています」
            </blockquote>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              政府は、経済成長を確固たるものにし、財政の持続可能性を維持し、ペルー国民の家庭の競争力と福祉を促進する明確で予測可能なルールを推進するというコミットメントを再確認しました。
            </p>
          </div>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">引用文献</h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              Ministerio de Economía y Finanzas. (2026年02月15日). En línea con las estimaciones del MEF: el Perú creció 3,4% en 2025.
              <br />
              参照先:{" "}
              <a
                href="https://www.gob.pe/institucion/mef/noticias/1353763-en-linea-con-las-estimaciones-del-mef-el-peru-crecio-3-4-en-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Gob.pe: https://www.gob.pe/institucion/mef/noticias/1353763-en-linea-con-las-estimaciones-del-mef-el-peru-crecio-3-4-en-2025
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

export default MefPeruGrowth2025Page;
