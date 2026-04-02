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

  it("infers article SEO for investing detail pages without manual description", () => {
    mockUseRouter.mockReturnValue({
      locale: "en",
      asPath: "/en/investing-in-peru/2026/mef-peru-grew-3-4-percent-2025",
      locales: ["jp", "en"],
    });

    render(
      <Layout language="en" title="MEF growth update">
        <div>content</div>
      </Layout>
    );

    const seoProps = mockNextSeo.mock.calls.at(-1)?.[0] as {
      description: string;
      openGraph: { type: string };
    };

    expect(seoProps.description).toContain("MEF growth update.");
    expect(seoProps.openGraph.type).toBe("article");

    expect(document.body.innerHTML).toContain('"@type":"Article"');
    expect(document.body.innerHTML).toContain('"headline":"MEF growth update"');
    expect(document.body.innerHTML).toContain('"@type":"BreadcrumbList"');
  });
});
