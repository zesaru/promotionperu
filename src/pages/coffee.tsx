import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";

import Layout from "../components/Layout";

export default function CoffeePage ({ posts }: { posts: any }) {
  const { locale, route } = useRouter();

  const data = posts.filter(
      (post: { menu: string }) => `/${post.menu}` === route
  );

  const altBanner =  `${data[0].title}  ${data[1].title}`
  return (
    <Layout language={locale}>
        <Banner alt={altBanner} src="http://embperujapan.org/gastronomia/coffee.jpg" src2="http://embperujapan.org/gastronomia/coffee.jpg" />
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
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};