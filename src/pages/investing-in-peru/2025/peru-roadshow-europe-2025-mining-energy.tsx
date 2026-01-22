import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const InvestmentPage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title="ペルー、鉱業・炭化水素・エネルギー分野で欧州大手投資家の関心を獲得 ― 第18回ロードショー・ヨーロッパ2025">
      <Banner
        alt={"ペルー、鉱業・炭化水素・エネルギー分野で欧州大手投資家の関心を獲得 ― 第18回ロードショー・ヨーロッパ2025"}
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
            全国鉱業・石油・エネルギー協会（SNMPE）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            ペルー、鉱業・炭化水素・エネルギー分野で欧州大手投資家の関心を獲得 ― 第18回ロードショー・ヨーロッパ2025
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025年9月10日（水）発表
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            エネルギー鉱山大臣ホルヘ・モンテロ氏、<strong>ドイチェ銀行、ゴールドマン・サックス、EIGなど著名な国際的ファンド・銀行と10件の会談を実施</strong>
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ペルーは<strong>鉱業・エネルギー分野における外国投資の魅力的な目的地</strong>としての地位を引き続き確立しています。エネルギー鉱山省のホルヘ・モンテロ・コルネホ大臣は、ロンドンで開催された<strong>第18回ロードショー・ヨーロッパ2025初日</strong>の参加後にこのように強調しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            モンテロ大臣は、<strong>鉱業、炭化水素、再生可能エネルギー、発電に関連するプロジェクトに強い関心を示した主要な投資グループや国際銀行と10件の会談</strong>を行ったと報告しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            その中で、大臣は<strong>ドイチェ銀行およびブラジルの投資銀行BTGパクチュアル</strong>との会談を特に強調し、両者が<strong>ペルーの戦略的分野における参入拡大への意欲</strong>を表明したことを明らかにしました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            さらに、<strong>ゴールドマン・サックス</strong>との会談では、<strong>石油の探査・生産、リチウム投資、そしてペルーにおける冶金産業の可能性</strong>について議論が行われました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            また、モンテロ大臣は<strong>エネルギー分野の主要ファンドや企業</strong>との会談も実施し、代表者らは<strong>ペルーでの投資継続や、新たな天然ガス、再生可能エネルギー、発電の機会</strong>を探る意向を示しました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            大臣は、「今回の会談は、<strong>ペルーが信頼性が高く競争力のある投資先であること</strong>を改めて裏付けるものです。<strong>投資家の方々はペルーでの存在を維持し、さらに拡大する姿勢</strong>を示しています」と述べました。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            さらにモンテロ大臣は次のように強調しました。
          </p>

          <blockquote className="mb-4 pl-4 border-l-4 border-blue-500 text-gray-700 italic">
            「初日から大きな期待を持てる成果がありました。<strong>資金力と成熟したビジネスを有し、ペルーを熟知している関係者との質の高い会談</strong>を実現できました。今後はこれらの投資をさらに推進していくことが我々の使命です。」
          </blockquote>

          <p className="mb-6 text-gray-800 leading-relaxed">
            <strong>第18回ロードショー・ヨーロッパ2025</strong>は、<strong>9月8日と9日にロンドンで開催</strong>され、<strong>ペルーを外国投資にとって信頼でき、競争力があり、安全な投資先として位置づける</strong>ことを目的に実施されました。
          </p>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <p className="text-xs md:text-sm text-gray-600 mb-2 japanese-text">
              全国鉱業・石油・エネルギー協会（SNMPE）
            </p>
            <p className="text-xs text-gray-500">
              [Sociedad Nacional de Mineria, Petroleo y Energia, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">参考文献</h3>
            <p className="text-sm text-gray-700 mb-2 japanese-text">
              Sociedad Nacional de Mineria, Petroleo y Energia. (2025年09月10日). desde adentro revista de la Sociedad Nacional de Minería, Petróleo y Energía.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              参照先: Perú atrae interés de grandes inversionistas en minería, hidrocarburos y energía en el XVIII Road Show Europa 2025:<br/>
              <Link href="https://www.desdeadentro.pe/2025/09/peru-atrae-interes-de-grandes-inversionistas-en-mineria-hidrocarburos-y-energia-en-el-xviii-road-show-europa-2025/" className="text-blue-600 hover:underline text-xs break-all">
                https://www.desdeadentro.pe/2025/09/peru-atrae-interes-de-grandes-inversionistas-en-mineria-hidrocarburos-y-energia-en-el-xviii-road-show-europa-2025/
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