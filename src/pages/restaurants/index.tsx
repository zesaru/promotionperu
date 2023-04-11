import { getAllCities } from "lib/sanity.client";
import { GetStaticProps } from "next";
import {useRouter} from "next/router";
import React from "react";
import Banner from "src/components/Banner";
import Card from "src/components/Card";

import Layout from "../../components/Layout";

export default function Restaurants({ cities: cities }: { cities: any }) {
  const { locale } = useRouter();

  return (
    <Layout language={locale}>
    <Banner alt="Restaurants" src="http://embperujapan.org/gastronomia/restaurantsv2.jpg" src2="http://embperujapan.org/gastronomia/restaurants400.jpg" />
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
  const cities = await getAllCities();
  return {
    props: {
      cities,
    },
  };
};
