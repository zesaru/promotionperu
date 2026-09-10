import { getLatestNews } from "@/lib/investing-news-index";

describe("investing news index", () => {
  it("lists the Energy and Mines Minister's Japan meetings as the latest investment news", () => {
    expect(getLatestNews(1)).toEqual([
      expect.objectContaining({
        slug: "energy-mines-minister-japan-investment-technical-cooperation",
        date: "2026-09-08",
        category: "エネルギー",
      }),
    ]);
  });
});
