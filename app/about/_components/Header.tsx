"use client";
import { Button } from "@/components/ui/button";
import { consola } from "@/app/styles/fonts/fonts";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect } from "react";
import { consolaBold } from "@/app/styles/fonts/fonts";
import Link from "next/link";
import { bungeeHairline } from "@/app/styles/fonts/fonts";

interface HeaderProps {
  setScrollToAbout: (value: boolean) => void;
}

const Header = ({ setScrollToAbout }: HeaderProps) => {
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  const headerSrc = isDarkTheme
    ? "/centered-logo-white.png"
    : "/centered-logo-dark.png";

  return (
    <section className="pt-[80px]">
      <div
        className="absolute w-full h-[545px] bg-cover bg-center z-0  "
        style={{ backgroundImage: "url('/home_header_banner.jpg')" }}
      ></div>

      <div
        id="OVERLAY"
        className="absolute w-full h-[545px] z-10 bg-foreground opacity-50 dark:hidden"
      ></div>

      <div className="w-full h-[545px] flex flex-col justify-center items-center gap-y-4 z-10 relative top-8 ">
        <Image
          src={headerSrc}
          alt="logo"
          width={300}
          height={100}
          //
        />
        <p
          className={cn(
            "text-2xl  text-center min-w-[20%] md:max-w-[66%] md:pb-4 tracking-wider text-black dark:text-foreground ",
            consolaBold.className
          )}
        >
          Take action for a sustainable digital future!
          <br></br>
          Learn about Low Impact Websites and explore online resources to create
          eco-friendly sites.
        </p>
        <div
          className={cn(
            "flex flex-col md:flex-row gap-x-4 gap-y-1 pb-20 text-booster-1",
            bungeeHairline.className
          )}
        >
          <Button
            onClick={() => setScrollToAbout(true)}
            className="uppercase bg-foreground  border-2 font-bold border-black  rounded-none text-black "
          >
            Learn More
          </Button>
          <Link href="/resrcs">
            <Button className="uppercase bg-black border-2 text-white dark:text-white border-foreground font-bold rounded-none hover:bg-black">
              Go to Resources
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
