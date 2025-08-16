import React from "react";
import Link from "next/link";
import Image from "next/image";
import FadeInOnScroll from "../animation/FadeInOnScroll";

const ZX9Speaker = () => {
  return (
    <FadeInOnScroll>
      <div
        className="flex flex-col lg:flex-row items-center lg:items-start gap-0 lg:gap-[6.625rem] px-6 pt-[3.4375rem] lg:pt-24 pb-[3.4375rem] lg:pb-0 rounded-lg overflow-hidden  bg-[url('/images/home/desktop/pattern-circles.svg')]
  bg-no-repeat
  bg-cover
  bg-orange-400/80
  bg-[position:50%_-8.125rem]
  md:bg-[position:50%_-16.125rem]
  lg:bg-[position:-15rem_-9.125rem]"
      >
        {/* Speaker Image */}
        <picture>
          <source
            media="(min-width: 992px)"
            srcSet="/images/home/desktop/image-speaker-zx9.png"
          />
          <source
            media="(min-width: 480px)"
            srcSet="/images/home/tablet/image-speaker-zx9.png"
          />
          <Image
            src="/images/home/mobile/image-speaker-zx9.png"
            alt="ZX9 Speaker"
            width={410}
            height={493}
            className="w-[10.625rem] sm:w-[12.3125rem] lg:w-[25.625rem] mb-8 lg:mb-0 mx-auto lg:ml-[7.3125rem] relative lg:top-3"
          />
        </picture>

        {/* Speaker Text */}
        <div className="lg:ml-[8.625rem] pt-0 lg:pt-8 text-center lg:text-left">
          <h2 className="text-white mx-auto lg:mx-0 mb-6 text-[2.25rem] lg:text-[3.5rem] font-bold tracking-[0.0806em] lg:tracking-[0.125em] leading-none max-w-[10ch]">
            ZX9 Speaker
          </h2>
          <p className="text-white/75 mx-auto lg:mx-0 mb-[4.0625rem] lg:mb-10 text-[0.9375rem] leading-[1.56] font-light max-w-[30ch] sm:max-w-[42ch] lg:max-w-[38ch]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="/speakers/zx9-speaker">
            <button className="bg-black hover:bg-[#4C4C4C] text-white px-8 py-3 uppercase tracking-widest cursor-pointer">
              See Product
            </button>
          </Link>
        </div>
      </div>
    </FadeInOnScroll>
  );
};

export default ZX9Speaker;
