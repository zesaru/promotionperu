import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
      <div className="container flex px-3 py-8 ">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-3 md:px-0">
              <h3 className="font-bold text-gray-900">About</h3>
              <p className="py-4">
                The images related to Peru are copyright protected by ©PromPeru.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div className="px-3 md:px-0">
              <div className="">
                <h3 className="font-bold text-gray-900 ">Social</h3>
              </div>
              <div className="flex w-full justify-start py-2">
                <div className="flex gap-2">
                  <a
                    className="p-4 no-underline hover:text-black py-1 "
                    target="_blank"
                    href="https://www.facebook.com/embajadadelperuenjapon"
                  >
                    <FaFacebook className="text-blue-700 hover:text-blue-500 w-8 h-8" aria-label="Facebook" />
                  </a>
                  <a
                    className="p-4 no-underline hover:text-black py-1"
                    target="_blank"
                    href="https://twitter.com/peruinjapan"
                  >
                    <FaTwitter className="text-blue-500 w-8 h-8" aria-label="Twitter"/>
                  </a>

                  <a
                    className="p-4 no-underline hover:text-black py-1"
                    target="_blank"
                    href="https://www.instagram.com/peruinjapan/"
                  >
                    <FaInstagram className="text-pink-600 hover:text-pink-400 w-8 h-8" aria-label="Instagram" />
                  </a>

                  <a
                    className="p-4 no-underline hover:text-black py-1"
                    target="_blank"
                    href="https://www.youtube.com/@embajadadelperuenjapon"
                  >
                    <FaYoutube className="text-red-600 hover:text-red-400 w-8 h-8" aria-label="Youtube" />
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
