import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import React from "react";

import Carrusel from "../components/Carrusel";
import Layout from "../components/Layout";
import Wellcome from "../components/Wellcome";

export default function Home( { posts }:{ posts: any }) {
  const { locale } = useRouter();
  return (
    <Layout language={locale}>
      <NextSeo
        title="Peru in Japan  | Welcome"
        description="We want to celebrate the diversity and richness of Peruvian cuisine and show the good reception it enjoys in Japan, a country that welcomes a wide range of international cooking practices and culinary styles."
      />
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