import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const ProinversionElectricProjectsPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-03-12T00:00:00+09:00"
      title="PROINVERSIÓN、1億6,500万米ドル規模の5つの電力プロジェクトの入札を公示"
      description="PROINVERSIÓNは、Piura、La Libertad、Junin、Limaの送電インフラを強化する5つの電力プロジェクトについて、総額1億6,500万米ドル規模の総合入札を公示。約140万人の住民への安定供給強化を目指します。"
    >
      <Banner
        alt={"PROINVERSIÓNの電力プロジェクト入札を伝えるニュースバナー"}
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
            民間投資促進庁（PROINVERSIÓN）
          </p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            PROINVERSIÓN、1億6,500万米ドル規模の5つの電力プロジェクトの入札を公示
          </h1>
          <p className="text-xs md:text-sm text-gray-600 mb-2">プレスリリース</p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">2026年3月12日</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              5つの送電プロジェクトは、Piura、La Libertad、Junin、Limaの約140万人の住民に恩恵をもたらし、電力供給の信頼性向上と送電インフラの近代化を後押しします。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            リマ、2026年3月12日 ペルー民間投資促進庁（PROINVERSIÓN）は、推定投資総額<strong>1億6,500万米ドル</strong>に上る5つの送電プロジェクトのコンセッションを付与するため、総合プロジェクト入札を公示しました。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            これらのイニシアチブは、エネルギー鉱山省（MINEM）の委託を受け、PROINVERSIÓNが官民パートナーシップ（APP）方式で推進するものです。目的は、Piura、La Libertad、Junin、Limaの各州に位置する地域の送電インフラを強化し、電力供給の信頼性を向上させることであり、約<strong>140万人</strong>の住民に恩恵をもたらします。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">La Libertad州の主要案件</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              La Libertad州では2つのプロジェクトが注目されます。推定投資額<strong>1,900万米ドル</strong>の<strong>「138kV Nueva Virú - Trujillo Sur連系線、増強および関連変電所」</strong>と、約<strong>3,770万米ドル</strong>を要する<strong>「新モチェ220/138kV変電所および関連連系線」</strong>です。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              これらの案件により、Trujillo市南部への送電網が拡大され、地域の電力供給能力の強化が期待されます。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">Piura州の送電強化</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              Piura州ではさらに2つのプロジェクトが開発されます。推定投資額約<strong>4,720万米ドル</strong>の<strong>「220kV Miguel Grau - Sullana連系線」</strong>は、Sullana都市部の電力供給を強化し、CieneguilloとTambogrande方面への送電網拡大を可能にします。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              また、推定投資額<strong>3,620万米ドル</strong>の<strong>「220kV Miguel Grau - Chulucanas連系線」</strong>は、Chulucanas、Morropón、Loma Largaにおけるサービスの信頼性向上を目的としています。
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">Lima州・Junin州の広域案件</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              さらに、Lima州とJunin州にまたがる<strong>「新アントゥキート東220/50kV変電所および関連連系線」</strong>プロジェクトも含まれます。推定投資額は約<strong>2,530万米ドル</strong>で、Morococha、Casapalca、San Mateo地域の送電を強化します。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">主要な数字</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">5</p>
                <p className="text-sm text-gray-700 japanese-text">送電プロジェクト</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">US$165M</p>
                <p className="text-sm text-gray-700 japanese-text">推定総投資額</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">1.4M</p>
                <p className="text-sm text-gray-700 japanese-text">恩恵を受ける住民</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">制度設計と入札スケジュール</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              これら5つのプロジェクトは、「2023-2032年および2025-2034年送電計画」に含まれるイニシアチブの<strong>「グループ3」</strong>の一部であり、国の送電インフラを拡大・近代化する目的で、2026年から2027年にかけて落札される予定です。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              コンセッションには、インフラの設計、資金調達、建設、運営、保守が含まれ、期間は商業運転開始から<strong>30年間</strong>です。期間終了後、施設はペルー国家に譲渡されます。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              グループ3は<strong>2026年第4四半期</strong>に落札され、コンセッション契約の署名は<strong>2027年初頭</strong>に行われる予定です。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">投資家向け要件</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              関心のある投資家は、入札者として認定されるために、入札要綱に定められた技術、法務、財務の要件を証明する必要があります。落札は、最も経済的な提案、すなわち<strong>最も低い総サービスコスト</strong>を提示した入札者に行われます。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              入札要綱と活動スケジュールは、PROINVERSIÓNの公式ポータルサイト（www.investinperu.pe）で関心のある方が閲覧できます。
            </p>
          </div>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">参考文献</h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              PROINVERSIÓN. (2026年03月12日). PROINVERSIÓN convoca concurso para cinco proyectos eléctricos por US$ 165 millones.
              <br />
              参照先:{" "}
              <a
                href="https://www.investinperu.pe/proinversion-convoca-concurso-para-cinco-proyectos-electricos-por-us-165-millones/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Invest in Peru: https://www.investinperu.pe/proinversion-convoca-concurso-para-cinco-proyectos-electricos-por-us-165-millones/
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

export default ProinversionElectricProjectsPage;
