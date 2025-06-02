"use client";

import ThemeToggler from "@/components/theme/toggler";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-auto md:h-screen overflow-y-auto md:overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto  flex flex-col my-2">
        <div className="w-full flex justify-between divide-x">
          <div className="flex-1 flex flex-col">
            <div
              id="nav"
              className="w-full flex items-center justify-end gap-4"
            >
              <div
                id="brand"
                className="font-mono text-sm flex-1 flex items-center h-full px-3"
              >
                <Link href="/" className="hover:underline">
                  {siteConfig.origin.replace("https://", "")}
                </Link>
              </div>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/sign-in" className="">
                Sign In
              </Link>
              <ThemeToggler className="size-10 md:size-14" />
            </div>
            <DashedContainer>
              <Link
                href="https://getderived.com/library/list/nextjs/"
                className="hover:underline"
              >
                Get Started: https://getderived.com/library/list/nextjs/
              </Link>
            </DashedContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashedContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2  hover:border-primary/50 bg-card text-xs md:text-sm flex items-center justify-between transition-all duration-200 delay-75">
      {children}
    </div>
  );
}
