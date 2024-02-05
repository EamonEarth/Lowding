"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Instagram, Menu, Youtube } from "lucide-react";
import EcoSwitch from "./EcoSwitch";
import Logo from "../about/Logo";

// about resources inspiration contact
export const NAV_LINKS = [
  {
    title: "about",
    href: "/about",
  },
  {
    title: "resources",
    href: "/resrcs",
  },
  {
    title: "inspiration",
    href: "/inspiration",
  },
  {
    title: "contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-[80px] absolute top-0  nav-grey dark:bg-black text-black dark:text-softyellow transition flex items-center px-2 z-50">
      <div id="logo" className="w-1/3  uppercase font-bold flex ml-4">
        <Logo />
      </div>
      <div id="nav" className="flex justify-around md:w-1/2">
        <div className="hidden md:flex">
          {NAV_LINKS.map((item, index) => (
            <Link href={item.href} key={index}>
              <Button
                variant="nav"
                className={cn(
                  "uppercase font-semibold",
                  pathname === item.href && "underline"
                )}
              >
                {item.title}
              </Button>
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <Menu />
        </div>
      </div>

      <div
        id="icons"
        className="absolute hidden md:flex right-10  items-center gap-x-2 "
      >
        <Instagram className="w-6 h-6" />
        <Youtube className="w-6 h-6" />
      </div>
      <div className="absolute top-28 right-6">
        <EcoSwitch />
      </div>
    </div>
  );
};

export default Navbar;
