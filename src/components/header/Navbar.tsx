"use client"
import MenuIcon from "./MenuIcon";
import Logo from "../Logo";
import NavLinks from "../links/NavLinks";
import CartIcon from "./CartIcon";

const Navbar = () => {
  return <div className='max-w-7xl mx-auto px-6'>
     <div
        className="flex justify-between items-center relative z-50
                   md:after:content-[''] md:after:absolute md:after:bottom-[-2rem] 
                   md:after:h-[1px] md:after:w-full md:after:bg-gray-300/80"
      >
        <MenuIcon />
        <Logo />
        <NavLinks />
        <CartIcon />
      </div>
  </div>;
};

export default Navbar;
