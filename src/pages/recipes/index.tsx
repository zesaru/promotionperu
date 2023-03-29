import Image from "next/image";
import Link from "next/link";
import React from "react";

import Layout from "../../components/Layout";

const gastronomyPage = () => {
  return (
    <Layout title={""}>
      <section className="flex justify-center align-middle ">
        <div className="">
          <Image
            alt="Gastronomy"
            src="http://embperujapan.org/gastronomia/gastronomyv2.jpg"
            width={1500}
            height={660}
            className="hidden md:block md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl rounded-3xl shadow-2xl"
          />
        </div>
      </section>
      <section className="flex justify-center align-middle ">
        <div className="mx-auto block md:hidden">
          <Image
            alt="Gastronomy"
            src="http://embperujapan.org/gastronomia/gastronomy500v2.jpg"
            width={400}
            height={380}
            className="max-w-screen-xs rounded-3xl shadow-2xl"
          />
        </div>
      </section>
      <div className="container p-6  mx-auto">
        <a
          className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
          href="#"
        >
          PERUVIAN RECIPES
        </a>
        <p className="mb-4">
        Here you can find the most traditional and delicious Peruvian recipes that you can try at home. 
        </p>
      </div>
      <section className="bg-white py-1 ">
        <div className="container mx-auto flex flex-wrap md:pt-4 pb-12">
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/restaurants" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg"
                    width={640}
                    height={480}
                    alt="recipes"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
              <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">Recipe 1</p>
                </div>
              </Link>
            </div>
          </div>
          {/* Receta */}
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/restaurants" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg"
                    width={640}
                    height={480}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
              <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">Recipe 1</p>
                </div>
              </Link>
            </div>
          </div>
          {/* Video */}
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/restaurants" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg"
                    width={640}
                    height={480}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
              <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">Recipe 1</p>
                </div>
              </Link>
            </div>
          </div>
          {/* Video */}
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/restaurants" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg"
                    width={640}
                    height={480}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
                <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">Recipe 1</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default gastronomyPage;
