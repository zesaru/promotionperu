import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";

const ProductsPage = () => {
  const { locale } = useRouter();
  return (
    <Layout language={locale}>
      <section className="flex justify-center align-middle ">
        <div className="">
          <Image
            alt="Gastronomy"
            src="http://embperujapan.org/gastronomia/products.jpg"
            width={1500}
            height={660}
            className="hidden md:block md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl rounded-3xl shadow-2xl"
          />
        </div>
      </section>
      <section className="flex justify-center align-middle ">
        <div className="mx-auto block md:hidden">
          <Image
            alt="Gastronomy"
            src="http://embperujapan.org/gastronomia/products400.jpg"
            width={400}
            height={380}
            className="max-w-screen-xs rounded-3xl shadow-2xl"
          />
        </div>
      </section>
      <div className="container p-6  mx-auto">
        <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
          <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
          <h2 className="pl-2">Products</h2>
        </div>
        <span className="mt-4 mb-4">
          Peruvian cocoa, pisco, and coffee are the perfect choice for
          discerning palates! Enjoy the quality and taste of Peru in Japan with
          these delicious products! Authentic flavors that will transport you to
          the culinary richness of Peru!
        </span>
      </div>
      <section className="bg-white container mx-auto p-6">
        <div className="md:flex py-8">
            <div className="w-3/4 flex justify-end p-2">
                <Link href="/restaurants" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/gastronomia/products.jpg"
                    width={750}
                    height={250}
                    alt="Restaurants"
                  />
                </Link>
            </div>
            <div className="w-1/4">
              <Link href="/restaurants" className="">
                <div>
                  <h3 className="text-xl hover:grow">Pisco</h3>
                  
                </div>
                <div className="w-8/1 border-b-4 border-red-500"></div>
              </Link>
            </div>
        </div>
        <div className="md:flex py-8">
            <div className="w-1/4">
              <Link href="/restaurants" className="">
                <div>
                  <h3 className="text-xl hover:grow">Pisco</h3>
                  
                </div>
                <div className="w-8/1 border-b-4 border-red-500"></div>
              </Link>
            </div>
            <div className="w-3/4 flex justify-start p-2">
                <Link href="/restaurants" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/gastronomia/products.jpg"
                    width={750}
                    height={250}
                    alt="Restaurants"
                  />
                </Link>
            </div>
        </div>
        <div className="md:flex py-8">
            <div className="w-3/4 flex justify-end p-2">
                <Link href="/restaurants" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/gastronomia/products.jpg"
                    width={750}
                    height={250}
                    alt="Restaurants"
                  />
                </Link>
            </div>
            <div className="w-1/4">
              <Link href="/restaurants" className="">
                <div>
                  <h3 className="text-xl hover:grow">Pisco</h3>
                  
                </div>
                <div className="w-8/1 border-b-4 border-red-500"></div>
              </Link>
            </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
