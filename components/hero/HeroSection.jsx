"use clinet";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { PortableText } from "@portabletext/react";


const HeroSection = ({ cvDownloadLink,author, title, authorImage, content}) => {
  return (
    <section className="">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">

        <div className="flex flex-col justify-center gap-2">
          <h1 className="h1-bold  text-transparent bg-clip-text bg-gradient-to-r
         from-blue-500 via-yellow-400 to-indigo-600 whitespace-nowrap " >
            {author}
          </h1>
          <p className="p-regular-20 md:p-regular-24 pb-2">
           {title}
          </p>
          <div className="p-regular-10 md:p-regular-15 tracking-normal sm:tracking-wide">
          <PortableText value={content} />
          </div>

          <div className="flex gap-2"> 
          <Button size="lg" asChild className="button w-full sm:w-fit">
            <Link href="#skills">Explore Now</Link>
          </Button>

          <Button size="lg" asChild className="button w-full sm:w-fit">
            <Link href={cvDownloadLink} target="_blank">Download Resume</Link>
          </Button>
          </div>

        </div>

        <Image priority
          src={authorImage}
          alt="hero"
          width={1000}
          height={1000}
          className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] rounded-full 
        bg-gradient-to-r from-gray-600 from-10% via-indigo-500 via-30%  to-indigo-400 to-90%"
        />
      </div>
    </section>
  );
};

export default HeroSection;
