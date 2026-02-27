import { useRouter } from "next/router";
import React from "react";
import CardVideo from "src/components/CardVideo";

import Banner from "../../components/Banner";
import Layout from "../../components/Layout";

const RecipesPage = () => {
  const { locale } = useRouter();
  const pageTitle = locale === "en" ? "Coffee Videos" : "コーヒービデオ";

  return (
    <Layout language={locale} title={pageTitle}>
      <Banner
        alt="Peruvian coffee in Japan"
        src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564001/WEB/gastronomia/coffee_i5qpiz.jpg"
      />
      <div className="container p-6 pb-0  mx-auto">
        <h1 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl md:mb-2">
          {pageTitle}
        </h1>
      </div>
      <section className="bg-white py-1 ">
        <div className="container mx-auto flex flex-wrap md:pt-4 pb-12">
          <CardVideo title={"The Sensory Map of Peruvian Coffee"} embedId={"Jhrz4mNjFx0"}/>
          <CardVideo title={"Cup of Excellence Peru 2020"} embedId={"5G7eyiC9Q_o"}/>
          <CardVideo title={"SCAJ Silver Sponsor Promperu Interview movie"} embedId={"nyWJmrSIwJQ"}/>
        </div>
      </section>
    </Layout>
  );
};

export default RecipesPage;
