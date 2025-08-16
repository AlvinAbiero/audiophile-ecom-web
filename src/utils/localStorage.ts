import CartItem from "@/models/CartItem";

const CART_KEY = "audiophile-cart";

const isClient = typeof window !== "undefined";

export const saveCartToStorage = (cart: CartItem[]) => {
  if (!isClient) return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const loadCartFromStorage = (): CartItem[] => {
  if (!isClient) return [];
  try {
    const data = localStorage.getItem(CART_KEY);
    if (!data) return [];
    return JSON.parse(data) as CartItem[];
  } catch (e) {
    console.error("Failed to parse cart from localStorage", e);
    return [];
  }
};

export const clearCartFromStorage = () => {
  if (!isClient) return;
  localStorage.removeItem(CART_KEY);
};
