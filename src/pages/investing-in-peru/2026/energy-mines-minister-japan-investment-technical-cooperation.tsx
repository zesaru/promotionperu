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
      title="シンノ・エネルギー鉱山大臣が訪日、ペルーの鉱業・エネルギー分野における投資機会ポートフォリオを紹介"
      description="ギジェルモ・シンノ・ワマニ・エネルギー鉱山大臣は訪日し、政府機関および日本企業との会談で、ペルーの鉱業・エネルギー分野における投資機会を紹介しました。"
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
            シンノ・エネルギー鉱山大臣が訪日、ペルーの鉱業・エネルギー分野における投資機会ポートフォリオを紹介
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
            ギジェルモ・シンノ・ワマニ・エネルギー鉱山大臣は、9月8日（火）、東京において一連の公式日程を実施し、日本の経済産業省（METI）およびエネルギー・金属鉱物資源機構（JOGMEC）の関係者・幹部との会談に加え、三井金属鉱業、三菱商事、三井物産および住友金属鉱山（SMM）の経営幹部と意見交換を行いました。
          </p>

          <p>
            一連の会談では、対ペルー投資、鉱業・エネルギープロジェクトの開発、重要鉱物、銅サプライチェーンの強靱化、エネルギー転換および技術協力の可能性について、さまざまな観点から協議が行われました。また、シンノ大臣は、日本側の主要な関係者に対し、ペルー経済の今後の見通しや、新政権が投資環境の強化に向けて推進している施策について、最新の情報を説明しました。
          </p>

          <p>
            今回の訪問を通じて、鉱業・エネルギー分野を所管するペルー政府の最高責任者から日本企業に対し、安定性の向上、行政手続の簡素化および規制緩和を通じて投資を促進するとのメッセージが伝えられました。また、エネルギー鉱山省（MINEM）は、投資家に積極的に寄り添い、投資案件の実現を支援する用意があることを表明しました。
          </p>
        </div>

      </article>
    </Layout>
  );
};

export default EnergyMinesMinisterJapanPage;
