import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative bottom-0 h-[70px] w-full nav-grey dark:bg-black dark:text-background z-50 flex items-center justify-center">
      <div className="flex justify-center items-center relative top-3">
        <div className="flex justify-around inset-x-1/3 gap-x-16">
          <p className="text-gray-500 text-xs">Berlin, Germany</p>
          <Link href="/about">
            <Image
              src="/pl-white.png"
              alt="PL"
              height={30}
              width={37}
              className="relative bottom-2"
            />
          </Link>
          <Link
            href="/privacy"
            className="text-gray-500 text-xs tracking-tight hover:underline"
          >
            <p>privacy policy</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
