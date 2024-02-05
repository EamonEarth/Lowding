"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { consolaBold } from "@/lib/fonts";

const EcoSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [activated, setActivated] = useState(false);

  const isDarkTheme = resolvedTheme === "dark";
  const switchFrameSrc = isDarkTheme
    ? "/switch_frame_light.png"
    : "/switch_frame_dark.png";
  const switchBitSrc = !isDarkTheme ? "/off_switch_b.png" : "/on_switch_w.png";

  const handleThemeClick = () => {
    setActivated(!activated);
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="flex items-center tracking-tight ">
      <p
        className={cn(
          "uppercase text-md font-extrabold pr-2 underline text-foreground dark:text-foreground tracking-wide",
          consolaBold.className
        )}
      >
        eco mode {isDarkTheme ? "on" : "off"}
      </p>
      <Image
        onClick={handleThemeClick}
        src={switchFrameSrc}
        alt="frame"
        height={36}
        width={65}
      ></Image>
      <div>
        <Image
          src={switchBitSrc}
          alt="switch-flip"
          height={24}
          width={26}
          className={cn(
            "invert-color-and-roll relative right-[60px] pointer-events-none",
            activated && "activated"
          )}
        />
      </div>
      {/* <span className="relative right-[60px] md:pointer-events-none p-1 w-6 h-6 bg-black transition duration-500 dark:bg-white dark:rotate-180 dark:translate-x-5 rounded-s-lg rounded-r-sm"></span> */}
      {/* <div
        className={cn(
          "w-10 h-6 flex items-center  outline outline-2 dark:outline-white rounded-sm"
        )}
        onClick={handleThemeClick}
      >
      </div> */}
    </div>
  );
};

export default EcoSwitch;
