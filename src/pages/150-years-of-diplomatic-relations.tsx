import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import PortableText from "react-portable-text";

import Layout from "../components/Layout";

const YearsPage = ({ posts }: { posts: any }) => {
    const { locale, route } = useRouter();

    const data = posts.filter(
        (post: { menu: string }) => `/${post.menu}` === route
    );

    return (
      <Layout language={locale}>
        <section className="flex justify-center align-middle ">
          <div className="">
            <Image
              alt="150-years-of-diplomatic-relations"
              src="http://embperujapan.org/gastronomia/150yeas.jpg"
              width={1500}
              height={660}
              className="hidden md:block md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl rounded-3xl shadow-2xl"
            />
          </div>
        </section>
        <section className="flex justify-center align-middle ">
          <div className="mx-auto block md:hidden">
            <Image
              alt="150-years-of-diplomatic-relations"
              src="http://embperujapan.org/gastronomia/gastronomy500v2.jpg"
              width={400}
              height={380}
              className="max-w-screen-xs rounded-3xl shadow-2xl"
            />
          </div>
        </section>
        <div className="container py-4 md:py-6 px-4 mx-auto">
          <h2
            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
          >
            {data[0].__i18n_lang === locale ? data[0].title : data[1].title}
          </h2>
          <PortableText
            content={
              locale === data[0].__i18n_lang
                ? data[0].content
                : data[1].content
            }
            serializers={{
              normal: (props: {
                children:
                  | string
                  | number
                  | boolean
                  | null
                  | undefined;
              }) => <p className="mt-8 mb-8">{props.children}</p>,
            }}
          />

        </div>
      </Layout>
    );
}

export default YearsPage

export const getStaticProps: GetStaticProps = async (ctx) => {
    const posts = await getAllPosts();
    return {
      props: {
        posts,
      },
    };
  };