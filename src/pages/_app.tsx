import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Bree_Serif } from "next/font/google";
import React from "react";

const bree = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${bree} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
