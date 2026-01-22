import Link from "next/link";
import { useRouter } from "next/router";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";

const EnergyTransitionCopperPage = () => {
  const { locale } = useRouter();

  return (
    <Layout language={locale} title="正念場を迎えるエネルギー転換：銅、重要鉱物、そして鉱業の新たな力">
      <Banner
        alt={"Invest in Peru 2025"}
        src={
          "https://res.cloudinary.com/de5ud82os/image/upload/v1694564007/WEB/gastronomia/peruinjapaninversiones_xop2nr.jpg"
        }
      />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-4xl">
        {/* Header */}
        <div className="text-right mb-4">
          <p className="text-xs md:text-sm text-gray-600">在日ペルー大使館</p>
          <p className="text-xs md:text-sm text-gray-600">非公式翻訳</p>
        </div>

        <div className="mb-8">
          <h1 className="text-lg md:text-xl font-normal text-gray-800 mb-3 md:mb-4 japanese-heading-3">
            正念場を迎えるエネルギー転換：銅、重要鉱物、そして鉱業の新たな力
          </h1>
          <p className="text-xs md:text-sm text-gray-600 mb-2">
            著者：ロムロ・ムーチョ、元ペルーエネルギー鉱山大臣
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            2025年12月24日
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 md:mb-8">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-2 japanese-text">
              エネルギー転換における真の制約は、鉱物資源をいかに迅速に、責任ある形で供給できるかにかかっています。
            </p>
          </div>

          <p className="mb-6 text-gray-700 leading-relaxed japanese-text">
            世界のエネルギー転換は近年、転換点を迎えています。過去10年間、議論は気候目標、クリーン技術、政治的コミットメントに集中していました。今日、そのアプローチはもはや十分ではありません。エネルギー転換における真の制約は、もはや意欲の問題ではなく、鉱物資源をいかに迅速に、責任ある、継続的かつ社会的に受容される形で供給できるかにかかっています。そして、この緊張関係を銅ほど明確に表す金属は他にありません。
          </p>

          {/* Copper Supply Shortage */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">銅市場の構造的供給不足</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              最新の予測によれば、2026年以降、世界の銅市場は構造的な供給不足に陥る可能性があります。その理由は複数あり、2026年には<strong>15万トンから35万トン</strong>の供給不足が予測されています。
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              理由は単純です。世界の電化、電気自動車、送電網、再生可能エネルギーとその貯蔵、データセンター、人工知能（AI）などが、供給の対応能力をはるかに上回るペースで需要を押し上げているからです。
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
              <p className="text-center">
                <span className="text-3xl md:text-4xl font-bold text-orange-900">70-100%</span>
              </p>
              <p className="text-center text-sm md:text-base text-gray-700 mt-2 japanese-text">
                2050年までに予測される銅需要の増加率
              </p>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              国際的なアナリストたちは、銅の需要が2050年までに<strong>70%から100%増加</strong>する可能性があるという点で一致しています。必要な投資額を試算するため、近年世界で実行されたプロジェクトの平均投資額を計算すると、精銅100万トンを生産するごとに<strong>200億から220億米ドル規模</strong>の投資が必要です。
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              これは、銅プロジェクトに年間<strong>170億から200億米ドル</strong>の投資が必要であることを意味しますが、現状はそれには程遠いようです。
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-center">
                <span className="text-3xl md:text-4xl font-bold text-red-900">+40%</span>
              </p>
              <p className="text-center text-sm md:text-base text-gray-700 mt-2 japanese-text">
                1年間の銅価格の上昇率<br />
                <span className="text-xs md:text-sm">現在：1トンあたり約1万2000米ドル（史上最高値）</span>
              </p>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
              市場に目を向けると、銅価格はこの1年で約40%上昇して1トンあたり1万2000米ドルに達し、さらに上昇を続け、史上最高値を更新しています。これは単なる投機的なサイクルではなく、鉱山プロジェクトの開発に時間がかかり、許認可がより複雑になり、新たな供給が電化の要求するペースに追いついていないという明確なシグナルなのです。
            </p>
          </div>

          {/* Critical Minerals */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">鉱物から戦略的資産へ</h3>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              重要鉱物は、工業用の原料から、国家安全保障、経済、産業政策における<strong>戦略的資産</strong>へと変化しました。
            </p>

            <div className="space-y-3 md:space-y-4 mb-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>銅</strong>（Copper）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>リチウム</strong>（Lithium）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>タングステン</strong>（Tungsten）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>ニッケル</strong>（Nickel）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>黒鉛</strong>（Graphite）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>コバルト</strong>（Cobalt）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>マンガン</strong>（Manganese）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>レアアース（希土類）</strong>（Rare Earth Elements）
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              これらの鉱物は、今日、<strong>技術的競争力、エネルギー自給、気候変動対策、地政学的な力の柱</strong>として認識されています。
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              しかし、戦略的なメッセージは単なる採掘にとどまりません。鉱物資源の主権を確立するには、<strong>探査、採掘、加工、精錬、リサイクルを統合した完全なバリューチェーン</strong>が不可欠です。高度な冶金技術と循環型経済（サーキュラーエコノミー）なくして、真の自立はあり得ません。
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-sm md:text-base text-gray-800 mb-2 japanese-text">
                <strong>アジアの巨人（中国）による支配</strong>
              </p>
              <p className="text-sm md:text-base text-gray-700 japanese-text">
                このことは、今日これらの鉱物の生産、精錬、利用において<strong>60%から90%</strong>という圧倒的なシェアを占めるアジアの巨人（中国）が世界に与えた大きな教訓です。これにより、世界の供給がいかに高いリスクにさらされているかが示されました。
              </p>
            </div>
          </div>

          {/* Latin America's Role */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">ペルーとラテンアメリカの役割</h3>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              世界が戦略を再定義する中、ペルーとラテンアメリカは、世界的な供給ギャップを埋めるための鍵となる地域として浮上しています。我々の大陸は、銅やその他の重要鉱物の世界最大級の資源を擁していますが、中心的な課題に直面しています。
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              それは、鉱山プロジェクトを取り巻く<strong>社会的・環境的な複雑さの増大</strong>です。
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              これに対し、鉱業界は操業基準を引き上げることで対応してきました。今日では：
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-lg flex-shrink-0">✓</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>水のリサイクル：</strong>使用した水の最大95%をリサイクル
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-lg flex-shrink-0">✓</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>環境モニタリング：</strong>数百カ所の環境モニタリングポイントを常時展開
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-lg flex-shrink-0">✓</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>排出量削減：</strong>約30%削減するために鉱山の電化に数千万ドルを投資
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-lg flex-shrink-0">✓</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>デジタル化：</strong>安全性と効率性を向上させるためにドローンやデジタルシステムを導入
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 japanese-text">
              これらの進歩は、操業モデルの真の変革を反映しています。
            </p>
          </div>

          {/* Leadership Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">地下で決まるリーダーシップ</h3>

            <blockquote className="border-l-4 border-red-600 pl-4 text-sm md:text-base text-gray-700 italic mb-4 japanese-text">
              エネルギー転換は、アイデアや技術の不足によってではなく、実行力の欠如によって失敗するでしょう。
            </blockquote>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              銅は今日、その緊張関係を測る最も正確な温度計です。
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 japanese-text">
              今後、エネルギーと技術におけるリーダーシップは、気候サミットや脱炭素化計画だけで決まるものではありません。それは、<strong>地質学的資源を責任ある産業開発へと転換する各国の能力</strong>によって定義されるのです。
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-sm md:text-base text-gray-800 mb-2 japanese-text">
                <strong>戦略的な問い</strong>
              </p>
              <p className="text-sm md:text-base text-gray-700 japanese-text">
                戦略的な問いは、もはや不足が生じるかどうかではありません。真の問いは、<strong>誰がその管理のために政治的・産業的リーダーシップを発揮し、そして誰が、時機を逸したことによる経済的、技術的、地政学的な代償を払って取り残されるのか</strong>、ということです。
              </p>
            </div>
          </div>

          {/* Key Points Summary */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 my-6 md:my-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 japanese-text">要点まとめ</h3>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>2026年以降、銅市場は構造的供給不足に</strong>（15万-35万トンの不足予測）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>2050年までに銅需要は70-100%増加</strong>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>銅価格：1年で+40%、史上最高値</strong>（1トンあたり約1万2000米ドル）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>必要投資額：年間170-200億米ドル</strong>（現状は程遠い）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>重要鉱物は戦略的資産へ</strong>（安全保障・経済・産業政策の中核）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>完全なバリューチェーンが必要</strong>（探査→採掘→加工→精錬→リサイクル）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>ペルー・ラテンアメリカは鍵となる地域</strong>（世界最大級の資源を保有）
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 text-lg flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed japanese-text">
                  <strong>リーダーシップは実行力で決まる</strong>（地質学的資源の産業開発能力）
                </p>
              </div>
            </div>
          </div>

          {/* Author Section */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <h3 className="text-base font-semibold text-gray-900 mb-2 japanese-heading-3">著者プロフィール</h3>
            <div className="text-sm md:text-base text-gray-700 japanese-text">
              <p className="mb-2"><strong>ロムロ・ムーチョ（Romulo Mucho）</strong></p>
              <p>元ペルーエネルギー鉱山大臣（2024年）</p>
              <p>鉱山エンジニア、ペルー鉱山技術者協会（IIMP）メンバー</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-300">
            <p className="text-xs md:text-sm text-gray-600 mb-2">
              在日ペルー大使館
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              経済商務担当
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

export default EnergyTransitionCopperPage;
