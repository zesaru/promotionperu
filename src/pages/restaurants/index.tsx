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
  const title = locale === "en" ? "Peruvian Restaurants in Japan" : "日本のペルー料理店";
  const description = locale === "en"
    ? "Find Peruvian restaurants across Japan by city and discover where to enjoy authentic Peruvian cuisine."
    : "日本各地の都市別に、ペルー料理を楽しめるレストランを探せます。";

  const localizedPath = locale === "en" ? "/en/restaurants" : "/restaurants";
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": `https://peruinjapan.org${localizedPath}`,
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": cities.map((city, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `https://peruinjapan.org${locale === "en" ? "/en" : ""}/restaurants/${city.city.toLowerCase()}`,
          "name": city.title,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": locale === "en" ? "Home" : "ホーム",
          "item": `https://peruinjapan.org${locale === "en" ? "/en" : ""}`,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": title,
          "item": `https://peruinjapan.org${localizedPath}`,
        },
      ],
    },
  ];

  return (
    <Layout language={locale} title={title} description={description} structuredData={structuredData}>
      <Banner
        alt="Restaurants"
        src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564012/WEB/gastronomia/restaurantsbanner2_ajlqai.jpg"
      />
      <section className="bg-white py-8">
      <div className="container p-2 md:p-4 mx-auto">
          <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-2">
            <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
            <h1 className="pl-2">
              {locale === "en"
                ? "Peru restaurants in Japan"
                : "日本のペルー料理店"}
            </h1>
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
