import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInOnScroll from "../animation/FadeInOnScroll";

const YX1Earphones = () => {
  return (
    <div className="grid grid-cols-2 gap-6 sm:gap-4 lg:gap-8">
      <FadeInOnScroll>
        <picture className="h-full block">
          <source
            media="(min-width: 992px)"
            srcSet="/images/home/desktop/image-earphones-yx1.jpg"
          />
          <source
            media="(min-width: 480px)"
            srcSet="/images/home/tablet/image-earphones-yx1.jpg"
          />
          <Image
            src="/images/home/mobile/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </picture>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="bg-gray-200 h-full rounded-lg relative flex items-center sm:items-start">
          <div className="p-6 sm:pl-8 lg:pl-24 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:pr-4">
            <h2 className="text-2xl font-bold mb-8 text-black">
              YX1 Earphones
            </h2>
            <Link href="/products/earphones/yx1-earphones">
              <span className="inline-block text-black border border-black px-6 py-2 text-sm font-semibold tracking-wider uppercase hover:bg-black hover:text-white transition">
                See Product
              </span>
            </Link>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
};

export default YX1Earphones;
