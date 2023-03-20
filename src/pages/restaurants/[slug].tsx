import React from "react";
import { useRouter } from "next/router";
import RestaurantCard from "../../components/RestautantCard";
import useSWR from 'swr'
import { dataset, projectId } from 'lib/sanity.api'
import { createClient, groq } from 'next-sanity'

const clientConfig = {
  projectId,
  dataset,
  useCdn: false,
};

function getRestaurants() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "restaurant"] {
      _id,
      name,
      "image": image.asset->url,
    }
  `);
}

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error } = useSWR('restaurant', getRestaurants);
  if (error) return <div>Error loading cities.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
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
              RESTAURANTS
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        {data.map((restaurant:any) => (
            <RestaurantCard name={restaurant.name} imageSrc={restaurant.image} key={restaurant._id}/>
        ))}
        </div>
      </section>
    </div>
  );
};

export default Slug;
