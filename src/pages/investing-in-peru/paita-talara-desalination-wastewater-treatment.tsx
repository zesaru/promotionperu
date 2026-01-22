import Image from "next/image";
import { useRouter } from "next/router";
import Banner from "src/components/Banner";

import Layout from "../../components/Layout";

const InvesmentPage = () => {
  const { locale } = useRouter();
  return (
    <Layout
      language={locale}
      title="PAITA - TALARA DESALINATION PLANT AND WASTEWATER TREATMENT FOR TALARA"
    >
      <Banner
        alt={"Invesment"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />
      <div className="container p-6 mx-auto">
        <h1 className="text-2xl text-red-600 py-8">
          PAITA - TALARA DESALINATION PLANT AND WASTEWATER TREATMENT FOR TALARA
        </h1>
        <div className="lg:flex text-lg gap-20">
          <div className="lg:w-2/5 text-center">
            <div className="py-2">ESTIMATED CALL FOR TENDER DATE</div>
            <div className="py-2">
              <span className="text-white bg-orange-400 p-2">
                To be defined
              </span>
              <span className="p-2"></span>
            </div>
            <div className="text-white bg-orange-400 p-2">
              PLANNING AND PROGRAMMING
            </div>
            <div className="flex justify-center items-center p-2">
              <Image
                className="rounded-full"
                src="https://res.cloudinary.com/de5ud82os/image/upload/v1724814415/WEB/proinversion/mtcovoyldicqozfsi8h7.jpg"
                alt="Paita Talara desalination wastewater treatment"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="lg:w-3/5">
            <p className="py-2">
              The project aims to meet the water demand of the population of the
              13 districts of the provinces of Paita and Talara in terms of
              water quality and service, providing 24 hours a day, through
              seawater desalination and meeting the technical standards of the
              Sanitation Sector.
            </p>
            <p className="py-2">
              Two potential water resources to capture 2 m3/s of water: Chira
              River catchment and/or Seawater Catchment, improvement and
              expansion of the El Arenal WWTP and/or construction of
              Desalination Plants (2 m3/s), Improvement works and installation
              of driving lines and wastewater treatment plants for 6 districts
              of province of Talara.
            </p>
            <p className="py-2">
              Co-financed state initiative modality for a term of 23 years.
            </p>
            <h2 className="py-4 font-bold">Investment amount:</h2>
            <p className="text-3xl">US$ 150 million</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvesmentPage;
