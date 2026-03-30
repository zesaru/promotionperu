import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const ProinversionRoadCorridorsPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      title="PROINVERSIÓN、総額10億米ドル超の7つの戦略的道路回廊の構造化を推進"
      description="PROINVERSIÓNは、APP 5.0の下で総額10億米ドル超の7つの戦略的道路回廊を構造化し、全国の接続性強化と280万人超の市民への便益創出を目指しています。"
    >
      <Banner
        alt={"Peru strategic road corridors investment news banner"}
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
          <h1 className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            民間投資促進庁（PROINVERSIÓN）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            PROINVERSIÓN、総額10億米ドル超の7つの戦略的道路回廊の構造化を推進
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-2">プレスリリース</p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">2026年3月23日</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              これらのイニシアチブは280万人以上のペルー国民に恩恵をもたらし、APP 5.0アプローチの下で開発されます。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            リマ、2026年3月23日 ペルー民間投資促進庁（PROINVERSIÓN）は、全国の接続性を強化し、国内各地域の道路インフラを改善することを目的とした2026年ポートフォリオの一環として、総投資額10億米ドルを超える7つの戦略的道路回廊の構造化を進めています。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              市場との対話を通じた構造化
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              この枠組みの中で、同庁は投資家向けのマーケットサウンディングを実施し、第1グループの道路プロジェクトを提示するとともに、市場からの意見を収集することで、堅固な技術財務基準の下での構造化の最適化と開発の加速を図りました。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              このポートフォリオは、Junín、Áncash、Pasco、Huánuco、San Martín、Cusco、Puno、Arequipa、Moqueguaに位置する7つの回廊を含み、280万人以上の市民に恩恵をもたらすものです。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              ポートフォリオの主要指標
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">7</p>
                <p className="text-sm text-gray-700 japanese-text">戦略的道路回廊</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">US$1B+</p>
                <p className="text-sm text-gray-700 japanese-text">総投資額</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 mb-1">2.8M+</p>
                <p className="text-sm text-gray-700 japanese-text">恩恵を受ける市民</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              主要回廊1: 南部物流軸
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              第1のプロジェクトは、Arequipa州とMoquegua州を全長<strong>389km</strong>にわたって走るAtico - Desvío Quilca - Matarani - Ilo / Desvío Cocachacra - Ventillata道路の運営維持管理に関するものであり、<strong>17万6,000人超</strong>のユーザーに恩恵をもたらし、南部の物流接続性を強化します。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              第2のプロジェクトは、Junín県の6つの州を統合する全長<strong>432km</strong>のDesvío Las Vegas - Mazamari - Puerto Ocopa / Tarma - Jauja / Puente Stuart - Huancayo / Mazamari - Cubantía道路であり、<strong>74万7,000人超</strong>の接続性向上に寄与します。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              観光と地域統合を支える回廊
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              Cusco - Pisac / Urubamba - Chinchero - Cachimayo / Huacarpay - Ollantaytambo - Desvío Santa Teresa回廊は、約<strong>52万人</strong>の市民に恩恵をもたらす<strong>285km</strong>の道路であり、同地域の観光回廊の発展にも貢献します。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              また、Áncash州に位置する全長<strong>163.8km</strong>のPuente Carrizales (Casma) - Pariacoto - Huaraz観光回路（展望台）道路の運営維持管理プロジェクトは、約<strong>25万人</strong>のユーザーに恩恵をもたらし、重要な観光地へのアクセスを改善します。
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              中央・南部をつなぐ道路回廊
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              ポートフォリオには、HuánucoとSan Martín間を走る全長<strong>458km</strong>の国道18A（Desvío Tingo María - Aucayacu - Nuevo Progreso - Tocache - Juanjuí - Picota - Tarapotoを結ぶ道路回廊第4）も含まれており、<strong>43万1,000人超</strong>の住民の交通環境の改善に寄与します。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              同様に、PascoとHuánucoに跨る全長<strong>248km</strong>の道路回廊第6：Desvío Cerro de Pasco - Huánuco - Tingo María - 国道PE-5N（Pumahuas橋）との接続も対象となっており、約<strong>35万8,000人</strong>に恩恵をもたらします。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              第7のプロジェクトは、CuscoとPunoを縦断する全長<strong>328km</strong>のSicuani - Pucará - Calapuja / Puno - Desaguadero回廊であり、<strong>40万人超</strong>のユーザーの道路インフラ改善に貢献し、南アンデスの接続性を強化します。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              APP 5.0による開発
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              これら7つのプロジェクトはすべて、官民パートナーシップ（APP）方式、具体的には持続可能なインフラの実行を加速するために、より予測可能なプロセス、明確なルール、市場との強化された連携を推進するAPP 5.0アプローチの枠組みの下で開発されます。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              このイニシアチブにより、PROINVERSIÓNは、道路の良好な状態を確保し、輸送の安全性を向上させ、移動時間を短縮し、国家の経済発展と地域統合に貢献することを目的とした戦略的道路プロジェクトの促進における自らの役割を再確認します。
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              要点まとめ
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  PROINVERSIÓNが総額10億米ドル超の7つの戦略的道路回廊を構造化
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  Junín、Cusco、Puno、Arequipa、Moqueguaなど複数地域で280万人超に恩恵
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  観光、物流、安全性、移動時間短縮を通じて地域統合と経済発展を後押し
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  全案件をAPP 5.0の下で開発し、市場との連携と予測可能性を強化
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">
              引用文献
            </h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              Invest in Peru. (2026年03月23日). PROINVERSIÓN avanza en la estructuración de siete corredores viales estratégicos por más de US$ 1,000 millones.
              <br />
              参照先:{" "}
              <a
                href="https://www.investinperu.pe/proinversion-avanza-en-la-estructuracion-de-siete-corredores-viales-estrategicos-por-mas-de-us-1000-millones/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Invest in Peru: https://www.investinperu.pe/proinversion-avanza-en-la-estructuracion-de-siete-corredores-viales-estrategicos-por-mas-de-us-1000-millones/
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

export default ProinversionRoadCorridorsPage;
