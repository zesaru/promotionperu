import { apiVersion, dataset, projectId } from "lib/sanity.api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { createClient, groq } from "next-sanity";
import { BsTranslate } from "react-icons/bs";

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
    { locale: "jp", title: "ガストロノミー", slug: "gastronomy" },
    { locale: "jp", title: "ペルー食品", slug: "products" },
    { locale: "jp", title: "ペルーへの投資", slug: "investing-in-peru" },
    {
      locale: "jp",
      title: "外交関係樹立150周年",
      slug: "150-years-of-diplomatic-relations",
    },
  ],
};

export default function Header() {
  const { locale, locales, asPath } = useRouter();

  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center md:justify-between  mt-0 px-6 py-3">
        <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full order-3 lg:order-1"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center align-middle justify-between gap-3 text-base text-gray-600 pt-4 md:pt-0">
              {navBar.menus
                .filter((item) => item.locale === locale)
                .map((item, i) => (
                  <li
                    className="lg:border-b-4  lg:border-red-600"
                    key={item.title}
                  >
                    <Link
                      className="inline-block no-underline py-2 px-4 "
                      href={`/${item.slug}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          <div className="flex px-2 ">
          <BsTranslate className="text-lg"/>
            {locales?.map((l, i) => {
              return (
                <span
                  key={i}
                  className={
                    l === locale ? "hidden" : "bg-red-400 text-white rounded-md"
                  }
                >
                  
                  <Link href={asPath} locale={l} className="p-1">
                    {l.toUpperCase()}
                  </Link>
                </span>

              );
            })}
          </div>
        </div>
        <div className="order-1 md:order-2 mx-auto md:mr-0">
          <Link
            className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl md:gap-1"
            href="/"
          >
            <Image
              src="/apple-touch-icon.png"
              height="35"
              width="35"
              alt="escudo del peru"
            />
            <span className="w-1 h-8 bg-red-500 border border-red-600"></span>
            <span className="px-1 lg:flex">PERUINJAPAN </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
