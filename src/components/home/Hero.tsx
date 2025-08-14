import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const Hero = () => {
  return (
    <MotionDiv
      className="relative bg-black z-[1]  pt-24 md:pt-32 lg:pt-40 pb-28 text-center lg:text-left w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Background Image */}
      {/* <div className="absolute inset-0 -top-24 z-[-1] bg-center  bg-no-repeat bg-[url('/images/home/mobile/image-hero.jpg')] sm:bg-[url('/images/home/tablet/image-hero.jpg')] lg:bg-[url('/images/home/desktop/image-hero.jpg')]"></div> */}
      {/* Mobile background */}
      <div className="absolute inset-0 -top-24 z-[-1] bg-center bg-no-repeat bg-[url('/images/home/mobile/image-hero.jpg')] sm:hidden"></div>

      {/* Tablet background */}
      <div className="absolute inset-0 -top-24 z-[-1] bg-center bg-no-repeat bg-[url('/images/home/tablet/image-hero.jpg')] hidden sm:block lg:hidden"></div>

      {/* Desktop background */}
      <div className="absolute inset-0 -top-24 z-[-1] bg-center bg-no-repeat bg-[url('/images/home/desktop/image-hero.jpg')] hidden lg:block"></div>

      {/* Container */}
      <MotionDiv
        className="max-w-7xl lg:px-16 px-4 mx-auto w-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 2 },
        }}
      >
        <h1
          className="text-white max-w-[15ch] mx-auto lg:mx-0 mb-6 tracking-[0.0806rem] leading-[1.1] 
          text-[2.25rem] lg:text-[3.5rem] font-bold"
        >
          <strong className="block text-gray-300 uppercase mb-4 tracking-[0.625rem] text-[0.875rem] font-normal">
            New Product
          </strong>
          XX99 Mark II Headphones
        </h1>

        <p className="text-gray-300 text-[0.9375rem] max-w-[38ch] mx-auto lg:mx-0 mb-10 leading-[1.7]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <Link href="/products/headphones/xx99-mark-two-headphones" passHref>
          <button className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 uppercase tracking-wider text-sm cursor-pointer">
            See Product
          </button>
        </Link>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Hero;
