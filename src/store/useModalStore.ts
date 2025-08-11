"use client";
import { create } from "zustand";

type ModalState = {
  isCartModalOpen: boolean;
  isCheckoutModalOpen: boolean;
  openCartModal: () => void;
  closeCartModal: () => void;
  openCheckoutModal: () => void;
  closeCheckoutModal: () => void;
};

export const useModalStore = create<ModalState>((set, get) => ({
  isCartModalOpen: false,
  isCheckoutModalOpen: false,

  openCartModal: () => {
    set({ isCartModalOpen: true });
    document.body.style.overflowY = "hidden";
  },

  closeCartModal: () => {
    set({ isCartModalOpen: false });
    if (!get().isCheckoutModalOpen) {
      document.body.style.overflowY = "initial";
    }
  },

  openCheckoutModal: () => {
    set({ isCheckoutModalOpen: true });
    document.body.style.overflowY = "hidden";
  },

  closeCheckoutModal: () => {
    set({ isCheckoutModalOpen: false });
    if (!get().isCartModalOpen) {
      document.body.style.overflowY = "initial";
    }
  },
}));
