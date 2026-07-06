import { NewsArticle } from "lib/sanity.queries";

export const fallbackNewsArticles: NewsArticle[] = [
  {
    _id: "news-2026-peru-japan-cultural-investment-agenda",
    titleEs: "Perú en Japón presenta su agenda cultural y de inversión 2026",
    titleJp: "Peru in Japan が2026年の文化・投資アジェンダを発表",
    slug: "peru-en-japon-agenda-cultural-inversion-2026",
    year: 2026,
    publishedAt: "2026-01-22T10:00:00+09:00",
    coverImage:
      "https://res.cloudinary.com/de5ud82os/image/upload/v1694564005/WEB/gastronomia/peruinjapan_evsspv.jpg",
    coverImageAltEs: "Presentacion de la agenda 2026 de Peru in Japan",
    coverImageAltJp: "Peru in Japan 2026アジェンダ発表の様子",
    excerptEs:
      "La plataforma Peru in Japan presentó su agenda 2026 con actividades de promoción cultural, gastronómica y de inversión, reforzando el vínculo entre Perú y Japón.",
    excerptJp:
      "Peru in Japan は、文化・食・投資促進を軸とした2026年のアジェンダを発表し、ペルーと日本の連携強化を打ち出しました。",
    bodyEs: [
      {
        _type: "block",
        _key: "body-es-1",
        children: [
          {
            _type: "span",
            _key: "body-es-1-span-1",
            text: "Peru in Japan presentó su agenda 2026 con una hoja de ruta orientada a fortalecer la presencia del Perú en Japón mediante actividades de promoción cultural, gastronómica y económica.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _type: "block",
        _key: "body-es-2",
        children: [
          {
            _type: "span",
            _key: "body-es-2-span-1",
            text: "La programación incluye eventos públicos, contenidos editoriales bilingües, difusión de oportunidades de inversión y nuevas piezas visuales para apoyar la comunicación institucional durante todo el año.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _type: "block",
        _key: "body-es-3",
        children: [
          {
            _type: "span",
            _key: "body-es-3-span-1",
            text: "Como parte de esta nueva etapa, la sección de noticias incorpora artículos en español y japonés, junto con galerías fotográficas alojadas en Cloudinary para facilitar una publicación más ágil y escalable.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    bodyJp: [
      {
        _type: "block",
        _key: "body-jp-1",
        children: [
          {
            _type: "span",
            _key: "body-jp-1-span-1",
            text: "Peru in Japan は、文化・ガストロノミー・経済発信を通じて日本におけるペルーの存在感を高めるため、2026年の年間アジェンダを発表しました。",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _type: "block",
        _key: "body-jp-2",
        children: [
          {
            _type: "span",
            _key: "body-jp-2-span-1",
            text: "本アジェンダには、公開イベント、バイリンガル記事、投資機会の発信、そして年間を通じた対外広報を支える新しいビジュアル施策が含まれています。",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _type: "block",
        _key: "body-jp-3",
        children: [
          {
            _type: "span",
            _key: "body-jp-3-span-1",
            text: "この取り組みの一環として、新しいニュースセクションではスペイン語と日本語の本文に加え、Cloudinary 上の写真ギャラリーを使って、より機動的に記事を公開できるようになりました。",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    gallery: [
      {
        src: "https://res.cloudinary.com/de5ud82os/image/upload/v1694564005/WEB/gastronomia/peruinjapan_evsspv.jpg",
        altEs: "Banner institucional de Peru in Japan",
        altJp: "Peru in Japan の公式バナー",
        captionEs: "Presentación institucional de Peru in Japan para la agenda 2026.",
        captionJp: "2026年アジェンダ向けのPeru in Japan公式ビジュアル。",
      },
      {
        src: "https://res.cloudinary.com/de5ud82os/image/upload/v1694564001/WEB/gastronomia/150years_bdwrpn.jpg",
        altEs: "Imagen conmemorativa de la relacion Peru Japon",
        altJp: "日秘関係を象徴する記念ビジュアル",
        captionEs: "La agenda 2026 incorpora actividades de vínculo bilateral y difusión institucional.",
        captionJp: "2026年アジェンダには日秘関係を深める施策も含まれます。",
      },
      {
        src: "https://res.cloudinary.com/de5ud82os/image/upload/f_auto,q_auto:best,e_sharpen/v1778133550/WEB/2026/fotofranciscomofav2_x62ogw.jpg",
        altEs: "Retrato oficial vinculado a la comunicacion institucional del sitio",
        altJp: "サイトの対外発信に関連する公式写真",
        captionEs: "La nueva sección de noticias busca sostener una comunicación continua y visualmente consistente.",
        captionJp: "新しいニュースセクションは継続的で一貫した情報発信を支えます。",
      },
    ],
  },
];
