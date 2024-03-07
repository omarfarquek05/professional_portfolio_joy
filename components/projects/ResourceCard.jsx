"use client"

import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'


const ResourceCard = ({  title, id, image, downloadNumber, downloadLink,  projecturl}) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={downloadLink} target="_blank">
        <CardHeader className="flex justify-center items-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image 
              src={image}
              className="h-full rounded-md object-cover"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="text-[20px] font-semibold leading-[26px] 
           line-clamp-1 w-full text-center">{title}</CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex justify-between items-center mt-4 p-0">
        <div className="flex justify-center items-center  text-[16px] font-medium leading-[22.4px] gap-1.5 ">
          <Image 
            src="/downloads.svg" width={20} height={20} alt="download"
          />
          {downloadNumber}
        </div>
        <Link href={downloadLink} target="_blank" className="flex justify-center items-center
         text-gradient_purple-blue text-[16px] font-semibold leading-[20.8px] gap-1.5">
          view source code
          <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
        </Link>

        <Link href={ projecturl} target="_blank" className="flex justify-center items-center
         text-gradient_purple-blue text-[16px] font-semibold leading-[20.8px] gap-1.5">
          view project
          <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
        </Link>

      </CardContent>
    </Card>
  )
}

export default ResourceCard