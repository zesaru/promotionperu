import { getAllCities } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Banner from "src/components/Banner";
import Card from "src/components/Card";

import Layout from "../../components/Layout";

type City = {
  city: string;
  _id: React.Key;
  image: string;
  title: string;
};

interface RestaurantsProps {
  cities: City[];
}

export default function Restaurants({ cities }: RestaurantsProps) {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title="Restaurants">
      <Banner
        alt="Restaurants"
        src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564012/WEB/gastronomia/restaurantsbanner2_ajlqai.jpg"
      />
      <section className="bg-white py-8">
      <div className="container p-2 md:p-4 mx-auto">
          <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-2">
            <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
            <h2 className="pl-2">
              {locale === "en"
                ? "Peru restaurants in Japan"
                : "日本のペルー料理店"}
            </h2>
          </div>
        </div>
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {cities.map((city) => (
            <Card
              key={city._id}
              name={city?.city}
              imageSrc={city?.image}
              imageAlt={city?.city}
              city={city.city.toLowerCase()}
              title={city.title}
            />
          ))}
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
