import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PortableText from "react-portable-text";

import Layout from "../../components/Layout";

const ProductsPage = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );
  
  return (
    <Layout language={locale}>
      <section className="flex justify-center align-middle ">
        <div className="">
          <Image
            alt="Pisco ピスコ"
            src="http://embperujapan.org/gastronomia/pisco.jpg"
            width={1500}
            height={660}
            className="hidden md:block md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl rounded-3xl shadow-2xl"
          />
        </div>
      </section>
      <section className="flex justify-center align-middle ">
        <div className="mx-auto block md:hidden">
          <Image
            alt="Pisco ピスコ"
            src="http://embperujapan.org/gastronomia/pisco400.jpg"
            width={400}
            height={380}
            className="max-w-screen-xs rounded-3xl shadow-2xl"
          />
        </div>
      </section>
      <div className="container p-6  mx-auto">
        <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
          <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
          <h2 className="pl-2">
            {data[0].__i18n_lang === locale ? data[0].title : data[1].title}
          </h2>
        </div>
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
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/pisco/recipes" className="">
                  <Image
                    className="hover:grow hover:shadow-lg rounded-xl"
                    src="http://embperujapan.org/gastronomia/piscorecipes450x300.jpg"
                    width={450}
                    height={300}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
              <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">Recipe</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6 flex flex-col">
            <div>
              <div className="flex justify-center">
                <Link href="/pisco/importing-companies" className="">
                  <Image
                    className="hover:grow hover:shadow-lg rounded-xl"
                    src="http://embperujapan.org/gastronomia/pisco-importing-company450x300.jpg"
                    width={450}
                    height={300}
                    alt="Restaurants"
                  />
                </Link>
              </div>
              <Link href="/restaurants" className="">
                <div className="flex justify-center md:justify-start">
                  <p className="py-4 text-xl hover:grow">ピスコの輸入会社</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};