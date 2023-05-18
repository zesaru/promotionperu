import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";
import Banner from "src/components/Banner";
import YoutubeEmbed from "src/components/YoutubeEmbed";

import Layout from "../../components/Layout";

const InvesmentPage = () => {
  const { locale } = useRouter();
  return (
    <Layout language={locale} title="Investment guide 2022">
      <Banner
        alt={"Investment guide 2022"}
        src={"http://embperujapan.org/gastronomia/peruinjapaninversiones.jpg"}
        src2={"http://embperujapan.org/gastronomia/inversiones400.jpg"}
      />
      <div className="container p-6  mx-auto">
        <div className="container p-2 md:p-4 mx-auto">
          <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-2">
            <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
            <h2 className="pl-2">
              {locale === "en"
                ? "Peru a great choice for doing business"
                : "ビジネスを行うにはペルーが素晴らしい選択です"}
            </h2>
          </div>
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex flex-col justify-center w-full lg:w-1/2">
              <div>
                <div className="flex justify-center items-center">
                  <YoutubeEmbed embedId="LeLFIc2Gi8U" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:w-1/2 w-full lg:pl-4">
              <p className="mt-4 mb-4">
                {locale === "en"
                  ? `Peru's robust economy, rich in natural resources and strategic
                Pacific location, makes it an enticing hub for business and
                investment. With policies promoting an open and competitive
                market, it has attracted significant investments. The young,
                skilled, and cost-effective workforce across various sectors,
                including manufacturing and tech, further enhances its business
                appeal.`
                  : `豊かな自然資源と戦略的な太平洋地域に位置するペルーの強固な経済は、ビジネスと投資の魅力的なハブとなっています。開放的で競争力のある市場を推進する政策により、大きな投資を引き付けています。製造業からテクノロジーまで、さまざまなセクターに渡る若く、スキル豊富でコスト効率の良い労働力は、さらなるビジネスの魅力を高めています。`}
              </p>
              <p className="mt-4 mb-4">
                {locale === "en"
                  ? `In addition to its natural and human resources, Peru offers a
                range of incentives for foreign direct investment, including tax
                exemptions, a stable legal framework, protection against
                arbitrary expropriation, and unrestricted remittance of capital.
                The country also benefits from free trade agreements with the US
                and other major economies, providing advantageous conditions for
                exporters and importers. The improvements in digital
                connectivity have made Peru an appealing destination for tech
                businesses and startups. Considering its political stability,
                economic growth, strategic location, and various incentives,
                Peru undoubtedly offers a lucrative landscape for conducting
                business.`
                  : `ペルー政府は、外国投資を促進するために税制優遇や資本の無制限送金などのインセンティブを提供しています。主要経済国との自由貿易協定は、輸出業者と輸入業者にとって有利な条件を提供します。これらの利点 - 経済の安定性、戦略的な立地、スキル豊かな労働力、投資家に優しい政策、そして有利な貿易協定を考えると、ペルーはビジネスを行うための魅力的な目的地として浮かび上がります。`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white container mx-auto px-6 md:p-6">
        <div className="md:flex py-8">
          <div className="w-full xl:w-2/5 flex flex-col justify-center">
            <div className="flex">
              <span className="py-10 md:py-16 border-l-8 border-red-500 h-2/3"></span>
              <a
                href="http://embperujapan.org/guia_de_inversiones-2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="pl-2">
                  <h3 className="text-xl">Investment guide 2022</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae sapiente unde amet enim recusandae obcaecati iusto
                    soluta deleniti, explicabo et id quaerat reiciendis natus
                    facere optio eius! Quam, architecto fuga?
                  </p>
                </div>
              </a>
            </div>
            <div className="pl-1 py-2 flex md:justify-start justify-center">
              <a
                href="http://embperujapan.org/guia_de_inversiones-2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex align-middle justify-center p-1 w-1/2 md:w-1/3   bg-red-600 text-white text-center rounded-md"
              >
                <ImDownload2 className="text-white m-1" /> Download
              </a>
            </div>
          </div>
          <div className="w-full xl:w-3/5 flex justify-end p-2">
            <Link href="/pisco" className="">
              <Image
                className="hover:grow hover:shadow-lg rounded-xl"
                src="http://embperujapan.org/gastronomia/peruinjapanguiadeinversiones.jpg"
                width={750}
                height={250}
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InvesmentPage;
