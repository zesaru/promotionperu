import { getLegacyNewsProps } from "@/lib/legacy-news-props";

export { default } from "@/components/NewsArticlePage";

export const getStaticProps = getLegacyNewsProps(2025, "president-dina-boluarte-promotes-peru-investment-portfolio-over-17-billion-japan");
