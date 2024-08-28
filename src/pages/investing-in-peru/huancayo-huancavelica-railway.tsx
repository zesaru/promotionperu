import Image from "next/image";
import { useRouter } from "next/router";
import Banner from "src/components/Banner";

import Layout from "../../components/Layout";

const InvesmentPage = () => {
  const { locale } = useRouter();
  return (
    <Layout language={locale} title="HUANCAYO – HUANCAVELICA RAILWAY">
      <Banner
        alt={"Investment guide 2022"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
        src2={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564004/WEB/gastronomia/inversiones400_nb0noc.jpg"
        }
      />
      <div className="container p-6 mx-auto">
        <h1 className="text-2xl text-red-600 py-8">
          HUANCAYO – HUANCAVELICA RAILWAY
        </h1>
        <div className="lg:flex text-lg gap-20">
          <div className="lg:w-2/5 text-center">
            <div className="py-2">ESTIMATED AWARD DATE</div>
            <div className="py-2">
              <span className="text-white bg-orange-400 p-2">III QUARTER</span>
              <span className="p-2">2024</span>
            </div>
            <div className="text-white bg-orange-400 p-2">TRANSACTION</div>
            <div className="flex justify-center items-center p-2">
              <Image
                className="rounded-full"
                src="https://res.cloudinary.com/de5ud82os/image/upload/v1724809074/WEB/proinversion/kwzibupulxbe0xj1o52e.jpg"
                alt="Investment guide 2022"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="lg:w-3/5">
            <p className="py-2">
              It consists of the execution of the necessary improvement and
              rehabilitation works along the railroad track (128.7 km), in 2
              sections (T178 km; T2 50 km), acquisition of rolling stock with
              the objective of providing rail transport service through an
              operator, as well as the maintenance of the infrastructure and
              rolling stock (CAPEX Work: 80%, CAPEX MR 20%).
            </p>
            <p className="py-2">
              Renovation of the existing track. Refurbishment of stations and
              stops. Acquisition of rolling stock (4 DMU railcars, 2
              locomotives, 3 Passenger railroad cars, 5 freight warehouses).
            </p>
            <p className="py-2">
              Co-financed state initiative modality for a term of 30 years.
            </p>
            <h2 className="py-4 font-bold">Investment amount:</h2>
            <p className="text-3xl">US$ 445 million</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvesmentPage;
