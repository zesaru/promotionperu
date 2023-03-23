import Head from "next/head";
import React, { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";



type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Head>
        <title>PeruinJapan </title>
        <meta property="og:url" content="promotionperu.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="521355484545494" />
        <meta
          property="og:title"
          content="WELCOME TO THE PERUVIAN GASTRONOMY GUIDE OF JAPAN."
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="WELCOME TO THE PERUVIAN GASTRONOMY GUIDE OF JAPAN."
        />
        <meta property="og:image" content={"url of image"} />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
