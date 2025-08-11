"use client";
import React from "react";
import Logo from "./Logo";
import FooterLinks from "./links/FooterLinks";
import SocialLinks from "./links/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black md:mt-[7.5rem] lg:mt-[12.5rem] mt-[6rem] relative">
      <div className="absolute w-30 h-[.35rem] bg-orange-400 top-0 left-6"></div>
      <div className="container pb-[2rem] max-w-7xl pt-[3.25rem] md:pt-[3.75rem] lg:pt-[4.5rem] relative mx-auto px-6">
        <div className="md:flex md:gap-[3rem] flex-column md:space-y-0 space-y-5 md:justify-between lg:w-full">
          <Logo />
          <FooterLinks />
        </div>
        {/* grid */}
        <div className="grid gap-8 mt-12 md:grid-cols-[50%_1fr] md:grid-rows-[auto_auto] md:gap-12">
          {/* a -> Main paragraph */}
          <p className="order-1 md:col-start-1 md:row-start-1 text-gray-200/80 max-w-prose">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility – we’re open 7 days a week.
          </p>

          {/* b -> Copyright + mobile socials (they share one row on mobile) */}
          <div className="order-2 md:col-start-1 md:row-start-2 flex items-center justify-between">
            <p className="text-gray-200 text-md">
              Copyright {currentYear}. All Rights Reserved
            </p>

            {/* mobile-only socials: visible on small screens, hidden at md+ */}
            <div className="md:hidden">
              <SocialLinks />
            </div>
          </div>

          {/* c -> Desktop socials: hidden on mobile, placed in right column on md+ */}
          <div className="order-3 hidden md:flex md:col-start-2 md:row-span-2 md:justify-self-end md:self-center">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
