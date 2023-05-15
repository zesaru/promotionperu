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
  return (
    <Layout language={router.locale}>
      <Banner
        alt="Gastronoy"
        src="http://embperujapan.org/gastronomia/peruinjapangastronomia.jpg"
        src2="http://embperujapan.org/gastronomia/peruinjapangastronomy400.jpg"
      />
      <div className="container p-6  mx-auto">
        <h2 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-xl mb-8 text-center text-orange-600">
          {recipe[0].title}
        </h2>
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
