import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Bree_Serif } from "next/font/google";
import React from "react";

const Bree = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={Bree.className}>
      <Component {...pageProps} />
    </main>
  );
}
