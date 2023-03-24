import Image from "next/image";
import Link from 'next/link';
import React from "react";

import Layout from "../../components/Layout";


const gastronomyPage = () => {
  return (
    <Layout>
      <section className="flex justify-center align-middle ">
        <div className="">
          <Image
            alt="Gastronomy"
            src="http://embperujapan.org/gastronomia/image_gastronomy.jpg"
            width={1500}
            height={660}
            className="hidden md:block md:max-w-screen-md lg:max-w-screen-2xl"
          />
        </div>
      </section>
      <section className="flex justify-center align-middle ">
      <div className="mx-auto block md:hidden">
          <Image
            alt="Gastronomy"
            src="http://embperujapan.org/gastronomia/image_gastronomy_500.jpg"
            width={400}
            height={380}
            className=""
          />
        </div>
      </section>
      <section className="bg-white py-1 ">
        <div className="container mx-auto flex flex-wrap md:pt-4 pb-12">
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div >
              <div className="flex justify-center">
              <Link href="/restaurants" className="">
                <Image
                  className="hover:grow hover:shadow-lg w-auto"
                  src="http://embperujapan.org/gastronomia/restaunrantes_640.jpg"
                  width={640}
                  height={480}
                  alt="Restaurants"
                />
              </Link>
              </div> 
              <div className="flex justify-start">
                <p className="py-4 text-xl ">Restaurants</p> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default gastronomyPage;
