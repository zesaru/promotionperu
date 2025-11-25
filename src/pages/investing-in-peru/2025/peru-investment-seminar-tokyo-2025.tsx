import Link from "next/link";
import { useRouter } from "next/router";

import ImageSlider from "@/components/ImageSlider";
import Layout from "@/components/Layout";

const InvestmentPage = () => {
  const { locale } = useRouter();

  // Seminar images array (optimized WebP images)
  const seminarImages = [
    "/images/investment-seminar-2025/optimized/IMG_7494.webp",
    "/images/investment-seminar-2025/optimized/IMG_7492.webp",
    "/images/investment-seminar-2025/optimized/IMG_7503.webp",
    "/images/investment-seminar-2025/optimized/IMG_7504.webp",
    "/images/investment-seminar-2025/optimized/IMG_7505.webp",
    "/images/investment-seminar-2025/optimized/IMG_7506.webp",
    "/images/investment-seminar-2025/optimized/IMG_7507.webp",
    "/images/investment-seminar-2025/optimized/IMG_7508.webp",
    "/images/investment-seminar-2025/optimized/IMG_7510.webp",
    "/images/investment-seminar-2025/optimized/IMG_7511.webp"
  ];

  return (
    <Layout language={locale} title="ペルー投資機会セミナー2025開催">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-sm text-gray-600">非公式翻訳</p>
        </div>

        <div className="mb-8">
          <h1 className="text-lg font-normal text-gray-800 mb-4">
            在日ペルー大使館
          </h1>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            「ペルー投資機会セミナー2025」開催
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            2025年11月14日
          </p>
        </div>

        {/* Image Slider */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">イベントフォトギャラリー</h3>
          <ImageSlider images={seminarImages} interval={4000} />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <p className="mb-6 text-gray-700 leading-relaxed">
            11月14日、在日ペルー大使館は、日本語で作成された投資ガイド「VALE UN PERÚ 2025」を、「ペルー投資機会セミナー」の場で発表しました。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed">
            本イベントには、50名を超える日本企業関係者および国内報道機関の代表者が出席しました。特に、三菱商事、三井物産、双日、伊藤忠プラントテック、住友金属鉱山、日本工営、JFEエンジニアリング、フジタ、経団連など、大手企業の方々が参加したことが注目されます。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">主なスピーカー</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-gray-700 text-sm font-bold">1</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">五十嵐 克也 氏</p>
                  <p className="text-sm text-gray-600 mb-1">日秘経済委員会（CEPEJA）事務総長</p>
                  <p className="text-sm text-gray-700">
                    開会挨拶にて、現在の日本経済情勢においてペルーが提供する多様な投資機会、そして日本とペルーを結ぶ歴史的で深い関係について強調しました。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-gray-700 text-sm font-bold">2</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">芹生 太郎 氏</p>
                  <p className="text-sm text-gray-600 mb-1">米州開発銀行（IDB）アジア事務所長</p>
                  <p className="text-sm text-gray-700">
                    国際金融機関が引き続きペルーに高い信頼を寄せていることを述べました。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-gray-700 text-sm font-bold">3</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">舘 建一郎 氏</p>
                  <p className="text-sm text-gray-600 mb-1">国土交通省（MLIT）国際建設管理官</p>
                  <p className="text-sm text-gray-700">
                    中南米地域へのインフラ海外展開に関する官民連携プラットフォーム（PLACIDA）について紹介しました。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-gray-700 text-sm font-bold">4</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">中畑 貴雄 氏</p>
                  <p className="text-sm text-gray-600 mb-1">日本貿易振興機構（JETRO）主幹</p>
                  <p className="text-sm text-gray-700">
                    ペルー経済の現状と良好なビジネス環境について深い分析が示しました。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">主な参加企業</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-2">総合商社</p>
                <p>三菱商事、三井物産、双日</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">エンジニアリング</p>
                <p>伊藤忠プラントテック、JFEエンジニアリング、フジタ</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">資源・建設</p>
                <p>住友金属鉱山、日本工営</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">経済団体</p>
                <p>経団連</p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-8">
            セミナー成果
          </h3>

          <p className="mb-4 text-gray-700 leading-relaxed">
            今回の取り組みにより、ペルーへの投資促進が大きく前進するとともに、日本の主要産業界との連携強化にも寄与する結果となりました。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed">
            「VALE UN PERÚ 2025」投資ガイドは、日本の投資家や企業にとって、ペルーの投資機会を理解するための重要な資料となります。
          </p>
          <p>
            <a href="https://embperujapan.org/guia_de_inversiones-2025.pdf" target="_blank" rel="noopener noreferrer">  
            👉投資ガイドはこちらから
            </a>
          </p>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-600 mb-2">
              在日ペルー大使館
            </p>
            <p className="text-sm text-gray-600">
              経済商務担当
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvestmentPage;