import { getLegacyNewsProps } from "@/lib/legacy-news-props";

export { default } from "@/components/NewsArticlePage";

export const getStaticProps = getLegacyNewsProps(2025, "japan-majes-siguas1-project-arequipa");
