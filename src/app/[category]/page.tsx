import React from "react";
import { Product } from "@/models/Product";
import CategoryTemplate from "@/components/templates/CategoryTemplate";
import { getCategories, getProductsByCategory } from "@/utils/productsFuncs";

// Capitalize first letter for display
function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Check if the route is a valid category
function isValidCategory(category: string): boolean {
  const validCategories = ["headphones", "speakers", "earphones"];
  return validCategories.includes(category.toLowerCase());
}
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

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category } = await params;
  const products: Product[] = getProductsByCategory(category);

  return (
    <>
      {/* <title>{`Audiophile shop - ${params.category}`}</title> */}
      <CategoryTemplate products={products} />
    </>
  );
};

export default CategoryPage;

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!isValidCategory(category)) {
    return {
      title: "Page Not Found",
    };
  }

  const categoryProducts = getProductsByCategory(category);

  if (categoryProducts.length === 0) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${capitalizeFirst(category)} - Premium Audio Equipment`,
    description: `Browse our collection of high-quality ${category} designed for audiophiles. Find the perfect ${category.slice(
      0,
      -1
    )} for your needs.`,
  };
}
