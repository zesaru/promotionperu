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

const piscoBannerSrc =
  "https://res.cloudinary.com/de5ud82os/image/upload/f_auto,q_auto,c_limit,w_1500/v1779691426/WEB/2026/Pisco/pisco_es_peru_xp7dcr.png";
const piscoGuideCoverSrc =
  "https://res.cloudinary.com/de5ud82os/image/upload/f_auto,q_auto,c_fill,w_900,h_600,pg_1/v1779780668/WEB/2026/Pisco/pisco-spirit-of-peru-2025.jpg";

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
  const resources = [
    {
      href: "/pisco/recipes",
      imageSrc:
        "https://res.cloudinary.com/de5ud82os/image/upload/v1694564009/WEB/gastronomia/piscorecipes450x300_ftfgna.jpg",
      imageAlt: locale === "en" ? "Pisco cocktail recipes" : "ピスコカクテルのレシピ",
      title: locale === "en" ? "Recipes" : "レシピ",
      subtitle:
        locale === "en"
          ? "Cocktails and serving ideas"
          : "カクテルと楽しみ方",
    },
    {
      href: "/pisco/importing-companies",
      imageSrc:
        "https://res.cloudinary.com/de5ud82os/image/upload/v1694564008/WEB/gastronomia/pisco-importing-company450x300_bi93s6.jpg",
      imageAlt:
        locale === "en"
          ? "Pisco importing companies in Japan"
          : "日本のピスコ輸入会社",
      title: locale === "en" ? "Importing Companies" : "ピスコの輸入会社",
      subtitle:
        locale === "en"
          ? "Directory in Japan"
          : "日本国内ディレクトリ",
    },
    {
      href: "/pisco/spirit-of-peru-2025",
      imageSrc: piscoGuideCoverSrc,
      imageAlt:
        locale === "en"
          ? "Pisco Spirit of Peru 2025 guide"
          : "Pisco Spirit of Peru 2025 ガイド",
      title: locale === "en" ? "Spirit of Peru 2025" : "Spirit of Peru 2025",
      subtitle:
        locale === "en"
          ? "Guide PDF"
          : "ガイドPDF",
    },
  ];

  return (
    <Layout language={locale} description={piscoDescription}>
      <Banner
        alt="Pisco ピスコ "
        src={piscoBannerSrc}
      />
      <div className="container p-6  mx-auto">
        <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
          <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
          <h1 className="pl-2">{title}</h1>
        </div>
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
          {resources.map((resource) => (
            <div key={resource.href} className="w-full md:w-1/2 xl:w-1/3 p-3 md:p-4 lg:p-6 flex flex-col">
              <div>
                <div className="flex justify-center">
                  <Link href={resource.href} className="">
                    <Image
                      className="hover:grow hover:shadow-lg rounded-xl bg-stone-50"
                      src={resource.imageSrc}
                      width={450}
                      height={300}
                      alt={resource.imageAlt}
                    />
                  </Link>
                </div>
                <Link href={resource.href} className="">
                  <div className="flex flex-col items-center py-4 text-center">
                    <p className="text-xl">{resource.title}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-stone-500">
                      {resource.subtitle}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
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
