"use client";
import { useEffect } from "react";
import { useUIStore } from "@/store/useUIStore";
import { useModalStore } from "@/store/useModalStore";

const Overlay = () => {
  const menuOpen = useUIStore((state) => state.menuOpen);
  const { isCartModalOpen, isCheckoutModalOpen } = useModalStore();

  const isVisible = menuOpen || isCartModalOpen || isCheckoutModalOpen;

  // lock body scroll when visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "initial";
    }
  }, [isVisible]);
  return (
    <div
      className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    ></div>
  );
};

export default Overlay;
