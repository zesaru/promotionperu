import Image from "next/image";
import React from "react";

import Layout from "../../components/Layout";

const gastronomyPage = () => {
  return (
    <Layout>
      <section className="flex items-center">
        <div className="mx-auto">
          <Image
            alt="Gastronomy"
            src="http://embperujapan.org/gastronomia/image_gastronomy.jpg"
            width={1500}
            height={660}
            sizes="96vw"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: 1600,
            }}
          />
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              ></a>
            </div>
          </nav>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <div className="relative">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg w-auto"
                  src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
                />
              </a>
              <div className="text-5xl text-white bg-gray-900 bg-opacity-50 p-4 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 font-bold">
                Tokyo
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <div className="relative">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg w-auto"
                  src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
                />
              </a>
              <div className="text-5xl text-white bg-gray-900 bg-opacity-50 p-4 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 font-bold">
                Tokyo
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <div className="relative">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg w-auto"
                  src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
                />
              </a>
              <div className="text-5xl text-white bg-gray-900 bg-opacity-50 p-4 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 font-bold">
                Tokyo
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <div className="relative">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg w-auto"
                  src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
                />
              </a>
              <div className="text-5xl text-white bg-gray-900 bg-opacity-50 p-4 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 font-bold">
                Tokyo
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <div className="relative">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg w-auto"
                  src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
                />
              </a>
              <div className="text-5xl text-white bg-gray-900 bg-opacity-50 p-4 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 font-bold">
                Tokyo
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <div className="relative">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg w-auto"
                  src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
                />
              </a>
              <div className="text-5xl text-white bg-gray-900 bg-opacity-50 p-4 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 font-bold">
                Tokyo
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <div className="relative">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg w-auto"
                  src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
                />
              </a>
              <div className="text-5xl text-white bg-gray-900 bg-opacity-50 p-4 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 font-bold">
                Tokyo
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <div className="relative">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg w-auto"
                  src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
                />
              </a>
              <div className="text-5xl text-white bg-gray-900 bg-opacity-50 p-4 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 font-bold">
                Tokyo
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default gastronomyPage;
