import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";
import Layout from "src/components/Layout";

import { getLocalizedEntry } from "@/lib/get-localized-entry";

type Post = {
  menu: string;
  title: string;
  content: any;
  __i18n_lang?: string;
};

const Scaj2022 = ({ posts }: { posts: Post[] }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post) => `/${post.menu}` === route
  );
  const localizedPost = getLocalizedEntry(data, locale);
  const title = localizedPost?.title || "SCAJ 2022";

  return (
    <Layout
      language={locale}
      title={title}
    >
      <Banner
        alt={"SCAJ2022"}
        src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564001/WEB/gastronomia/coffee_i5qpiz.jpg"
      />
      <div className="container py-4 md:py-6 px-4 mx-auto">
        <h1 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
          {title}
        </h1>
        <PortableText
          content={localizedPost?.content || []}
          serializers={{
            normal: (props: {
              children: string | number | boolean | null | undefined;
            }) => <p className="mt-8 mb-8">{props.children}</p>,
          }}
        />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {/* Gallery placeholder - photos will be displayed here */}
          <p className="col-span-full text-center text-gray-500">Gallery temporarily disabled</p>
        </div>
      </div>
      

    </Layout>
  );
};

export default Scaj2022;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

const Photos = [
  {
    src: "https://res.cloudinary.com/de5ud82os/image/upload/v1684126978/WEB/SCAJ2022/scaj_opening_roberto_seminario_h2fbym.jpg",
    width: 4,
    height: 3,
    alt: "SCAJ2022 Opening Roberto Seminario"
  },
  {
    src: "https://res.cloudinary.com/de5ud82os/image/upload/v1684126979/WEB/SCAJ2022/scaj_2022_1_wjorax.jpg",
    width: 1,
    height: 1,
    alt: "SCAJ2022"
  },
  {
    src: "https://res.cloudinary.com/de5ud82os/image/upload/v1684126978/WEB/SCAJ2022/scaj_2022_flyer_vhah8s.jpg",
    width: 3,
    height: 4,
    alt: "SCAJ2022 Flyer"
  },
  {
    src: "https://res.cloudinary.com/de5ud82os/image/upload/v1684126978/WEB/SCAJ2022/scaj_2022_5_aswspf.jpg",
    width: 3,
    height: 4,
    alt: "SCAJ2022"
  },
  {
    src: "https://res.cloudinary.com/de5ud82os/image/upload/v1684126978/WEB/SCAJ2022/scaj_2022_6_vrhwrm.jpg",
    width: 3,
    height: 4,
    alt: "SCAJ2022"
  },
  {
    src: "https://res.cloudinary.com/de5ud82os/image/upload/v1684126978/WEB/SCAJ2022/scaj_2022_dyxqa3.jpg",
    width: 4,
    height: 3,
    alt: "SCAJ2022"
  },
  {
    src: "https://res.cloudinary.com/de5ud82os/image/upload/v1684126978/WEB/SCAJ2022/scaj_2022_2_fsl4ms.jpg",
    width: 3,
    height: 4,
    alt: "SCAJ2022"
  },
  {
    src: "https://res.cloudinary.com/de5ud82os/image/upload/v1684126978/WEB/SCAJ2022/scaj_2022_4_u2c3uw.jpg",
    width: 4,
    height: 3,
    alt: "SCAJ2022"
  },
  {
    src: "https://res.cloudinary.com/de5ud82os/image/upload/v1684126979/WEB/SCAJ2022/scaj_2022_3_lbypfg.jpg",
    width: 4,
    height: 3,
    alt: "SCAJ2022"
  }
];
