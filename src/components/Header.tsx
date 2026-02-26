import { apiVersion, dataset, projectId } from "lib/sanity.api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { createClient, groq } from "next-sanity";
import { BsTranslate } from "react-icons/bs";
import { useState } from "react";

const clientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
};

function getMenu() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "menu"]{
      __i18n_lang,
      _id,
      menu,
    }
  `);
}

const navBar = {
  menus: [
    { locale: "en", title: "Gastronomy", slug: "gastronomy" },
    { locale: "en", title: "Products", slug: "products" },
    { locale: "en", title: "Investing in Peru", slug: "investing-in-peru" },
    {
      locale: "en",
      title: "150 years of diplomatic relations",
      slug: "150-years-of-diplomatic-relations",
    },
    { locale: "en", title: "Peace of Hiroshima", slug: "paz-de-hiroshima" },
    { locale: "jp", title: "ガストロノミー", slug: "gastronomy" },
    { locale: "jp", title: "ペルー食品", slug: "products" },
    { locale: "jp", title: "ペルーへの投資", slug: "investing-in-peru" },
    {
      locale: "jp",
      title: "外交関係樹立150周年",
      slug: "150-years-of-diplomatic-relations",
    },
    { locale: "jp", title: "広島の平和", slug: "paz-de-hiroshima" },
  ],
};

export default function Header() {
  const { locale, locales, asPath } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveRoute = (slug: string) => {
    return asPath.includes(slug) || (asPath === "/" && slug === "home");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav id="header" className="w-full z-50 top-0 bg-white shadow-md sticky">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-4 py-3 lg:px-6">
        
        {/* Logo */}
        <div className="flex order-1 lg:order-1">
          <Link
            className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl gap-2 transition-all duration-200 hover:scale-105"
            href="/"
          >
            <Image
              src="/apple-touch-icon.png"
              height="40"
              width="40"
              alt="escudo del peru"
              className="rounded-full"
            />
            <span className="w-1 h-8 bg-red-500 border border-red-600 rounded-sm"></span>
            <span className="hidden sm:block">PERUINJAPAN</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden order-2 p-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transform transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {isMobileMenuOpen ? (
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            )}
          </svg>
        </button>

        {/* Navigation Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full order-3 lg:order-2 mt-4 lg:mt-0`}>
          <nav className="lg:flex lg:items-center">
            <ul className="lg:flex items-center space-y-2 lg:space-y-0 lg:space-x-1 text-base">
              {navBar.menus
                .filter((item) => item.locale === locale)
                .map((item) => (
                  <li 
                    key={item.title}
                    className={item.slug === "paz-de-hiroshima" ? "lg:hidden" : ""}
                  >
                    <Link
                      className={`block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-red-50 hover:text-red-600 ${
                        isActiveRoute(item.slug) 
                          ? 'bg-red-600 text-white font-semibold' 
                          : 'text-gray-700 hover:bg-red-50'
                      }`}
                      href={`/${item.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center mt-4 lg:mt-0 lg:ml-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-200">
            <BsTranslate className="text-lg text-gray-600 mr-2"/>
            <div className="flex space-x-1">
              {locales?.map((l) => {
                return (
                  <Link
                    key={l}
                    href={asPath}
                    locale={l}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                      l === locale 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {l.toUpperCase()}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
