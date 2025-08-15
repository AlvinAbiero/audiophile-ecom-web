import React from "react";
type ProductQuantityProps = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
  width: string;
  height: string;
};

const ProductQuantity = ({
  quantity,
  increment,
  decrement,
  width,
  height,
}: ProductQuantityProps) => {
  return (
    <div className={`bg-gray-200 flex items-center ${width} ${height}`}>
      <QuantityButton sign="-" handleClick={decrement} />
      <div className="w-1/5 text-sm font-bold text-black text-center">
        {quantity}
      </div>
      <QuantityButton sign="+" handleClick={increment} />
    </div>
  );
};

export default ProductQuantity;

type QunatityButtonProps = {
  sign: string;
  handleClick: () => void;
};

const QuantityButton = ({ sign, handleClick }: QunatityButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="w-2/5 h-full text-black font-bold text-base border-none p-0 bg-transparent hover:bg-gray-300 hover:text-orange-500"
    >
      {sign}
    </button>
  );
};
