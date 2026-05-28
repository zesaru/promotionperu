import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const MefPrivateInvestmentFirstQuarter2026Page = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-05-23T08:59:00+09:00"
      title="経済財務省（MEF）：第1四半期の民間投資は13.2%増加し、9四半期連続の拡大を記録"
      description="MEFは、2026年第1四半期の民間投資が13.2%増加し、9四半期連続の拡大を達成したと発表。内需は6.6%成長し、約5年ぶりの高い伸びを記録しました。"
    >
      <Banner
        alt={"ペルーの民間投資拡大を伝えるMEFニュースバナー"}
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
            経済財務省（MEF）
          </p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 japanese-heading-1">
            経済財務省（MEF）：第1四半期の民間投資は13.2%増加し、9四半期連続の拡大を記録
          </h1>
          <p className="text-xs md:text-sm text-gray-600 mb-2">プレスリリース</p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2026年5月23日 - 午前8時59分
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              この結果は内需のダイナミズムを支え、第1四半期に6.6%成長し、過去約5年間で最大の伸びを記録しました。
            </p>
            <p className="text-sm md:text-base text-blue-900 leading-relaxed japanese-text">
              Rodolfo Acuña Namihas経済財務相は、この実績が選挙期間中であってもペルー経済に対する民間部門の信頼を反映していると強調しました。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            経済財務省（MEF）は、2026年第1四半期の民間投資が
            <strong>13.2%</strong>
            成長し、9四半期連続の拡大を達成したと発表しました。これは内需の活性化とペルー経済成長の主要な原動力の一つとして定着しています。
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            この結果は、鉱業および非鉱業投資のさらなる進展によるもので、内需の強化、雇用創出、家計消費の活性化に寄与しました。特に非鉱業投資は、リマ・カヤオ地下鉄2号線、道路網第6号線（Red Vial N.° 6）、ホルヘ・チャベス国際空港に関連する最終投資などの大規模インフラ事業の進展によって押し上げられました。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              MEFの見解
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              Rodolfo Acuña
              Namihas経済財務相は、この動きにより2026年第2四半期も内需の成長が続くと予想され、企業家や投資家の対ペルー信頼を裏付けるものだと説明しました。
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-sm md:text-base text-gray-700 italic japanese-text">
              「民間投資が好調な軌道を維持し、内需のダイナミズムに伴走し続けていることは重要です。これは、選挙期間中であっても、民間部門が引き続きペルーと我々の経済が提供する成長の機会に賭けていることを示しています」
            </blockquote>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              内需と消費の拡大
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              この文脈において、内需は第1四半期に<strong>6.6%</strong>
              成長し、2021年第3四半期以来、約5年ぶりの高水準を記録しました。この結果は民間投資と民間支出の成長に支えられ、経済活動の維持と雇用創出に貢献しています。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              また、民間支出は年初3か月間で<strong>5.7%</strong>
              増加し、2021年第3四半期以来の最高率となりました。民間消費も、所得増加、労働市場の改善、消費者信用の回復を背景に<strong>3.5%</strong>
              成長し、10四半期連続の拡大となりました。
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">
              マクロ経済への影響
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              これらの結果により、2026年第1四半期のペルー経済は
              <strong>3.5%</strong>
              成長し、持続的な成長軌道を確認しました。政府は、民間投資の促進、内需の強化、強固なマクロ経済基盤の維持を通じて、国の成長を推進し続けるというコミットメントを再確認しています。
            </p>
          </div>

          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">
              参考文献
            </h3>
            <p className="text-xs md:text-sm text-gray-700 japanese-text">
              Ministerio de Economía y Finanzas. (2026年05月23日). MEF:
              inversión privada creció 13,2 % en el primer trimestre y acumuló
              nueve trimestres de expansión.
              <br />
              参照先:{" "}
              <a
                href="https://www.gob.pe/institucion/mef/noticias/1396376-mef-inversion-privada-crecio-13-2-en-el-primer-trimestre-y-acumulo-nueve-trimestres-de-expansion"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Estado Peruano:
                https://www.gob.pe/institucion/mef/noticias/1396376-mef-inversion-privada-crecio-13-2-en-el-primer-trimestre-y-acumulo-nueve-trimestres-de-expansion
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

export default MefPrivateInvestmentFirstQuarter2026Page;
