import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";

import { getLocalizedEntry } from "@/lib/get-localized-entry";

import Layout from "../components/Layout";

type Post = {
  menu: string;
  title: string;
  content: any;
  __i18n_lang?: string;
};

const YearsPage = ({ posts }: { posts: Post[] }) => {
  const { locale, route } = useRouter();

  const data = posts.filter((post) => `/${post.menu}` === route);
  const localizedPost = getLocalizedEntry(data, locale);
  const title =
    localizedPost?.title ||
    (locale === "en"
      ? "150 Years of Diplomatic Relations"
      : "外交関係樹立150周年");
  const altBanner = title;

  return (
    <Layout language={locale} title={title}>
      <Banner
        alt={altBanner}
        src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564001/WEB/gastronomia/150years_bdwrpn.jpg"
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
