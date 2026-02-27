import { getAllPosts } from "lib/sanity.client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import PortableText from "react-portable-text";
import Banner from "src/components/Banner";
import Layout from "src/components/Layout";

const ImportingPage = (({ posts }: { posts: any }) => {
  const { locale, route } = useRouter();
 
  const data = posts.filter(
    (post: { menu: string }) => `/${post.menu}` === route
  );

  const title = data[0].__i18n_lang === locale ? data[0].title : data[1].title;
  const seoTitle = locale === 'jp'
    ? 'ピスコ輸入会社 | 日本のペルー製品輸入業者'
    : 'Pisco Importing Companies | Peruvian Products Importers in Japan';
  const seoDescription = locale === 'jp'
    ? '日本でペルー産ピスコを輸入する企業一覧。高品質なペルー製品を提供する信頼できる輸入業者をご紹介します。'
    : 'List of companies importing Peruvian Pisco in Japan. Find trusted importers offering high-quality Peruvian products.';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": seoTitle,
    "description": seoDescription,
    "url": `https://peruinjapan.com${route}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Organization",
            "name": "ブルーハブトレードグループ (BLUE HABU TRADE GROUP)",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "上池2-7-26",
              "addressLocality": "沖縄市",
              "addressRegion": "沖縄県",
              "postalCode": "904-301",
              "addressCountry": "JP"
            },
            "telephone": "+81-90-5058-7210",
            "email": "info@bluehabutrade.com"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Organization",
            "name": "株式会社G&C CORPORATION",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "大字上之輪新田1418番地",
              "addressLocality": "桑名市",
              "addressRegion": "三重県",
              "postalCode": "511-0001",
              "addressCountry": "JP"
            },
            "telephone": "+81-594-25-8353",
            "email": "info@gyc-corp.com"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Organization",
            "name": "モストベルデ・トーキョー",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "中田本町7-37-2",
              "addressLocality": "静岡市駿河区",
              "addressRegion": "静岡県",
              "postalCode": "422-8041",
              "addressCountry": "JP"
            },
            "telephone": "+81-70-4487-4236",
            "email": "mostoverde.tokyo@gmail.com"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Organization",
            "name": "キョウダイマーケット五反田実店舗",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "東五反田1-13-12 いちご五反田ビル6F",
              "addressLocality": "品川区",
              "addressRegion": "東京都",
              "postalCode": "141-0022",
              "addressCountry": "JP"
            },
            "telephone": "+81-3-3280-1035",
            "email": "kyodaimarket@kyodai.co.jp"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Organization",
            "name": "有限会社 中山商店 NAKAYAMA&CO.Ltd.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "恵比寿西1-18-3 フルビュー4F",
              "addressLocality": "渋谷区",
              "addressRegion": "東京都",
              "postalCode": "150-0021",
              "addressCountry": "JP"
            },
            "telephone": "+81-3-3476-2421",
            "faxNumber": "+81-3-3476-1744",
            "url": "http://nakayama-inc.jp"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Organization",
            "name": "株式会社テルデン - IMPERIO",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "向井町2-70-15",
              "addressLocality": "横浜市鶴見区",
              "addressRegion": "神奈川県",
              "postalCode": "230-0037",
              "addressCountry": "JP"
            },
            "telephone": "+81-45-350-6057",
            "email": "info@imperiojapan.com"
          }
        }
      ]
    }
  };

  return (
    <Layout language={locale}>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`https://peruinjapan.com${route}`}
        openGraph={{
          url: `https://peruinjapan.com${route}`,
          title: seoTitle,
          description: seoDescription,
          images: [
            {
              url: 'https://res.cloudinary.com/de5ud82os/image/upload/v1694564008/WEB/gastronomia/pisco_kqmd66.jpg',
              width: 1200,
              height: 630,
              alt: 'Pisco Peruano',
            },
          ],
          siteName: 'Peru in Japan',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Banner
        alt="Pisco"
        src="https://res.cloudinary.com/de5ud82os/image/upload/v1694564008/WEB/gastronomia/pisco_kqmd66.jpg"
      />
      <div className="container p-6  mx-auto">
        <div className="flex uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
          <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600"></span>
          <h1 className="pl-2">
            {title}
          </h1>

        </div>
      </div>
      <div className="container p-6 mx-auto">
        <PortableText className="flex flex-wrap -mx-3 md:-mx-4 lg:-mx-6"
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
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 md:p-4 lg:p-6">{props.children}</div>
              )
            },
          }}
        />
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