"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { links } from "@/utils/links";

const HeadphonesPage = () => {
  const pathname = usePathname();

  // match current page with link data
  const current = links.find((link) => link.url === pathname);
  return (
    <div>
      <div className="w-full bg-black py-16 text-center text-white uppercase text-3xl tracking-widest">
        {current ? current.text.toUpperCase() : "PRODUCTS"}
      </div>
    </div>
  );
};

export default HeadphonesPage;
