import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Layout from "../../components/Layout";

const ProductsPage = () => {
  const { locale } = useRouter();
  return (
    <Layout language={locale}>
      <section className="flex justify-center align-middle ">
        <div className="">
          <Image
            alt="Gastronomy"
            src="http://embperujapan.org/gastronomia/peruinjapaninversiones.jpg"
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
          <h2 className="pl-2">Investment guide 2022</h2>
        </div>
        <span className="mt-4 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, exercitationem ad qui eum eligendi fuga mollitia ab perspiciatis ex labore vitae dolore, nisi aliquam, facere recusandae assumenda. Odit, id nulla.
        </span>
      </div>
      <section className="bg-white container mx-auto p-6">
        {/* Cacao */}
        <div className="md:flex py-8">
          <div className="xl:w-1/5"></div>
          <div className="w-full xl:w-1/5 flex items-center">
            <span className="py-10 md:py-0 border-l-8 border-red-500 h-2/3"></span>
            <a href="http://embperujapan.org/guia_de_inversiones-2022.pdf">
              <div className="pl-2">
                <h3 className="text-xl hover:grow">Investment guide 2022</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae sapiente unde amet enim recusandae obcaecati iusto
                  soluta deleniti, explicabo et id quaerat reiciendis natus
                  facere optio eius! Quam, architecto fuga? 
                  <a href="http://embperujapan.org/guia_de_inversiones-2022.pdf">
                    <ImDownload2 className="text-red-600 m-2"/>
                  </a>
                </p>
              </div>
            </a>
          </div>
          <div className="w-full xl:w-3/5 flex justify-end p-2">
            <Link href="/pisco" className="">
              <Image
                className="hover:grow hover:shadow-lg w-auto rounded-xl"
                src="http://embperujapan.org/gastronomia/peruinjapanguiadeinversiones.jpg"
                width={750}
                height={250}
                alt=""
              />
            </Link>
          </div>
          <div className="xl:w-1/5"></div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
