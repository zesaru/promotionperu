import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";
import Banner from "src/components/Banner";
import YoutubeEmbed from "src/components/YoutubeEmbed";

import Layout from "../../components/Layout";

const InvesmentPage = () => {
  const { locale } = useRouter();
  return (
    <Layout
      language={locale}
      title="COMPREHENSIVE WATER SYSTEM OF THE CHANCAY VALLEY - LAMBAYEQUE"
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
          COMPREHENSIVE WATER SYSTEM OF THE CHANCAY VALLEY - LAMBAYEQUE
        </h1>
        <div className="lg:flex text-lg gap-20">
          <div className="lg:w-2/5 text-center">
            <div className="py-2">ESTIMATED AWARD DATE</div>
            <div className="py-2">
              <span className="text-white bg-orange-400 p-2">III QUARTER</span>
              <span className="p-2">2026</span>
            </div>
            <div className="text-white bg-orange-400 p-2">FORMULATION</div>
            <div className="flex justify-center items-center p-2">
              <Image
                className="rounded-full"
                src="https://res.cloudinary.com/de5ud82os/image/upload/v1724808158/WEB/proinversion/zt2t1vxjgyfyudwj8ikg.jpg"
                alt="Investment guide 2022"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="lg:w-3/5">
            <p className="py-2">
              Involves the design, construction, and operation of the
              comprehensive water system in the Chancay-Lambayeque Valley. This
              includes the construction of two dams (Montería and Sicán) and the
              execution of conveyance and distribution works to irrigate 33,200
              new hectares. Additionally, it will encompass the operation and
              maintenance of existing structures (currently under the management
              of PEOT). Currently, efforts are being made to negotiate the
              signing of the Institutional Collaboration Agreement between GORE
              LAMBAYEQUE, MIDAGRI, and PROINVERSIÓN, which, among other aspects,
              will allow changes in the scope of the IPC (Private Investment
              Promotion).
            </p>
            <p className="py-2">
              Co-financed unsolicited proposal modality for a term of 25 years.
            </p>
            <h2 className="py-4 font-bold">Investment amount:</h2>
            <p className="text-3xl">US$ 619 million</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvesmentPage;
