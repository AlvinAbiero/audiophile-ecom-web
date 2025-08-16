"use client";
import React from "react";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import SummaryItem from "../items/SummaryItem";
import Link from "next/link";
import { useModalStore } from "@/store/useModalStore";
import Image from "next/image";

const CheckoutModal = () => {
  const { cart, clearCart, getTotalAmount } = useCartStore();
  const { isCheckoutModalOpen, closeCheckoutModal } = useModalStore();
  const [showMore, setShowMore] = useState(false);

  const grandTotal = getTotalAmount();

  const handleClose = () => {
    closeCheckoutModal();
    clearCart();
  };

  return (
    <div>
      {/* Overlay */}
      {isCheckoutModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={handleClose}
        ></div>
      )}

      {/* Modal */}
      <div
        className={`fixed z-50 inset-x-4 md:inset-x-auto md:right-1/2 md:translate-x-1/2 top-24 bg-white rounded-lg shadow-lg p-8 w-full max-w-md transition-transform duration-300 ${
          isCheckoutModalOpen ? "translate-y-0" : "-translate-y-[200%]"
        }`}
      >
        {/* Check Icon */}
        <Image
          src="/images/shared/desktop/icon-check-mark.svg"
          alt=""
          width={16}
          height={16}
          className="w-16 mb-6"
        />

        {/* Heading */}
        <h2 className="uppercase text-2xl font-bold leading-tight mb-4 text-gray-400">
          Thank you <span className="block">for your order</span>
        </h2>

        <p className="mb-6 text-gray-600">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary */}
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden mb-8">
          {/* Items */}
          <div className="bg-gray-100 flex-1">
            <div className="px-6 pt-6 space-y-6">
              {cart.slice(0, showMore ? cart.length : 1).map((item) => (
                <SummaryItem key={item.id} item={item} />
              ))}
            </div>

            {cart.length > 1 && (
              <div className="text-center py-4">
                <button
                  className="text-sm font-bold underline text-gray-400 cursor-pointer"
                  onClick={() => setShowMore((prev) => !prev)}
                >
                  {showMore
                    ? "View less"
                    : `and ${cart.length - 1} other item(s)`}
                </button>
              </div>
            )}
          </div>

          {/* Grand Total */}
          <div className="bg-black text-white px-6 py-6 flex flex-col justify-center md:justify-end w-full md:w-2/5">
            <p className="uppercase text-gray-400 text-sm mb-1">Grand Total</p>
            <p className="text-lg font-bold">
              ${grandTotal.toLocaleString("en-US")}
            </p>
          </div>
        </div>
        {/* Back to Home */}
        <Link href="/">
          <button
            onClick={handleClose}
            className="w-full bg-orange-500/80 hover:bg-orange-600 text-white py-3 uppercase tracking-wider cursor-pointer"
          >
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutModal;
