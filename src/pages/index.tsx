import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Banner from "src/components/Banner";

import Layout from "../components/Layout";
import Wellcome from "../components/Wellcome";

type Props = {
  posts: any
}

export default function Home( { posts }:Props) {
  const { locale } = useRouter();
  return (
    <Layout language={locale}>
      <Banner alt={"Peruinjapan"} src={"http://embperujapan.org/gastronomia/peruinjapan.jpg"} src2={"http://embperujapan.org/gastronomia/peruinjapan400.jpg"} />
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