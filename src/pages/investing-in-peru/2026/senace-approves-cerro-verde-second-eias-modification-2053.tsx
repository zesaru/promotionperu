import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const SenaceCerroVerdeApprovalPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      title="Senace、厳格な技術評価を経てセロ・ベルデの環境社会影響評価 第2回変更を承認"
      description="Senaceはセロ・ベルデのEIA第2回変更を承認。約21億ドルの投資具体化、処理能力の増強、アレキパ州での操業期間を2053年まで延長する見通しです。"
    >
      <Banner
        alt={"Peru mining environmental permitting news banner"}
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
            持続可能環境投資許可庁（SENACE）
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            Senace、厳格な技術評価を経てセロ・ベルデの環境社会影響評価 第2回変更を承認
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-2">プレスリリース</p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">2026年2月8日</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              Senaceの承認により、約21億ドルの投資が具体化し、セロ・ベルデのアレキパ州での操業は2053年まで延長可能となります。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            この承認により、同鉱山会社はアレキパ州における操業を2053年まで延長することが可能となります。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              Senaceによる承認の概要
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              2026年2月6日に発行された局長決議第00014-2026-SENACE-PE/DEAR号に基づき、持続可能投資環境認証局（Senace）は、セロ・ベルデ（Cerro Verde）生産ユニットの「環境社会影響評価（EIA）第2回変更」を承認しました。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              この決定は、各政府機関による詳細な分析を伴う厳格な技術評価と、セロ・ベルデ専門チームによる継続的な取り組みの結果とされています。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              投資額と操業期間延長
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-4xl font-bold text-blue-900 mb-2">約21億ドル</p>
                <p className="text-sm md:text-base text-gray-700 japanese-text">今後数年間の投資額</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-4xl font-bold text-blue-900 mb-2">2053年</p>
                <p className="text-sm md:text-base text-gray-700 japanese-text">操業延長後の目標年</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              この承認により、セロ・ベルデはアレキパ州での操業を当初予定の2045年から2053年まで延長できる見通しとなりました。
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              承認の目的と処理能力の増強
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              主な目的は、同鉱山会社の現行インフラおよび生産プロセスの最適化と持続性を確保しつつ、最高水準の環境・技術・社会基準を満たすことです。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              これにより、精鉱の処理能力を<strong>日量40万8,000トン</strong>から<strong>42万トン</strong>へ引き上げることが可能となり、税金、ロイヤリティ、および鉱業カノンを通じて地域へより多くの経済資源をもたらすことが期待されます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-green-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-900 mb-1">408,000 t/日</p>
                <p className="text-sm text-gray-700 japanese-text">現行処理能力</p>
              </div>
              <div className="bg-white border border-green-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-900 mb-1">420,000 t/日</p>
                <p className="text-sm text-gray-700 japanese-text">変更後処理能力</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              承認された主な変更点
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  新たな採掘および鉱石生産計画の策定
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  既存の生産インフラの改善および処理能力の向上
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  浸出パッド（PAD 4B）の選鉱インフラの拡張
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              安全・品質プロトコルと地域へのコミットメント
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              これらの変更は、労働者の安全な環境を保証する厳格な品質プロトコルに基づいて設計されています。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              セロ・ベルデは、ペルー国およびアレキパ州へのコミットメントを再確認するとともに、評価を行ったSenaceおよび関係機関、ならびに市民参加プロセスに積極的に参加した4万人以上の人々に感謝の意を表しました。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              また、当局や地域住民との協力を通じて、鉱業活動が地域の持続可能な開発に引き続き貢献できるよう努める姿勢を示しています。
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
                  Senaceがセロ・ベルデのEIA第2回変更を承認（局長決議第00014-2026-SENACE-PE/DEAR）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  約21億ドルの投資が今後数年間で具体化
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  アレキパ州での操業期間を2045年から2053年へ延長見込み
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-700 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  精鉱処理能力を日量40万8,000トンから42万トンへ増強
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
            アレキパ、2026年2月8日
          </p>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">引用文献</h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              Sociedad Minera Cerro Verde. (2026年02月08日). Senace aprueba Segunda Modificación del Estudio de Impacto Ambiental y Social de Cerro Verde tras rigurosa evaluación técnica.
              <br />
              参照先:{" "}
              <a
                href="https://www.cerroverde.pe/senace-aprueba-segunda-modificacion-del-estudio-de-impacto-ambiental-y-social-de-cerro-verde-tras-rigurosa-evaluacion-tecnica-296"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Cerro Verde 公式ウェブサイト: https://www.cerroverde.pe/senace-aprueba-segunda-modificacion-del-estudio-de-impacto-ambiental-y-social-de-cerro-verde-tras-rigurosa-evaluacion-tecnica-296
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

export default SenaceCerroVerdeApprovalPage;
