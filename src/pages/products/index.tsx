import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Banner from "src/components/Banner";

import Layout from "../../components/Layout";

const ProductsPage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title={ locale==="en" ? "Products" : "ペルー食品"}>
      <Banner alt={"Peruvian cocoa, pisco, and coffee"} src={"https://res.cloudinary.com/de5ud82os/image/upload/v1694564012/WEB/gastronomia/products_g6hfbw.jpg"} src2={"https://res.cloudinary.com/de5ud82os/image/upload/v1694564009/WEB/gastronomia/products400_z82at4.jpg"} />
      <div className="container p-6  mx-auto">
        <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
          <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
          <h2 className="pl-2">{ locale==="en" ? "Products" : "ペルー食品"}</h2>
        </div>
        <span className="mt-4 mb-4">
          {locale === "en"
            ? `
          Peruvian cocoa, pisco, and coffee are the perfect choice for
          discerning palates! Enjoy the quality and taste of Peru in Japan with
          these delicious products! Authentic flavors that will transport you to
          the culinary richness of Peru!
          `
            : `
            ペルー産のカカオ、ピスコ、コーヒーは舌の肥えた味覚に完璧な選択です。ペルーの品質と味を日本でお楽しみください。本物の味が、あなたをペルー料理の豊かさにご招待！
          `}
        </span>
      </div>
      <section className="bg-white container mx-auto p-6">
        <div className="md:flex py-8">
          <div className="w-full xl:w-3/5 flex justify-end p-2">
            <Link href="/pisco" className="">
              <Image
                className="hover:grow hover:shadow-lg rounded-xl"
                src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564010/WEB/gastronomia/product_piscov2_lobeaw.jpg"
                width={750}
                height={250}
                alt="Peruvian Products Pisco"
              />
            </Link>
          </div>
          <div className="w-full xl:w-2/5 flex items-center">
            <span className="py-10 md:py-0 border-l-8 border-red-500 h-2/3"></span>
            <Link href="/pisco">
              <div className="pl-2 md:pr-10">
                <h3 className="text-xl">{locale === "en" ? "Pisco" : "ピスコ"}</h3>
                <p>
                  {locale === "en"
                    ? `Pisco is a distilled spirit made from fermented must (juice)
                  of fresh Pisco grapes and is a unique alcoholic beverage
                  produced in Peru. Its origins date back to the late 16th
                  century, and it is still produced today using traditional
                  methods by the first generation of brandy producers.`
                    : `ピスコは、新鮮なピスコブドウのマスト（果汁）を発酵させた蒸留酒であり、ペルーが産み出した、ペルー特有のお酒です。その起源は16世紀の終わりまでさかのぼり、今もこのブランデーの初代生産者の伝統的なやり方を大切にして作られています。`}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="md:flex py-8">
          <div className="w-full xl:w-2/5 flex items-center">
            <span className="py-10 md:py-0 border-l-8 border-red-500 h-2/3"></span>
            <Link href="/cacao">
              <div className="pl-2">
                <h3 className="text-xl">{locale === "en" ? "Cacao" : "カカオ"}</h3>
                <p>
                  {locale === "en"
                    ? `Cacao is a native species of America, probably native to
                  Western Amazonia. In Peru, cacao is cultivated in the jungle
                  of Loreto, San Martín, Ucayali, Huánuco, Junín, Pasco, Madre
                  de Dios, Cusco and Ayacucho.`
                    : `カカオはアメリカ原産種で、おそらく西アマゾン地域がその起源と考えられています。ペルーでは、カカオはロレート、サン マルティン、ウカヤリ、ワヌコ、フニン、パスコ、マドレ デ ディオス、クスコ、アヤクチョのジャングルで栽培されています。`}
                </p>
              </div>
            </Link>
          </div>
          <div className="w-full xl:w-3/5 flex justify-items-start p-2">
            <Link href="/cacao" className="">
              <Image
                className="hover:grow hover:shadow-lg rounded-xl"
                src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564010/WEB/gastronomia/product_cacaov2_tblzj4.jpg"
                width={750}
                height={250}
                alt="Peruvian Products Cacao"
              />
            </Link>
          </div>
        </div>
        <div className="md:flex py-8">
          <div className="w-full xl:w-3/5 flex justify-end p-2">
            <Link href="/coffee" className="">
              <Image
                className="hover:grow hover:shadow-lg rounded-xl"
                src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564010/WEB/gastronomia/product_coffeev2_vcvqgi.jpg"
                width={750}
                height={250}
                alt="Peruvian Products Pisco"
              />
            </Link>
          </div>
          <div className="w-full xl:w-2/5 flex items-center">
            <span className="py-10 md:py-0 border-l-8 border-red-500 h-2/3"></span>
            <Link href="/coffee">
              <div className="pl-2">
                <h3 className="text-xl">{ locale ==='en' ? "Coffee" : "コーヒー"}</h3>
                <p>{
                  locale === "en" ?
                  `Peru produces Arabica coffee with various flavors, aromas, and acidity in the central Amazon region. `
                  :`ペルーは、アマゾン中央部で様々な味や香り、酸味を持つアラビカ種のコーヒーを生産しています。`
                  }
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
