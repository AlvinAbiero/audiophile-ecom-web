import { notFound } from "next/navigation";
import Params from "@/models/Params";
import { Product } from "@/models/Product";
import { products } from "@/data/products";

import ProductDetails from "@/components/ProductDetails";
import GoBackLink from "@/components/links/GoBackLink";

interface ProductPageProps {
  params: Promise<Params>;
}

export async function generateStaticParams(): Promise<Params[]> {
  return products.map((product) => {
    const slug = product.slug;

    return {
      category: product.category,
      slug: slug,
    };
  });
}

// Find product helper function
function findProduct(category: string, slug: string): Product | undefined {
  // Find product by exact match first
  let product = products.find((p) => {
    const exactMatch = p.category === category && p.slug === slug;

    return exactMatch;
  });

  // If no exact match, try with slug extraction for category-prefixed slugs
  if (!product) {
    product = products.find((p) => {
      if (p.slug.includes("/")) {
        const extractedSlug = p.slug.split("/")[1];
        const match = p.category === category && extractedSlug === slug;

        return match;
      }
      return false;
    });
  }

  return product;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, slug } = await params;

  const product = findProduct(category, slug);

  if (!product) {
    notFound();
  }
  return (
    <div className="mx-auto w-full bg-white overflow-hidden">
      {/* ✅ Go Back Button */}
      <div className="w-full mx-auto flex flex-col items-center justify-center">
        <div className="self-start mt-4 ml-12">
          <GoBackLink />
        </div>

        <ProductDetails product={product} />
      </div>
    </div>
  );
}

// Optional: Add metadata generation
export async function generateMetadata({ params }: ProductPageProps) {
  const { category, slug } = await params;
  const product = findProduct(category, slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}
