import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";

import Layout from "../../components/Layout";

const GastronomyPage = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );
  return (
    <Layout language={locale} title="Gastronomy ガストロノミー">
      <Banner alt="Gastronoy" src="http://embperujapan.org/gastronomia/peruinjapangastronomia.jpg" src2="http://embperujapan.org/gastronomia/peruinjapangastronomy400.jpg" />
      <div className="container py-4 md:py-6 px-4 mx-auto">
        <h2
          className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
        >
          {data[0].__i18n_lang === locale ? data[0].title : data[1].title}
        </h2>
        <PortableText
          content={
            locale === posts[0].__i18n_lang
              ? posts[0].content
              : posts[1].content
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
      <section className="bg-white py-1 ">
        <div className="container mx-auto flex flex-wrap md:pt-4 pb-12">
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/restaurants" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/gastronomia/restaurantsv640v2.jpg"
                    width={640}
                    height={480}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
                <div className="flex justify-start">
                  <p className="py-4 text-xl hover:grow">
                    { locale === posts[0].__i18n_lang ? "ペルー料理レストラン" : "PERUVIAN RESTAURANTS" }
                  </p>
                </div>
              </Link>
            </div>
          </div>
          {/* Receta */}
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/recipes" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/gastronomia/lomosaltado640x480.jpg"
                    width={640}
                    height={480}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/recipes" className="">
                <div className="flex justify-start">
                  <p className="py-4 text-xl hover:grow">
                  { locale === posts[0].__i18n_lang ? "ペルー料理レシピ" : "PERUVIAN RECIPES" }
                  </p>
                </div>
              </Link>
            </div>
          </div>
          {/* Video */}
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/suppliers" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/gastronomia/productos.jpg"
                    width={640}
                    height={480}
                    alt="販売会社 | SUPPLIERS "
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
                <div className="flex justify-start">
                  <p className="py-4 text-xl hover:grow">
                  { locale === posts[0].__i18n_lang ? "販売会社" : "SUPPLIERS " }
                  </p>
                </div>
              </Link>
            </div>
          </div>
          {/* Video */}
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/videos" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/gastronomia/videos640v2.jpg"
                    width={640}
                    height={480}
                    alt="ビデオ | VIDEOS"
                  />
                </Link>
              </div>
              <Link href="/videos" className="">
                <div className="flex justify-start">
                  <p className="py-4 text-xl hover:grow">
                  { locale === posts[0].__i18n_lang ? "ビデオ" : "VIDEOS " }
                  </p>
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
