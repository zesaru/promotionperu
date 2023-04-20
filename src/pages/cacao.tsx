import { getAllPosts } from "lib/sanity.client";
import { useRouter } from "next/router";
import { GetStaticProps } from "next/types";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";
import Layout from "src/components/Layout";

const Cacao = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );

  return (
    <Layout language={locale} title={data[0].__i18n_lang === locale ? data[0].title : data[1].title}>
      <Banner
        alt={data[0].__i18n_lang === locale ? data[0].title : data[1].title}
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
    </Layout>
  );
};

export default Cacao;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
