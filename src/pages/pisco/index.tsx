import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";

import { getLocalizedEntry } from "@/lib/get-localized-entry";

import Layout from "../../components/Layout";

type Post = {
  menu: string;
  title: string;
  content: any;
  __i18n_lang?: string;
};

const ProductsPage = ({ posts }: { posts: Post[] }) => {
  const { locale, route } = useRouter();
  const piscoDescription =
    locale === "en"
      ? "Learn about Peruvian Pisco in Japan with recipes, importer listings, and downloadable resources about Peru's signature spirit."
      : "日本で楽しむペルー産ピスコの魅力を紹介。レシピ、輸入企業情報、資料を通じてピスコ文化を発信します。";

  const data = posts.filter(
    (post) => `/${post.menu}` === route
  );
  const localizedPost = getLocalizedEntry(data, locale);
  const title = localizedPost?.title || (locale === "en" ? "Pisco" : "ピスコ");

  return (
    <Layout language={locale} description={piscoDescription}>
      <Banner
        alt="Pisco ピスコ "
        src={"https://res.cloudinary.com/de5ud82os/image/upload/v1694564008/WEB/gastronomia/pisco_kqmd66.jpg"}
      />
      <div className="container p-6  mx-auto">
        <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
          <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
          <h1 className="pl-2">{title}</h1>
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
          content={localizedPost?.content || []}
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
                    src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564009/WEB/gastronomia/piscorecipes450x300_ftfgna.jpg"
                    width={450}
                    height={300}
                    alt="Pisco cocktail recipes"
                  />
                </Link>
              </div>
              <Link href="/pisco/recipes" className="">
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
                    src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564008/WEB/gastronomia/pisco-importing-company450x300_bi93s6.jpg"
                    width={450}
                    height={300}
                    alt="Pisco importing companies in Japan"
                  />
                </Link>
              </div>
              <Link href="/pisco/importing-companies" className="">
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
