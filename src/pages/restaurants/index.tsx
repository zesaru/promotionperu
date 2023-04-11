import { dataset, projectId } from "lib/sanity.api";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google";
import  Image from "next/image";
import {useRouter} from "next/router";
import { createClient, groq } from "next-sanity";
import React from "react";
import Card from "src/components/Card";

import Layout from "../../components/Layout";

const inter = Inter({ subsets: ["latin"] });

const clientConfig = {
  projectId,
  dataset,
  useCdn: false,
};

function getCities() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "cities"]{
      _id,
      city,
      image,
    }
  `);
}

export default function Restaurants({ cities: cities }: { cities: any }) {
  const { locale } = useRouter();
  return (
    <Layout language={locale}>
      <section className="flex justify-center align-middle ">
        <div className="">
          <Image
            alt="Restaurants"
            src="http://embperujapan.org/gastronomia/restaurantsv2.jpg"
            width={1500}
            height={660}
            className="hidden md:block md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl rounded-3xl shadow-2xl"
          />
        </div>
      </section>
      <section className="flex justify-center align-middle ">
        <div className="mx-auto block md:hidden">
          <Image
            alt="Restaurants"
            src="http://embperujapan.org/gastronomia/restaurants400.jpg"
            width={400}
            height={380}
            className="max-w-screen-xs rounded-3xl shadow-2xl"
          />
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {cities.map(
            (city: {
              city: string;
              _id: React.Key | null | undefined;
              image: string;
            }) => (
              <Card
                name={city?.city}
                key={city._id}
                imageSrc={city?.image}
                imageAlt={city?.city}
                city={city.city.toLowerCase()}
              />
            )
          )}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const cities = await getCities();
  return {
    props: {
      cities,
    },
  };
};
