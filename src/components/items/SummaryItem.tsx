import React from "react";
import Image from "next/image";
import CartItem from "@/models/CartItem";

const SummaryItem = ({ item }: { item: CartItem }) => {
  return (
    <div
      key={item.id}
      className="flex items-center gap-2 relative w-full  last:not-first:after:content-[''] last:not-first:after:absolute 
      last:not-first:after:w-full last:not-first:after:h-px 
      last:not-first:after:left-0 last:not-first:after:-bottom-2 
      last:not-first:after:bg-black/10"
    >
      <Image
        src={item.cartImage}
        alt={item.shortName}
        width={64} // 4rem
        height={64}
        className="rounded-lg"
      />
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="font-bold text-[0.9375rem] text-black uppercase">
            {item.shortName}
          </p>
          <p className="font-bold text-[0.9375rem]">x{item.quantity}</p>
        </div>
        <p className="font-bold text-[0.875rem]">
          $ {item.price.toLocaleString("en-US")}
        </p>
      </div>
    </div>
  );
};

export default SummaryItem;
