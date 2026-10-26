import { render, screen } from "@testing-library/react";
import type { NewsArticle } from "lib/sanity.queries";

import NewsArticlePage from "@/components/NewsArticlePage";
import NewsBody from "@/components/NewsBody";
import { formatNewsDate, newsHref } from "@/lib/news";
import InvestmentNewsIndex from "@/pages/investing-in-peru/news";
import InvestmentNewsYear from "@/pages/investing-in-peru/news/[year]";

jest.mock("next/router", () => ({ useRouter: () => ({ locale: "en" }) }));
jest.mock("../lib/sanity.client", () => ({ getAllNewsArticles: jest.fn(), getNewsArticlesByYear: jest.fn() }));
jest.mock("../src/components/Layout", () => ({ __esModule: true, default: ({ children }: { children: React.ReactNode }) => <main>{children}</main> }));
jest.mock("next/image", () => ({ __esModule: true, default: ({ alt }: { alt: string }) => <span role="img" aria-label={alt} /> }));
jest.mock("next/link", () => ({ __esModule: true, default: ({ href, children }: { href: string; children: React.ReactNode }) => <a href={href}>{children}</a> }));

const article: NewsArticle = {
  _id: "news-test", year: 2026, slug: "test", titleJp: "日本語のニュース",
  publishedAt: "2026-10-15T15:25:00-05:00", excerptJp: "日本語の概要",
  titleEs: "Spanish title retained in CMS", excerptEs: "Spanish summary",
  bodyJp: [{ _type: "block", _key: "jp", style: "normal", markDefs: [], children: [{ _type: "span", _key: "text", text: "元の記事の全文", marks: [] }] }],
  bodyEs: [{ _type: "block", _key: "es", style: "normal", markDefs: [], children: [{ _type: "span", _key: "es-text", text: "Spanish article", marks: [] }] }],
};

describe("Sanity news migration", () => {
  it("navigates between investing, its news archive and the unchanged article URLs", () => {
    const { unmount } = render(<InvestmentNewsIndex years={[2026]} latestNews={[article]} />);
    expect(screen.getByRole("link", { name: /← Investing in Peru/ })).toHaveAttribute("href", "/investing-in-peru");
    expect(screen.getByRole("link", { name: "2026" })).toHaveAttribute("href", "/investing-in-peru/news/2026");
    expect(screen.getByRole("link", { name: /日本語のニュース/ })).toHaveAttribute("href", "/news/2026/test");
    unmount();

    render(<InvestmentNewsYear year={2026} articles={[article]} />);
    expect(screen.getByRole("link", { name: /← All news/ })).toHaveAttribute("href", "/investing-in-peru/news");
  });

  it("shows Japanese content on the English interface unless Spanish was explicitly enabled", () => {
    render(<NewsArticlePage article={article} />);
    expect(screen.getByRole("heading", { level: 1, name: article.titleJp })).toBeVisible();
    expect(screen.getByText("元の記事の全文")).toBeVisible();
    expect(screen.queryByRole("button", { name: /Spanish/ })).not.toBeInTheDocument();
    expect(screen.queryByText("Spanish article")).not.toBeInTheDocument();
    expect(screen.getByRole("article")).toHaveAttribute("lang", "ja");
    expect(screen.getByRole("link", { name: /Back to archive/ })).toHaveAttribute("href", "/investing-in-peru/news/2026");
  });

  it("keeps the Peruvian publication date even when the browser is in Japan", () => {
    expect(formatNewsDate(article)).toBe("2026年10月15日");
    expect(formatNewsDate({ ...article, publishedAt: "2026-10-06T16:12:00-05:00" })).toBe("2026年10月6日");
    expect(formatNewsDate({ ...article, publicationDate: "2025-12-24", publishedAt: "2025-12-24T00:00:00+09:00" })).toBe("2025年12月24日");
  });

  it("links migrated articles to their original URLs", () => {
    expect(newsHref({ ...article, legacyPath: "/investing-in-peru/2026/test" })).toBe("/investing-in-peru/2026/test");
    expect(newsHref(article)).toBe("/news/2026/test");
  });

  it("renders migrated tables, images and source links", () => {
    render(<NewsBody body={[
      { _type: "newsTable", _key: "table", rows: [
        { _key: "head", header: true, cells: ["項目", "投資額"] },
        { _key: "row", cells: ["電力", "165百万米ドル"] },
      ] },
      { _type: "newsImage", _key: "image", url: "https://peruinjapan.org/image.webp", alt: "式典の写真" },
      { _type: "block", _key: "source", style: "normal", markDefs: [{ _type: "link", _key: "link", href: "https://www.gob.pe/" }], children: [{ _type: "span", _key: "label", text: "出典", marks: ["link"] }] },
    ]} />);
    expect(screen.getByRole("columnheader", { name: "投資額" })).toBeVisible();
    expect(screen.getByRole("cell", { name: "165百万米ドル" })).toBeVisible();
    expect(screen.getByRole("img", { name: "式典の写真" })).toBeVisible();
    expect(screen.getByRole("link", { name: "出典" })).toHaveAttribute("href", "https://www.gob.pe/");
  });
});
