"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Product } from "@/models/Product";
import { useCartStore } from "@/store/useCartStore";
import ProductQuantity from "./ProductQuantity";

const ProductDescription = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        shortName: product.shortName,
        cartImage: product.cartImage,
        price: product.price,
      },
      quantity
    );

    toast.success(`Item '${product.name}' was added to cart`, {
      position: "top-left",
    });
  };

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : q));
  return (
    <div className="flex flex-col text-left sm:basis-[60%] lg:basis-[50%]">
      <h2 className="uppercase text-[1.75rem] lg:text-[2.5rem] tracking-[0.0625rem] mb-6 max-w-[13ch]">
        {product.new && (
          <strong className="block uppercase text-orange-500 text-sm tracking-[0.625rem] font-normal mb-6 sm:mb-4">
            New Product
          </strong>
        )}
        {product.name}
      </h2>

      <p className="mb-6 lg:pr-8">{product.description}</p>

      <p className="mt-6 font-bold text-lg text-black">
        $ {product?.price?.toLocaleString("en-US")}
      </p>
      <div className="flex gap-4 mt-8 items-stretch">
        <ProductQuantity
          quantity={quantity}
          increment={increment}
          decrement={decrement}
          width="w-[7.5rem]"
          height="h-[3rem]"
        />
        <button
          onClick={handleAddToCart}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 uppercase text-sm tracking-widest"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
