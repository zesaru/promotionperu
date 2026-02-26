import { getAllPosts } from "lib/sanity.client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps } from "next/types";
import { ImDownload2 } from "react-icons/im";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";
import Layout from "src/components/Layout";

const Recipes = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );


  return (
    <Layout language={locale}>
      <Banner
        alt="Pisco Recipes"
        src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564008/WEB/gastronomia/pisco_kqmd66.jpg"
      />
      <div className="container p-2 md:p-4 mx-auto">
        <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-2">
          <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
          <h2 className="pl-2">
            {data[0].__i18n_lang === locale ? data[0].title : data[1].title}
          </h2>
        </div>
      </div>
      <section className="bg-white container mx-auto px-2 md:p-6">
        <div className="md:flex py-2 md:py-4">
          <div className="w-full xl:w-2/5 flex flex-col justify-center">
            <div className="flex">
              <span className="py-10 md:py-16 border-l-8 border-red-500 h-2/3"></span>
              <a
                href="https://cdn.www.gob.pe/uploads/document/file/5127901/PiscoisPeruRecipes.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="pl-2">
                  <PortableText
                    content={
                      locale === data[0].__i18n_lang
                        ? data[0].content
                        : data[1].content
                    }
                    serializers={{
                      normal: (props: {
                        children: string | number | boolean | null | undefined;
                      }) => <p className="mt-1 mb28">{props.children}</p>,
                    }}
                  />
                </div>
              </a>
            </div>
            <div className="pl-1 py-2 flex md:justify-start justify-center">
              <a
                href="https://cdn.www.gob.pe/uploads/document/file/5127901/PiscoisPeruRecipes.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex align-middle justify-center p-1 w-1/2 md:w-1/3   bg-red-600 text-white text-center rounded-md"
              >
                <ImDownload2 className="text-white m-1" /> Download
              </a>
            </div>
          </div>
          <div className="w-full xl:w-3/5 flex justify-end p-2">
            <Link href="/pisco" className="">
              <Image
                className="hover:grow hover:shadow-lg rounded-xl"
                src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapanpiscorecipes_mvw5hm.jpg"
                width={750}
                height={250}
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>
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
