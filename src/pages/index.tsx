import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

import Carrusel from "../components/Carrusel";
import Layout from "../components/Layout";
import Wellcome from "../components/Wellcome";

export default function Home( { posts }:{ posts: any }) {
  const { locale } = useRouter();
  return (
    <Layout language={locale}>
      <Carrusel />
      <Wellcome post={posts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  }
}