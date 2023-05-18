import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  name: string;
  imageSrc: string;
  imageAlt: string;
  city: string;
  facebook: string;
  homepage: string;
};

export default function CardR({
  name,
  imageSrc,
  facebook,
  homepage,
}: CardProps) {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <Link href={homepage ? homepage : facebook} target="_blank">
          <Image
            loading="lazy"
            className="hover:grow hover:shadow-lg"
            alt={name}
            src={imageSrc}
            height={400}
            width={300}
          />
        </Link>
        <div className="p-2 text-center">
          <p className="text-xl">{name}</p>
        </div>
      </div>
    </div>
  );
}
