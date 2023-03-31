import { apiVersion, dataset, projectId } from "lib/sanity.api";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { createClient, groq } from "next-sanity";
import React from "react";

import Carrusel from "../components/Carrusel";
import Layout from "../components/Layout";
import Wellcome from "../components/Wellcome";

const clientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
};

function getPost() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "post"]{
      __i18n_lang,
      _id,
      title,
      content,
    }
  `);
}


export default function Home( { posts: posts }: { posts: any }) {
  const { locale } = useRouter();
  return (
    <Layout language={locale}>
      <Carrusel />
      <Wellcome post={posts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost();
  console.log("posts static", posts)
  return {
    props: {
      posts,
    },
  }
}