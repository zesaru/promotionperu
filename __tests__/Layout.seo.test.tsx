import { render } from "@testing-library/react";
import React from "react";

import Layout from "@/components/Layout";

const mockUseRouter = jest.fn();
const mockNextSeo = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => mockUseRouter(),
}));

jest.mock("next-seo", () => ({
  NextSeo: (props: unknown) => {
    mockNextSeo(props);
    return null;
  },
}));

jest.mock("@vercel/analytics/react", () => ({
  Analytics: () => null,
}));

jest.mock("next-sanity", () => ({
  createClient: () => ({ fetch: jest.fn() }),
  groq: (query: TemplateStringsArray | string) => query,
}));

describe("Layout SEO", () => {
  beforeEach(() => {
    mockNextSeo.mockClear();
  });

  it("builds canonical and hreflang correctly on English localized routes", () => {
    mockUseRouter.mockReturnValue({
      locale: "en",
      asPath: "/en/investing-in-peru?utm=test#news",
      locales: ["jp", "en"],
    });

    render(
      <Layout language="en" title="Investing">
        <div>content</div>
      </Layout>
    );

    expect(mockNextSeo).toHaveBeenCalled();
    const seoProps = mockNextSeo.mock.calls.at(-1)?.[0] as {
      canonical: string;
      languageAlternates: Array<{ hrefLang: string; href: string }>;
    };

    expect(seoProps.canonical).toBe("https://peruinjapan.org/en/investing-in-peru");
    expect(seoProps.languageAlternates).toEqual([
      { hrefLang: "ja", href: "https://peruinjapan.org/investing-in-peru" },
      { hrefLang: "en", href: "https://peruinjapan.org/en/investing-in-peru" },
      { hrefLang: "x-default", href: "https://peruinjapan.org/investing-in-peru" },
    ]);
  });

  it("keeps homepage canonical for Japanese default locale", () => {
    mockUseRouter.mockReturnValue({
      locale: "jp",
      asPath: "/",
      locales: ["jp", "en"],
    });

    render(
      <Layout language="jp" title="Home">
        <div>content</div>
      </Layout>
    );

    const seoProps = mockNextSeo.mock.calls.at(-1)?.[0] as {
      canonical: string;
      languageAlternates: Array<{ hrefLang: string; href: string }>;
    };

    expect(seoProps.canonical).toBe("https://peruinjapan.org");
    expect(seoProps.languageAlternates).toEqual([
      { hrefLang: "ja", href: "https://peruinjapan.org" },
      { hrefLang: "en", href: "https://peruinjapan.org/en" },
      { hrefLang: "x-default", href: "https://peruinjapan.org" },
    ]);
  });

  it("uses article SEO when articlePublishedTime is provided", () => {
    mockUseRouter.mockReturnValue({
      locale: "en",
      asPath: "/en/investing-in-peru/2026/mef-peru-grew-3-4-percent-2025",
      locales: ["jp", "en"],
    });

    render(
      <Layout
        language="en"
        title="MEF growth update"
        articlePublishedTime="2026-02-15T12:15:00+09:00"
      >
        <div>content</div>
      </Layout>
    );

    const seoProps = mockNextSeo.mock.calls.at(-1)?.[0] as {
      canonical: string;
      additionalMetaTags: Array<{ name: string; content: string }>;
      description: string;
      languageAlternates: Array<{ hrefLang: string; href: string }>;
      openGraph: { type: string; locale: string; article?: { publishedTime?: string; modifiedTime?: string } };
    };

    expect(seoProps.description).toContain("MEF growth update に関する記事。");
    expect(seoProps.canonical).toBe("https://peruinjapan.org/investing-in-peru/2026/mef-peru-grew-3-4-percent-2025");
    expect(seoProps.languageAlternates).toEqual([
      { hrefLang: "ja", href: "https://peruinjapan.org/investing-in-peru/2026/mef-peru-grew-3-4-percent-2025" },
      { hrefLang: "x-default", href: "https://peruinjapan.org/investing-in-peru/2026/mef-peru-grew-3-4-percent-2025" },
    ]);
    expect(seoProps.openGraph.type).toBe("article");
    expect(seoProps.openGraph.locale).toBe("ja_JP");
    expect(seoProps.openGraph.article).toEqual({
      publishedTime: "2026-02-15T12:15:00+09:00",
      modifiedTime: "2026-02-15T12:15:00+09:00",
      section: "Investing in Peru",
      authors: ["Peru in Japan"],
    });

    expect(document.body.innerHTML).toContain('"@type":"Article"');
    expect(document.body.innerHTML).toContain('"headline":"MEF growth update"');
    expect(document.body.innerHTML).toContain('"datePublished":"2026-02-15T12:15:00+09:00"');
    expect(document.body.innerHTML).toContain('"@type":"BreadcrumbList"');
    expect(document.body.innerHTML).toContain('"name":"ホーム"');
    expect(document.body.innerHTML).toContain('"name":"ペルーへの投資"');
    expect(seoProps.additionalMetaTags).toContainEqual({
      name: "robots",
      content: "noindex, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });
  });

  it("keeps investing project pages as website without editorial signals", () => {
    mockUseRouter.mockReturnValue({
      locale: "en",
      asPath: "/en/investing-in-peru/huancayo-huancavelica-railway",
      locales: ["jp", "en"],
    });

    render(
      <Layout
        language="en"
        title="Huancayo - Huancavelica Railway"
        description="Railway project overview."
      >
        <div>content</div>
      </Layout>
    );

    const seoProps = mockNextSeo.mock.calls.at(-1)?.[0] as {
      canonical: string;
      languageAlternates: Array<{ hrefLang: string; href: string }>;
      additionalMetaTags: Array<{ name: string; content: string }>;
      openGraph: { type: string; locale: string; article?: unknown };
    };

    expect(seoProps.canonical).toBe("https://peruinjapan.org/en/investing-in-peru/huancayo-huancavelica-railway");
    expect(seoProps.languageAlternates).toEqual([
      { hrefLang: "ja", href: "https://peruinjapan.org/investing-in-peru/huancayo-huancavelica-railway" },
      { hrefLang: "en", href: "https://peruinjapan.org/en/investing-in-peru/huancayo-huancavelica-railway" },
      { hrefLang: "x-default", href: "https://peruinjapan.org/investing-in-peru/huancayo-huancavelica-railway" },
    ]);
    expect(seoProps.openGraph.type).toBe("website");
    expect(seoProps.openGraph.locale).toBe("en_US");
    expect(seoProps.openGraph.article).toBeUndefined();
    expect(seoProps.additionalMetaTags).toContainEqual({
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });
    expect(document.body.innerHTML).not.toContain('"@type":"Article"');
    expect(document.body.innerHTML).not.toContain('"@type":"BreadcrumbList"');
  });

  it("keeps breadcrumb schema but skips article schema when an article lacks articlePublishedTime", () => {
    mockUseRouter.mockReturnValue({
      locale: "en",
      asPath: "/en/investing-in-peru/2026/anglo-american-quellaveco-mining-innovation-hub-productivity-sustainability",
      locales: ["jp", "en"],
    });

    render(
      <Layout
        language="en"
        type="article"
        title="Quellaveco joins Peru mining innovation hub"
        description="Editorial mining innovation coverage."
      >
        <div>content</div>
      </Layout>
    );

    const seoProps = mockNextSeo.mock.calls.at(-1)?.[0] as {
      openGraph: { type: string; article?: Record<string, unknown> };
    };

    expect(seoProps.openGraph.type).toBe("article");
    expect(document.body.innerHTML).not.toContain('"@type":"Article"');
    expect(document.body.innerHTML).not.toContain('"datePublished"');
    expect(document.body.innerHTML).toContain('"@type":"BreadcrumbList"');
  });
});
