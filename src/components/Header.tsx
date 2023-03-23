import Link from "next/link";

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
            <ul className="md:flex items-center justify-between gap-2 text-base text-gray-700 pt-4 md:pt-0">
              <li className="md:border-b-4  md:border-red-700">
                <Link
                  className="inline-block no-underline  py-2 px-4 "
                  href="/restaurants"
                >
                  La gastronomía
                </Link>
              </li>
              <li className="border-b-4 border-red-700">
                <Link
                  className="inline-block no-underline  py-2 px-4 "
                  href="/pisco"
                >
                  Productos
                </Link>
              </li>
              <li className="border-b-4 border-red-700">
                <Link
                  className="inline-block no-underline py-2 px-4"
                  href="/cacao"
                >
                  Invertir en el Perú
                </Link>
              </li>
              <li className="border-b-4  border-red-700">
                <Link
                  className="inline-block no-underline py-2 px-4"
                  href="/coffee"
                >
                  150 años
                </Link>
              </li>
            </ul>
          </nav>
        </div>
          <div className="order-1 md:order-2 mx-auto md:mr-0">
            <Link
              className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              href="/"
            >
              PERUINJAPAN
            </Link>
          </div>
      </div>
    </nav>
  );
}
