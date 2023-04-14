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
            alt="Investment guide 2022"
            src="http://embperujapan.org/gastronomia/inversiones400.jpg"
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
      <section className="bg-white container mx-auto px-6 md:p-6">
        <div className="md:flex py-8">
          <div className="w-full xl:w-2/5 flex flex-col justify-center">
            <div className="flex">
            <span className="py-10 md:py-16 border-l-8 border-red-500 h-2/3"></span>
            <a href="http://embperujapan.org/guia_de_inversiones-2022.pdf" target="_blank" rel="noopener noreferrer">
              <div className="pl-2">
                <h3 className="text-xl hover:grow">Investment guide 2022</h3>
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
              <a href="http://embperujapan.org/guia_de_inversiones-2022.pdf" target="_blank" rel="noopener noreferrer" className="flex align-middle justify-center p-1 w-1/2 md:w-1/3   bg-red-600 text-white text-center rounded-md">
                      <ImDownload2 className="text-white m-1"/> Download
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

export default ProductsPage;
