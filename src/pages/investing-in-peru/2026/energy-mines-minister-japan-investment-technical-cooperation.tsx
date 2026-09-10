import { useRouter } from "next/router";

import ImageSlider, { SliderImage } from "@/components/ImageSlider";
import Layout from "@/components/Layout";

const galleryImages: SliderImage[] = [
  {
    src: "/images/investing-news/2026/energy-mines-minister-japan-investment-technical-cooperation/meti-meeting.jpeg",
    alt: "ギジェルモ・シンノ・エネルギー鉱山相と日本政府関係者による投資・技術協力に関する会談",
    caption: "日本政府関係者との投資・技術協力に関する会談。",
  },
  {
    src: "/images/investing-news/2026/energy-mines-minister-japan-investment-technical-cooperation/jogmec-meeting.jpeg",
    alt: "ペルーと日本の関係機関による鉱業技術協力に関する会談",
    caption: "鉱業技術協力の進捗を確認する日本の関係機関との会談。",
  },
  {
    src: "/images/investing-news/2026/energy-mines-minister-japan-investment-technical-cooperation/PXL_20260908_104855187.jpg",
    alt: "ギジェルモ・シンノ・エネルギー鉱山相と日本の関係者による会談",
    caption: "日本の関係者とペルーにおける投資・協力の機会について意見交換。",
  },
];

const EnergyMinesMinisterJapanPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-09-08T00:00:00+09:00"
      title="エネルギー鉱山相、日本で投資・技術協力の促進に向け協議"
      description="ギジェルモ・シンノ・エネルギー鉱山相は日本政府関係者、JOGMEC、日本企業と会談し、鉱業技術、グリーン水素、分散型電源、重要鉱物分野における投資と技術協力の促進を協議しました。"
      image="https://peruinjapan.org/images/investing-news/2026/energy-mines-minister-japan-investment-technical-cooperation/meti-meeting.jpeg"
    >
      <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12">
        <header className="mb-8">
          <div className="mb-6 text-right text-xs text-gray-600 md:text-sm">
            <p>在日ペルー大使館</p>
            <p>非公式翻訳</p>
          </div>
          <p className="mb-3 text-lg font-normal text-gray-800 japanese-heading-3">
            エネルギー・鉱業・投資
          </p>
          <h1 className="mb-4 text-xl font-bold text-gray-900 japanese-heading-1 md:text-2xl">
            エネルギー鉱山相、日本で投資・技術協力の促進に向け協議
          </h1>
          <p className="mb-2 text-xs text-gray-600 md:text-sm">プレスリリース</p>
          <time className="text-xs text-gray-600 md:text-sm" dateTime="2026-09-08">
            2026年9月8日
          </time>
        </header>

        <div className="mb-8">
          <ImageSlider images={galleryImages} interval={6000} containerClassName="max-w-5xl" />
        </div>

        <div className="space-y-6 text-gray-700 japanese-text">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 sm:p-6">
            <p className="text-base font-semibold text-blue-900 md:text-lg">
              ギジェルモ・シンノ・エネルギー鉱山相は、日本との戦略的パートナーシップを強化するため、鉱業技術、グリーン水素、分散型電源、重要鉱物の分野で投資と技術協力を促進する一連の会談を行いました。
            </p>
          </div>

          <p>
            ペルーのギジェルモ・シンノ・エネルギー鉱山相は、日本との間で合意されている「日・ペルー関係ロードマップ2024-2033」の枠組みの下、鉱業技術・イノベーション分野における具体的な協力を通じて戦略的パートナーシップを強化することを目的に、日本政府関係者との一連の活動を開始しました。
          </p>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              METIへの3年間の作業計画を提案
            </h2>
            <p>
              シンノ大臣は、日本の経済産業省（METI）に対し、技術面および商業面の行動方針に沿って投資・協力案件を特定する、3年間の作業計画を提案しました。
            </p>
            <p className="mt-4">
              同大臣は、ペルーには構想を具体的な行動へ移す確固たる意思があり、検証後すぐに実施可能な9つの行動項目を含む計画案を持参したと説明しました。これにより、グリーン水素と分散型電源のパイロット事業を直ちに開始できるとして、METIに作業部会の設置を提案しました。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              JOGMECとの技術協力
            </h2>
            <p>
              日程の一環として、シンノ大臣は独立行政法人エネルギー・金属鉱物資源機構（JOGMEC）とも会談し、ペルーと日本の国際協力の進捗状況を確認しました。
            </p>
            <p className="mt-4">
              この技術協力では、鉱業活動を監視するための画像解析およびリモートセンシングの手法に関する知見が提供されています。これまでに、エネルギー鉱山省（MINEM）およびペルー地質鉱業冶金研究所（INGEMMET）の職員を対象とする研修が3回実施されており、10月には第4回研修が予定されています。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              ペルーへの投資を促進
            </h2>
            <p>
              シンノ・ウアマニ大臣は、今回の訪日のもう一つの目的は、ペルーに対する信頼を高め、インフラ、鉱業、特にクリーンエネルギー分野への日本企業の参加を一層促進することにあると強調しました。
            </p>
            <p className="mt-4">
              この一環として、同大臣は三菱商事、三井物産および住友金属鉱山の幹部と会談し、ペルーにおける新規プロジェクトへの各社の関心について意見交換を行いました。
            </p>
            <p className="mt-4">
              また、ペルーは重要鉱物およびレアアースのサプライチェーンにおいて、日本の戦略的パートナーであると述べ、「ペルーの潜在力と日本の技術力・資金力を結び付ける必要があります」と付け加えました。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              APECエネルギー大臣会合へ
            </h2>
            <p>
              シンノ・エネルギー鉱山相は一連の日本での活動を終えた後、中国・北京で開催される第16回アジア太平洋経済協力（APEC）エネルギー大臣会合へ向かいます。同会合では、エネルギー協力の枠組みにおいてペルーの利益を代表します。
            </p>
            <p className="mt-4">
              APECでは、クリーンエネルギー分野における投資、政策調整および連携の促進、全国連系電力システムの強靱化、天然ガスの普及、効率的な技術の導入ならびにすべての人々のエネルギーアクセス確保に取り組む方針です。
            </p>
          </section>
        </div>

        <footer className="mt-10 border-t border-gray-300 pt-6 text-xs text-gray-600 md:text-sm">
          <h2 className="mb-2 text-base font-semibold text-gray-900 japanese-heading-3">出典</h2>
          <p>
            ペルー・エネルギー鉱山省（2026年9月8日）「Ministro de Energía y Minas inició reuniones con autoridades y empresas en Japón para promover inversiones y cooperación técnica」。
          </p>
          <a
            href="https://www.gob.pe/institucion/minem/noticias/1441162-ministro-de-energia-y-minas-inicio-reuniones-con-autoridades-y-empresas-en-japon-para-promover-inversiones-y-cooperacion-tecnica"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block break-all text-red-700 hover:underline"
          >
            公式ソース：ペルー・エネルギー鉱山省
          </a>
        </footer>
      </article>
    </Layout>
  );
};

export default EnergyMinesMinisterJapanPage;
