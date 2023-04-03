import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Layout from "../../components/Layout";
import YoutubeEmbed from "../../components/YoutubeEmbed";

const RecipesPage = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );

  return (
    <Layout language={locale}>
      <section className="flex justify-center align-middle ">
        <div className="">
          <Image
            alt="Gastronomy"
            src="http://embperujapan.org/gastronomia/gastronomyv2.jpg"
            width={1500}
            height={660}
            className="hidden md:block md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl rounded-3xl shadow-2xl"
          />
        </div>
      </section>
      <section className="flex justify-center align-middle ">
        <div className="mx-auto block md:hidden">
          <Image
            alt="Gastronomy"
            src="http://embperujapan.org/gastronomia/gastronomy500v2.jpg"
            width={400}
            height={380}
            className="max-w-screen-xs rounded-3xl shadow-2xl"
          />
        </div>
      </section>
      <div className="container p-6 pb-0  mx-auto">
        <h2 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl md:mb-2">
          {data[0].__i18n_lang === locale ? data[0].title : data[1].title}
        </h2>
      </div>
      <section className="bg-white py-1 ">
        <div className="container mx-auto flex flex-wrap md:pt-4 pb-12">
          <div className="w-full md:w-1/2 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <YoutubeEmbed embedId="vAkX780NSLM" />
              </div>
              <Link href="/restaurants" className="">
                <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">
                  【ペルー編】じゃがいも大国のポテトサラダ 「カウサ・リメーニャ」 ｜Peru
                  </p>
                </div>
              </Link>
            </div>
          </div>
          {/* Receta */}
          <div className="w-full md:w-1/2 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <YoutubeEmbed embedId="HvJADi4kIaw" />
              </div>
              <Link href="/restaurants" className="">
                <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">
                  【ペルー編】屋台の定番 牛ハツの串焼き「アンティクーチョ」 ＆絶品ソース「カレティジェロ」｜Peru
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
