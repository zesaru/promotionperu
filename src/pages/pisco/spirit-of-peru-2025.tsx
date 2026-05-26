import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { ImArrowLeft2, ImDownload2 } from "react-icons/im";
import Banner from "src/components/Banner";
import Layout from "src/components/Layout";

const piscoBannerSrc =
  "https://res.cloudinary.com/de5ud82os/image/upload/f_auto,q_auto,c_limit,w_1500/v1779691426/WEB/2026/Pisco/pisco_es_peru_xp7dcr.png";
const piscoEditorialImageSrc =
  "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapanpiscorecipes_mvw5hm.jpg";

const pdfHref =
  "https://res.cloudinary.com/de5ud82os/image/upload/v1779780668/WEB/2026/Pisco/pisco-spirit-of-peru-2025.pdf";

const SpiritOfPeru2025Page = () => {
  const { locale } = useRouter();
  const isEnglish = locale === "en";
  const title = "Pisco Spirit of Peru 2025";
  const description = isEnglish
    ? "Download and browse the Pisco Spirit of Peru 2025 guide, a reference resource about Peru's signature spirit."
    : "Pisco Spirit of Peru 2025 ガイドをダウンロードして、ペルーを代表する蒸留酒ピスコの魅力を紹介する資料をご覧ください。";
  const backLabel = isEnglish ? "Back to Pisco" : "ピスコへ戻る";
  const intro = isEnglish
    ? "A downloadable guide that presents Pisco as one of Peru's most emblematic products, with a clear visual overview for audiences in Japan."
    : "日本の読者に向けて、ペルーを代表する産品ピスコの魅力をわかりやすく紹介するダウンロード用ガイドです。";
  const openLabel = isEnglish ? "Open PDF" : "PDFを開く";
  const downloadLabel = isEnglish ? "Download PDF" : "PDFをダウンロード";
  const detailsLabel = isEnglish ? "PDF guide · 4 pages · 990 KB" : "PDFガイド・4ページ・990 KB";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: title,
    description,
    url: `https://peruinjapan.org${isEnglish ? "/en/pisco/spirit-of-peru-2025" : "/pisco/spirit-of-peru-2025"}`,
    encodingFormat: "application/pdf",
    contentUrl: `https://peruinjapan.org${pdfHref}`,
    inLanguage: isEnglish ? "en" : "ja",
  };

  return (
    <Layout language={locale} title={title} description={description} structuredData={structuredData}>
      <Banner alt={title} src={piscoBannerSrc} />
      <section className="container mx-auto px-4 py-6 md:px-6 md:py-10">
        <Link
          href="/pisco"
          className="inline-flex items-center rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-300 hover:text-stone-900"
        >
          <ImArrowLeft2 className="mr-2" />
          {backLabel}
        </Link>
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-stretch">
          <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-600">
              Pisco Resource
            </p>
            <h1 className="mt-4 text-3xl font-bold uppercase tracking-[0.18em] text-stone-900 md:text-4xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-stone-700">
              {intro}
            </p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-stone-500">
              {detailsLabel}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                <ImDownload2 className="mr-2" />
                {openLabel}
              </a>
              <a
                href={pdfHref}
                download
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400 hover:bg-stone-50"
              >
                <ImDownload2 className="mr-2" />
                {downloadLabel}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm xl:h-full">
            <Image
              src={piscoEditorialImageSrc}
              alt={isEnglish ? "Pisco editorial image" : "ピスコのイメージ"}
              width={750}
              height={500}
              className="h-full w-full object-cover xl:min-h-full"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpiritOfPeru2025Page;
