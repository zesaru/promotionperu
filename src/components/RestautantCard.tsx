import Link from "next/link";
import Image from "next/image";
import React from "react";

type CardProps = {
  name: string;
  imageSrc: string;
  imageAlt: string;
  city: string;
};

export default function CardR({ name, imageSrc, city }: CardProps) {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <div className="relative">
        <Link href={`/restaurants/${city}`}>
          <Image
            loading="lazy"
            className="hover:grow hover:shadow-lg"
            alt={name}
            src={imageSrc}
            width={600}
            height={400}
          />
        </Link>
        <div>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}