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
  const homeDescription =
    locale === "en"
      ? "Official Peru in Japan platform featuring Peruvian culture, gastronomy, business, and bilateral initiatives in Japan."
      : "Peru in Japan公式サイト。ペルー文化・ガストロノミー・ビジネス・日秘交流に関する情報を発信しています。";
  return (
    <Layout language={locale} description={homeDescription}>
      <Banner alt={"Peruinjapan"} src={"https://res.cloudinary.com/de5ud82os/image/upload/v1694564005/WEB/gastronomia/peruinjapan_evsspv.jpg"} />
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
