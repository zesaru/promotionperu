import { useRouter } from "next/router";

import ImageSlider, { SliderImage } from "@/components/ImageSlider";
import Layout from "@/components/Layout";

const galleryImages: SliderImage[] = [
  {
    src: "/images/investing-news/2026/energy-mines-minister-japan-investment-technical-cooperation/meti-meeting.jpeg",
    alt: "ギジェルモ・シンノ・エネルギー鉱山相と日本政府関係者による投資・技術協力に関する会談",
    caption: "METIとの技術協力に関する会談。",
  },
  {
    src: "/images/investing-news/2026/energy-mines-minister-japan-investment-technical-cooperation/jogmec-meeting.jpeg",
    alt: "ペルーと日本の関係機関による鉱業技術協力に関する会談",
    caption: "鉱業技術協力の進捗を確認するJOGMECとの会談。",
  },
  {
    src: "/images/investing-news/2026/energy-mines-minister-japan-investment-technical-cooperation/PXL_20260908_104855187.jpg",
    alt: "ギジェルモ・シンノ・エネルギー鉱山相と日本の関係者による会談",
    caption: "SMMとペルーにおける投資の機会について意見交換。",
  },
];

const EnergyMinesMinisterJapanPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-09-08T00:00:00+09:00"
      title="シンノ・エネルギー鉱山大臣、新政権下のMINEM改革と鉱業投資環境の改善策を日本側に説明"
      description="ギジェルモ・シンノ・ワマニ・エネルギー鉱山大臣は、日本の政府機関と企業に対し、新政権下でのMINEM改革と、鉱業投資環境を改善する具体的な措置を説明しました。"
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
            シンノ・エネルギー鉱山大臣、新政権下のMINEM改革と鉱業投資環境の改善策を日本側に説明
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
          <p>
            9月8日（火）、ギジェルモ・シンノ・ワマニ・エネルギー鉱山大臣は、ケイコ・フジモリ大統領の新政権の下でペルー・エネルギー鉱山省（MINEM）が今後実施する改革と、ペルーの鉱業投資環境をより安定的で予見可能かつ投資しやすいものとするための具体的な措置を日本側に説明することを主な目的として、東京において日本政府関係者および鉱業・エネルギー分野の主要企業の幹部と意見交換を行った。
          </p>

          <p>
            シンノ大臣は、経済産業省（METI）および独立行政法人エネルギー・金属鉱物資源機構（JOGMEC）の関係者と会談したほか、三井金属、三菱商事、三井物産および住友金属鉱山（SMM）の幹部と意見交換を行った。各会談では、ペルーにおける鉱業・エネルギープロジェクトの開発、重要鉱物および銅のサプライチェーンの強靱化、エネルギー転換ならびに技術協力の可能性について協議した。
          </p>

          <p>
            シンノ大臣は、日本側関係者に対してペルー経済の見通しに関する最新情報を提供するとともに、行政手続の簡素化、規制制度の改善および規制緩和など、新政権が投資環境の強化に向けて推進している措置を説明した。また、MINEMが投資家と積極的に連携し、実現可能性のある投資プロジェクトの具体化を支援する用意があることを強調した。
          </p>

          <p>
            今回の訪問を通じて、日本の投資家に対し、ペルーが鉱業投資環境の改善に向けた具体的な措置を講じており、新規プロジェクトの開発および既存投資の拡大のため、より安定的、効率的かつ予見可能な枠組みの整備に取り組んでいるとの明確なメッセージが示された。
          </p>
        </div>

      </article>
    </Layout>
  );
};

export default EnergyMinesMinisterJapanPage;
