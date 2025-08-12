"use client"
import React from 'react'
import Image from "next/image";
import { useUIStore } from "@/store/useUIStore";

const MenuIcon = () => {
    const {menuOpen, toggleMenu} = useUIStore()
  return (
    <button
    aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
    aria-expanded={menuOpen ? 'true' : 'false'}
    aria-haspopup='true'
    onClick={toggleMenu}
    className='p-2 rounded-full md:hidden cursor-pointer'
    >
        {menuOpen ? (
                <Image
                src="/images/shared/tablet/icon-close-menu.svg"
                width={22}
                height={20}
                aria-hidden="true"
                alt="Close menu"
                />
            ) : (
                <Image
                src="/images/shared/tablet/icon-hamburger.svg"
                width={22}
                height={20}
                aria-hidden="true"
                alt="Open menu"
                />
            )}
    </button>
  )
}

export default MenuIcon