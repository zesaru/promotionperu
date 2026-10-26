import { getLegacyNewsProps } from "@/lib/legacy-news-props";

export { default } from "@/components/NewsArticlePage";

export const getStaticProps = getLegacyNewsProps(2025, "peru-gdp-q1-2025-quarterly-economic-report");
