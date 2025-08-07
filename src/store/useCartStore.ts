"use client";
import { create } from "zustand";
import CartItem from "@/models/CartItem";
import { saveCartToStorage, loadCartFromStorage } from "@/utils/localStorage";

type CartState = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity: number) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  getTotalQuantity: () => number;
  getTotalAmount: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: loadCartFromStorage(),

  addToCart: (item, quantity) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        updatedCart = [...state.cart, { ...item, quantity }];
      }

      saveCartToStorage(updatedCart);
      return { cart: updatedCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      saveCartToStorage(updatedCart);
      return { cart: updatedCart };
    }),

  increaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveCartToStorage(updatedCart);
      return { cart: updatedCart };
    }),

  decreaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      saveCartToStorage(updatedCart);
      return { cart: updatedCart };
    }),

  clearCart: () =>
    set(() => {
      saveCartToStorage([]);
      return { cart: [] };
    }),

  getTotalQuantity: () =>
    get().cart.reduce((total, item) => total + item.quantity, 0),

  getTotalAmount: () =>
    parseFloat(
      get()
        .cart.reduce((total, item) => total + item.quantity * item.price, 0)
        .toFixed(2)
    ),
}));
