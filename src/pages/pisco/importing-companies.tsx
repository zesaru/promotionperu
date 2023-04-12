import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Banner from "src/components/Banner";
import Layout from "src/components/Layout";

const ImportingPage = (({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();
 
  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );

  return (
    <Layout language={locale}>
      <Banner
        alt="Pisco"
        src="http://embperujapan.org/gastronomia/pisco.jpg"
        src2="http://embperujapan.org/gastronomia/pisco400.jpg"
      />
      <div className="container p-6  mx-auto">
        <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
          <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
          <h2 className="pl-2">
            {data[0].__i18n_lang === locale ? data[0].title : data[1].title}
          </h2>
        </div>
      </div>
    </Layout>
  );
});

export default ImportingPage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};