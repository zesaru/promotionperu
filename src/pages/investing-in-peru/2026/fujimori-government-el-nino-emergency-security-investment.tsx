import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";

const FujimoriElNinoSecurityPage = () => {
  const { locale } = useRouter();

  return (
    <Layout
      language={locale}
      articlePublishedTime="2026-07-28T00:00:00+09:00"
      title="フジモリ大統領：政府はエルニーニョ緊急対策と治安対策に注力"
      description="ケイコ・フジモリ大統領は、エルニーニョ現象への緊急対応、治安対策、雇用・投資・企業活動の再活性化を政府の優先課題として示しました。"
      image="https://peruinjapan.org/images/investing-news/2026/fujimori-el-nino/fujimori-cabinet.webp"
    >
      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
        <header className="mb-8">
          <div className="mb-6 text-right text-xs text-gray-600 md:text-sm">
            <p>在日ペルー大使館</p>
            <p>非公式翻訳</p>
          </div>
          <p className="mb-3 text-lg font-normal text-gray-800 japanese-heading-3">
            ペルー共和国大統領府
          </p>
          <h1 className="mb-4 text-xl font-bold text-gray-900 japanese-heading-1 md:text-2xl">
            フジモリ大統領：政府はエルニーニョ緊急対策と治安対策に注力
          </h1>
          <p className="mb-2 text-xs text-gray-600 md:text-sm">プレスリリース</p>
          <time className="text-xs text-gray-600 md:text-sm" dateTime="2026-07-28">
            2026年7月28日
          </time>
        </header>

        <figure className="mb-8 overflow-hidden rounded-lg bg-gray-100">
          <Image
            src="/images/investing-news/2026/fujimori-el-nino/fujimori-cabinet.webp"
            alt="ケイコ・フジモリ大統領と閣僚の集合写真"
            width={1380}
            height={500}
            priority
            className="h-auto w-full"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <figcaption className="px-4 py-3 text-center text-xs text-gray-600 md:text-sm">
            ケイコ・フジモリ大統領と閣僚。
          </figcaption>
        </figure>

        <div className="space-y-6 text-gray-700 japanese-text">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 sm:p-6">
            <p className="text-base font-semibold text-blue-900 md:text-lg">
              ケイコ・フジモリ大統領は、エルニーニョ現象への緊急対応と治安対策に加え、家計収入を生み出す雇用、投資、企業活動の再活性化を進める方針を表明しました。
            </p>
          </div>

          <p>
            ペルー共和国のケイコ・フジモリ大統領は、就任後初の国民向け演説で、エルニーニョ現象による緊急事態への対応と治安対策を政府の最優先課題とする方針を示しました。
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-700">
            「当面、政府は二つの国家的緊急課題に集中します。エルニーニョ現象の影響緩和と治安対策です。そのために特別な財源を投入します。気候は官僚主義の時間を待ってはくれません」
          </blockquote>

          <p>
            この方針に沿って、従来の事後対応から適時の予防へ移行するため、エルニーニョ現象に備えた国家緊急対応計画を実施すると発表しました。計画には、河川の大規模かつ迅速なしゅんせつ、最新の技術基準に基づく護岸整備、流域の保全が含まれます。
          </p>

          <p>
            また、現在のペルーは、戦略的な国家運営の欠如、治安悪化、社会の信頼を傷つけた分断によって、複雑で厳しい状況に直面しているとの認識を示しました。大統領は、即座の奇跡や空虚な約束ではなく、方法、規律、努力、明確な道筋によって国を前進させる考えを強調しました。
          </p>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              都市交通と物流インフラ
            </h2>
            <p>
              新たに発足した二院制議会での演説では、リマ・カヤオ首都圏地下鉄2号線を完成させ、3号線、4号線、5号線、6号線を実現すると発表しました。さらに、アレキパ、ピウラ、トルヒーヨで地下鉄システムを整備し、リマ－イカ間およびリマ－バランカ間の近郊鉄道を推進する方針を示しました。
            </p>
            <p className="mt-4">
              加えて、リマと中部地域を結び、既存道路の混雑を緩和するとともに旅客・貨物輸送を強化する優先事業として、新中央幹線道路を完成させると述べました。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 japanese-heading-2">
              信頼を生み出す社会政策
            </h2>
            <p>
              フジモリ大統領は、家計収入を生み出す三つの主要な原動力である雇用、投資、企業活動を再活性化させると表明しました。
            </p>
            <blockquote className="mt-4 border-l-4 border-blue-500 pl-4 text-gray-700">
              「労働者の所得を改善するため、最低賃金を1,300ソルに引き上げます。この引き上げに伴い、零細・中小企業に対して一回限りの補償給付を行い、労働者の正規雇用への移行と人件費増への責任ある対応を支援します」
            </blockquote>
            <p className="mt-4">
              大統領は、国家を率いる責任を謙虚に受け止め、権力は国民に奉仕するときにのみ意味を持つと強調しました。すべてのペルー国民、特に長年にわたり成長と発展の恩恵から取り残されてきた人々の福祉のために働く考えを示しました。
            </p>
          </section>
        </div>

        <footer className="mt-10 border-t border-gray-300 pt-6 text-xs text-gray-600 md:text-sm">
          <h2 className="mb-2 text-base font-semibold text-gray-900 japanese-heading-3">引用文献</h2>
          <p>
            ペルー共和国大統領府（2026年7月28日）。Presidenta Fujimori: Mi gobierno estará concentrado en atender la emergencia por El Niño y seguridad ciudadana.
          </p>
          <p className="mt-2">
            参照先: {" "}
            <a
              href="https://www.gob.pe/institucion/presidencia/noticias/1423591-presidenta-fujimori-mi-gobierno-estara-concentrado-en-atender-la-emergencia-por-el-nino-y-seguridad-ciudadana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Plataforma del Estado Peruano
            </a>
          </p>
        </footer>
      </article>
    </Layout>
  );
};

export default FujimoriElNinoSecurityPage;
