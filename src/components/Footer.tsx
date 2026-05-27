import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="container mx-auto border-t border-gray-400 bg-white py-5 sm:py-8">
      <div className="container flex px-3 py-5 sm:py-8">
        <div className="mx-auto flex w-full flex-wrap gap-y-6 sm:gap-y-0">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-3 md:px-0">
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">About</h3>
              <p className="py-3 text-base leading-8 sm:py-4 sm:text-lg sm:leading-9">
                The images related to Peru are copyright protected by ©PromPeru.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div className="px-3 md:px-0">
              <div className="">
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">Social</h3>
              </div>
              <div className="flex w-full justify-start pt-2">
                <div className="flex gap-3 sm:gap-2">
                  <a
                    className="px-3 py-1 no-underline hover:text-black sm:p-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/embajadadelperuenjapon"
                  >
                    <FaFacebook className="h-7 w-7 text-blue-700 hover:text-blue-500 sm:h-8 sm:w-8" aria-label="Facebook" />
                  </a>
                  <a
                    className="px-3 py-1 no-underline hover:text-black sm:p-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://x.com/peruinjapan"
                  >
                    <FaXTwitter className="h-7 w-7 text-black sm:h-8 sm:w-8" aria-label="X" />
                  </a>

                  <a
                    className="px-3 py-1 no-underline hover:text-black sm:p-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/peruinjapan/"
                  >
                    <FaInstagram className="h-7 w-7 text-pink-600 hover:text-pink-400 sm:h-8 sm:w-8" aria-label="Instagram" />
                  </a>

                  <a
                    className="px-3 py-1 no-underline hover:text-black sm:p-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/@embajadadelperuenjapon"
                  >
                    <FaYoutube className="h-7 w-7 text-red-600 hover:text-red-400 sm:h-8 sm:w-8" aria-label="Youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
