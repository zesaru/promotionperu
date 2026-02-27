import { apiVersion, dataset, projectId } from "lib/sanity.api";
import { getAllCities } from "lib/sanity.client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { createClient, groq } from "next-sanity";
import React from "react";
import Banner from "src/components/Banner";
import Layout from "src/components/Layout";

import RestaurantCard from "../../components/RestautantCard";

const clientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
};

type CardProps = {
  restaurants: Array<any>;
  slug: string;
};

function getRestaurants(slug: string) {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "restaurant" && enabled == true && city->city == $slug ] {
      _id,
      name,
      "image": image.asset->url,
      "city": city->city,
      facebook,
      homepage,
      enabled,
    } | order(name)
`,
    { slug }
  );
}

const Slug = ({ restaurants, slug }: CardProps) => {
  const { locale } = useRouter();
  const title =
    "Restaunrants in " + slug.charAt(0).toUpperCase() + slug.slice(1);
  return (
    <Layout language={locale} title={title}>
      <Banner
        alt="Restaurants"
        src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564012/WEB/gastronomia/restaurantsbanner2_ajlqai.jpg"
      />
      <section className="bg-white py-8">
        <div className="container p-2 md:p-4 mx-auto">
          <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-2">
            <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
            <h1 className="pl-2">{title}</h1>
          </div>
        </div>
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {restaurants.map((restaurant: any) => (
            <RestaurantCard
              name={restaurant.name}
              imageSrc={restaurant.image}
              key={restaurant._id}
              imageAlt={restaurant.name}
              facebook={restaurant.facebook}
              homepage={restaurant.homepage}
              city={restaurant.city}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Slug;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const cities = await getAllCities();
  const LANGUAGES = ["", "en"];
  const paths = [];

  for (const lang of LANGUAGES) {
    for (const city of cities) {
      paths.push({
        params: { slug: city.city.toLowerCase() },
        locale: lang,
      });
    }
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const { slug } = params as { slug: string };
  const data = await getRestaurants(capitalizeFirstLetter(slug));

  return {
    props: {
      restaurants: data,
      slug: capitalizeFirstLetter(slug),
    },
  };
};
