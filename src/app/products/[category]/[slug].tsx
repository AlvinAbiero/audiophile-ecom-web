import { GetStaticProps, GetStaticPaths } from "next";
import Params from "@/models/Params";
import { Product } from "@/models/Product";
import { products } from "@/data/products";

import ProductDetails from "@/components/ProductDetails";
import { useRouter } from "next/router";

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const router = useRouter();
  return (
    <div className="container mx-auto p-4">
      {/* ✅ Go Back Button */}
      <button
        onClick={() => router.back()}
        className="text-gray-600 hover:text-orange-500 mb-6 inline-flex items-center"
      >
        ← Go Back
      </button>
      <ProductDetails product={product} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = products.map((product) => ({
    params: { category: product.category, slug: product.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps, Params> = async ({
  params,
}) => {
  const { category, slug } = params || {};
  const product = products.find(
    (p) => p.category === category && p.slug === slug
  );

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product },
  };
};
