import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const ProinversionApp5GovernanceRiskReductionPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-02-19T00:00:00+09:00"
      title="APP 5.0：ペルーはガバナンスを強化し、長期プロジェクトへの投資家リスクを軽減"
      description="PROINVERSIÓNは、APP 5.0の下で、より迅速なプロセス、法的安定性の向上、競争条件の改善を通じて、長期インフラ投資の予測可能性を高める新段階を推進しています。"
    >
      <Banner
        alt={"Peru APP 5.0 investment governance news banner"}
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
            APP 5.0：ペルーはガバナンスを強化し、長期プロジェクトへの投資家リスクを軽減
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-2">プレスリリース</p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">2026年2月19日</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              PROINVERSIÓNは、APP 5.0を通じて、プロセスの迅速化、法的安定性、契約の予見可能性を強化し、長期投資に対するリスク低減を進めています。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            PROINVERSIÓN（ペルー民間投資促進庁）は、過去20年間で510億米ドルを超える253件のPPPプロジェクトを落札し、現在、より迅速なプロセス、法的安定性の向上、およびプロジェクトの全サイクルを視野に入れた競争条件の改善を伴うPPP 5.0モデルを推進しています。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            リマ、2026年2月19日 - PROINVERSIONの公式データによると、ペルーは官民パートナーシップ（APP）モデルの下でのインフラ開発において新たな段階に進んでおり、2002年から2025年の間に514億米ドル相当の253件のプロジェクトという歴史的なポートフォリオを確立しました。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              APPモデルの進化と全国的な影響
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              そのうち、過去23年間でPROINVERSIONは391億米ドル相当の145件のAPPプロジェクトのコンセッションを付与し、モデルがAPP 1.0から現在のAPP 5.0へと段階的に進化していることを示しています。このアプローチには、ガバナンスの大幅な改善、プロセスの迅速化、追記の簡素化、プロジェクトの全サイクルにわたるビジョンが組み込まれています。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              投資は、運輸、衛生、エネルギー、鉱業、教育、保健、灌漑、観光、不動産の9つの戦略的分野に及び、国内25の地域と3,300万人以上の受益者に影響を与えています。象徴的なプロジェクトとしては、都市の接続性と国の物流競争力にとって重要な環状道路（Anillo Vial Periférico）が挙げられます。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              APP 5.0：より競争力のある条件
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              PROINVERSIONのエグゼクティブ・プレジデントであるルイス・デル・カルピオ氏は、新しいAPP法は、より迅速なプロセス、リスク配分の明確化、および契約の予測可能性を強化するメカニズムを導入しており、これらは長期的な投資決定において重要な要素であると述べました。
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic japanese-text">
              「ペルーは、より現代的で、透明性があり、予測可能なAPPモデルへと決定的な一歩を踏み出しました。APP 5.0は、構造化を改善し、時間を短縮し、法的安定性を強化することで、持続可能な民間投資を誘致するためのより競争力のある条件を生み出します」
            </blockquote>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              Obras por Impuestos（OxI）の進展
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              さらに同氏は、税金による事業（Obras por Impuestos、OxI）メカニズムが官民投資のエコシステムを強化し、2009年から2026年2月の間に419社の民間企業の参加を得て、178億7900万ソル相当の1,144件の介入を記録したことを強調しました。
            </p>
            <blockquote className="border-l-4 border-gray-400 pl-4 text-sm md:text-base text-gray-700 italic japanese-text">
              「この手段は、より効率的な実行スキームの下で社会的および生産的インフラを加速させ、民間セクターの機会を拡大することを可能にします」
            </blockquote>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              持続可能性と予測可能性
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              新世代のAPP 5.0は、契約の予測可能性を向上させ、時間を短縮し、戦略的プロジェクトの実行を強化することを目的として、構造化、リスク管理、および持続可能性に関する国際基準を組み込んでいます。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              APP 5.0フレームワークの確立は、落札の加速と制度的強化と相まって、ペルーを、全国レベルでの長期的な民間参加を伴うインフラプロジェクトの構造化において、地域で最もダイナミックな市場の一つとして位置付けています。
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
            [Invest in Peru, 2026]
          </p>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">
              引用文献
            </h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              Invest in Peru. (2026年02月19日). APP 5.0: Perú refuerza gobernanza y reduce riesgos para inversionistas en proyectos de largo plazo.
              <br />
              参照先:{" "}
              <a
                href="https://www.investinperu.pe/app-5-0-peru-refuerza-gobernanza-y-reduce-riesgos-para-inversionistas-en-proyectos-de-largo-plazo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Invest in Peru: https://www.investinperu.pe/app-5-0-peru-refuerza-gobernanza-y-reduce-riesgos-para-inversionistas-en-proyectos-de-largo-plazo/
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

export default ProinversionApp5GovernanceRiskReductionPage;
