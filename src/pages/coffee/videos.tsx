
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import YoutubeEmbed from "../../components/YoutubeEmbed";

const RecipesPage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale}>
     <Banner alt="coffee " src="http://embperujapan.org/gastronomia/coffee.jpg" src2="http://embperujapan.org/gastronomia/coffee.jpg" />
      <div className="container p-6 pb-0  mx-auto">
        <h2 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl md:mb-2">
          
        </h2>
      </div>
      <section className="bg-white py-1 ">
        <div className="container mx-auto flex flex-wrap md:pt-4 pb-12">
        <div className="w-full md:w-1/2 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <YoutubeEmbed embedId="Jhrz4mNjFx0" />
              </div>
              <Link href="/restaurants" className="">
                <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">
                    The Sensory Map of Peruvian Coffee 
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <YoutubeEmbed embedId="5G7eyiC9Q_o" />
              </div>
              <Link href="/restaurants" className="">
                <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">
                    Cup of Excellence Peru 2020 
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecipesPage;
