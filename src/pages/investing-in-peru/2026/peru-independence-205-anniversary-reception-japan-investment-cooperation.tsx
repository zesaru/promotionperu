import { useRouter } from "next/router";

import ImageSlider, { SliderImage } from "@/components/ImageSlider";
import Layout from "@/components/Layout";

const galleryImages: SliderImage[] = [
  {
    src: "/images/investing-news/2026/peru-independence-205/sakai-tenya-hasegawa.webp",
    alt: "ペルー独立205周年記念レセプションで握手する酒井庸行国土交通副大臣とフランシスコ・テニヤ・ハセガワ駐日ペルー大使",
    caption: "酒井庸行国土交通副大臣とフランシスコ・テニヤ・ハセガワ駐日ペルー大使。",
  },
  {
    src: "/images/investing-news/2026/peru-independence-205/reception-guests.webp",
    alt: "ペルー独立205周年記念レセプションに出席した来賓",
    caption: "小森卓郎経済産業大臣政務官がペルー独立記念を祝福",
  },
  {
    src: "/images/investing-news/2026/peru-independence-205/hitachi-toast.webp",
    alt: "日立建機の平野耕太郎執行役会長兼取締役CEOによる乾杯の発声",
    caption: "日立建機の平野耕太郎執行役会長兼取締役CEOによる乾杯の発声。",
  },
  {
    src: "/images/investing-news/2026/peru-independence-205/hitachi-presentation.webp",
    alt: "ペルーへの事業と投資を紹介する日立建機のプレゼンテーション",
    caption: "ペルーへの事業と投資を紹介する日立建機のプレゼンテーション。",
  },
  {
    src: "/images/investing-news/2026/peru-independence-205/pisco-toast.webp",
    alt: "ピスコでの乾杯を記念するレセプション参加者",
    caption: "ピスコでの乾杯を記念するレセプション参加者。",
  },
];

const PeruIndependence205ReceptionPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-07-27T00:00:00+09:00"
      title="ペルー独立205周年記念レセプション、日ペルーの経済・投資協力の強化を確認"
      description="2026年7月27日に東京で開催されたペルー独立205周年記念レセプションでは、インフラ、運輸、連結性、経済・貿易・投資分野における日ペルー協力の重要性が確認されました。"
      image="https://peruinjapan.org/images/investing-news/2026/peru-independence-205/sakai-tenya-hasegawa.webp"
    >
      <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12">
        <header className="mb-8">
          <div className="mb-6 text-right text-xs text-gray-600 md:text-sm">
            <p>在日ペルー大使館</p>
            <p>非公式翻訳</p>
          </div>
          <p className="mb-3 text-lg font-normal text-gray-800 japanese-heading-3">
            日ペルー関係・投資
          </p>
          <h1 className="mb-4 text-xl font-bold text-gray-900 japanese-heading-1 md:text-2xl">
            ペルー独立205周年記念レセプション、日ペルーの経済・投資協力の強化を確認
          </h1>
          <p className="mb-2 text-xs text-gray-600 md:text-sm">レセプション</p>
          <time className="text-xs text-gray-600 md:text-sm" dateTime="2026-07-27">
            2026年7月27日
          </time>
        </header>

        <div className="mb-8">
          <ImageSlider
            images={galleryImages}
            interval={6000}
            containerClassName="max-w-5xl"
          />
        </div>

        <div className="space-y-6 text-gray-700 japanese-text">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 sm:p-6">
            <p className="text-base font-semibold text-blue-900 md:text-lg">
              東京で開催されたペルー独立205周年記念レセプションでは、インフラ、運輸、連結性、経済・貿易・投資分野における日ペルー協力の強化が確認されました。
            </p>
          </div>

          <p>
            2026年7月27日、東京でペルー独立205周年記念レセプションが開催されました。両国の関係者や企業関係者が集い、ペルーと日本の友好関係を祝いながら、今後の協力の可能性について意見を交わしました。
          </p>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              インフラ・運輸分野での協力
            </h2>
            <p>
              酒井庸行国土交通副大臣はレセプションに出席し、フランシスコ・テニヤ・ハセガワ駐日ペルー共和国大使と懇談しました。この機会を通じて、インフラ、運輸、連結性の分野における二国間協力を引き続き強化する重要性が確認されました。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              経済・貿易・投資関係
            </h2>
            <p>
              小森卓郎経済産業大臣政務官も出席し、テニヤ・ハセガワ大使と挨拶を交わしました。小森政務官の出席は、ペルーと日本の経済、貿易、投資関係の重要性を示すものとなりました。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              日立建機のペルーでの投資
            </h2>
            <p>
              日立建機株式会社の平野耕太郎執行役会長兼取締役CEOは、レセプションで乾杯の発声を行いました。挨拶では、1億米ドルを超える投資と約200人の雇用を生み出した同社のチルカ新工場に言及し、ペルーの成長への貢献と両国の友好関係を一層強化していく決意を表明しました。
            </p>
          </section>
        </div>

        <footer className="mt-10 border-t border-gray-300 pt-6 text-xs text-gray-600 md:text-sm">
          <h2 className="mb-2 text-base font-semibold text-gray-900 japanese-heading-3">出典</h2>
          <p>在日ペルー大使館提供資料「Noticia #3」（2026年7月27日）。</p>
        </footer>
      </article>
    </Layout>
  );
};

export default PeruIndependence205ReceptionPage;
