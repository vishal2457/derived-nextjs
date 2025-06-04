import { Button } from "../ui/button";
import { siteConfig } from "../../config/site.config";
import ThemeToggler from "../theme/toggler";
import { UserProfile } from "../user-profile";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div
      id="nav"
      className="border-b border-dashed flex items-center justify-between"
    >
      <div
        id="brand"
        className="h-full md:border-r border-dashed w-[300px] flex items-center justify-center"
      >
        <Button
          variant="ghost"
          className="w-full h-full font-heading text-lg md:text-2xl font-bold"
          asChild
        >
          <Link href="/">
            <span>{siteConfig.name}</span>
          </Link>
        </Button>
      </div>
      <div className="flex-1 flex items-center justify-end h-full border-dashed divide-x">
        <ThemeToggler className="h-full border-dashed" />
        <UserProfile />
      </div>
    </div>
  );
};
