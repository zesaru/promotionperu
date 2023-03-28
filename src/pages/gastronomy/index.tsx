import Image from "next/image";
import Link from "next/link";
import React from "react";

import Layout from "../../components/Layout";

const gastronomyPage = () => {
  return (
    <Layout>
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
      <div className="container py-4 md:py-6 px-4 mx-auto">
        <a
          className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
          href="#"
        >
          GASTRONOMY
        </a>
        <p className="mb-4">
          Peruvian gastronomy is one of the most diverse and rich in the world.
          Here you will find a list of the more of 20 Peruvian restaurants
          located throughout Japan, recipes of traditional dishes that you can
          replicate at home, videos promoting Peruvian food and information
          about stores where you can buy some Peruvian products.
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
                    src="http://embperujapan.org/gastronomia/restaurantsv640v2.jpg"
                    width={640}
                    height={480}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
                <div className="flex justify-start">
                  <p className="py-4 text-xl hover:grow">Peruvians Restaurants</p>
                </div>
              </Link>
            </div>
          </div>
          {/* Receta */}
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/recipes" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/gastronomia/lomosaltado640x480.jpg"
                    width={640}
                    height={480}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/recipes" className="">
                <div className="flex justify-start">
                  <p className="py-4 text-xl hover:grow">Recipes</p>
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
                    src="http://embperujapan.org/gastronomia/productos.jpg"
                    width={640}
                    height={480}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
                <div className="flex justify-start">
                  <p className="py-4 text-xl hover:grow">Products</p>
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
                    src="http://embperujapan.org/gastronomia/video640480.jpg"
                    width={640}
                    height={480}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
                <div className="flex justify-start">
                  <p className="py-4 text-xl hover:grow">Videos</p>
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
