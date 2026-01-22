import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";

import Layout from "../../components/Layout";

const CoffeeSuppliersPage = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );

  return (
    <Layout language={locale} title={data[0].__i18n_lang === locale ? data[0].title : data[1].title}>
      <Banner alt="Gastronoy" src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564006/WEB/gastronomia/peruinjapangastronomia_o0xsca.jpg" />
      <div className="container p-6  mx-auto">
        <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
          <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
          <h2 className="pl-2">
            {data[0].__i18n_lang === locale ? data[0].title : data[1].title}
          </h2>
        </div>
      </div>
      <div className="flex container p-6 mx-auto">
        <PortableText className="container mx-auto flex-wrap flex"
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
            }) => {
              return (
               props.children== '' ? '' : 
              <div className="w-full md:w-1/3 xl:w-1/4 p-3 md:p-4 lg:p-6">{props.children}</div>
              )
            },
          }}
        />
      </div>
    </Layout>
  );
};

export default CoffeeSuppliersPage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};