import { getLegacyNewsProps } from "@/lib/legacy-news-props";

export { default } from "@/components/NewsArticlePage";

export const getStaticProps = getLegacyNewsProps(2025, "minera-poderosa-invests-25-million-clean-energy-savings-2030");
