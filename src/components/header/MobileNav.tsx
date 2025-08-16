"use client";
import { useUIStore } from "@/store/useUIStore";
import CategoryLink from "../links/CategoryLink";
import { links } from "@/utils/links";
import React from "react";

const MobileNav = () => {
  const menuOpen = useUIStore((state) => state.menuOpen);
  return (
    <nav
      className={`absolute top-[5.625rem] left-0 w-full bg-white px-6 pb-8 rounded-b-lg z-50 transition-all duration-500 ease-in-out lg:hidden ${
        menuOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-full"
      }`}
    >
      <div className="sm:flex-row flex-column space-y-16 sm:space-y-0 gap-2 mt-20">
        {links.slice(1).map((link) => (
          <CategoryLink {...link} key={link.id} />
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
