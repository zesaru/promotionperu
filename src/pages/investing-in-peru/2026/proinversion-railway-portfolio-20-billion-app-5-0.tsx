import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const ProinversionRailwayPortfolioPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      title="PROINVERSIÓN、APP 5.0モデルの下で200億米ドル超の鉄道ポートフォリオを推進"
      description="PROINVERSIÓNは、新たなAPP 5.0モデルの下で総額200億米ドル超の鉄道プロジェクト群を推進し、ペルーを今後10年間の中南米における主要な鉄道インフラ市場の一つとして位置付けています。"
    >
      <Banner
        alt={"Peru railway investment portfolio and APP 5.0 news banner"}
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
            民間投資促進庁（PROINVERSIÓN）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            PROINVERSIÓN、APP 5.0モデルの下で200億米ドル超の鉄道ポートフォリオを推進
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-2">プレスリリース</p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">2026年2月25日</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              ペルーは、APP 5.0モデルの下で総額200億米ドル超の鉄道ポートフォリオを推進し、今後10年間の中南米における最重要鉄道インフラ市場の一つとして位置付けられています。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            リマ、2026年2月25日 世界規模の知見を、交通を変革するプロジェクトへ。ペルー民間投資促進庁（PROINVERSIÓN）、在ペルー英国大使館、都市交通庁（ATU）は、「大規模インパクトプロジェクトのための戦略的ガバナンス」と題した鉄道ワークショップを共催しました。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            このワークショップは、リマイカ鉄道や地下鉄3号線4号線といったプロジェクトの開発に向けて、国際的な知見、優れたガバナンス事例を共有し、能力を結集するための協力の場となりました。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              APP 5.0による次世代鉄道メガプロジェクト
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              イベントにおいて、PROINVERSIÓNの会長ルイス・デル・カルピオ氏は、ペルーが現在、投資システム総合ガバナンスモデルであるAPP 5.0の下で、次世代の鉄道メガプロジェクト群の構築を進めていることを発表しました。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              このモデルは、促進機関（EPTP）としての同庁の技術的役割を強化し、国家政府のプロジェクト優先順位付けを一元化する法律第32441号に基づいています。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              200億米ドル超の鉄道ポートフォリオ
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              PROINVERSIÓNは現在、新しいAPP 5.0モデルの下で促進される<strong>総額200億米ドル超</strong>の高インパクト鉄道プロジェクトポートフォリオを推進しており、ペルーを今後10年間の中南米における最も重要な鉄道インフラ市場の一つとして位置付けています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">US$20B+</p>
                <p className="text-sm text-gray-700 japanese-text">推進中の鉄道ポートフォリオ総額</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">10年</p>
                <p className="text-sm text-gray-700 japanese-text">地域市場としての戦略的視野</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">APP 5.0</p>
                <p className="text-sm text-gray-700 japanese-text">新たな統合ガバナンスモデル</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              中核プロジェクト
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ポートフォリオの中でも特に注目されるのは、<strong>リマイカ鉄道</strong>（65億4,200万米ドル）と<strong>San Juan de Marcona-Andahuaylas鉄道</strong>（81億6,200万米ドル）です。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              さらに、首都の大量輸送カバレッジを拡大するため、合計<strong>100億米ドル超</strong>の投資規模で、地下鉄3号線4号線についてもAPP化が検討されています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-gray-900 mb-1">US$6.542B</p>
                <p className="text-sm text-gray-700 japanese-text">リマイカ鉄道</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-gray-900 mb-1">US$8.162B</p>
                <p className="text-sm text-gray-700 japanese-text">San Juan de Marcona-Andahuaylas鉄道</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              既存の鉄道エコシステム
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              イベントでは、ペルーの鉄道システムが現在<strong>1,957km</strong>のネットワークで構成され、そのうち<strong>87%</strong>が公共利用に対応していることも報告されました。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              このエコシステムの中には、中央鉄道、南部南東部鉄道、リマ地下鉄1号線2号線、Huancayo-Huancavelica鉄道といった既存のコンセッションプロジェクトが含まれています。
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              競争力のためのインフラ
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              鉄道ネットワークの拡張は、物流競争力の向上、輸送コストの削減、経済回廊の活性化、そして特にCallao、Chancay、Marconaといった港湾に連結する戦略的軸や、リマイカにおける産業開発と結びついた地域統合の強化を目的としています。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              新たな制度的枠組みにより、ペルーは国際基準に則した構造化された鉄道ポートフォリオの確立を目指しており、契約管理における透明性、予測可能性、効率性の向上が期待されています。
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
                  PROINVERSIÓNはAPP 5.0の下で総額200億米ドル超の鉄道プロジェクト群を推進
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  リマイカ鉄道とSan Juan de Marcona-Andahuaylas鉄道が主要案件
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  地下鉄3号線4号線も合計100億米ドル超の規模でAPP化を検討
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  港湾接続と地域統合を通じて物流競争力と産業開発を強化
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">
              引用文献
            </h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              Invest in Peru. (2026年02月25日). PROINVERSIÓN promueve cartera ferroviaria por más de US$ 20 mil millones bajo nuevo modelo APP 5.0.
              <br />
              参照先:{" "}
              <a
                href="https://www.investinperu.pe/proinversion-promueve-cartera-ferroviaria-por-mas-de-us-20-mil-millones-bajo-nuevo-modelo-app-5-0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Invest in Peru: https://www.investinperu.pe/proinversion-promueve-cartera-ferroviaria-por-mas-de-us-20-mil-millones-bajo-nuevo-modelo-app-5-0/
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

export default ProinversionRailwayPortfolioPage;
