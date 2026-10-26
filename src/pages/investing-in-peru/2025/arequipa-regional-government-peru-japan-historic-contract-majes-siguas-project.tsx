import { getLegacyNewsProps } from "@/lib/legacy-news-props";

export { default } from "@/components/NewsArticlePage";

export const getStaticProps = getLegacyNewsProps(2025, "arequipa-regional-government-peru-japan-historic-contract-majes-siguas-project");
