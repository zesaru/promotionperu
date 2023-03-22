import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from 'react-icons/fa'
import {TbWorldWww } from "react-icons/tb"

type CardProps = {
  name: string;
  imageSrc: string;
  imageAlt: string;
  city: string;
  facebook: string;
  homepage: string;
  phone: string;
  address: string;
};

export default function CardR({ name, imageSrc, city, facebook, homepage, phone, address }: CardProps) {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col ">
      <div className="relative ">
        <Link href="#">
          <Image
            loading="lazy"
            className="hover:grow hover:shadow-lg"
            alt={name}
            src={imageSrc}
            height={400}
            width={600}
          />
        </Link>
        <div className="p-2">
          <p className="text-xl ">{name}</p>
        </div>
        <div className="flex gap-4">
          { facebook &&
          <Link href={facebook}>
          <FaFacebook className="text-blue-700 hover:text-blue-500 w-8 h-8"/>
          </Link>             
          }
          { homepage &&
          <Link href={homepage}>
          <TbWorldWww className="text-orange-700 hover:text-orange-500 w-8 h-8"/>
          </Link>             
          }
        </div>
      </div>
    </div>
  );
}