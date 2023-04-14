import { getAllPosts } from "lib/sanity.client";
import { useRouter } from "next/router";
import { GetStaticProps } from "next/types";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";
import Layout from "src/components/Layout";

const Recipes = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );

  console.log(data);

  return (
    <Layout language={locale}>
      <Banner
        alt="Pisco Recipes"
        src="http://embperujapan.org/gastronomia/peruinjapanbannercacao.jpg"
        src2="http://embperujapan.org/gastronomia/peruinjapanbannercacao400.jpg"
      />
      <div className="container p-2 md:p-4 mx-auto">
        <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-2">
          <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
          <h2 className="pl-2">
            {data[0].__i18n_lang === locale ? data[0].title : data[1].title}
          </h2>
        </div>
        <PortableText
          content={
            locale === posts[0].__i18n_lang
              ? posts[0].content
              : posts[1].content
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
    </Layout>
  );
};

export default Recipes;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
