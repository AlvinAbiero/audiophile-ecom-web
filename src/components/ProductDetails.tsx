import React from "react";
import { Product } from "@/models/Product";
import Image from "next/image";

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <Image
        src={product.image?.desktop || ""}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
      />
    </div>
  );
};

export default ProductDetails;
