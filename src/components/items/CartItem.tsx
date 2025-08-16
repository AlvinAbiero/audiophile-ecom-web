"use client";
import React from "react";
import Image from "next/image";
import ProductQuantity from "../products/ProductQuantity";
import { useCartStore } from "@/store/useCartStore";
import { CartItemType } from "@/models/CartItem";

const CartItem = (item: CartItemType) => {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <div className="flex justify-between items-center list-none">
      <div className="flex items-center">
        <Image
          src={item.cartImage}
          width={64}
          height={64}
          alt={item.shortName}
          className="rounded-md"
        />
        <div className="ml-4">
          <p className="font-bold text-[0.9375rem] text-black uppercase">
            {item.shortName}
          </p>
          <p className="font-bold text-sm text-gray-400">
            $ {item.price.toLocaleString("en-US")}
          </p>
        </div>
      </div>

      <ProductQuantity
        quantity={item.quantity}
        increment={() => increaseQuantity(item.id)}
        decrement={() => decreaseQuantity(item.id)}
        width="w-[6rem]"
        height="h-[2rem]"
      />
    </div>
  );
};

export default CartItem;
