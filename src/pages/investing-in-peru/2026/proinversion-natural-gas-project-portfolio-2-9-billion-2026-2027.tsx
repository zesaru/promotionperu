import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const ProinversionNaturalGasPortfolioPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-04-13T00:00:00+09:00"
      title="PROINVERSIÓN、2026-2027年に向けて29億米ドル規模の天然ガスプロジェクトポートフォリオを推進"
      description="PROINVERSIÓNは、2026年から2027年にかけて最大29億米ドルの投資を伴う3つの天然ガスプロジェクトを推進。11地域におけるサービス普及拡大とエネルギー安全保障強化を目指します。"
    >
      <Banner
        alt={"ペルーの天然ガス投資案件を伝えるPROINVERSIÓNニュースバナー"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl">
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-xs md:text-sm text-gray-600">非公式翻訳</p>
        </div>

        <div className="mb-8">
          <p className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            ペルー民間投資促進庁（PROINVERSIÓN）
          </p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            PROINVERSIÓN、2026-2027年に向けて29億米ドル規模の天然ガスプロジェクトポートフォリオを推進
          </h1>
          <p className="text-xs md:text-sm text-gray-600 mb-2">プレスリリース</p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">2026年4月13日</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              ポートフォリオには、6億4,300万米ドルの投資を伴うCáliddaアドンダが含まれ、2026年第2四半期に落札予定です。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            リマ、2026年4月13日。ペルー民間投資促進庁（PROINVERSIÓN）は、2026年から2027年にかけて、官民パートナーシップ（APP）方式で最大
            <strong>29億米ドル</strong>
            の投資を見込む3つの天然ガスプロジェクトを推進しています。目的は、サービスの普及拡大と国内11地域のエネルギー安全保障の強化です。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              南部地域への天然ガス普及
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              この中で、Arequipa、Moquegua、Tacnaにおける天然ガスの大規模普及に向けた国家イニシアチブが注目されており、推定投資額は
              <strong>2億6,600万米ドル</strong>
              です。2026年第3四半期に公示、2027年第1四半期に落札が予定されています。この計画には、天然ガス（GN）と液化天然ガス（GNL）の供給、陸上輸送、再ガス化ステーションの設置、最終利用者への配給網の構築が含まれます。建設段階で3,100人以上、運営・保守段階で180人の雇用創出が見込まれています。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              Cáliddaアドンダ
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              一方、<strong>Cáliddaアドンダ</strong>は
              <strong>6億4,300万米ドル</strong>
              の投資を伴い、2026年第2四半期に落札される予定です。これにより、ワンカヨ、アヤクチョ、クスコ、ワンカベリカ、フニン、プーノ、ウカヤリの7地域の15万世帯以上が天然ガスを利用できるようになります。主な工事には、2,510キロメートルの配給網の敷設、2つのシティゲート、9つの衛星再ガス化プラントの建設が含まれます。
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              TGPアドンダ
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              また、<strong>TGPアドンダ</strong>は推定
              <strong>20億米ドル</strong>
              の投資を見込み、2026年第4四半期に落札される予定です。Ica、Arequipa、Moqueguaの各地域に恩恵をもたらし、923キロメートルのパイプラインと3つの圧縮ステーションの設置が含まれます。これにより、南部地域の増大するエネルギー需要に対応し、IloやMollendoの火力発電所への供給を強化します。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              PROINVERSIÓNの見解
            </h3>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic japanese-text">
              「プロジェクトと技術的解決策は進展しています。供給源を多様化し続け、より多くの人々がこのサービスにアクセスできるよう、連携した取り組みを推進する必要があります」
            </blockquote>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 japanese-text">
              と、PROINVERSIÓNのルイス・デル・カルピオ執行総裁は述べました。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            補完的な取り組みとして、PROINVERSIÓNはエネルギーインフラ拡大を目的とした潜在的なプロジェクトも推進しています。その中には、クヤバンバ、アンタ、クスコの各都市を結ぶクスコ地方ガスパイプライン（推定投資額
            <strong>7億8,000万米ドル</strong>
            ）が含まれます。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            さらに、ラ・コンベンシオン分留プラント（推定投資額
            <strong>3,000万米ドル</strong>
            、LPG生産用）の開発も検討されています。このプロジェクトは「税金による公共事業（Obras por Impuestos）」方式での実施が提案されています。これに加え、同地域でのガス液化プラントも検討段階にあります。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            現在、PROINVERSIÓNには3つの天然ガスプロジェクト（北部、Ica、南部の各普及事業）が稼働中であり、これまでに国内各地でのアクセス拡大に貢献してきました。
          </p>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">
              参考文献
            </h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              PROINVERSIÓN. (2026年04月13日). PROINVERSIÓN impulsa cartera de
              proyectos de gas natural por US$ 2,900 millones para 2026-2027.
              <br />
              参照先:{" "}
              <a
                href="https://www.investinperu.pe/proinversion-impulsa-cartera-de-proyectos-de-gas-natural-por-us-2900-millones-para-2026-2027/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                PROINVERSIÓN:
                https://www.investinperu.pe/proinversion-impulsa-cartera-de-proyectos-de-gas-natural-por-us-2900-millones-para-2026-2027/
              </a>
            </p>
          </div>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <p className="text-xs md:text-sm text-gray-600 mb-2">在日ペルー大使館</p>
            <p className="text-xs md:text-sm text-gray-600">経済商務担当</p>
          </div>

          <div className="text-right mt-8">
            <p className="text-xs md:text-sm text-gray-600">在日ペルー大使館</p>
            <p className="text-xs md:text-sm text-gray-600">非公式翻訳</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProinversionNaturalGasPortfolioPage;
