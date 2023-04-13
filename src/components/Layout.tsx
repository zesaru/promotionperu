import { useRouter } from "next/router";
import React, { ReactNode } from "react";

import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
  language: string | undefined;
};

const Footer = React.lazy(() => import('./Footer'));


export default function Layout({ children, language }: LayoutProps) {
  const { locale } = useRouter();


  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Header />
        {children}
      <Footer />
    </div>
  );
}
