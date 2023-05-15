import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";

import Layout from "../../components/Layout";

const RecipesPage = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );

  return (
    <Layout language={locale} title={data[0].__i18n_lang === locale ? data[0].title : data[1].title}>
      <Banner alt="Gastronoy" src="http://embperujapan.org/gastronomia/peruinjapangastronomia.jpg" src2="http://embperujapan.org/gastronomia/peruinjapangastronomy400.jpg" />
      <div className="container p-6  mx-auto">
        <h2
          className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
        >
          {data[0].__i18n_lang === locale ? data[0].title : data[1].title}
        </h2>
        <PortableText
          content={
            locale === data[0].__i18n_lang
              ? data[0].content
              : data[1].content
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
                    src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg"
                    width={640}
                    height={480}
                    alt="recipes"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
              <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">Recipe 1</p>
                </div>
              </Link>
            </div>
          </div>
          {/* Receta */}
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/restaurants" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg"
                    width={640}
                    height={480}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
              <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">Recipe 1</p>
                </div>
              </Link>
            </div>
          </div>
          {/* Video */}
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/restaurants" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg"
                    width={640}
                    height={480}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
              <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">Recipe 1</p>
                </div>
              </Link>
            </div>
          </div>
          {/* Video */}
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/restaurants" className="">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg"
                    width={640}
                    height={480}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
                <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">Recipe 1</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecipesPage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};