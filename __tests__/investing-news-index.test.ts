import { getLatestNews } from "@/lib/investing-news-index";

describe("investing news index", () => {
  it("lists the Fujimori policy announcement as the latest investment news", () => {
    expect(getLatestNews(1)).toEqual([
      expect.objectContaining({
        slug: "fujimori-government-el-nino-emergency-security-investment",
        date: "2026-07-28",
        category: "投資",
      }),
    ]);
  });
});
