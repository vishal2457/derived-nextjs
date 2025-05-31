"use client";

import ThemeToggler from "@/components/theme/toggler";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import { Check, Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [copied2, setCopied2] = useState(false);

  return (
    <div className="w-full h-auto md:h-screen overflow-y-auto md:overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto border border-dashed flex flex-col my-2">
        <div className="w-full flex justify-between divide-x">
          <div className="flex-1 flex flex-col">
            <div
              id="nav"
              className="w-full flex items-center justify-end border-b border-dashed divide-x"
            >
              <div
                id="brand"
                className="font-mono text-sm flex-1 flex items-center h-full px-3 border-dashed"
              >
                <Link href="/" className="hover:underline">
                  {siteConfig.origin.replace("https://", "")}
                </Link>
              </div>

              <ThemeToggler className="border-dashed size-10 md:size-14" />
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
    <div className="p-2 border border-dashed hover:border-primary/50 bg-card text-xs md:text-sm flex items-center justify-between transition-all duration-200 delay-75 rounded-md">
      {children}
    </div>
  );
}
