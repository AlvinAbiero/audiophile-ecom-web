"use client";
import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="bg-black pt-8 pb-6 max-w-7xl lg:px-12 mx-auto">
      <Navbar />
      <MobileNav />
    </header>
  );
};

export default Header;
