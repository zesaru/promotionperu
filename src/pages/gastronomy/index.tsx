import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PortableText from "react-portable-text";
import Arrow from "src/components/Arrow";
import Banner from "src/components/Banner";

import { getLocalizedEntry } from "@/lib/get-localized-entry";

import Layout from "../../components/Layout";

type Post = {
  menu: string;
  title: string;
  content: any;
  __i18n_lang?: string;
};

const GastronomyPage = ({ posts }: { posts: Post[] }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post) => `/${post.menu}` === route
  );
  const localizedPost = getLocalizedEntry(data, locale);
  const title = localizedPost?.title || (locale === "en" ? "Gastronomy" : "ガストロノミー");
  const isJapanese = locale === "jp";
  return (
    <Layout language={locale} title={title}>
      <Banner alt="Peruvian gastronomy in Japan" src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564006/WEB/gastronomia/peruinjapangastronomia_o0xsca.jpg" />
      <div className="container py-4 md:py-6 px-4 mx-auto">
        <h1
          className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
        >
          {title}
        </h1>
        <PortableText
          content={localizedPost?.content || []}
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
      <section className="bg-white py-1 ">
        <div className="container mx-auto flex flex-wrap md:pt-4 pb-12">
          <div className="w-full md:w-1/3 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/restaurants" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/perurestaurants640x480_vwusa9.jpg"
                    width={640}
                    height={480}
                    alt="Peruvian restaurants in Japan"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
                <div className="flex justify-center md:justify-start items-center	 ">
                  <p className="py-4 text-xl">
                    { isJapanese ? "ペルー料理レストラン" : "PERUVIAN RESTAURANTS" }
                  </p>
                  <Arrow />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-3 md:p-4 lg:p-6 flex flex-col">            <div>
              <div className="flex justify-center">
                <Link href="/recipes" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564005/WEB/gastronomia/lomosaltado640x480_y6neni.jpg"
                    width={640}
                    height={480}
                    alt="Peruvian recipes"
                  />
                </Link>
              </div>
              <Link href="/recipes" className="">
                <div className="flex justify-center md:justify-start items-center">
                  <p className="py-4 text-xl ">
                  { isJapanese ? "ペルー料理レシピ" : "PERUVIAN RECIPES" }
                  </p>
                  <Arrow />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/gastronomy/videos" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564018/WEB/gastronomia/videos640v2_hztsgm.jpg"
                    width={640}
                    height={480}
                    alt="Peruvian gastronomy videos"
                  />
                </Link>
              </div>
              <Link href="/gastronomy/videos" className="">
                <div className="flex justify-center md:justify-start items-center">
                  <p className="py-4 text-xl">
                  { isJapanese ? "ビデオ" : "VIDEOS " }
                  </p>
                  <Arrow />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GastronomyPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
