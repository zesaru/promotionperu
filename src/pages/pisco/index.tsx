import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";

import Layout from "../../components/Layout";

const ProductsPage = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );

  return (
    <Layout language={locale}>
      <Banner
        alt="Pisco ピスコ "
        src={"http://embperujapan.org/gastronomia/pisco.jpg"}
        src2={"http://embperujapan.org/gastronomia/pisco400.jpg"}
      />
      <div className="container p-6  mx-auto">
        <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
          <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
          <h2 className="pl-2">
            {data[0].__i18n_lang === locale ? data[0].title : data[1].title}
          </h2>
        </div>
        <section className="bg-white py-1">
          <div className="md:pt-4 pb-12">
            <iframe
              className="h-96 md:h-[48rem]"
              style={{ width: "100%" }}
              src="https://online.fliphtml5.com/kzjef/sluq/"
              allowFullScreen={true}
            />
          </div>
        </section>
        <PortableText
          content={
            locale === data[0].__i18n_lang ? data[0].content : data[1].content
          }
          serializers={{
            normal: (props: {
              children: string | number | boolean | null | undefined;
            }) => <p className="mt-8 mb-8">{props.children}</p>,
          }}
        />
      </div>
      <section className="bg-white py-1 ">
        <div className="container mx-auto flex flex-wrap md:pt-4 pb-12">
          <div className="w-full md:w-1/2 p-3 md:p-4 lg:p-6 flex flex-col">
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
                <div className="flex justify-center">
                  <p className="py-4 text-xl">レシピ</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-3 md:p-4 lg:p-6 flex flex-col">
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
                <div className="flex justify-center">
                  <p className="py-4 text-xl">ピスコの輸入会社</p>
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
