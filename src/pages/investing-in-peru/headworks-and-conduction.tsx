import Image from "next/image";
import { useRouter } from "next/router";
import Banner from "src/components/Banner";

import Layout from "../../components/Layout";

const InvesmentPage = () => {
  const { locale } = useRouter();
  return (
    <Layout
      language={locale}
      title="HEADWORKS AND CONDUCTION WORKS FOR THE DRINKING WATER SUPPLY IN LIMA"
    >
      <Banner
        alt={"Investment guide 2022"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564004/WEB/gastronomia/inversiones400_nb0noc.jpg"
        }
      />
      <div className="container p-6 mx-auto">
        <h1 className="text-2xl text-red-600 py-8">
          HEADWORKS AND CONDUCTION WORKS FOR THE DRINKING WATER SUPPLY IN LIMA
          (1st phase)
        </h1>
        <div className="lg:flex text-lg gap-20">
          <div className="lg:w-2/5 text-center">
            <div className="py-2">ESTIMATED AWARD DATE</div>
            <div className="py-2">
              <span className="text-white bg-orange-400 p-2">III QUARTER</span>
              <span className="p-2">2025</span>
            </div>
            <div className="text-white bg-orange-400 p-2">STRUCTURING</div>
            <div className="flex justify-center items-center p-2">
              <Image
                className="rounded-full"
                src="https://res.cloudinary.com/de5ud82os/image/upload/v1724720286/WEB/proinversion/jjbgr8b76k7cfgiz7oeq.jpg"
                alt="HEADWORKS AND CONDUCTION WORKS FOR THE DRINKING WATER SUPPLY IN LIMA"
                width={370}
                height={370}
              />
            </div>
          </div>
          <div className="lg:w-3/5">
            <p>
              The project includes the design, financing, construction,
              operation and maintenance of new and existing works to increase
              the availability of drinking water to expand and improve service
              to 1.5 million inhabitants in the East and South of Lima.
            </p>
            <h2 className="py-4 font-bold	">Phase 1</h2>
            <ul className="list-disc">
              <li>
                Huachipa II Plant: Phase 1 of 2.5 m<sup>3</sup>/s and Phase 2 of
                5 m<sup>3</sup>/s
              </li>
              <li>
                Huachipa Main Reservoir (160,000 m<sup>3</sup>)
              </li>
              <li>
                26 Km South Branch with 5 reservoirs (69,000 m<sup>3</sup>)
              </li>
              <li>Interconnection lines (60 km)</li>
            </ul>
            <h2 className="py-4 font-bold	">Phase 2</h2>
            <ul className="list-disc">
              <li>
                Improvement of Pomacocha and Huallacocha Bajo Dams (38 million m
                <sup>3</sup>)
              </li>
              <li>Trans-Andean Tunnel (10 km)</li>
            </ul>
            <p>
              Self-financed state initiative modality for a term of 30 years.
            </p>
            <h2 className="py-4 font-bold">Investment amount:</h2>
            <p className="text-3xl">US$ 476 million</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvesmentPage;
