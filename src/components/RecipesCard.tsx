import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  title: string;
  image: string;
  slug: string;
};

export default function CardRecipes({
  title,
  image,
  slug,
}: CardProps) {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <div className="flex flex-col justify-center items-center">
      
        <Link href={`/recipes/${slug}`} >
          <Image
            loading="lazy"
            className="hover:grow hover:shadow-lg rounded-xl"
            alt={title}
            src={image}
            height={450}
            width={300}
            priority={false}
          />
        </Link>
        <div className="p-2 text-center">
          <p className="text-xl">{title}</p>
        </div>
      </div>
    </div>
  );
}
