import React from "react";
import ProductLink from "../links/ProductLink";

export type OtherProductsProps = {
  slug: string;
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
};

const OtherProducts: React.FC<{ other: OtherProductsProps[] | undefined }> = ({
  other,
}) => {
  return (
    <div className="mt-[7.5rem] text-center mb-[9.5rem] lg:mb-[11.5rem]">
      <h2 className="text-[1.5rem] md:text-[2rem] font-bold">
        You may also like
      </h2>
      <div className="mt-10 sm:mt-14 lg:mt-16 flex flex-col md:flex-row gap-[3.5rem] md:gap-4 lg:gap-[1.875rem]">
        {other?.map((product: OtherProductsProps) => (
          <ProductLink key={product.slug} {...product} />
        ))}
      </div>
    </div>
  );
};

export default OtherProducts;
