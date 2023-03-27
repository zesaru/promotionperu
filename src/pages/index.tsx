import React from "react";

import Carrusel from "../components/Carrusel";
import Layout from "../components/Layout";
import Wellcome from "../components/Wellcome";

export default function Home() {
  return (
    <Layout>
      <Carrusel />
      <Wellcome />
    </Layout>
  );
}
