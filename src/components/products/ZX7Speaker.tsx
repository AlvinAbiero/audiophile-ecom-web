import React from "react";
import Link from "next/link";
import Image from "next/image";
import FadeInOnScroll from "../animation/FadeInOnScroll";

const ZX7Speaker = () => {
  return (
    <FadeInOnScroll>
      <div className="relative rounded-lg overflow-hidden">
        <picture>
          <source
            media="(min-width: 62em)"
            srcSet="/images/home/desktop/image-speaker-zx7.jpg"
          />
          <source
            media="(min-width: 30em)"
            srcSet="/images/home/tablet/image-speaker-zx7.jpg"
          />
          <Image
            src="/images/home/mobile/image-speaker-zx7.jpg"
            alt="ZX7 Speaker"
            width={654} // adjust to your actual image width
            height={240} // adjust to your actual image height
            className="w-full object-cover"
            priority
          />
        </picture>

        {/* Overlay text and button */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-[3.875rem] lg:left-[5.9375rem]">
          <h2 className="mb-8 text-[1.75rem] font-bold text-black">
            ZX7 Speaker
          </h2>
          <Link href="/speakers/zx7-speaker">
            <button className="border border-black px-6 py-2 uppercase tracking-wider text-sm font-medium text-black hover:bg-black hover:text-white transition cursor-pointer">
              See Product
            </button>
          </Link>
        </div>
      </div>
    </FadeInOnScroll>
  );
};

export default ZX7Speaker;
