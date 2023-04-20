import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";

import Layout from "../components/Layout";

const YearsPage = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );

  const altBanner = `${data[0].title}  ${data[1].title}`;

  return (
    <Layout
      language={locale}
      title={data[0].__i18n_lang === locale ? data[0].title : data[1].title}
    >
      <Banner
        alt={altBanner}
        src="http://embperujapan.org/gastronomia/150years.jpg"
        src2="http://embperujapan.org/gastronomia/150years400.jpg"
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
      </div>
      <section className="bg-white py-1 ">
        <div className="container mx-auto flex flex-wrap justify-center md:pt-4 pb-12">
          <iframe
            style={{ width: "1200px", height: "800px" }}
            src="https://online.fliphtml5.com/gofaj/ddjn/"
            allowFullScreen={true}
          />
        </div>
      </section>
    </Layout>
  );
};

export default YearsPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
