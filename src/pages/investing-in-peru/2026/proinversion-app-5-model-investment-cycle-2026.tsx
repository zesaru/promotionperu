import Link from "next/link";
import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const ProinversionApp5Page = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title="PROINVERSIÓN、新モデル「APP 5.0」の下で 210 億米ドル超の投資サイクルを活性化">
      <Banner
        alt={"Investment guide 2022"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-xs md:text-sm text-gray-600">非公式翻訳</p>
        </div>

        <div className="mb-8">
          <h1 className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            民間投資促進庁（PROINVERSIÓN）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            PROINVERSIÓN、新モデル「APP 5.0」の下で 210 億米ドル超の投資サイクルを活性化
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-2">
            プレスリリース
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025 年 12 月 3 日
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              ペルーは新たな段階に入り、全国のインフラと公共サービスを変革するメガプロジェクト時代の幕開けを告げています。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            リマ、2025 年 12 月 3 日 — 民間投資促進庁（PROINVERSIÓN）は、2026～2028 年のサイクルに向けた 210 億米ドルを超える 66 のプロジェクト・ポートフォリオを提示しました。これは、競争力と数百万人のペルー国民の生活の質向上に大きな影響を与えるメガプロジェクト時代の幕開けを告げるものです。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            同庁のルイス・デル・カルピオ長官は、「ペルーは新たな段階に入っています。全国のインフラと公共サービスを変革する 210 億米ドル以上の 66 プロジェクトを擁しており、22 地域 2,500 万人以上の国民に変化をもたらす案件の準備を進めています」と詳述しました。
          </p>

          {/* Main Projects Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">主要プロジェクト</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ポートフォリオには、リマ・メトロ 3 号線および 4 号線を含む 22 の輸送プロジェクトのほか、衛生、灌漑、エネルギー、保健、教育、鉱業、観光インフラ、不動産に関する取り組みが含まれます。
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Loreto州の新港湾ターミナル</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">第 3 グループの空港群</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Huascaranのテレフェリック</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Arequipa・Moquegua・Tacna州への天然ガス網の拡張</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">PaitaおよびTalaraの水処理・海水淡水化プラント</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong className="text-gray-900">Lambayeque州の高機能病院</strong>
                </p>
              </div>
            </div>
          </div>

          {/* APP 5.0 Model */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">APP 5.0：ペルー型モデル</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              この推進は、プロジェクトの全サイクルにわたる PROINVERSIÓN の役割を強化し、高度なデジタル化、金融イノベーション、気候・社会的レジリエンス（回復力）の基準を組み込んだ新しい「APP 5.0」モデルによって可能となりました。
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic mb-4 japanese-text">
              「APP 5.0 により、PROINVERSIÓN はプロジェクトの全工程に同行し、デジタル化、金融革新、気候変動への対応を組み込みます。このモデルにより、メガプロジェクトを加速させ、投資が確実に現実のものとなるよう努めます」
            </blockquote>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              デル・カルピオ長官は、このモデルが従来のアプローチを変革し、プロジェクトの実行可能性と持続可能性を高めると強調しました。
            </p>
          </div>

          {/* Impact Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">影響と期待</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              この 210 億米ドル超の投資サイクルは、以下のような重要な影響をもたらす見込みです：
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>22 地域</strong>にインフラと公共サービスの変革をもたらす
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>2,500 万人以上</strong>の国民に恩恵を提供
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>66 のメガプロジェクト</strong>で数百万人の生活の質を向上
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>輸送、衛生、エネルギー、保健、教育、観光</strong>など多岐にわたる分野をカバー
                </p>
              </div>
            </div>
          </div>

          {/* Context Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">背景</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              リマ商工会議所が主催した「ビジネス・リーダーシップ・サーキット」において、輸送、衛生、エネルギー、保健、教育、観光の各分野における 2026～2028 年期のメガプロジェクトが発表されました。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              このイニシアチブは、ペルーの競争力強化と持続可能な経済発展を目的としており、民間投資の活性化と官民連携（PPP）の強化を図るものです。
            </p>
          </div>

          {/* References */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">参考文献</h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              PROINVERSION. (2025年12月03日). PROINVERSIÓN activará ciclo de inversiones por más de USD 21 mil millones bajo el nuevo modelo APP 5.0.<br />
              参照先: <a href="https://www.investinperu.pe/proinversion-activara-ciclo-de-inversiones-por-mas-de-usd-21-mil-millones-bajo-el-nuevo-modelo-app-5-0/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PROINVERSION: https://www.investinperu.pe/proinversion-activara-ciclo-de-inversiones-por-mas-de-usd-21-mil-millones-bajo-el-nuevo-modelo-app-5-0/</a>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <p className="text-xs md:text-sm text-gray-600 mb-2">
              在日ペルー大使館
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              経済商務担当
            </p>
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

export default ProinversionApp5Page;
