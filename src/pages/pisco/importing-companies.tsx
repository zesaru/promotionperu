import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { FaArrowLeft, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Banner from "src/components/Banner";
import Layout from "src/components/Layout";

type Importer = {
  id: string;
  name: string;
  nameEn?: string;
  prefectureJa: string;
  prefectureEn: string;
  cityJa: string;
  cityEn: string;
  postalCode: string;
  addressJa: string[];
  addressEn: string[];
  phone: string;
  fax?: string;
  email?: string;
  website?: string;
};

const importers: Importer[] = [
  {
    id: "blue-habu-trade-group",
    name: "ブルーハブトレードグループ",
    nameEn: "BLUE HABU TRADE GROUP",
    prefectureJa: "沖縄県",
    prefectureEn: "Okinawa",
    cityJa: "沖縄市",
    cityEn: "Okinawa City",
    postalCode: "904-301",
    addressJa: ["上池2-7-26"],
    addressEn: ["2-7-26 Ueike"],
    phone: "090-5058-7210",
    email: "info@bluehabutrade.com",
  },
  {
    id: "g-and-c-corporation",
    name: "株式会社G&C CORPORATION",
    prefectureJa: "三重県",
    prefectureEn: "Mie",
    cityJa: "桑名市",
    cityEn: "Kuwana",
    postalCode: "511-0001",
    addressJa: ["大字上之輪新田1418番地"],
    addressEn: ["1418 Oaza Kaminowashinden"],
    phone: "0594-25-8353",
    fax: "0594-25-8002",
    email: "info@gyc-corp.com",
  },
  {
    id: "kyodai-market-gotanda",
    name: "キョウダイマーケット五反田実店舗",
    nameEn: "Kyodai Market Gotanda",
    prefectureJa: "東京都",
    prefectureEn: "Tokyo",
    cityJa: "品川区",
    cityEn: "Shinagawa",
    postalCode: "141-0022",
    addressJa: ["東五反田1-13-12", "いちご五反田ビル6F"],
    addressEn: ["1-13-12 Higashi-Gotanda", "Ichigo Gotanda Building 6F"],
    phone: "03-3280-1035",
    email: "kyodaimarket@kyodai.co.jp",
  },
  {
    id: "mosto-verde-tokyo",
    name: "モストベルデ・トーキョー",
    nameEn: "Mosto Verde Tokyo",
    prefectureJa: "静岡県",
    prefectureEn: "Shizuoka",
    cityJa: "静岡市駿河区",
    cityEn: "Suruga-ku, Shizuoka",
    postalCode: "422-8041",
    addressJa: ["中田本町7-37-2"],
    addressEn: ["7-37-2 Nakadahommachi"],
    phone: "070-4487-4236",
    email: "mostoverde.tokyo@gmail.com",
  },
  {
    id: "nakayama-and-co",
    name: "有限会社 中山商店 NAKAYAMA&CO.Ltd.",
    nameEn: "Nakayama & Co. Ltd.",
    prefectureJa: "東京都",
    prefectureEn: "Tokyo",
    cityJa: "渋谷区",
    cityEn: "Shibuya",
    postalCode: "150-0021",
    addressJa: ["恵比寿西1-18-3", "フルビュー4F"],
    addressEn: ["1-18-3 Ebisu Nishi", "Full View 4F"],
    phone: "03-3476-2421",
    fax: "03-3476-1744",
    website: "http://nakayama-inc.jp",
  },
  {
    id: "imperio",
    name: "株式会社テルデン - IMPERIO",
    nameEn: "Imperio",
    prefectureJa: "神奈川県",
    prefectureEn: "Kanagawa",
    cityJa: "横浜市鶴見区",
    cityEn: "Tsurumi-ku, Yokohama",
    postalCode: "230-0037",
    addressJa: ["向井町2-70-15"],
    addressEn: ["2-70-15 Mukai-cho"],
    phone: "045-350-6057",
    email: "info@imperiojapan.com",
  },
];

const piscoBannerSrc =
  "https://res.cloudinary.com/de5ud82os/image/upload/f_auto,q_auto,c_limit,w_1500/v1779691426/WEB/2026/Pisco/pisco_es_peru_xp7dcr.png";
const piscoOgImageSrc =
  "https://res.cloudinary.com/de5ud82os/image/upload/f_auto,q_auto,c_limit,w_1200/v1779691426/WEB/2026/Pisco/pisco_es_peru_xp7dcr.png";

const translations = {
  en: {
    title: "Pisco Importing Companies",
    seoTitle: "Pisco Importing Companies | Peruvian Products Importers in Japan",
    seoDescription:
      "Directory of companies importing Peruvian Pisco in Japan, with direct contact details and regional locations.",
    intro:
      "Explore companies in Japan that import Peruvian Pisco. Contact details and business locations are listed for quick follow-up.",
    results: "importers listed",
    backToPisco: "Back to Pisco",
    location: "Location",
    address: "Address",
    phone: "Phone",
    fax: "Fax",
    email: "Email",
    website: "Website",
    contact: "Contact importer",
    visit: "Visit website",
  },
  jp: {
    title: "ピスコ輸入会社",
    seoTitle: "ピスコ輸入会社 | 日本のペルー製品輸入業者",
    seoDescription:
      "日本でペルー産ピスコを輸入する企業一覧。所在地と連絡先をすぐ確認できます。",
    intro:
      "日本国内でペルー産ピスコを取り扱う輸入会社をまとめています。所在地と連絡先をすぐ確認できます。",
    results: "社を掲載",
    backToPisco: "ピスコへ戻る",
    location: "所在地",
    address: "住所",
    phone: "電話",
    fax: "FAX",
    email: "メール",
    website: "Webサイト",
    contact: "連絡する",
    visit: "サイトを見る",
  },
} as const;

const ImportingPage = () => {
  const { locale } = useRouter();
  const localeKey = locale === "en" ? "en" : "jp";
  const copy = translations[localeKey];
  const canonicalPath = `${localeKey === "en" ? "/en" : ""}/pisco/importing-companies`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: copy.seoTitle,
    description: copy.seoDescription,
    url: `https://peruinjapan.org${canonicalPath}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: importers.length,
      itemListElement: importers.map((importer, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Organization",
          name: importer.nameEn || importer.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: importer.addressEn.join(", "),
            addressLocality: importer.cityEn,
            addressRegion: importer.prefectureEn,
            postalCode: importer.postalCode,
            addressCountry: "JP",
          },
          telephone: `+81-${importer.phone.replace(/-/g, "-")}`,
          ...(importer.email ? { email: importer.email } : {}),
          ...(importer.website ? { url: importer.website } : {}),
        },
      })),
    },
  };

  return (
    <Layout language={locale} disableDefaultSeo>
      <NextSeo
        title={copy.seoTitle}
        description={copy.seoDescription}
        canonical={`https://peruinjapan.org${canonicalPath}`}
        openGraph={{
          url: `https://peruinjapan.org${canonicalPath}`,
          title: copy.seoTitle,
          description: copy.seoDescription,
          images: [
            {
              url: piscoOgImageSrc,
              width: 1200,
              height: 630,
              alt: "Pisco Peruano",
            },
          ],
          siteName: "Peru in Japan",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Banner
        alt="Pisco"
        src={piscoBannerSrc}
      />

      <section className="bg-[#fcfbf8]">
        <div className="container mx-auto px-3 py-6 md:px-6 md:py-12">
          <Link
            href="/pisco"
            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-red-700 transition hover:text-red-500"
          >
            <FaArrowLeft className="h-3.5 w-3.5" />
            {copy.backToPisco}
          </Link>

          <div className="mb-6 border-b border-stone-200 pb-6 md:mb-8 md:grid md:grid-cols-[minmax(0,1fr)_200px] md:gap-6 md:pb-8">
            <div>
              <div className="mb-3 flex items-center gap-3 text-stone-900 md:mb-4">
                <span className="h-8 w-1 rounded-full bg-red-600 md:h-10"></span>
                <h1 className="text-[1.75rem] font-bold uppercase leading-[1.05] tracking-[0.08em] md:text-3xl md:tracking-[0.12em]">
                  {copy.title}
                </h1>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-stone-600 md:text-base md:leading-7">
                {copy.intro}
              </p>
            </div>
            <div className="mt-4 flex items-end md:mt-0 md:justify-end">
              <div className="text-left md:text-right">
                <p className="text-4xl font-bold leading-none text-stone-900">{importers.length}</p>
                <p className="mt-2 text-sm text-stone-500">{copy.results}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
            {importers.map((importer) => {
              const displayName = localeKey === "en"
                ? importer.nameEn || importer.name
                : importer.name;
              const displayRegion = localeKey === "en"
                ? `${importer.cityEn}, ${importer.prefectureEn}`
                : `${importer.cityJa}、${importer.prefectureJa}`;
              const displayAddress = localeKey === "en"
                ? [`${importer.postalCode}`, ...importer.addressEn]
                : [`〒${importer.postalCode}`, ...importer.addressJa];

              return (
                <article
                  key={importer.id}
                  className="flex h-full flex-col border-b border-stone-200 pb-5 md:rounded-none md:border md:border-stone-200 md:bg-white md:p-6"
                >
                  <div className="mb-3 flex items-start justify-between gap-4 md:mb-4">
                    <div>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500 md:text-xs md:tracking-[0.18em]">
                        {displayRegion}
                      </p>
                      <h2 className="text-lg font-bold leading-snug text-stone-900 md:text-xl md:leading-tight">{displayName}</h2>
                      {localeKey === "en" && importer.nameEn && importer.nameEn !== importer.name ? (
                        <p className="mt-2 text-sm text-stone-500">{importer.name}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <a
                      className="inline-flex min-h-10 items-center justify-center rounded-full border border-red-600 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50"
                      href={`tel:${importer.phone.replace(/-/g, "")}`}
                    >
                      {copy.phone}
                    </a>
                    {importer.email ? (
                      <a
                        className="inline-flex min-h-10 items-center justify-center rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-400 hover:bg-stone-50"
                        href={`mailto:${importer.email}`}
                      >
                        {copy.contact}
                      </a>
                    ) : importer.website ? (
                      <a
                        className="inline-flex min-h-10 items-center justify-center rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-400 hover:bg-stone-50"
                        href={importer.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {copy.visit}
                      </a>
                    ) : null}
                  </div>

                  <dl className="space-y-4 text-sm text-stone-700">
                    <div className="flex gap-3">
                      <FaMapMarkerAlt className="mt-1 h-4 w-4 shrink-0 text-red-600" />
                      <div>
                        <dt className="font-semibold text-stone-900">{copy.address}</dt>
                        <dd className="mt-1 leading-6">
                          {displayAddress.map((line) => (
                            <div key={line}>{line}</div>
                          ))}
                        </dd>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <FaPhoneAlt className="mt-1 h-4 w-4 shrink-0 text-red-600" />
                      <div>
                        <dt className="font-semibold text-stone-900">{copy.phone}</dt>
                        <dd className="mt-1">
                          <a className="hover:text-red-600" href={`tel:${importer.phone.replace(/-/g, "")}`}>
                            {importer.phone}
                          </a>
                          {importer.fax ? (
                            <div className="text-stone-500">
                              {copy.fax}: {importer.fax}
                            </div>
                          ) : null}
                        </dd>
                      </div>
                    </div>

                    {importer.email ? (
                      <div className="flex gap-3">
                        <FaEnvelope className="mt-1 h-4 w-4 shrink-0 text-red-600" />
                        <div>
                          <dt className="font-semibold text-stone-900">{copy.email}</dt>
                          <dd className="mt-1 break-all">
                            <a className="hover:text-red-600" href={`mailto:${importer.email}`}>
                              {importer.email}
                            </a>
                          </dd>
                        </div>
                      </div>
                    ) : null}

                    {importer.website ? (
                      <div className="flex gap-3">
                        <FaGlobe className="mt-1 h-4 w-4 shrink-0 text-red-600" />
                        <div>
                          <dt className="font-semibold text-stone-900">{copy.website}</dt>
                          <dd className="mt-1 break-all">
                            <a
                              className="hover:text-red-600"
                              href={importer.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {importer.website}
                            </a>
                          </dd>
                        </div>
                      </div>
                    ) : null}
                  </dl>

                  <div className="mt-4 flex flex-wrap gap-3 pt-2 md:mt-5">
                    {importer.email && importer.website ? (
                      <a
                        className="inline-flex items-center justify-center text-sm font-semibold text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-red-600"
                        href={importer.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {copy.visit}
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImportingPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
