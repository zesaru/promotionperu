import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const CelarisEnergyJinzhaoMiningPeruPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-05-20T00:00:00+09:00"
      title="Celaris EnergyとJinzhao Mining Perú、メガマイニングプロジェクトにおけるクリーンエネルギー接続に向けた協定を強化"
      description="Celaris EnergyとJinzhao Mining Perúは、アレキパ州のPampa de Pongo鉱山プロジェクトを将来のCaravelí 220kV変電所へ接続するための協定を強化し、ペルー南部における戦略的エネルギーインフラの整備を進めます。"
    >
      <Banner
        alt={"ペルー南部のクリーンエネルギー接続を伝えるニュースバナー"}
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
            エネルギー・鉱業
          </p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            Celaris EnergyとJinzhao Mining Perú、メガマイニングプロジェクトにおけるクリーンエネルギー接続に向けた協定を強化
          </h1>
          <p className="text-xs md:text-sm text-gray-600 mb-2">業界ニュース</p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2026年5月20日
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              この協定により、ペルー南部にとって戦略的なインフラであるPampa de Pongo鉱山プロジェクトからCaravelí 220kV変電所への将来的な相互接続が進展します。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            アレキパ州に位置するペルー最大級の鉄鉱床の一つである
            <strong>Pampa de Pongo</strong>
            メガプロジェクトの電力需要に応えるため、Celaris Energy
            （Eólica Caravelí S.A.C.を通じて）とJinzhao Mining Perú
            S.A.は、鉱山の電気接続に関する既存の協定を継続する重要な合意に署名しました。対象となるのは、将来整備される
            <strong>Caravelí 220kV変電所</strong>
            を介した接続であり、同施設はペルー南部の電力システムにおける戦略的ノードとなることを目指しています。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              協定の意義
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              Celaris EnergyのCEOであるMaria del Pilar
              Matto氏は、この合意が、エネルギーが鉱業のような戦略的セクターの発展を支える原動力であることを示していると強調しました。
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic japanese-text">
              「Celaris Energyでは、大規模プロジェクトが、企業運営と全国相互接続システムの両方を強化できる、信頼性が高く競争力のある、持続可能なインフラを備えられるよう取り組んでいます」
            </blockquote>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            Matto氏によれば、この協定の一環としてCelaris
            EnergyはCaravelí変電所内の必要なスペースと設備を提供し、Jinzhaoは操業に必要なエネルギーアクセスを確保するための新たな相互接続を実装できるようになります。これにより、鉱山プロジェクトの全国相互接続電気システム（SEIN）への統合が進み、ペルー南部で計画されている最も重要な投資案件の一つに必要な電力容量が強化されます。
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              企業競争力と持続可能性
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              同氏はまた、国際市場における競争力、操業継続性、環境フットプリント削減に対する高い要請を背景に、大企業がより効率的で持続可能なエネルギーオプションを採用する局面で、この協定が強化されたと指摘しました。
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic japanese-text">
              「大企業が国際市場における競争力、操業の継続性、環境フットプリントの削減といった高い要求に押され、より効率的で持続可能なエネルギーの選択肢を取り入れている時期に、この協定は強化されました」
            </blockquote>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              Caravelí変電所の戦略的位置付け
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              Caravelí変電所は、ペルー南部を産業開発とより持続可能なエネルギーマトリックスへの移行のための重要地域として確立することを目指す新たなエネルギーインフラの一部です。これにより、大規模操業をSEINへ統合することが可能になります。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              Matto氏は、「このプロジェクトは、国の戦略的産業の成長に伴走するために準備された近代的インフラへの賭けを象徴しています。私たちの目標は、エネルギー移行、企業の競争力、そして国の持続可能な成長に貢献するイニシアチブを引き続き推進することです」と述べています。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            なお、Caravelí風力発電パークは、発電・販売会社Celaris
            Energyが運営するEólica Caravelí
            S.A.C.によって開発された大規模な非従来型再生可能エネルギープロジェクトです。この枠組みの中で、今回の協定はEólica
            Caravelí S.A.C.とJinzhao Mining Perú
            S.A.の間で締結されました。
          </p>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">
              参考文献
            </h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              Sociedad Nacional de Minería, Petróleo y Energía. Revista Desde
              Adentro. (2026年05月20日). Celaris Energy y Jinzhao Mining Perú
              fortalecen convenio para conexión de energía limpia en megaproyecto
              minero.
              <br />
              参照先:{" "}
              <a
                href="https://www.desdeadentro.pe/2026/05/celaris-energy-y-jinzhao-mining-peru-fortalecen-convenio-para-conexion-de-energia-limpia-en-megaproyecto-minero/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Revista Desde Adentro:
                https://www.desdeadentro.pe/2026/05/celaris-energy-y-jinzhao-mining-peru-fortalecen-convenio-para-conexion-de-energia-limpia-en-megaproyecto-minero/
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

export default CelarisEnergyJinzhaoMiningPeruPage;
