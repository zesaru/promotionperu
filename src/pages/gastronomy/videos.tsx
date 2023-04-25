import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Banner from "src/components/Banner";
import CardVideo from "src/components/CardVideo";

import Layout from "../../components/Layout";


const GastronomyVideosPage = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );

  return (
    <Layout language={locale} title={data[0].__i18n_lang === locale ? data[0].title : data[1].title}>
      <Banner
        alt="Gastronoy"
        src="http://embperujapan.org/gastronomia/peruinjapangastronomia.jpg"
        src2="http://embperujapan.org/gastronomia/peruinjapangastronomy400.jpg"
      />
      <div className="container p-6 pb-0  mx-auto">
        <h2 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl md:mb-2">
          {data[0].__i18n_lang === locale ? data[0].title : data[1].title}
        </h2>
      </div>
      <section className="bg-white py-1 ">
        <div className="container mx-auto flex flex-wrap md:pt-4 pb-12">
          <CardVideo title={"【国交150周年 　大使が語る「美食の国ペルー」(2023年4月3日)"} embedId={"_Srw7Rtc8Zo"}/>
          <CardVideo title={"【ペルー編】じゃがいも大国のポテトサラダ 「カウサ・リメーニャ」 ｜Peru"} embedId={"vAkX780NSLM"}/>
          <CardVideo title={"【ペルー編】屋台の定番 牛ハツの串焼き「アンティクーチョ」＆絶品ソース「カレティジェロ」｜Peru"} embedId={"HvJADi4kIaw"}/>
        </div>
      </section>
    </Layout>
  );
};

export default GastronomyVideosPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
