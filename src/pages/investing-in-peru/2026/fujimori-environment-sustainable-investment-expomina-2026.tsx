import { useRouter } from "next/router";

import Layout from "@/components/Layout";

const FujimoriSustainableInvestmentExpominaPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-09-09T00:00:00+09:00"
      title="フジモリ大統領、「環境を守り、持続可能な投資を促進」"
      description="ケイコ・フジモリ大統領はExpoMina Perú 2026で、環境保護と持続可能な投資は両立できると述べ、ペルーの鉱業の潜在力を投資、雇用、福祉へつなげる方針を示しました。"
    >
      <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12">
        <header className="mb-8">
          <div className="mb-6 text-right text-xs text-gray-600 md:text-sm">
            <p>在日ペルー大使館</p>
            <p>非公式翻訳</p>
          </div>
          <p className="mb-3 text-lg font-normal text-gray-800 japanese-heading-3">
            鉱業・持続可能な投資
          </p>
          <h1 className="mb-4 text-xl font-bold text-gray-900 japanese-heading-1 md:text-2xl">
            フジモリ大統領、「環境を守り、持続可能な投資を促進」
          </h1>
          <p className="mb-2 text-xs text-gray-600 md:text-sm">プレスリリース</p>
          <time className="text-xs text-gray-600 md:text-sm" dateTime="2026-09-09">
            2026年9月9日
          </time>
        </header>

        <div className="space-y-6 text-gray-700 japanese-text">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 sm:p-6">
            <p className="text-base font-semibold text-blue-900 md:text-lg">
              フジモリ大統領は、国内の鉱業の潜在力を活用し、投資、雇用、福祉の向上、貧困および貧血の削減につなげる方針を表明しました。
            </p>
          </div>

          <p>
            ペルーのケイコ・フジモリ大統領は、環境保護と持続可能な投資の促進に対する政府の強い決意を改めて表明し、両者を同時に進めることで、経済成長と国民の福祉向上に貢献できると述べました。
          </p>
          <p>
            フジモリ大統領は、第10回「ExpoMina Perú 2026」の開会式において、「環境を守ると同時に、持続可能な投資を促進します。両者は対立するものではなく、互いに補完し合うものです」と述べました。
          </p>
          <p>
            また、投資家に対する行政の姿勢を見直し、手続きの迅速化、予見可能性の向上、合理的な期限内での意思決定を実現する必要があると強調しました。
          </p>
          <p>
            同大統領は、「私たちは、予見可能性を高め、合理的な期限内に決定を下さなければなりません。行政は投資家や国民にとって官僚的な障壁であることをやめ、発展を後押しする存在へと変わらなければなりません。不当な障害や遅延を生じさせてはなりません」と述べました。
          </p>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              責任ある鉱業と大規模投資プロジェクト
            </h2>
            <p>
              政府は森林や自然保護区に被害を与える違法な経済活動に対処するとともに、生産活動の成長と自然資源の保護を両立させるための方針転換を進めると表明しました。
            </p>
            <p className="mt-4">
              また、大規模投資プロジェクトの推進に向け、エネルギー鉱山省と環境省による作業部会が設置されたことを明らかにしました。フジモリ大統領は、環境相がプロジェクトの停滞要因を解消する役割を担うと強調しました。
            </p>
            <p className="mt-4">
              同大統領は、ペルーが大きな鉱業の潜在力を有しており、約640億米ドルに上る67件のプロジェクトが計画されていると説明しました。「この鉱業の潜在力を投資、雇用、福祉へと転換し、貧困と貧血を削減することが私たちの責務です」と述べました。
            </p>
            <p className="mt-4">
              さらに、政府は、国と各地域に具体的な利益をもたらす責任あるプロジェクトを推進すると表明しました。「ペルーは投資を歓迎し、責任ある投資を促進します。21世紀の鉱業は富を生み出すだけでなく、信頼も生み出さなければなりません」と強調しました。
            </p>
            <p className="mt-4">
              また、鉱業分野に関係するすべての関係者が連携して取り組むことの重要性を指摘し、「その信頼は、行政、企業、労働者、そして何よりも地域社会が協力することによって築かれます」と述べました。
            </p>
            <p className="mt-4">
              演説の最後に、フジモリ大統領は、ExpoMina Perú 2026には30か国以上から企業経営者、投資家、サプライヤーおよび専門家が参加していると説明しました。同展示会には1,250のブースが設置されており、購入意向額は3億米ドルを超える見込みです。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              戦略的パートナーとしてのペルー
            </h2>
            <p>
              カルロス・エスパ外相は、ペルーのマクロ経済の安定性と開放的な通商政策を基盤として、長期的な投資に適した環境を整備するという政府の方針を改めて表明しました。
            </p>
            <p className="mt-4">
              また、エネルギー転換および新技術において戦略的重要性を持つ鉱物として、銅、鉄、鉛、モリブデン、銀および亜鉛に関するペルーの潜在力を強調しました。
            </p>
            <p className="mt-4">
              エスパ外相は、競争力の強化とビジネス環境の改善を目的とする、重要な規制の近代化・簡素化プロセスを進めていると述べました。さらに、資本、技術および知見を誘致するため、重要鉱物と持続可能な鉱業に関する国際的な連携の強化をペルー外交の重点事項としていると説明し、米国およびカナダと締結した覚書に言及しました。
            </p>
            <p className="mt-4">
              バーニー・ナバロ駐ペルー米国大使は、米国にとってのペルーの戦略的重要性を強調し、ペルーの鉱業発展に対する支援を継続する意向を表明しました。米国は、鉱物資源の付加価値を高め、安全で競争力があり、持続可能なサプライチェーンを強化する技術を支援すると説明しました。
            </p>
            <p className="mt-4">
              開会式には、ミゲル・トレス共和国議会上院議長、マイラ・フィゲロア鉱山副大臣、ロケ・ベナビデスExpoMina Perú 2026会長のほか、鉱業分野の関係者や企業幹部も出席しました。
            </p>
          </section>
        </div>

        <footer className="mt-10 border-t border-gray-300 pt-6 text-xs text-gray-600 md:text-sm">
          <h2 className="mb-2 text-base font-semibold text-gray-900 japanese-heading-3">出典</h2>
          <p>ペルー共和国大統領府（2026年9月9日）「Presidenta Keiko Fujimori: “Defenderemos el medio ambiente y promoveremos la inversión sostenible”」。</p>
          <a
            href="https://andina.pe/agencia/noticia-presidenta-fujimori-defenderemos-medio-ambiente-y-promoveremos-inversion-sostenible-1091119.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block break-all text-red-700 hover:underline"
          >
            関連報道：Agencia Andina
          </a>
        </footer>
      </article>
    </Layout>
  );
};

export default FujimoriSustainableInvestmentExpominaPage;
