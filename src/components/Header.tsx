import Image from "next/image";
import Link from "next/link";

const menus = ["Gastronomy", "Products", "Investing in Peru", "150 años"];
export default function Header() {
  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center md:justify-between  mt-0 px-6 py-3">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
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
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center align-middle justify-between gap-3 text-base text-gray-600 pt-4 md:pt-0">
              {menus.map((item) => (
                <li className="md:border-b-4  md:border-red-600" key={item}>
                  <Link
                    className="inline-block no-underline py-2 px-4 "
                    href="/gastronomy"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
            <span className="px-1">PERUINJAPAN</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
