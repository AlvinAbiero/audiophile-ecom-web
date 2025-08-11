import { useCartStore } from "../store/useCartStore";
import { SHIPPING_FEE, TAX_RATE } from "../constants/fees";

const useCartTotals = (): {
  cartTotal: number;
  tax: number;
  grandTotal: number;
} => {
  const { getTotalAmount } = useCartStore();
  const cartTotal = getTotalAmount();
  const tax = TAX_RATE * cartTotal;
  const grandTotal = cartTotal + tax + SHIPPING_FEE;

  return {
    cartTotal,
    tax,
    grandTotal,
  };
};

export default useCartTotals;
