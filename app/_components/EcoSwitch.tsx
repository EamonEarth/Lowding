"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { consolaBold } from "@/app/styles/fonts/fonts";

const EcoSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [activated, setActivated] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleThemeClick = () => {
    setActivated(!activated);
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isDarkTheme = resolvedTheme === "dark";
  const switchFrameSrc = isDarkTheme
    ? "/switch_frame_light.png"
    : "/switch_frame_dark.png";
  const switchBitSrc = !isDarkTheme ? "/off_switch_b.png" : "/on_switch_w.png";

  return (
    <div className={cn("flex items-center tracking-tight  md:max-w-auto")}>
      <p
        className={cn(
          "uppercase  text-xs md:text-base font-extrabold pr-2 md:underline text-black dark:text-foreground tracking-",
          consolaBold.className,
          isDarkTheme ? "eco-booster-1-light" : "eco-booster-1"
        )}
      >
        eco-mode:{isDarkTheme ? "on" : "off"}
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
    </div>
  );
};

export default EcoSwitch;
