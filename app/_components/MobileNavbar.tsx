"use client";
import Link from "next/link";
import { NAV_LINKS } from "./Navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface MobileNavbarProps {
  showSidebar: boolean | null;
  setShowSidebar: (value: boolean) => void;
}
const MobileNavbar = ({ showSidebar, setShowSidebar }: MobileNavbarProps) => {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  const outsideClickRef = useOutsideClick(() => setShowSidebar(false));

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex fixed  right-0 w-[240px] h-full flex-col justify-center gap-y-4 text-black dark:text-white bg-navgrey dark:bg-black z-50 sidebar px-8",
        showSidebar && "flex open"
      )}
    >
      {NAV_LINKS.map((item, index) => (
        <span key={index} onClick={() => setShowSidebar(false)}>
          <Link href={item.href}>
            <Button
              variant="nav"
              className={cn(
                "uppercase  ",
                pathname === item.href && "underline",
                isDarkTheme ? "text-booster-2-light" : "text-booster-2"
              )}
            >
              {item.title}
            </Button>
          </Link>
        </span>
      ))}
    </div>
  );
};

export default MobileNavbar;
