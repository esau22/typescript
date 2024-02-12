//import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { cn } from "@/libs/utils";

const inter = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Auth",
  description: "Auth",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("bg-dark text-gray-300", inter.className)}>
        <main className="lg:pl-[24vw] xl:pl-[13vw] px-5 xl:px-0 container mx-auto py-5 lg:py-8">
          {children}
        </main>
        {/*<main className="lg:pl-[13vw] px-5 lg:px-0">{children}</main>*/}
      </body>
    </html>
  );
}
