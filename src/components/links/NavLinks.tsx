"use client";
import React from "react";

import { links } from "@/utils/links";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden md:block">
      <div className="flex gap-6 uppercase text-white tracking-wider text-[1rem] font-[500]">
        {links.map((link) => {
          const isActive = pathname === link.url;

          return (
            <Link
              key={link.id}
              href={link.url}
              className={`hover:text-orange-400 transition ${
                isActive ? "text-orange-400 font-bold" : "text-white"
              }`}
            >
              {link.text}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavLinks;
