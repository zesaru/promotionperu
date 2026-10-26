import { getLegacyNewsProps } from "@/lib/legacy-news-props";

export { default } from "@/components/NewsArticlePage";

export const getStaticProps = getLegacyNewsProps(2026, "proinversion-natural-gas-project-portfolio-2-9-billion-2026-2027");
