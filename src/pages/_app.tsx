import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Bree_Serif, Noto_Sans_JP } from "next/font/google";
import React from "react";

const bree = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--bree-font",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--noto-sans-jp-font",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${bree.variable} ${notoSansJP.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
