import { getLegacyNewsProps } from "@/lib/legacy-news-props";

export { default } from "@/components/NewsArticlePage";

export const getStaticProps = getLegacyNewsProps(2025, "proinversion-four-electric-transmission-projects-piura-lambayeque-junin-ayacucho");
