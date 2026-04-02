import { getAllRecipes, getRecipebyslug } from "lib/sanity.client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";
import Layout from "src/components/Layout";

type RecipeCardProps = {
  recipe: Array<any>;
};

const Slugrecipes = ({ recipe }: RecipeCardProps) => {
  const { title, ingredients, preparation } = recipe[0];
  const router = useRouter();
  const isEnglish = router.locale === "en";
  const recipeTitle = title || (isEnglish ? "Peruvian recipe" : "ペルー料理レシピ");
  const recipeDescription = isEnglish
    ? `Learn how to prepare ${recipeTitle} with ingredients and step-by-step instructions from Peru in Japan.`
    : `${recipeTitle}の材料と作り方を、Peru in Japanがステップごとにわかりやすく紹介します。`;

  const slug = typeof router.query.slug === "string" ? router.query.slug : "";
  const recipePath = `${isEnglish ? "/en" : ""}/recipes/${slug}`;
  const recipeImage = recipe[0]?.image || "https://res.cloudinary.com/de5ud82os/image/upload/v1694564006/WEB/gastronomia/peruinjapangastronomia_o0xsca.jpg";
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Recipe",
      "name": recipeTitle,
      "description": recipeDescription,
      "image": recipeImage,
      "mainEntityOfPage": `https://peruinjapan.org${recipePath}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": isEnglish ? "Home" : "ホーム",
          "item": `https://peruinjapan.org${isEnglish ? "/en" : ""}`,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": isEnglish ? "Recipes" : "レシピ",
          "item": `https://peruinjapan.org${isEnglish ? "/en/recipes" : "/recipes"}`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": recipeTitle,
          "item": `https://peruinjapan.org${recipePath}`,
        },
      ],
    },
  ];

  return (
    <Layout
      language={router.locale}
      title={recipeTitle}
      description={recipeDescription}
      type="article"
      image={recipeImage}
      structuredData={structuredData}
    >
      <Banner
        alt="Peruvian gastronomy in Japan"
        src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564006/WEB/gastronomia/peruinjapangastronomia_o0xsca.jpg"
      />
      <div className="container p-6  mx-auto">
        <h1 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-xl mb-8 text-center text-orange-600">
          {recipeTitle}
        </h1>
        <PortableText
          className="my-7"
          content={ingredients}
          serializers={{
            normal: (props: {
              children: string | number | boolean | null | undefined;
            }) => (
              <h3 className="my-6 text-orange-500 text-center">
                {props.children}
              </h3>
            ),
            ul: (props: {
              children: string | number | boolean | null | undefined;
            }) => (
              <ul
                role="list"
                className="marker:text-orange-500 list-disc pl-5 text-slate-500 grid grid-cols-1 lg:grid-cols-2 gap-2"
              >
                {props.children}
              </ul>
            ),
          }}
        />
        <PortableText
          className="my-7"
          content={preparation}
          serializers={{
            normal: (props: {
              children: string | number | boolean | null | undefined;
            }) => (
              <h3 className="my-6 text-orange-500 text-center">
                {props.children}
              </h3>
            ),
            ol: (props: {
              children: string | number | boolean | null | undefined;
            }) => (
              <ol
                role="list"
                className="marker:text-orange-500 list-disc pl-5 text-slate-500 grid gap-2"
              >
                {props.children}
              </ol>
            ),
          }}
        />
      </div>
    </Layout>
  );
};

export default Slugrecipes;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const recipes = await getAllRecipes();
  const LANGUAGES = ["", "en"];
  const paths = [];

  for (const lang of LANGUAGES) {
    for (const recipe of recipes) {
      paths.push({
        params: { slug: recipe.slug },
        locale: lang,
      });
    }
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const recipe = await getRecipebyslug(slug);
  return {
    props: {
      recipe: recipe,
    },
  };
};
