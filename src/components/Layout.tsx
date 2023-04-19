import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import React, { ReactNode } from "react";

import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
  language: string | undefined;
  title?: string;
  description?: string;
};

const Footer = React.lazy(() => import('./Footer'));


export default function Layout({ children, language,  title="Welcome" , description="We want to celebrate the diversity and richness of Peruvian cuisine and show the good reception it enjoys in Japan, a country that welcomes a wide range of international cooking practices and culinary styles."}: LayoutProps) {
  const { locale } = useRouter();


  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <NextSeo
        title={`Peru in Japan | ${title}`}
        description={description}
      />
      <Header />
        {children}
      <Footer />
    </div>
  );
}
