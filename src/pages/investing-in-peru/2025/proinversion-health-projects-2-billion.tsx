import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const InvestmentPage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title="PROINVERSIÓN、約20億米ドル規模の保健分野7件のプロジェクトを推進">
      <Banner
        alt={"PROINVERSIÓN、約20億米ドル規模の保健分野7件のプロジェクトを推進"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
        src2={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564004/WEB/gastronomia/inversiones400_nb0noc.jpg"
        }
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-sm text-gray-600">非公式翻訳</p>
        </div>

        <div className="mb-6">
          <h1 className="text-lg font-normal text-gray-800 mb-4">
            ペルー投資促進庁（PROINVERSIÓN）
          </h1>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            PROINVERSIÓN、約20億米ドル規模の保健分野7件のプロジェクトを推進
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            プレスリリース
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            発表日：2025年8月15日（金）
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-800 leading-relaxed">
            ペルー投資促進庁（PROINVERSIÓN）は、関係する公的機関と連携し、保健分野における<strong>7件のプロジェクト（総額20億米ドル超）</strong>を官民連携（APP）の形態で推進しています。目的は、リマ、ピウラおよびカハマルカにおける医療サービスとインフラを強化し、より効率的かつ質の高い医療を住民に提供することです。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            今年すでに、<strong>「新ビジャ・エル・サルバドール救急病院（HEVES）の運営・維持管理」</strong>プロジェクトが落札されました。本案件は保健省との共同出資型APPであり、リマ南部（ビジャ・エル・サルバドール、ルリン、パチャカマック、プクサナおよび5つの沿岸地域）に住む<strong>約100万人が恩恵を受けます</strong>。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            現行の案件の中で特に注目されるのは<strong>「サン・ボルハ国立小児保健研究所（INSN-SB）の運営・維持管理」</strong>プロジェクトです。すでに12社が参加権を取得し、募集要項や契約案に対する質問・コメントを提出しています。民間事業者が「グレーサービス（施設・機械設備の保守、ランドリー、清掃、給食、警備）」および「グリーンサービス（滅菌、臨床病理）」を担います。<strong>契約期間は17年</strong>で、医療機器の更新も含まれます。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            もう一つの重要案件は、国防省（MINDEF）の委託による<strong>「新中央軍事病院」</strong>プロジェクトです。本件は共同出資型民間提案（IPC）であり、2025年第4四半期に関心表明、2026年に落札予定です。<strong>契約総額は4億4,200万米ドル、期間は30年</strong>で、設計・建設・運営・維持管理に加え「グレーサービス」「グリーンサービス」も含まれます。<strong>約30万人の軍人およびその扶養家族</strong>が対象です。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            さらに、保健省との協力で<strong>「イポリト・ウナヌエ病院（ブラボ・チコ）の近代化」</strong>プロジェクトも推進されています。本案件は新病院の建設、医療機器の全面導入・更新、ならびに総合サービスの運営・維持管理を含み、<strong>約310万人の直接影響人口および40万人の実需人口</strong>をカバーします。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            ピウラでは<strong>「スジャーナ支援病院II-2の運営・維持管理」</strong>プロジェクト（<strong>投資額：1億9,300万米ドル</strong>）が推進されています。本事業では、病院のインフラや医療機器の維持管理に加え、「グレーサービス」（清掃、警備、ランドリー、給食、廃棄物管理、物流、情報システム、滅菌）や「グリーンサービス」（臨床検査、透析、画像診断）も提供されます。これにより、<strong>約64万5千人が恩恵を受ける</strong>見込みです。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            カハマルカでは<strong>「EsSalud専門病院の運営・維持管理」</strong>プロジェクト（<strong>投資額：1億8,900万米ドル</strong>）が進行中で、スジャーナと同様の「グレーサービス」と「グリーンサービス」を提供し、地域の被保険者に利益をもたらします。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            また、<strong>「リマ首都圏における保健省医療施設の固形廃棄物総合管理」</strong>プロジェクト（<strong>投資額：1億7,900万米ドル、20年間のコンセッション</strong>）も計画されています。本案件は特別廃棄物・感染性廃棄物の処理施設の建設・運営・維持管理を含み、<strong>430の医療施設</strong>が対象です。
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            並行して、<strong>ロレト、ピウラ、ランバイエケ、ウアヌコで新たに13件の保健分野APPプロジェクト</strong>を追加予定であり、各地域の州政府と協議を進めています。
          </p>

          <p className="mb-6 text-gray-800 leading-relaxed">
            保健分野プロジェクトの拡大は、APPの活用に対する公的機関の関心の高まりを反映しています。<strong>APPは効率的な運営を可能にし、国際基準に基づく管理を保証するとともに、国が引き続き市民への無償医療サービスの責任を担う</strong>ことを確実にします。
          </p>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              ペルー投資促進庁（PROINVERSIÓN）
            </p>
            <p className="text-xs text-gray-500">
              [PROINVERSIÓN, 2025]
            </p>
          </div>

          {/* Reference */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">参考文献</h3>
            <p className="text-sm text-gray-700 mb-2">
              PROINVERSIÓN. (2025年08月15日). PROINVERSION impulsa el desarrollo de siete proyectos de Salud por aproximadamente US$ 2 000 mlls.
            </p>
            <p className="text-sm text-gray-600">
              参照先: PROINVERSION NOTICIAS:<br/>
              <Link href="https://www.investinperu.pe/es/pi/detalle-noticia/proinversion-impulsa-el-desarrollo-de-siete-proye" className="text-blue-600 hover:underline text-xs break-all">
                https://www.investinperu.pe/es/pi/detalle-noticia/proinversion-impulsa-el-desarrollo-de-siete-proye
              </Link>
            </p>
          </div>

          <div className="text-right mt-8">
            <p className="text-sm text-gray-600">在日ペルー大使館</p>
            <p className="text-sm text-gray-600">非公式翻訳</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvestmentPage;