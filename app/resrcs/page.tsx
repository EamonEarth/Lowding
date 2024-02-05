"use client";
import { useState } from "react";
import RsHeader from "./_components/RsHeader";
import Resources from "./_components/Resources";
import { cn } from "@/lib/utils";

const Page = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="w-full h-auto">
      <RsHeader />
      <Resources />
    </div>
  );
};

export default Page;
