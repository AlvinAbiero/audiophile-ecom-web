import { IncludedItem } from "@/models/Product";
import React from "react";

type ProductFeaturesProps = {
  features?: string;
  includedItems?: IncludedItem[];
};

const ProductFeatures: React.FC<ProductFeaturesProps> = ({
  features,
  includedItems,
}) => {
  return (
    <div className="mt-[5.5rem] flex flex-col gap-[5.5rem] lg:mt-[10rem] lg:flex-row lg:gap-[7.5rem]">
      {/* Features */}
      <div className="lg:basis-[55%]">
        <h2 className="text-[1.5rem] md:text-[2rem] font-bold">Features</h2>
        <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-gray-700">
          {features}
        </p>
      </div>

      {/* In the Box */}
      <div className="flex flex-col gap-[1.5rem] sm:flex-row sm:gap-[6rem] md:gap-[12rem] lg:flex-col lg:gap-[2rem]">
        <h2 className="text-[1.5rem] md:text-[2rem] font-bold">In the Box</h2>
        <ul className="mt-6">
          {includedItems?.map((item) => (
            <li
              key={item.item}
              className="mb-2 text-[0.9375rem] grid grid-cols-[2rem_1fr] items-center"
            >
              <span className="text-orange-500 font-bold">
                {item.quantity}x
              </span>
              <span className="capitalize text-gray-800">{item.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFeatures;
