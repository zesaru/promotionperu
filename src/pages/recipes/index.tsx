import { getAllPosts, getAllRecipes } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";
import CardRecipes from "src/components/RecipesCard";

import { getLocalizedEntry } from "@/lib/get-localized-entry";

import Layout from "../../components/Layout";

type Post = {
  menu: string;
  title: string;
  content: any;
  __i18n_lang: string;
};

type Recipe = {
  slug: string;
  id: string;
  title: string;
  image: string;
};

type RecipesProps = {
  posts: Post[];
  recipes: Recipe[];
};

const RecipesPage = ({ posts, recipes }: RecipesProps) => {
  const { locale, route } = useRouter();

  const data = useMemo(() => {
    return posts.filter((post: { menu: string }) => `/${post.menu}` === route);
  }, [posts, route]);
  const localizedPost = getLocalizedEntry(data, locale);
  const isEnglish = locale === "en";
  const title = localizedPost?.title || (isEnglish ? "Recipes" : "レシピ");
  const recipesDescription = isEnglish
    ? "Browse Peruvian recipes with classic dishes, ingredients, and preparation ideas for cooking at home."
    : "定番のペルー料理を中心に、材料や作り方がわかるレシピをまとめて紹介します。";

  const localizedPath = locale === "en" ? "/en/recipes" : "/recipes";
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": recipesDescription,
      "url": `https://peruinjapan.org${localizedPath}`,
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": recipes.map((recipe: Recipe, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `https://peruinjapan.org${locale === "en" ? "/en" : ""}/recipes/${recipe.slug}`,
          "name": recipe.title,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": locale === "en" ? "Home" : "ホーム",
          "item": `https://peruinjapan.org${locale === "en" ? "/en" : ""}`,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": title,
          "item": `https://peruinjapan.org${localizedPath}`,
        },
      ],
    },
  ];

  return (
    <Layout
      language={locale}
      title={title}
      description={recipesDescription}
      structuredData={structuredData}
    >
      <Banner
        alt="Peruvian gastronomy in Japan"
        src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564006/WEB/gastronomia/peruinjapangastronomia_o0xsca.jpg"
      />
      <div className="container p-6  mx-auto">
        <h1 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
          {title}
        </h1>
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
          {recipes.map((recipe: Recipe) => (
            <CardRecipes
              title={recipe.title}
              image={recipe.image}
              key={recipe.id}
              slug={recipe.slug}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default RecipesPage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPosts();
  const recipes = await getAllRecipes();
  return {
    props: {
      posts,
      recipes,
    },
  };
};
