import { useRouter } from "next/router";
import Image from "next/image";

import Layout from "@/components/Layout";

export default function GreetingsFromAmbassadorPage() {
  const { locale } = useRouter();

  const title =
    locale === "en"
      ? "Greetings from Ambassador Francisco Tenya Hasegawa"
      : "フランシスコ・テニャ・ハセガワ大使からのご挨拶";

  const description =
    locale === "en"
      ? "Official greetings from Ambassador Francisco Tenya Hasegawa on Peru in Japan."
      : "Peru in Japanにおけるフランシスコ・テニャ・ハセガワ大使からの公式ご挨拶。";

  return (
    <Layout language={locale} title={title} description={description}>
      <div className="flex justify-center px-4 pt-6">
        <Image
          alt={title}
          src="https://res.cloudinary.com/de5ud82os/image/upload/v1778133014/WEB/2026/fotofranciscomofa_xwnm67.jpg"
          width={1500}
          height={660}
          className="w-full md:w-1/2 rounded-3xl shadow-2xl"
          priority
        />
      </div>

      <div className="container py-6 px-4 mx-auto max-w-4xl">
        <h1 className="uppercase tracking-wide font-bold text-gray-800 text-xl md:text-2xl mb-8">
          {title}
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          {locale === "en" ? (
            <>
              <p>
                As I begin my mission as Ambassador of Peru to Japan, I am
                pleased to share a few words with you. This country holds a very
                special place in my professional history, as it was here, over
                three decades ago, that I began my career in Foreign Service.
              </p>
              <p>
                As a Peruvian career diplomat with Japanese roots, I take this
                appointment with great enthusiasm and a deep sense of
                responsibility. It is a milestone of profound personal
                significance and a distinct honor to serve as a bridge between
                the land of my ancestors and my homeland, Peru, two countries
                bound by deep cultural and an enduring friendship that has stood
                the test of time.
              </p>
              <p>
                My commitment is to strengthen our economic ties, promoting the
                many business opportunities, and showcase our rich culture and
                gastronomy, while, above all, fostering the people-to-people
                bonds that lie at the heart of our relationship, ties grounded
                in the mutual recognition by the Japanese and Peruvian peoples
                of one another as heirs to two millenary civilizations, united
                by shared values and common visions of development and equity.
              </p>
              <p>
                I also look forward to collaborating closely with the
                hardworking Peruvian community, including many whom I first met
                through sports during my youth, as well as our Japanese partners
                and friends of Peru, to continue building a prosperous future
                grounded in mutual understanding.
              </p>
              <div className="pt-4">
                <p className="font-semibold text-gray-900">
                  Francisco Tenya Hasegawa
                </p>
                <p>Ambassador of Peru to Japan</p>
              </div>
            </>
          ) : (
            <>
              <p>
                在日ペルー大使としての任務を開始するにあたり、皆様にご挨拶申し上げます。日本は私の職業人生において非常に特別な場所であり、三十年以上前、この地で外交官としてのキャリアをスタートさせました。
              </p>
              <p>
                日系のルーツを持つペルーの職業外交官として、この任命を大きな熱意と深い責任感をもって受け止めております。これは私にとって個人的にも大きな意味を持つ節目であり、先祖の地と私の祖国ペルーとを結ぶ架け橋として働くことは、この上ない名誉であります。両国は深い文化的絆と、長い歴史の試練に耐えてきた変わらぬ友情によって結ばれています。
              </p>
              <p>
                私の使命は、両国の経済的な結びつきを強化し、多くのビジネス機会を促進するとともに、豊かな文化とガストロノミーを発信することです。そして何より、日本とペルーの人々が、二つの悠久の文明の継承者として互いを認め合い、発展と公正に関する共通の価値観とビジョンによって結ばれた、人と人との絆を育んでいくことに力を注いでまいります。
              </p>
              <p>
                また、若い頃にスポーツを通じて出会った多くの方々を含む、勤勉なペルーコミュニティの皆様、そして日本のパートナーやペルーの友人の皆様と緊密に協力し、相互理解に根ざした豊かな未来を共に築いてまいりたいと思います。
              </p>
              <div className="pt-4">
                <p className="font-semibold text-gray-900">
                  フランシスコ　天谷　長谷川
                </p>
                <p>在日ペルー大使</p>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
