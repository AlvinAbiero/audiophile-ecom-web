"use client";
import CategoryLinks from "@/components/links/CategoryLinks";
import FooterLinks from "@/components/links/FooterLinks";
import NavLinks from "@/components/links/NavLinks";
import SocialLinks from "@/components/links/SocialLinks";

import Image from "next/image";

export default function Home() {
  return (
    <div className="text-gray-500 text-3xl p-8">
      <NavLinks />
      <CategoryLinks />
      <FooterLinks />
      <SocialLinks />
    </div>
  );
}
