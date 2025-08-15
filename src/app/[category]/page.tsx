"use client";
import React from "react";
import { Product } from "@/models/Product";
import CategoryTemplate from "@/components/templates/CategoryTemplate";
import { getCategories, getProductsByCategory } from "@/utils/productsFuncs";

interface CategoryPageProps {
  params: {
    category: string;
  };
}
export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    category,
  }));
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const products: Product[] = getProductsByCategory(params.category);

  return (
    <>
      <title>{`Audiophile shop - ${params.category}`}</title>
      <CategoryTemplate products={products} />
    </>
  );
};

export default CategoryPage;
