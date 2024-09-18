import { Analytics } from '@vercel/analytics/react';
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
        canonical="https://peruinjapan.org /"
        openGraph={{
          url: "https://peruinjapan.org",
          title: `Peru in Japan | ${title}`,
          description: description,
          images: [
            {
              url: "https://res.cloudinary.com/de5ud82os/image/upload/v1726638710/WEB/home/nhplhoz0fvmrbph1jbst.png",
              width: 800,
              height: 600,
              alt: "Peru in Japan",
              type: 'image/jpeg',
            },
          ],
          site_name: "Peru in Japan",
        }}
        twitter={{
          handle: "@peruinjapan",
          site: "@peruinjapan",
          cardType: "summary_large_image",
        }}
      />
      <Header />
        {children}
        <Analytics />
      <Footer />
    </div>
  );
}
