import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImDownload2 } from "react-icons/im";
import Banner from "src/components/Banner";

import Layout from "@/components/Layout";

const Perumin37Page = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title="PERUMIN 37 - ペルー最大の鉱業イベント開幕">
      <Banner
        alt={"PERUMIN 37 Mining Event Arequipa"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl bg-white japanese-text">
        {/* Header */}
        <div className="text-right mb-6 font-japanese">
          <p className="text-sm text-gray-700 japanese-text">在日ペルー大使館</p>
          <p className="text-sm text-gray-700 japanese-text">非公式翻訳</p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <div className="lg:col-span-2  pl-6">
            <div className="bg-red-600 text-white p-2 inline-block mb-2">
              <h1 className="text-xl font-bold">PERUMIN 37</h1>
            </div>
            <div className="bg-red-600 text-white p-1 inline-block mb-2">
              <p className="text-sm font-japanese">鉱業イベント開幕</p>
            </div>
            <p className="text-xs mb-4 font-japanese">2025年9月22日（月）アレキパのセロ・フリ国際会議場にて</p>

            <div className="bg-black text-white p-2 inline-block mb-4">
              <h2 className="text-lg font-bold font-japanese">ペルー、アレキパのセロ・フリで「ペルーミン37」を開幕</h2>
            </div>

            <div className="bg-gray-200 p-4 mb-4">
              <div className="flex items-center mb-2">
                <span className="text-5xl font-bold mr-4">🏛️</span>
              </div>
              <p className="text-sm text-gray-800 mb-2 font-japanese">
                ペルー最大の鉱業イベント「PERUMIN 37」が、9月22日（月）、アレキパのセロ・フリ国際会議場にて開幕しました。
              </p>
              <p className="text-sm text-gray-800 mb-2 font-japanese">
                初日の式典では、鉱業技術展示会（EXTEMIN）のオープニングが行われ、政府当局および各国外交団が参加しました。
              </p>
              <p className="text-sm text-gray-800 font-japanese">
                ホルヘ・モンテロエネルギー鉱業大臣、アレキパ州知事ロエル・サンチェス、ペルー国会議長ホセ・ジェリ、在ペルー・ドイツ大使ザビーネ・ブロッホ氏らが出席。
              </p>
            </div>
          </div>
        </div>

        {/* Event details section */}
        <div className="border-t-2 border-black pt-4 mb-6">
          <div className="bg-red-600 text-white p-2 inline-block mb-4">
            <h2 className="text-lg font-bold font-japanese">イベント概要</h2>
          </div>

          <p className="text-sm mb-4 font-japanese">
            伝統的なテープカットによって幕を開けたこの展示会は、1週間にわたりペルー鉱業の最新技術革新や多分野の対話の場を提供します。
          </p>

          {/* Participation details */}
          <div className="border mb-6">
            <div className="bg-red-600 text-white p-2 border-b">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold font-japanese">
                <span>参加規模</span>
                <span>16か国から800社以上</span>
                <span>ドイツがパートナー国として出展</span>
              </div>
            </div>
          </div>

          <p className="text-sm mb-4 font-japanese">
            ペルーミン37組織委員長のヒメナ・ソログレン氏は、今回のフェアには16か国から800社以上が参加し、ドイツがパートナー国として出展していることを強調しました。
          </p>
        </div>

        {/* Key statements section */}
        <div className="border-t pt-4 mb-6">
          <div className="bg-red-600 text-white p-2 inline-block mb-4">
            <h2 className="text-lg font-bold font-japanese">主要な発言</h2>
          </div>

          {/* Sologuren quote */}
          <div className="bg-gray-100 p-4 mb-4">
            <p className="font-bold text-sm mb-2 font-japanese">ヒメナ・ソログレン氏（ペルーミン37組織委員長）：</p>
            <blockquote className="text-sm italic mb-2 font-japanese border-l-4 border-red-600 pl-4">
              「EXTEMINは単なる商業展示会ではなく、テクノロジーを通じていかに持続可能で競争力があり、地域社会に近い鉱業を構築できるかを探る場です。」
            </blockquote>
            <p className="text-sm font-japanese">
              また、20の地域から集まった37名の奨学生を含む若手専門家の参加を歓迎し、彼らが業界の未来を担う存在であることを強調しました。
            </p>
          </div>

          {/* Segura quote */}
          <div className="bg-gray-100 p-4 mb-4">
            <p className="font-bold text-sm mb-2 font-japanese">ダリオ・セガラ会長（ペルー鉱業技術者協会IIMP）：</p>
            <blockquote className="text-sm italic mb-2 font-japanese border-l-4 border-red-600 pl-4">
              「私たちの産業は、人々を中心に据え、責任と透明性を持って初めて継続・正当化されます。各展示や技術提案は、ペルーおよび地域社会への信頼のメッセージです。」
            </blockquote>
            <p className="text-sm font-japanese">
              EXTEMINが革新、持続可能性、そして雇用創出に対する業界の取り組みを反映していると強調しました。
            </p>
          </div>
        </div>

        {/* Special initiatives section */}
        <div className="border-t pt-4 mb-6">
          <div className="bg-red-600 text-white p-2 inline-block mb-4">
            <h2 className="text-lg font-bold font-japanese">特別な取り組み</h2>
          </div>

          <p className="text-sm mb-4 font-japanese">
            開会式では以下の取り組みも紹介され、産業における革新、研究、起業を顕彰しました：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border p-4">
              <h4 className="font-bold text-sm mb-2 font-japanese">🔧 Perumin Hub</h4>
              <p className="text-sm font-japanese">技術革新の中心拠点</p>
            </div>

            <div className="border p-4">
              <h4 className="font-bold text-sm mb-2 font-japanese">💡 Perumin Inspira</h4>
              <p className="text-sm font-japanese">インスピレーションとアイデアの交流</p>
            </div>

            <div className="border p-4">
              <h4 className="font-bold text-sm mb-2 font-japanese">📋 TISフォーラム</h4>
              <p className="text-sm font-japanese">技術情報システムフォーラム</p>
            </div>

            <div className="border p-4">
              <h4 className="font-bold text-sm mb-2 font-japanese">🏛️ アラメダ・デ・ラ・アカデミア</h4>
              <p className="text-sm font-japanese">学術交流の場</p>
            </div>
          </div>
        </div>

        {/* Conclusion section */}
        <div className="border-t pt-4 mb-6">
          <div className="bg-red-600 text-white p-2 inline-block mb-4">
            <h2 className="text-lg font-bold font-japanese">まとめ</h2>
          </div>

          <div className="bg-gray-100 p-4 mb-4">
            <p className="text-sm font-japanese mb-2">
              これにより「PERUMIN 37」は学術・技術・商業の活動を正式に開始し、ペルーおよび世界の鉱業における社会・環境・経済の課題を議論するための重要な地域イベントとしての地位を改めて確立しました。
            </p>
          </div>

          <div className="text-right font-japanese mb-6">
            <p className="text-xs md:text-sm text-gray-600">[Revista desde adentro, 2025]</p>
          </div>
        </div>

        {/* References */}
        <div className="border-t pt-4 mb-6">
          <h3 className="text-red-600 font-bold text-lg mb-4 font-japanese">参考文献</h3>
          <p className="text-sm mb-2">
            Revista desde adentro. (2025年09月22日). Perumin 37 abrió sus puertas en Cerro Juli con presencia de autoridades y cuerpo diplomático.
          </p>
          <p className="text-xs text-gray-600 mb-4">
            参照先: Sociedad Nacional de Minería, Petróleo y Energía:<br/>
            <Link href="https://www.desdeadentro.pe/2025/09/perumin-37-abrio-sus-puertas-en-cerro-juli-con-presencia-de-autoridades-y-cuerpo-diplomatico/" className="text-blue-600 hover:underline break-all">
              https://www.desdeadentro.pe/2025/09/perumin-37-abrio-sus-puertas-en-cerro-juli-con-presencia-de-autoridades-y-cuerpo-diplomatico/
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="text-right">
          <p className="text-xs md:text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-xs md:text-sm text-gray-600">非公式翻訳</p>
        </div>

        {/* Bottom branding */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t">
          <div className="text-red-600 font-bold">#PeruMinería</div>
          <div className="flex items-center">
            <span className="text-red-600 font-bold text-lg mr-2">PERUMIN</span>
            <span className="text-lg">⛏️</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Perumin37Page;