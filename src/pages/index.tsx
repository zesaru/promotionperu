import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Carrusel from "../components/Carrusel";
import Layout from "../components/Layout";
import Wellcome from "../components/Wellcome";

export default function Home() {
  const { locale } = useRouter();

  return (
    <Layout language={locale}>
      <Carrusel />
      <Wellcome />
    </Layout>
  );
}
