"use client";
import RsHeader from "./_components/RsHeader";
import Resources from "./_components/Resources";
import { useTheme } from "next-themes";

const Page = () => {
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  return (
    <div className="w-full h-auto">
      <RsHeader darkTheme={isDarkTheme} />
      <Resources darkTheme={isDarkTheme} />
    </div>
  );
};

export default Page;
