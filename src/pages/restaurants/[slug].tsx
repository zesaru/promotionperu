import { apiVersion,dataset, projectId } from "lib/sanity.api";
import { GetStaticPaths, GetStaticProps } from "next";
import { createClient, groq } from "next-sanity";
import React from "react";
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
  return createClient(clientConfig).fetch(groq`
    *[_type == "restaurant" && city->city == $slug] {
      _id,
      name,
      "image": image.asset->url,
      "city": city->city,
      facebook,
      homepage,
      phone,
      address,
    } 
`, { slug });
}

function getCities() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "cities"]{
      _id,
      city,
      "image": image.asset->url,
    }
  `);
}



const Slug = ({restaurants, slug}:CardProps) => {

  return (
    <Layout>
      <section
        className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
        style={{
          maxWidth: 1600,
          height: "32rem",
          backgroundImage:
            'url("https://peru.info/img/20.restaurantes-del-mundo/logo-banner.jpg")',
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start px-6 tracking-wide">
            <h1 className="text-white text-4xl lg:text-5xl my-4">
              RESTAURANTS IN {slug.toUpperCase()}
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {restaurants.map((restaurant: any) => (
            <RestaurantCard
              name={restaurant.name}
              imageSrc={restaurant.image}
              key={restaurant._id}
              imageAlt={restaurant.name}
              facebook={restaurant.facebook}
              homepage={restaurant.homepage}
              phone={restaurant.phone}
              address={restaurant.address}
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

  const cities = await getCities();
  
  return {
    paths: cities.map( (city: { city: string; }) => ({
      params: { slug: city.city.toLowerCase() }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const { slug } = params as { slug: string };
  const  data  = await getRestaurants(capitalizeFirstLetter(slug));

 return {
    props: {
      restaurants: data,
      slug: capitalizeFirstLetter(slug)
    }
  }
}