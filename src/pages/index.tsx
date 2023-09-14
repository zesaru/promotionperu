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
      <Banner alt={"Peruinjapan"} src={"https://res.cloudinary.com/de5ud82os/image/upload/v1694564005/WEB/gastronomia/peruinjapan_evsspv.jpg"} src2={"https://res.cloudinary.com/de5ud82os/image/upload/v1694564005/WEB/gastronomia/peruinjapan400_hdkevo.jpg"} />
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