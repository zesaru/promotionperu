import React from "react";
import { Inter } from "next/font/google";
import  Layout  from "../../components/Layout";
import Restaurants from "../../components/Restautants";

const inter = Inter({ subsets: ["latin"] });

export default function restaurants() {
  return (
    <Layout>
      <Restaurants />
    </Layout>
  );
}
