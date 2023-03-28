import { dataset, projectId } from "lib/sanity.api";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google";
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

export default function restaurants({ cities: cities }: { cities: any }) {
  return (
    <Layout>

      <section
        className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
        style={{
          maxWidth: 1600,
          height: "32rem",
          backgroundImage:
            // 'url("https://peru.info/img/20.restaurantes-del-mundo/logo-banner.jpg")',
            'url("http://embperujapan.org/gastronomia/restaurantsv2.jpg")',
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start px-6 tracking-wide">
            <h1 className="text-white text-4xl lg:text-5xl my-4">
            PERUVIAN RESTAURANTS
            </h1>
          </div>
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
