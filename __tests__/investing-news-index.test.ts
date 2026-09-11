import { getLatestNews } from "@/lib/investing-news-index";

describe("investing news index", () => {
  it("lists the President's sustainable investment announcement as the latest investment news", () => {
    expect(getLatestNews(1)).toEqual([
      expect.objectContaining({
        slug: "fujimori-environment-sustainable-investment-expomina-2026",
        date: "2026-09-09",
        category: "鉱業",
      }),
    ]);
  });
});
