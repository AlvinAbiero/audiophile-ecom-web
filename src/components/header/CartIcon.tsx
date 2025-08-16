"use client";

import React from "react";
import Image from "next/image";
import { useUIStore } from "@/store/useUIStore";
import { useCartStore } from "@/store/useCartStore";

const CartIcon = () => {
  const openCart = useUIStore((state) => state.toggleCart);
  const totalQuantity = useCartStore((state) => state.getTotalQuantity());

  return (
    <button
      onClick={openCart}
      aria-label="Show Cart"
      className="relative bg-transparent border-none p-0 hover:opacity-80 transition cursor-pointer"
    >
      <Image
        src="/images/shared/desktop/icon-cart.svg"
        width={23}
        height={21}
        alt="Cart"
      />
      {!!totalQuantity && (
        <span className="absolute top-[-0.375rem] right-[-0.65rem] flex items-center justify-center w-4 h-4 rounded-full bg-orange-500 text-white text-[0.8125rem]">
          {totalQuantity}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
