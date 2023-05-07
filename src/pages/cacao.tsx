import { getAllPosts } from "lib/sanity.client";
import { useRouter } from "next/router";
import { GetStaticProps } from "next/types";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";
import Layout from "src/components/Layout";
import YoutubeEmbed from "src/components/YoutubeEmbed";

const Cacao = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );

  return (
    <Layout
      language={locale}
      title={data[0].__i18n_lang === locale ? data[0].title : data[1].title}
    >
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
        <div className="w-full flex">
          <div className="w-1/2">
            <div>
              <div className="flex justify-center items-center">
                <YoutubeEmbed embedId="NomaFRLxGmc" />
              </div>
              <div className="flex justify-center  md:justify-start">
                <p className="py-4 text-xl hover:grow">Cacao - カカオ</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <p className="mt-4 mb-4">
              Cacao is a native species of America, probably native to Western
              Amazonia. In Peru, cacao is cultivated in the jungle of Loreto,
              San Martín, Ucayali, Huánuco, Junín, Pasco, Madre de Dios, Cusco
              and Ayacucho. Peruvian cacao has earned a good reputation in Japan
              due to its high quality and exceptional flavor.
            </p>
            <p className="mt-4 mb-4">
              The Japanese value high-quality food products and are willing to
              pay premium prices for them, which makes Peruvian cacao very
              popular in the Japanese market. In addition, Peruvian cacao is
              considered one of the best in the world due to its variety and
              richness in flavors, and it is used in the production of
              high-quality chocolates and other confectionery products in Japan.
            </p>
            <p className="mt-4 mb-4">
              Peruvian cacao farmers have worked hard to improve the quality of
              their product and develop a reliable supply chain, which has
              allowed Peruvian cacao to become a highly valued product in the
              Japanese market.
            </p>
          </div>
        </div>
        <PortableText
          content={
            locale === posts[0].__i18n_lang ? data[0].content : data[1].content
          }
          serializers={{
            normal: (props: {
              children: string | number | boolean | null | undefined;
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
