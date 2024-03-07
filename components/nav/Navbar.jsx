"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
    {headerLinks.map((link) => {
      const isActive = pathname === link.route;
      
      return (
        <li
          key={link.route}
          className={`${
            isActive && 'text-indigo-500'
          } flex-center p-medium-16 whitespace-nowrap`}
        >
          <Link href={link.route}>
          <Button>
          {link.label}
          </Button>
          </Link>
        </li>
      )
    })}
  </ul>
  );
};

export default Navbar;
