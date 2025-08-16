import React from "react";
import { Product } from "@/models/Product";
import Image from "next/image";
import ProductGallery from "./products/ProductGallery";
import CategoryLinks from "./links/CategoryLinks";
import BestGear from "./home/BestGear";
import OtherProducts from "./products/OtherProducts";
import ProductFeatures from "./products/ProductFeatures";
import ProductDescription from "./products/ProductDescription";
import FadeInOnScroll from "./animation/FadeInOnScroll";

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div className="py-24 px-8 md:px-16 max-w-7xl overflow-hidden w-full mx-auto">
      {/* Image Description */}
      <div className="mt-6 lg:mt-14 flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-16 lg:gap-32">
        <div className="basis-[40%] lg:basis-1/2">
          <picture>
            <source
              media="(min-width: 992px)"
              srcSet={product?.image?.desktop}
            />
            <source
              media="(min-width: 480px)"
              srcSet={product?.image?.tablet}
            />
            <Image
              src={product?.image?.mobile as string}
              alt={product.name}
              width={400}
              height={300}
              className="w-full object-cover rounded-lg"
            />
          </picture>
        </div>
        <ProductDescription product={product} />
      </div>

      {/* Features */}
      <FadeInOnScroll>
        <ProductFeatures
          features={product.features}
          includedItems={product.includedItems}
        />
      </FadeInOnScroll>

      {/* Gallery */}
      <FadeInOnScroll>
        <ProductGallery {...product?.gallery} />
      </FadeInOnScroll>

      {/* Other Products */}
      <FadeInOnScroll>
        <OtherProducts other={product.others} />
      </FadeInOnScroll>

      {/* Categories */}
      <FadeInOnScroll>
        <CategoryLinks />
      </FadeInOnScroll>

      {/* Best Gear */}
      <FadeInOnScroll>
        <BestGear />
      </FadeInOnScroll>
    </div>
  );
};

export default ProductDetails;
