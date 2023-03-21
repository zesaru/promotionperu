import Link from "next/link";
import Image from "next/image";
import React from "react";
import { urlForImage } from "../../lib/sanity.image";

type CardProps = {
  name: string;
  imageSrc: string;
  imageAlt: string;
  city: string;
};

export default function Card({ name, imageSrc, imageAlt, city }: CardProps) {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <div className="relative">
        <Link href={`/restaurants/${city}`}>
          <Image
            className="hover:grow hover:shadow-lg"
            alt={imageAlt}
            src={urlForImage(imageSrc).url()}
            width={836}
            height={556}
          />
        </Link>
        <div className="text-5xl text-white bg-gray-900 bg-opacity-50 p-4 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 font-bold">
          {name}
        </div>
      </div>
    </div>
  );
}
