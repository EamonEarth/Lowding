"use client";
import { Button } from "@/components/ui/button";
import { consola } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { consolaBold } from "@/lib/fonts";
import Link from "next/link";

const Header = () => {
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  const headerSrc = isDarkTheme
    ? "/centered-logo-white.png"
    : "/centered-logo-dark.png";
  console.log("hey");
  return (
    <section className="pt-[80px]">
      <div
        className="absolute w-full h-[545px] bg-cover bg-center z-0  "
        style={{ backgroundImage: "url('/Home_Header_Banner.jpg')" }}
      ></div>

      <div className="absolute w-full h-[545px] z-1 bg-background opacity-70 dark:hidden"></div>

      <div className="w-full h-[545px] flex flex-col justify-center items-center gap-y-4 z-10 relative top-8 ">
        <Image
          src={`${headerSrc}`}
          alt="logo"
          width={300}
          height={100}
          // className=
          // className="blink transition-all"
        />
        <p
          className={cn(
            "text-2xl text-center min-w-[20%] max-w-[66%] md:pb-4 tracking-wider text-foreground dark:text-softyellow ",
            consolaBold.className
          )}
        >
          Take action for a sustainable digital future!
          <br></br>
          Learn about Low Impact Websites and explore online resources to create
          eco-friendly sites.
        </p>
        <div className="flex flex-col md:flex-row gap-x-4 pb-20">
          <Button className="uppercase bg-white  border-2 font-bold border-black  rounded-none text-black hover:bg-white">
            Learn More
          </Button>
          <Link href="/resrcs">
            <Button className="uppercase bg-black border-2 dark:text-white border-white font-bold rounded-none hover:bg-black">
              Go to Resources
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
