import { getAllNewsArticles, getNewsArticleByYearAndSlug } from "../lib/sanity.client";
import { getLegacyNewsProps } from "../src/lib/legacy-news-props";
import { getStaticPaths, getStaticProps } from "../src/pages/news/[year]/[slug]";

jest.mock("../lib/sanity.client", () => ({ getNewsArticleByYearAndSlug: jest.fn(), getAllNewsArticles: jest.fn() }));
jest.mock("../src/components/NewsArticlePage", () => ({ __esModule: true, default: () => null }));

const fetchArticle = jest.mocked(getNewsArticleByYearAndSlug);

describe("original news URLs", () => {
  afterEach(() => jest.resetAllMocks());

  it("loads the current CMS version at the original URL", async () => {
    const article = { _id: "migrated", titleJp: "更新したニュース" };
    fetchArticle.mockResolvedValue(article);
    await expect(getLegacyNewsProps(2025, "article")({})).resolves.toEqual({ props: { article }, revalidate: 60 });
    expect(fetchArticle).toHaveBeenCalledWith(2025, "article");
  });

  it("does not resurrect an article removed from Sanity", async () => {
    fetchArticle.mockResolvedValue(null);
    await expect(getLegacyNewsProps(2025, "article")({})).resolves.toEqual({ notFound: true, revalidate: 60 });
  });

  it("generates only canonical news pages at build time and redirects legacy aliases at runtime", async () => {
    jest.mocked(getAllNewsArticles).mockResolvedValue([
      { year: 2025, slug: "legacy", legacyPath: "/investing-in-peru/2025/legacy" },
      { year: 2026, slug: "new" },
    ]);
    await expect(getStaticPaths({})).resolves.toEqual({
      paths: [
        { params: { year: "2026", slug: "new" }, locale: "jp" },
        { params: { year: "2026", slug: "new" }, locale: "en" },
      ],
      fallback: "blocking",
    });
    fetchArticle.mockResolvedValue({ legacyPath: "/investing-in-peru/2025/legacy" });
    await expect(getStaticProps({ params: { year: "2025", slug: "legacy" } })).resolves.toEqual({
      redirect: { destination: "/investing-in-peru/2025/legacy", permanent: true },
    });
  });
});
