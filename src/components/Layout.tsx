import Head from "next/head";
import React, { ReactNode } from "react";

import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Footer = React.lazy(() => import('./Footer'));


export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Head>
        <title>PeruinJapan </title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

	      <meta name="msapplication-TileColor" content="#da532c" />
	      <meta name="theme-color" content="#ffffff" />
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
