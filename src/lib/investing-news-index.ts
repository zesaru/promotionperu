import { news2025 } from "./investing-news-index-2025";
import { news2026 } from "./investing-news-index-2026";

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  year: string;
}

// Combine all news and sort by date (newest first)
export const allNews: NewsItem[] = [
  ...news2025.map(item => ({ ...item, year: "2025" })),
  ...news2026.map(item => ({ ...item, year: "2026" }))
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Get latest news (limit number)
export function getLatestNews(limit: number = 5): NewsItem[] {
  return allNews.slice(0, limit);
}
