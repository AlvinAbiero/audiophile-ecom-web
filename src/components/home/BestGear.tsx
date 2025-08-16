import React from "react";

const BestGear = () => {
  return (
    <div className="mt-28 flex flex-col items-center gap-10 text-center lg:flex-row lg:text-left lg:items-center">
      {/* Image Section */}
      <picture className="flex-1 order-1 lg:order-2 lg:ml-[1.875rem] rounded-md">
        <source
          media="(min-width: 1024px)"
          srcSet="/images/shared/desktop/image-best-gear.jpg"
        />
        <source
          media="(min-width: 640px)"
          srcSet="/images/shared/tablet/image-best-gear.jpg"
        />
        <img
          src="/images/shared/mobile/image-best-gear.jpg"
          alt="man listening to music with headphones"
          className="rounded-sm object-cover w-full"
        />
      </picture>
      {/* Text */}
      <div className="flex-1 order-1 lg:order-1">
        <h2 className="uppercase mb-8 sm:mb-10 tracking-[0.0894rem] max-w-[20ch] sm:max-w-[25ch] lg:max-w-[22ch] mx-auto lg:mx-0 text-[1.75rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.75rem] font-bold text-black">
          Bringing you the <span className=" text-orange-400">best</span> audio
          gear
        </h2>
        <p className="px-0 sm:px-8 md:px-16 lg:px-0 lg:pr-8 text-gray-400 leading-[1.75rem]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default BestGear;
