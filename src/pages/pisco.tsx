import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Pisco from "../components/Pisco";
export default function PiscoPage() {
  const { locale } = useRouter();
  return (
    <Layout language={locale}>
      <Pisco />
    </Layout>
  );
}
