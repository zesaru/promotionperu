import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Gallery from "react-photo-gallery";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";
import Layout from "src/components/Layout";

const Scaj2022 = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );

  return (
    <Layout
      language={locale}
      title={data[0].__i18n_lang === locale ? data[0].title : data[1].title}
    >
      <Banner
        alt={"SCAJ2022"}
        src="http://embperujapan.org/gastronomia/coffee.jpg"
        src2="http://embperujapan.org/gastronomia/coffee400.jpg"
      />
      <div className="container py-4 md:py-6 px-4 mx-auto">
        <h2 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
          {data[0].__i18n_lang === locale ? data[0].title : data[1].title}
        </h2>
        <PortableText
          content={
            locale === data[0].__i18n_lang ? data[0].content : data[1].content
          }
          serializers={{
            normal: (props: {
              children: string | number | boolean | null | undefined;
            }) => <p className="mt-8 mb-8">{props.children}</p>,
          }}
        />
         <Gallery photos={Photos} />
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
    src: "http://embperujapan.org/gastronomia/SCAJ2022/scaj_opening_roberto_seminario.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://embperujapan.org/gastronomia/SCAJ2022/scaj_2022_1.jpg",
    width: 1,
    height: 1
  },
  {
    src: "http://embperujapan.org/gastronomia/SCAJ2022/scaj_2022_flyer.jpg",
    width: 3,
    height: 4
  },
  {
    src: "http://embperujapan.org/gastronomia/SCAJ2022/scaj_2022_5.jpg",
    width: 3,
    height: 4
  },
  {
    src: "http://embperujapan.org/gastronomia/SCAJ2022/scaj_2022_6.jpg",
    width: 3,
    height: 4
  },
  {
    src: "http://embperujapan.org/gastronomia/SCAJ2022/scaj_2022.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://embperujapan.org/gastronomia/SCAJ2022/scaj_2022_2.jpg",
    width: 3,
    height: 4
  },
  {
    src: "http://embperujapan.org/gastronomia/SCAJ2022/scaj_2022_4.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://embperujapan.org/gastronomia/SCAJ2022/scaj_2022_3.jpg",
    width: 4,
    height: 3
  }
];
