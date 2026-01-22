import Image from "next/image";
import { useRouter } from "next/router";
import Banner from "src/components/Banner";

import Layout from "../../components/Layout";

const InvesmentPage = () => {
  const { locale } = useRouter();
  return (
    <Layout language={locale} title="SCHOOLS AT RISK: METROPOLITAN LIMA">
      <Banner
        alt={"Investment guide 2022"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />
      <div className="container p-6 mx-auto">
        <h1 className="text-2xl text-red-600 py-8">
          SCHOOLS AT RISK: METROPOLITAN LIMA
        </h1>
        <div className="lg:flex text-lg gap-20">
          <div className="lg:w-2/5 text-center">
            <div className="py-2">ESTIMATED AWARD DATE OF INTEREST</div>
            <div className="py-2">
              <span className="text-white bg-orange-400 p-2">IV Quarter</span>
              <span className="p-2">2024</span>
            </div>
            <div className="text-white bg-orange-400 p-2">STRUCTURING</div>
            <div className="flex justify-center items-center p-2">
              <Image
                className="rounded-full"
                src="https://res.cloudinary.com/de5ud82os/image/upload/v1724895885/WEB/proinversion/msv27lta9pisko2rhnhj.jpg"
                alt="Investment guide 2022"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="lg:w-3/5">
            <p className="py-2">
              Availability of infrastructure, furniture and educational
              equipment. Provision of services: integral cleaning, waste
              management and pest control, private security and surveillance,
              and school topics. Administration of an Operational Control Center
              for services, including the management of basic services. The
              project will benefit more than 22 thousand students/year.
            </p>
            <p className="py-2">
              They include 4 regions of Peru. The objective is to strengthen the
              13 educational institutions: Execution of a Temporary Relocation
              Plan. Construction of new educational infrastructure: classrooms,
              laboratories, workshops, teachers rooms, academic management
              offices, sports infrastructure, among others. Equipment and
              furniture for all educational spaces and environments, electrical
              system in the corresponding areas and guarantee an efficient
              supply of electrical energy to end users.
            </p>
            <p className="py-2">
              Co-financed unsolicited proposal modality for a term of 20 years.
            </p>
            <h2 className="py-4 font-bold">Investment amount:</h2>
            <p className="text-3xl">US$ 255 million</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvesmentPage;
