"use client";

import Hero from "@/components/home/Hero";
import AnimatedBestGear from "@/components/home/AnimatedBestGear";
import MainGallery from "@/components/home/MainGallery";
import CategoryLinks from "@/components/links/CategoryLinks";

export default function Home() {
  return (
    <div className="w-full mx-auto bg-white">
      <Hero />
      <div className="px-6 sm:px-12 lg:px-4 max-w-6xl pt-4 pb-24 mx-auto">
        <CategoryLinks />
        <MainGallery />
        <AnimatedBestGear />
      </div>
    </div>
  );
}
