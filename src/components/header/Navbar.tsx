"use client";
import MenuIcon from "./MenuIcon";
import Logo from "../Logo";
import NavLinks from "../links/NavLinks";
import CartIcon from "./CartIcon";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div
        className="flex justify-between items-center relative z-50
            after:content-[''] after:absolute after:bottom-[-1.5rem] 
                   after:h-[1px] after:w-full after:bg-gray-300/80"
      >
        <MenuIcon />
        <Logo />
        <NavLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
