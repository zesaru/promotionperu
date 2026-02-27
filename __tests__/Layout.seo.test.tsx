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

    expect(seoProps.canonical).toBe("https://www.peruinjapan.org/en/investing-in-peru");
    expect(seoProps.languageAlternates).toEqual([
      { hrefLang: "ja", href: "https://www.peruinjapan.org/investing-in-peru" },
      { hrefLang: "en", href: "https://www.peruinjapan.org/en/investing-in-peru" },
      { hrefLang: "x-default", href: "https://www.peruinjapan.org/investing-in-peru" },
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

    expect(seoProps.canonical).toBe("https://www.peruinjapan.org");
    expect(seoProps.languageAlternates).toEqual([
      { hrefLang: "ja", href: "https://www.peruinjapan.org" },
      { hrefLang: "en", href: "https://www.peruinjapan.org/en" },
      { hrefLang: "x-default", href: "https://www.peruinjapan.org" },
    ]);
  });
});
