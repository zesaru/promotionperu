import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2, ImArrowLeft } from "react-icons/im";
import Banner from "@src/components/Banner";
import Layout from "@src/components/Layout";

const PreviousVersionsPage = () => {
  const { locale } = useRouter();

  const content = {
    en: {
      title: "Previous Investment Guides",
      subtitle: "Access historical investment guides to track Peru's economic evolution and investment opportunities over the years.",
      backToMain: "Back to Main",
      download: "Download",
      guide2024: "Investment Guide 2024 \"VALE UN PERÚ\"",
      guide2023: "Investment Guide 2023 \"VALE UN PERÚ\"",
      guide2022: "Investment Guide 2022 \"VALE UN PERÚ\"",
      desc2024: "Comprehensive guide with 2024 investment opportunities and economic indicators.",
      desc2023: "Updated information about investment opportunities in Peru for Japanese companies.",
      desc2022: "Reference document with historical data and investment framework."
    },
    jp: {
      title: "過去の投資ガイド",
      subtitle: "歴史的な投資ガイドにアクセスして、ペルーの経済発展と投資機会の推移を確認してください。",
      backToMain: "メインに戻る",
      download: "ダウンロード",
      guide2024: "投資ガイド 2024 「VALE UN PERÚ」",
      guide2023: "投資ガイド 2023 「VALE UN PERÚ」",
      guide2022: "投資ガイド 2022 「VALE UN PERÚ」",
      desc2024: "2024年の投資機会と経済指標を含む包括的なガイド。",
      desc2023: "日本企業のためのペルーの投資機会に関する最新情報。",
      desc2022: "歴史データと投資フレームワークを含む参考資料。"
    }
  };

  const texts = content[locale as keyof typeof content] || content.en;

  return (
    <Layout language={locale} title="Previous Investment Guides">
      <Banner
        alt={"Previous Investment Guides"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/investing-in-peru"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold mb-6 transition-colors"
          >
            <ImArrowLeft className="mr-2" />
            {texts.backToMain}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {texts.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {texts.subtitle}
          </p>
        </div>
      </section>

      {/* Previous Guides Section */}
      <section className="bg-white container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8">
            {/* Guide 2024 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/de5ud82os/image/upload/v1701071043/WEB/investing-in-peru/kqx7urufnxitt164oqf1.jpg"
                    width={800}
                    height={500}
                    alt="Investment Guide 2024 VALE UN PERÚ"
                  />
                </div>
                <div className="p-8 md:w-1/2 md:flex md:flex-col md:justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{texts.guide2024}</h3>
                  <p className="text-gray-600 mb-6">{texts.desc2024}</p>
                  <a
                    href="https://embperujapan.org/guia_de_inversiones-2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <ImDownload2 className="mr-2" />
                    {texts.download}
                  </a>
                </div>
              </div>
            </div>

            {/* Guide 2023 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564006/WEB/gastronomia/peruinjapanguiadeinversiones_qosebq.jpg"
                    width={800}
                    height={500}
                    alt="Investment Guide 2023 VALE UN PERÚ"
                  />
                </div>
                <div className="p-8 md:w-1/2 md:flex md:flex-col md:justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{texts.guide2023}</h3>
                  <p className="text-gray-600 mb-6">{texts.desc2023}</p>
                  <a
                    href="https://embperujapan.org/guia_de_inversiones-2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <ImDownload2 className="mr-2" />
                    {texts.download}
                  </a>
                </div>
              </div>
            </div>

            {/* Guide 2022 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564006/WEB/gastronomia/peruinjapanguiadeinversiones_qosebq.jpg"
                    width={800}
                    height={500}
                    alt="Investment Guide 2022 VALE UN PERÚ"
                  />
                </div>
                <div className="p-8 md:w-1/2 md:flex md:flex-col md:justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{texts.guide2022}</h3>
                  <p className="text-gray-600 mb-6">{texts.desc2022}</p>
                  <a
                    href="https://cdn.www.gob.pe/uploads/document/file/5127968/guia_de_inversiones-2022.pdf?v=1694662913"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <ImDownload2 className="mr-2" />
                    {texts.download}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PreviousVersionsPage;
