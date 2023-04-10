import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import PortableText from "react-portable-text";

import Layout from "../components/Layout";

const YearsPage = ({ posts }: { posts: any }) => {
    const { locale, route } = useRouter();

    const data = posts.filter(
        (post: { menu: string }) => `/${post.menu}` === route
    );

    return (
      <Layout language={locale}>
        <section className="flex justify-center align-middle ">
          <div className="">
            <Image
              alt="150-years-of-diplomatic-relations"
              src="http://embperujapan.org/gastronomia/150years.jpg"
              width={1500}
              height={660}
              className="hidden md:block md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl rounded-3xl shadow-2xl"
            />
          </div>
        </section>
        <section className="flex justify-center align-middle ">
          <div className="mx-auto block md:hidden">
            <Image
              alt="150-years-of-diplomatic-relations"
              src="http://embperujapan.org/gastronomia/150years400.jpg"
              width={400}
              height={380}
              className="max-w-screen-xs rounded-3xl shadow-2xl"
            />
          </div>
        </section>
        <div className="container py-4 md:py-6 px-4 mx-auto">
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
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/150/150-years-of-diplomatic-relations-2.jpg"
                    width={400}
                    height={500}
                    alt="150-years-of-diplomatic-relations"
                  />
              </div>
              <div className="flex justify-center">
                  <p className="py-4 text-xl ">{ locale === "en"? "Appointment of the First Peruvian Ambassador to Japan" :"日本への初のペルー国使節の任命" }</p>
                </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/150/150-years-of-diplomatic-relations-3.jpg"
                    width={400}
                    height={500}
                    alt="150-years-of-diplomatic-relations"
                  />
              </div>
              <div className="flex justify-center">
                  <p className="py-4 text-xl ">{ locale === "en"? "Temporary Agreement on Trade and Navigation between Japan and Peru" :"日秘和親貿易航海仮条約" }</p>
                </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/150/150-years-of-diplomatic-relations-4.jpg"
                    width={400}
                    height={500}
                    alt="150-years-of-diplomatic-relations"
                  />
              </div>
              <div className="flex justify-center">
                  <p className="py-4 text-xl ">{ locale === "en"? "" :"通商航海条約及び補足議定書" }</p>
                </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/150/150-years-of-diplomatic-relations-5.jpg"
                    width={400}
                    height={500}
                    alt="150-years-of-diplomatic-relations"
                  />
              </div>
              <div className="flex justify-center">
                  <p className="py-4 text-xl ">{ locale === "en"? "" :"自筆書簡" }</p>
                </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/150/150-years-of-diplomatic-relations-6.jpg"
                    width={400}
                    height={500}
                    alt="150-years-of-diplomatic-relations"
                  />
              </div>
              <div className="flex justify-center">
                  <p className="py-4 text-xl ">{ locale === "en"? "" :"ペルー独立100周年祝賀" }</p>
                </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/150/150-years-of-diplomatic-relations-7.jpg"
                    width={400}
                    height={500}
                    alt="150-years-of-diplomatic-relations"
                  />
              </div>
              <div className="flex justify-center">
                  <p className="py-4 text-xl ">{ locale === "en"? "" :"マヌエル・プラド大統領の訪日" }</p>
                </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/150/150-years-of-diplomatic-relations-8.jpg"
                    width={400}
                    height={500}
                    alt="150-years-of-diplomatic-relations"
                  />
              </div>
              <div className="flex justify-center">
                  <p className="py-4 text-xl ">{ locale === "en"? "" :"皇太子明仁親王殿下と美智子妃殿下のペルーご訪問" }</p>
                </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/150/150-years-of-diplomatic-relations-9.jpg"
                    width={400}
                    height={500}
                    alt="150-years-of-diplomatic-relations"
                  />
              </div>
              <div className="flex justify-center">
                  <p className="py-4 text-xl ">{ locale === "en"? "" :"近年の公式訪問" }</p>
                </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                  <Image
                    className="hover:grow hover:shadow-lg w-auto rounded-xl"
                    src="http://embperujapan.org/150/150-years-of-diplomatic-relations-10.jpg"
                    width={400}
                    height={500}
                    alt="150-years-of-diplomatic-relations"
                  />
              </div>
              <div className="flex justify-center">
                  <p className="py-4 text-xl ">{ locale === "en"? "" :"日本人ペルー移住" }</p>
                </div>
            </div>
          </div>                               
        </div>
      </section>
      </Layout>
    );
}

export default YearsPage

export const getStaticProps: GetStaticProps = async (ctx) => {
    const posts = await getAllPosts();
    return {
      props: {
        posts,
      },
    };
  };