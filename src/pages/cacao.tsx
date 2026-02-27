import { getAllPosts } from "lib/sanity.client";
import { useRouter } from "next/router";
import { GetStaticProps } from "next/types";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";
import Layout from "src/components/Layout";
import YoutubeEmbed from "src/components/YoutubeEmbed";

import { getLocalizedEntry } from "@/lib/get-localized-entry";

const Cacao = ({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();

  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );
  const localizedPost = getLocalizedEntry(data, locale);
  const title = localizedPost?.title || "Cacao";
  const isJapanese = locale === "jp";

  return (
    <Layout language={locale} title={title}>
      <Banner
        alt={title}
        src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564005/WEB/gastronomia/peruinjapanbannercacao_nzf9yw.jpg"
      />
      <div className="container p-2 md:p-4 mx-auto">
        <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-2">
          <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
          <h2 className="pl-2">{title}</h2>
        </div>
        <div className="w-full flex flex-col lg:flex-row">
          <div className="flex flex-col justify-center w-full lg:w-1/2">
            <div>
              <div className="flex justify-center items-center">
                <YoutubeEmbed embedId="NomaFRLxGmc" />
              </div>
              <div className="flex justify-center  md:justify-start">
                <p className="py-4 text-xl hover:grow">Cacao - カカオ</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center lg:w-1/2 w-full lg:pl-4">
            {isJapanese ? (
              <div>
                <p className="mt-4 mb-4">
                  カカオはアメリカの原産種であり、おそらく西アマゾン地域がその起源です。ペルーでは、カカオはロレト、サンマルティン、ウカヤリ、ワヌコ、フニン、パスコ、マドレデディオス、クスコ、アヤクチョのジャングル地帯で栽培されています。ペルーのカカオは、その高品質と特別な風味のために日本で評判を得ています。
                </p>
                <p className="mt-4 mb-4">
                  日本人は高品質の食品製品を重視し、それらにプレミアム価格を支払う意欲があります。そのため、ペルーのカカオは日本市場で非常に人気があります。さらに、ペルーのカカオはその種類や風味の豊かさから、世界でも最高品質の一つとされ、日本では高品質のチョコレートや他の菓子製品の製造に使用されています。
                </p>
                <p className="mt-4 mb-4">
                  ペルーのカカオ農家は、製品の品質を向上させ、信頼性のある供給チェーンを築くために一生懸命取り組んできました。その結果、ペルーのカカオは日本市場で高く評価される製品となりました。
                </p>
              </div>
            ) : (
              <div>
                <p className="mt-4 mb-4">
                  Cacao is a native species of America, probably native to
                  Western Amazonia. In Peru, cacao is cultivated in the jungle
                  of Loreto, San Martín, Ucayali, Huánuco, Junín, Pasco, Madre
                  de Dios, Cusco and Ayacucho. Peruvian cacao has earned a good
                  reputation in Japan due to its high quality and exceptional
                  flavor.
                </p>
                <p className="mt-4 mb-4">
                  The Japanese value high-quality food products and are willing
                  to pay premium prices for them, which makes Peruvian cacao
                  very popular in the Japanese market. In addition, Peruvian
                  cacao is considered one of the best in the world due to its
                  variety and richness in flavors, and it is used in the
                  production of high-quality chocolates and other confectionery
                  products in Japan.
                </p>
                <p className="mt-4 mb-4">
                  Peruvian cacao farmers have worked hard to improve the quality
                  of their product and develop a reliable supply chain, which
                  has allowed Peruvian cacao to become a highly valued product
                  in the Japanese market.
                </p>
              </div>
            )}
          </div>
        </div>
        <PortableText
          content={localizedPost?.content || []}
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
