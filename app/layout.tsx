import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "@/Theme/Providers";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

import { cn } from "@/lib/utils";
import { Inconsolata } from "next/font/google";
import { Inter } from "next/font/google";
import MobileNavbar from "./_components/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lowding",
  description: "Low Impact Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("tracking-wide", inconsolata.className)}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
