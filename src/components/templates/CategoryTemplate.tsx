"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { links } from "@/utils/links";
import { Product } from "@/models/Product";
import ProductList from "../products/ProductList";
import { products } from "@/data/products";
import CategoryLinks from "../links/CategoryLinks";
import BestGear from "../home/BestGear";

const CategoryTemplate: React.FC<{ products: Product[] }> = () => {
  const pathname = usePathname();

  // match current page with link data
  const current = links.find((link) => link.url === pathname);
  return (
    <main id="main">
      <div className="w-full bg-black py-16 text-center text-white uppercase text-3xl tracking-widest">
        {current ? current.text.toUpperCase() : "PRODUCTS"}
      </div>
      <div className="container max-w-7xl px-8 md:px-12 lg:px-16">
        <ProductList products={products} />
        <CategoryLinks />
        <BestGear />
      </div>
    </main>
  );
};

export default CategoryTemplate;
