import { products } from "@/data/products";
import { Product } from "@/models/Product";

export const getProductsByCategory = (category: string): Product[] => {
  return products
    .filter((product) => product.category === category)
    .map((product) => {
      return {
        id: product.id,
        slug: product.slug,
        name: product.name,
        shortName: product.shortName,
        price: product.price,
        cartImage: product.cartImage,
        description: product.description,
        new: product.new,
        category: product.category,
        categoryImage: product.categoryImage,
      };
    })
    .sort((a, b) => Number(b.new) - Number(a.new));
};

export const getCategories = (): string[] => {
  const categories = products.map((product) => product.category);
  return Array.from(new Set(categories));
};
