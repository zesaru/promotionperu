import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const InvestmentPage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title="PROINVERSIÓN、官民連携投資に関する歴史的統計をまとめた年次統計書を発表">
      <Banner
        alt={"PROINVERSIÓN、官民連携投資に関する歴史的統計をまとめた年次統計書を発表"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-xs md:text-sm text-gray-600">非公式翻訳</p>
        </div>

        <div className="mb-6">
          <h1 className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            ペルー投資促進庁（PROINVERSIÓN）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            PROINVERSIÓN、官民連携投資に関する歴史的統計をまとめた年次統計書を発表
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            リマ、2025年8月4日
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            ペルー投資促進庁（PROINVERSIÓN）は、<strong>2002年から2024年までの官民連携事業（APP）、資産活用プロジェクト（PA）、および税金による公共工事（OxI）</strong>に関する情報を集約した「<strong>2024年版年次統計書</strong>」を発表しました。本書には、PROINVERSIÓNに登録された外国直接投資（IED）の促進に関するデータも含まれています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            本統計書に掲載された注目すべきデータとして、<strong>2024年に記録された過去最高の成果</strong>があります。すなわち、APPおよびPAを通じて<strong>15件のプロジェクトが落札され、その総額は約90億米ドル</strong>に達し、<strong>過去10年間で最も高い水準</strong>となりました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            同期間中には、OxIを通じて<strong>126件の投資が落札され、その総額は42億4,000万ソル</strong>に上り、<strong>この仕組みが創設されて以来16年間で最高水準</strong>となりました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            さらに、投資促進の仕組みに関しては、<strong>8件の法的安定性協定の締結</strong>、<strong>25社による付加価値税（IGV）の早期還付特別制度の利用</strong>、<strong>1社による税金払い戻し制度の利用</strong>がありました。また、PROINVERSIÓNに登録された<strong>外国直接投資（IED）の残高は303億6,100万米ドル</strong>に達しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            本書は<strong>3部構成</strong>となっており、<strong>第1部では国内外のマクロ経済分析</strong>を行い、<strong>第2部ではAPP、資産活用プロジェクト、OxI、IED、法的安定性協定、IGV早期還付特別制度、税金払い戻し制度に関する歴史的データや統合データ</strong>を提供しています。<strong>第3部では、推進されたプロジェクトの分野別・地域別の情報</strong>を掲載しています。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            PROINVERSIÓNのルイス・デル・カルピオ事務局長は、本書の作成を担当した<strong>「データ分析・調査・戦略的情報部」</strong>の取り組みを高く評価しました。同部は、<strong>すべての表やグラフをExcel形式でダウンロード可能な形で公開</strong>し、利用者による活用・分析・再利用を容易にしたことを強調しました。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            このように、同庁は自らの管理・モニタリングを改善するための有用なツールを提供するとともに、<strong>官民連携投資の仕組みに関心を持つ公共部門、投資家、企業、学術界、国際機関、そして一般市民にとって有益な出版物</strong>を発信し続けています。
          </p>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2 japanese-text">
              ペルー投資促進庁（PROINVERSIÓN）
            </p>
            <p className="text-xs text-gray-500">
              [PROINVERSION, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">参考文献</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              PROINVERSION. (2025年8月4日). PROINVERSIÓN lanza anuario estadístico con cifras históricas en inversión público-privada.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              参照先: PROINVERSION NOTICIAS:<br/>
              <Link href="https://www.investinperu.pe/es/pi/detalle-noticia/proinversion-lanza-anuario-estadistico-con-cifras" className="text-blue-600 hover:underline text-xs break-all">
                https://www.investinperu.pe/es/pi/detalle-noticia/proinversion-lanza-anuario-estadistico-con-cifras
              </Link>
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

export default InvestmentPage;