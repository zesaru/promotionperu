import { render } from "@testing-library/react";
import React from "react";

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

jest.mock("@src/components/Banner", () => ({
  __esModule: true,
  default: () => <div>banner</div>,
}), { virtual: true });

jest.mock("next/image", () => ({
  __esModule: true,
  default: () => <div>image</div>,
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...rest }: Record<string, unknown>) => (
    <a href={href as string} {...rest}>
      {children as React.ReactNode}
    </a>
  ),
}));

jest.mock("react-icons/im", () => ({
  ImArrowLeft: () => <span>arrow-left</span>,
  ImDownload2: () => <span>download</span>,
}));

jest.mock("@/lib/investing-news-index", () => ({
  getLatestNews: () => [
    {
      slug: "sample-news",
      year: "2026",
      category: "Economy",
      date: "2026-02-15",
      title: "Sample news",
      excerpt: "Sample excerpt",
    },
  ],
}), { virtual: true });

describe("Investing in Peru hub pages SEO", () => {
  beforeEach(() => {
    mockNextSeo.mockClear();
  });

  it("renders collection schema on the main investing hub", async () => {
    mockUseRouter.mockReturnValue({
      locale: "en",
      asPath: "/en/investing-in-peru",
      locales: ["jp", "en"],
    });
    const page = await import("@/pages/investing-in-peru/index");

    render(React.createElement(page.default));

    const seoProps = mockNextSeo.mock.calls.at(-1)?.[0] as {
      canonical: string;
      description: string;
    };

    expect(seoProps.canonical).toBe("https://peruinjapan.org/en/investing-in-peru");
    expect(seoProps.description).toContain("Peru investment opportunities");
    expect(document.body.innerHTML).toContain('"@type":"CollectionPage"');
    expect(document.body.innerHTML).toContain('"url":"https://peruinjapan.org/en/investing-in-peru"');
    expect(document.body.innerHTML).toContain('"name":"Investment Guide 2025 \\"VALE UN PERÚ\\""');
    expect(document.body.innerHTML).toContain('"name":"Previous Investment Guides"');
    expect(document.body.innerHTML).toContain('"url":"https://peruinjapan.org/en/investing-in-peru/previous-versions"');
    expect(document.body.innerHTML).toContain('"url":"https://embperujapan.org/guia_de_inversiones-2025.pdf"');
    expect(document.body.innerHTML).toContain('"@type":"BreadcrumbList"');
    expect(document.body.innerHTML).toContain('"name":"Home"');
  });

  it("renders collection schema on previous investment guides", async () => {
    mockUseRouter.mockReturnValue({
      locale: "en",
      asPath: "/en/investing-in-peru/previous-versions",
      locales: ["jp", "en"],
    });
    const page = await import("@/pages/investing-in-peru/previous-versions");

    render(React.createElement(page.default));

    const seoProps = mockNextSeo.mock.calls.at(-1)?.[0] as {
      canonical: string;
      description: string;
    };

    expect(seoProps.canonical).toBe("https://peruinjapan.org/en/investing-in-peru/previous-versions");
    expect(seoProps.description).toContain("historical investment guides");
    expect(document.body.innerHTML).toContain('"@type":"CollectionPage"');
    expect(document.body.innerHTML).toContain('"url":"https://peruinjapan.org/en/investing-in-peru/previous-versions"');
    expect(document.body.innerHTML).toContain('"name":"Investment Guide 2024 \\"VALE UN PERÚ\\""');
    expect(document.body.innerHTML).toContain('"url":"https://embperujapan.org/guia_de_inversiones-2024.pdf"');
    expect(document.body.innerHTML).toContain('"@type":"BreadcrumbList"');
    expect(document.body.innerHTML).toContain('"name":"Investing in Peru"');
    expect(document.body.innerHTML).toContain('"name":"Previous Investment Guides"');
  });

  it("localizes Japanese schema labels for investment resource pages", async () => {
    mockUseRouter.mockReturnValue({
      locale: "jp",
      asPath: "/investing-in-peru",
      locales: ["jp", "en"],
    });
    const mainPage = await import("@/pages/investing-in-peru/index");

    render(React.createElement(mainPage.default));

    expect(document.body.innerHTML).toContain('"name":"過去の投資ガイド"');
    expect(document.body.innerHTML).toContain('"name":"ホーム"');

    mockUseRouter.mockReturnValue({
      locale: "jp",
      asPath: "/investing-in-peru/previous-versions",
      locales: ["jp", "en"],
    });
    const previousVersionsPage = await import("@/pages/investing-in-peru/previous-versions");

    render(React.createElement(previousVersionsPage.default));

    expect(document.body.innerHTML).toContain('"name":"ペルーへの投資"');
  });
});
