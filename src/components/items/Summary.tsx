"use client";
import React from "react";
import Image from "next/image";
import { useEffect, Dispatch, SetStateAction } from "react";
import useCartTotals from "@/_hooks/useCartTotals";
import { useCartStore } from "@/store/useCartStore";
import { SHIPPING_FEE } from "@/constants/fees";
import SummaryLine from "./SummaryLine";

const Summary = ({
  isDisabled,
  setIsDisabled,
}: {
  isDisabled: boolean;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
}) => {
  const items = useCartStore((state) => state.cart);
  const { cartTotal, tax, grandTotal } = useCartTotals();

  useEffect(() => {
    setIsDisabled(items.length < 1);
  }, [items, setIsDisabled]);
  return (
    <div className="px-6 sm:px-8 py-8 bg-white w-full lg:w-auto flex-grow">
      <h2 className="text-lg tracking-[0.0806rem] font-bold uppercase text-black">
        Summary
      </h2>

      {items.length > 0 ? (
        <ul className="mt-8 flex flex-col gap-6">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-6">
              <Image
                src={item.cartImage}
                width={64}
                height={64}
                alt={item.shortName}
                className="rounded-lg"
              />
              <div className="w-full">
                <div className="flex justify-between w-full">
                  <p className="font-bold text-[0.9375rem] text-black uppercase">
                    {item.shortName}
                  </p>
                  <p className="font-bold text-[0.9375rem]">x{item.quantity}</p>
                </div>
                <p className="font-bold text-sm">
                  $ {item.price.toLocaleString("en-US")}
                </p>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p className="text-center mt-6 font-bold text-gray-400/80">
          No Items in cart
        </p>
      )}

      <div className="mt-8 text-gray-400">
        <SummaryLine name="total" amount={cartTotal} />
        <SummaryLine name="shipping" amount={SHIPPING_FEE} />
        <SummaryLine name="vat (included)" amount={tax} />
        <SummaryLine
          name="Grand Total"
          amount={grandTotal}
          mt="1.5rem"
          grandTotal
        />
        <button
          type="submit"
          className={`w-full mt-8 py-3 uppercase tracking-widest text-white cursor-pointer ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500/80 hover:bg-orange-600"
          }`}
          disabled={isDisabled}
        >
          Continue & Pay
        </button>
      </div>
    </div>
  );
};

export default Summary;
