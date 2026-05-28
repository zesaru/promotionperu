import { useRouter } from "next/router";

import Layout from "@/components/Layout";

const InvestmentGuide2026Page = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      title="Guide to Investing in Peru 2026"
      description='Coming soon page for Investment Guide "VALE UN PERU 2026-2027".'
    >
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Guide to Investing in Peru 2026-2027
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 font-medium">
            Coming soon
          </p>
          <p className="text-xl md:text-3xl text-gray-900 font-semibold leading-relaxed">
            Investment Guide &ldquo;VALE UN PERU 2026-2027&rdquo;
          </p>
          <p className="text-lg md:text-2xl text-gray-700 font-medium japanese-text">
            近日公開予定
          </p>
          <p className="text-xl md:text-3xl text-gray-900 font-semibold leading-relaxed japanese-heading-3">
            投資ガイド「VALE UN PERÚ 2026-2027」
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default InvestmentGuide2026Page;
