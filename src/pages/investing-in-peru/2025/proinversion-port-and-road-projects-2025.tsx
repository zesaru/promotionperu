import Link from "next/link";
import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const ProinversionProjectsPage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title="PROINVERSION、8億5,000万米ドル以上の港湾・道路プロジェクトを推進">
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
            PROINVERSION、8億5,000万米ドル以上の港湾・道路プロジェクトを推進
          </h1>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            リマ、2025年11月18日
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              これらのプロジェクトの実施により、国内の物流ネットワークの強化と国土統合の促進を目指しています。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            ペルー政府は、輸出促進、戦略的セクターの活性化、そして国土統合を目的とした、総額8億5,000万米ドル以上の港湾・道路の官民連携（PPP）プロジェクトポートフォリオを通じ、近代的で競争力のある物流ネットワークの構築を進めています。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            COMEX主催の「外国貿易とインフラ」セミナーでは、PROINVERSIÓNのエグゼクティブ・ディレクター、ルイス・デル・カルピオ氏（Luis Del Carpio）が、同庁が経済財務省に付属する機関として管理する主要な港湾および道路プロジェクトについて発表しました。
          </p>

          {/* Port Projects Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">港湾プロジェクト</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">チンボテ港ターミナル</h4>
                <p className="text-sm md:text-base text-blue-600 font-medium mb-2 japanese-text">3億5,400万米ドル</p>
                <p className="text-sm text-gray-700 leading-relaxed japanese-text">
                  このプロジェクトは、Áncash、La Libertad、Huanuco、北部Limaの約120万人の住民に恩恵をもたらします。この施設は、園芸、漁業、鉱業部門の物流チェーンを最適化し、北部ペルーの輸出競争力を強化します。
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">SaramirizaおよびIquitos港ターミナル</h4>
                <p className="text-sm md:text-base text-blue-600 font-medium mb-2 japanese-text">1億8,100万米ドル</p>
                <p className="text-sm text-gray-700 leading-relaxed japanese-text">
                  Loreto地域での建設が計画されており、河川輸送の促進とアマゾン地域の物流連結性向上に不可欠なインフラとなります。これらのプロジェクトにより、100万人以上の住民が恩恵を受け、アマゾン地域の経済・商業発展が促進される見込みです。
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">プカルパ港ターミナル近代化</h4>
                <p className="text-sm md:text-base text-blue-600 font-medium mb-2 japanese-text">3億1,500万米ドル</p>
                <p className="text-sm text-gray-700 leading-relaxed japanese-text">
                  Ucayali地域で進められており、地域の物流能力を向上させ、初年度には80万トン以上の貨物を取り扱う見込みです。このプロジェクトにより物流コストが削減され、Lima、Ucayali、Loreto間の商取引が強化され、約60万人の住民が恩恵を受けます。
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-300">
              <p className="text-sm text-gray-700 leading-relaxed japanese-text">
                全体として、ポートプロジェクトの実施により、1,450以上の直接雇用が創出され、経済再活性化と戦略的インフラの強化に貢献します。
              </p>
            </div>
          </div>

          {/* Port Community System */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">Port Community System（PCS）導入</h3>
            <p className="text-sm text-gray-700 leading-relaxed japanese-text">
              さらに、国内港湾システムの近代化の一環として、PROINVERSIONはPort Community System（PCS）の導入も推進しており、港湾事業者間の情報交換を統合することで、プロセスの最適化、コスト削減、物流チェーンの競争力向上を図ります。
            </p>
          </div>

          {/* New PPP Framework */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">新たな官民連携（PPP）制度</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4 japanese-text">
              デル・カルピオ氏はまた、新たな官民連携（PPP）制度がPROINVERSIÓNの役割を強化し、より秩序ある予測可能でバランスの取れた地域開発への重要な一歩になることを指摘しました。
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm text-gray-700 italic">
              「この規制更新により、投資促進の加速と全国規模での戦略的インフラプロジェクトの実施改善が可能となります。Anillo Vial Periferico、Longitudinal de la Sierra – Tramo 4、Huancayo–Huancavelica鉄道などのプロジェクトは、物流の接続性に直接影響を与え、輸送時間の短縮と地域間統合の強化に貢与するでしょう」
            </blockquote>
          </div>

          {/* Road Projects */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">道路プロジェクト</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4 japanese-text">
              同時に、デル・カルピオ氏は、官民連携（PPP）による地域統合を強化する22件の道路維持プロジェクトも紹介しました。総投資額は550万米ドルを超え、15地域に恩恵をもたらす見込みです。これらの投資により、年間を通じた交通の継続性が確保され、利用者のサービス水準が向上します。
            </p>

            <div className="bg-white border border-gray-300 rounded-lg p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-3">マクロ地域別の投資配分</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>中央地域：</strong>10件、21億6,200万米ドル</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>南部地域：</strong>8件、23億6,800万米ドル</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>北部地域：</strong>2件、5億6,000万米ドル</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>東部地域：</strong>1件、3億9,000万米ドル</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>リマ：</strong>1件、9,300万米ドル</span>
                </li>
              </ul>
            </div>

            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm text-gray-700 italic mt-4">
              デル・カルピオ氏は、これらの道路回廊の整備により、地域間接続が強化され、移動時間や物流コストの削減、国内外市場の連携促進が可能になると述べ、「地域経済の再活性化とより効率的かつ持続可能な移動の実現に大きく貢献することが期待されます」と付け加えました。
            </blockquote>
          </div>

          {/* Results */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">PROINVERSIONの成果</h3>
            <p className="text-sm text-gray-700 leading-relaxed japanese-text">
              2002年の創設以来、PROINVERSIONは輸送関連で33件のプロジェクトを総額170億米ドルで受注しており、国内輸出は10倍に拡大し、2024年には740億米ドルに達しました。
            </p>
          </div>

          {/* References */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 japanese-heading-3 japanese-text">参考文献</h3>
            <p className="text-sm text-gray-700 japanese-text">
              PROINVERSION. (2025年11月18日). PROINVERSION promueve proyectos portuarios y viales por más de US$ 850 millones.<br />
              参照先: <a href="https://www.investinperu.pe/proinversion-promueve-proyectos-portuarios-y-viales-por-mas-de-us-850-millones/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PROINVERSION</a>
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

export default ProinversionProjectsPage;