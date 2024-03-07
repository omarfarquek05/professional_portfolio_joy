"use client";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"
  import Navbar from "./Navbar";
  import Image from "next/image";
  import { CiMenuFries } from "react-icons/ci";
  import { BsEmojiSunglasses } from "react-icons/bs";


const MobileNav = () => {
  return (
    <nav className="md:hidden">
    <Sheet>
  <SheetTrigger>
  <CiMenuFries className=" text-3xl"/>
  </SheetTrigger>

  <SheetContent className="className=flex flex-col gap-6 md:hidden">
  <BsEmojiSunglasses className="text-3xl "/>
<Separator className="border border-gray-50 mt-3" />
<Navbar />
  </SheetContent>
</Sheet>

  </nav>
  )
}

export default MobileNav