"use client";
import React from "react";
import Navbar from './Navbar'
import MobileNav from "./MobileNav";


const Header = () => {
  return ( <header
      className="bg-black py-8 border-b border-gray-100/80 md:border-none"
    >
      <Navbar />
      <MobileNav />
    </header>);
};

export default Header;
