import { getAllPosts, getAllRecipes } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";
import CardRecipes from "src/components/RecipesCard";

import Layout from "../../components/Layout";


type RecipesProps = {
  posts: any;
  recipes: any;
};

const RecipesPage = ({ posts, recipes }: RecipesProps) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );

  console.log(recipes)


  return (
    <Layout language={locale}>
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
          { recipes.map((recipe: any) => (
          <CardRecipes title={recipe.title} image={recipe.image} key={recipe.id} />
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