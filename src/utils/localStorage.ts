import CartItem from "@/models/CartItem";

const CART_KEY = "audiophile-cart";

export const saveCartToStorage = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const loadCartFromStorage = (): CartItem[] => {
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
  localStorage.removeItem(CART_KEY);
};
