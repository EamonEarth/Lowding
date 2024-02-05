"use client";
import { PiIcon } from "lucide-react";
import React, { use } from "react";
import { bungeeHairline } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";

const About = () => {
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";
  const topicHeaderSrc = isDarkTheme ? "/topic-black.svg" : "/topic-yellow.svg";
  return (
    <section>
      <div className="w-full h-auto flex flex-col justify-center items-center text-black dark:text-softyellow relative py-24 bg-softyellow  dark:bg-softblack">
        <Image
          src={topicHeaderSrc}
          alt="About the Topic"
          height={50}
          width={503}
          className="py-4"
        />
        <div className="flex gap-x-12  mx-6 md:mx-12 lg:mx-32 pt-14">
          <div className="flex flex-col justify-center ">
            <PiIcon className="w-7 h-7 pb-3" />
            <h3 className="text-xl font-semibold ">What is a low</h3>
            <p className="resize-none ">
              blach blachacsas csaldnsblach blachacsas csaldns blach blachacsas
              csaldnsblach blachacsas csaldns blach blachacsas csaldns blach
              blachacsas csaldnsblach blachacsas csaldns blach blachacsas
              csaldnsblach blachacnsblach blachac nsblach blachacnsblach blachac
              nsblach blachacnsblach blachacnsblach blachac nsblach
              blachacnsblach blachacnsblach blachaca
            </p>
          </div>
          <div className="flex flex-col justify-center  ">
            <PiIcon className="w-7 h-7 pb-3" />
            <h3 className="text-xl font-semibold ">Why?</h3>
            <p className="resize-none">
              {" "}
              blach blachacsas csaldnsblach blachacsas csaldns blach blachacsas
              csaldnsblach blachacsas csaldns blach blachacsas csaldns blach
              blachacsas csaldnsblach blachacsas csaldns blach blachacsas
              csaldnsblach blachacnsblach blachac nsblach blachacnsblach blachac
              nsblach blachacnsblach blachacnsblach blachac nsblach
              blachacnsblach blachacnsblach blachac blachacsas csaldnsa
            </p>
          </div>
          <div className="flex flex-col justify-center  ">
            <PiIcon className="w-7 h-7 pb-3" />
            <h3 className="text-xl font-semibold ">What role?</h3>
            <p className="resize-none">
              {" "}
              blach blachacsasblach blachacsas csaldnsblach blachacsas csaldns
              blach blachacsas csaldnsblach blachacsas csaldns blach blachacsas
              csaldns blach blachacsas csaldnsblach blachacsas csaldns blach
              blachacsas csaldnsblach blachacnsblach blachac nsblach
              blachacnsblach blachac nsblach blachacnsblach blachacnsblach
              blachac nsblach blachacnsblach blachacnsblach blachac csaldnsa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
