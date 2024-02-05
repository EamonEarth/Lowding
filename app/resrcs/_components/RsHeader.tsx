import React from "react";
import { bungeeHairline } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const RsHeader = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section className="pt-[80px]">
      <div
        className="absolute w-full h-[364px] bg-cover bg-center z-0 opacity-50 "
        style={{ backgroundImage: "url('/resources-header.png')" }}
      ></div>
      <div className=" absolute w-full h-[364px] bg-background bg-cover bg-center z-0 opacity-0 dark:opacity-70  dark:display"></div>

      <div
        className={cn(
          "w-full h-[364px] z-50 flex items-center justify-center text-4xl lg:text-6xl uppercase ",
          bungeeHairline.className
        )}
      ></div>
    </section>
  );
};

export default RsHeader;
