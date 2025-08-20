import { useRouter } from "next/router";
import React from "react";

import Layout from "../components/Layout";

const PazHiroshimaPage = () => {
  const { locale } = useRouter();

  const content = {
    jp: {
      title: "広島の平和：花咲き誇る",
      text: "広島および長崎の被爆80周年の節目にあたり、ペルー共和国政府および国民は、日本の皆様に対し、謹んで心からの連帯を表するとともに、世界平和と核兵器の廃絶、そして大量破壊兵器のない公平で安全な未来の実現に向けた揺るぎない決意を改めて表明します。",
    },
    en: {
      title: "Peace of Hiroshima: Blossoming",
      text: "On the solemn occasion of the 80th anniversary of the atomic bombings of Hiroshima and Nagasaki, the Government and people of the Republic of Peru extend their deepest solidarity to the people of Japan. We further reaffirm our unwavering commitment to the achievement of lasting world peace, nuclear disarmament, and the realization of a just and secure future free from weapons of mass destruction.",
    },
    es: {
      title: "Paz de Hiroshima: Florecer",
      text: "Con ocasión del 80.º aniversario del bombardeo atómico de Hiroshima y Nagasaki, el Gobierno y pueblo peruanos expresan su más sentida solidaridad con el pueblo japonés y reafirman su compromiso inquebrantable con la paz mundial, el desarme nuclear y la promoción de un futuro justo, seguro y libre de armas de destrucción masiva.",
    },
  };

  const currentContent = locale === "en" ? content.en : locale === "jp" ? content.jp : content.es;

  return (
    <Layout
      language={locale}
      title={currentContent.title}
      description={currentContent.text.substring(0, 160)}
      image="https://res.cloudinary.com/de5ud82os/image/upload/v1694564001/WEB/gastronomia/150years_bdwrpn.jpg"
      type="article"
    >
      <div className="container py-4 md:py-12 px-2 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mt-4 text-center">
            <div className="inline-flex items-center space-x-4 text-2xl">
              <span className="text-pink-500">🌸</span>
              <span className="text-gray-600">🕊️</span>
              <span className="text-pink-500">🌸</span>
            </div>
          </div>

          <div className="mt-2 border-t pt-8">
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-600 leading-relaxed">{content.jp.text}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 leading-relaxed">{content.en.text}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 leading-relaxed">{content.es.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PazHiroshimaPage;