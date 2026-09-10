import { useRouter } from "next/router";

import Layout from "@/components/Layout";

const PeruTradePolicyNewDevelopmentsPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-09-04T00:00:00+09:00"
      title="ペルーの通商政策に新たな進展"
      description="ペルー・香港自由貿易協定の発効、ZOFRATACNAへの投資促進、米国との通商関係強化に向けた立法措置など、ペルーの通商政策における新たな進展を解説します。"
    >
      <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12">
        <header className="mb-8">
          <div className="mb-6 text-right text-xs text-gray-600 md:text-sm">
            <p>在日ペルー大使館</p>
            <p>非公式翻訳</p>
          </div>
          <p className="mb-3 text-lg font-normal text-gray-800 japanese-heading-3">
            貿易・輸出
          </p>
          <h1 className="mb-4 text-xl font-bold text-gray-900 japanese-heading-1 md:text-2xl">
            ペルーの通商政策に新たな進展
          </h1>
          <p className="mb-2 text-xs text-gray-600 md:text-sm">ComexPerú／週刊第1318号</p>
          <time className="text-xs text-gray-600 md:text-sm" dateTime="2026-09-04">
            2026年9月4日
          </time>
        </header>

        <div className="space-y-6 text-gray-700 japanese-text">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 sm:p-6">
            <p className="text-base font-semibold text-blue-900 md:text-lg">
              ペルー・香港自由貿易協定の発効、ZOFRATACNAへの投資促進、米国との通商関係強化に向けた立法措置は、輸出機会の拡大と戦略的市場へのアクセス改善に向けた重要な前進です。
            </p>
          </div>

          <p>
            9月初め、ペルーの対外貿易をめぐり、新市場の開放から投資誘致、輸出を妨げる障壁への対応まで、幅広い分野で新たな動きが見られました。
          </p>
          <p>
            主な取り組みとして、香港との自由貿易協定の発効、タクナ・フリーゾーン（ZOFRATACNA）の活性化策、ならびに行政府への立法権限付与要請に貿易円滑化関連の事項を盛り込んだことが挙げられます。
          </p>
          <p>
            これらは通商政策のさまざまな分野に及ぶものであり、ペルー産品の輸出機会を拡大し、新たな投資を呼び込むとともに、戦略的市場へのアクセス条件を改善する可能性があります。
          </p>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              香港との通商関係、新たな段階へ
            </h2>
            <p>
              9月1日、ペルー・香港自由貿易協定が発効しました。これにより、アジア有数の商業・金融拠点である香港市場において、ペルーの輸出産品に新たな機会が開かれます。
            </p>
            <p className="mt-4">
              香港は高い購買力を有しています。2025年の1人当たりGDPは5万6,000米ドルに達し、ペルーの9,600米ドルのおよそ6倍でした。また、国際貿易センター（ITC）によると、香港の輸入額は過去5年間に年平均4％増加しています。
            </p>
            <p className="mt-4">
              2025年のペルーから香港への輸出額は2億3,700万米ドルを超え、その中心は農産品を含む非伝統産品でした。香港は昨年、世界から31億1,500万米ドル相当の果物を輸入しており、その中にはブドウ、オレンジ、ブルーベリー、アボカドが含まれています。さらに、サクランボもペルーの輸出品目を拡大・多様化する可能性を持つ産品です。
            </p>
            <p className="mt-4">
              同協定の重要性は香港市場そのものにとどまりません。香港はアジアの他市場へ商品を再輸出するための重要な商業プラットフォームであると同時に、世界有数の金融センターでもあり、ペルーへのさらなる資本誘致の機会ももたらします。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              ZOFRATACNAのさらなる活性化
            </h2>
            <p>
              もう一つの重要な進展は、ZOFRATACNAへの外国投資家の参加拡大を妨げていた制約の解消に向けたものです。最高政令第009-2026-MINCETUR号により、同地区への外国資本による民間投資が公益上必要なものと認定されました。
            </p>
            <p className="mt-4">
              これまでは、ペルー憲法第71条が外国投資家の参加拡大に対する制約となっていました。同条は、国境から50キロメートル以内において、外国人が不動産に関する一定の権利を取得または保有することを禁じています。ただし、最高政令によって公益上の必要性が認定された場合は例外とされます。
            </p>
            <p className="mt-4">
              新たな規則により、外国の個人および法人は、不動産の所有権移転を伴わない形で、ZOFRATACNA施設内の不動産について使用権設定契約を締結できるようになります。
            </p>
            <p className="mt-4">
              この措置は、新規投資を誘致し、ZOFRATACNAを通じた対外貿易を活性化する機会をもたらします。ComexPerúが週刊第1304号で指摘したとおり、2025年にはパイタ特別開発区（ZED Paita）が特別経済区からの輸出額の83.8％を占めた一方、ZOFRATACNAの割合はわずか3.1％でした。この数字は、同地区の活動を拡大する余地が大きいことを示しています。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              米国との貿易強化に向けた立法措置
            </h2>
            <p>
              最も緊急性の高い課題は、米国との通商関係です。7月24日以降、ペルー産品の対米輸出には12.5％の追加関税が課されています。これは、強制労働によって全部または一部生産された物品の輸入を禁止し、その禁止を実効的に執行するための措置がペルーに整備されていないことを理由とするものです。
            </p>
            <p className="mt-4">
              このため、当該課題を行政府への立法権限付与要請に盛り込むことは、前政権が策定し7月2日に国会へ提出した法案第14852/2025号の審査と承認を優先し、迅速化する機会となります。同法案は審査に付託されたものの、国会常任委員会での審議対象として優先されませんでした。
            </p>
            <p className="mt-4">
              法案が承認されれば、その後、施行規則の策定に進むことができます。また、可能であれば、法案審議と施行規則の策定を並行して進めることも考えられます。この分野で進展が得られれば、ペルーは、より低い関税率や特定品目の適用除外を受けている競合国と同等の対米市場アクセス条件に近づくことができます。
            </p>
            <p className="mt-4">
              立法権限付与の要請には、知的財産権侵害に対する法定損害賠償制度の枠組みを整備することも含まれています。この要請は、知的財産保護の強化を目的とするペルー・米国自由貿易協定上の約束に関連するため、重要性を持ちます。
            </p>
            <p className="mt-4">
              米国は複数の報告書において、ペルーでは海賊版、商標の偽造、知的財産権侵害に対する制裁の実効性に関して、引き続き課題があると指摘しています。また、この問題は、相互関税の適用根拠の一つとなった「外国貿易障壁に関する全国貿易評価報告書（NTE）」において、対ペルー貿易上の不利益の一つとして取り上げられました。このため、知的財産分野の制度整備は、二国間の通商関係を強化する上で特に重要です。
            </p>
          </section>

          <p>
            今回示された取り組みは、ペルーの通商政策にとって前進となります。その実施を加速し、企業がこれらの制度を実際に活用できるようにすることが、競合国に対するペルーの立場を強化し、新たな投資・貿易機会を生み出すために不可欠です。
          </p>
        </div>

        <footer className="mt-10 border-t border-gray-300 pt-6 text-xs text-gray-600 md:text-sm">
          <h2 className="mb-2 text-base font-semibold text-gray-900 japanese-heading-3">出典</h2>
          <p>ComexPerú（2026年9月4日）「Nuevos avances en la agenda comercial del Perú」。</p>
          <a
            href="https://www.comexperu.org.pe/articulo/nuevos-avances-en-la-agenda-comercial-del-peru"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block break-all text-red-700 hover:underline"
          >
            公式ソース：ComexPerú
          </a>
        </footer>
      </article>
    </Layout>
  );
};

export default PeruTradePolicyNewDevelopmentsPage;
