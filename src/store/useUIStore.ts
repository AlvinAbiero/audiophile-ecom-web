"use client";
import { create } from "zustand";

type UIState = {
  menuOpen: boolean;
  cartOpen: boolean;
  toggleMenu: () => void;
  toggleCart: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  menuOpen: false,
  cartOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  toggleCart: () => set((state) => ({ cartOpen: !state.cartOpen })),
}));
