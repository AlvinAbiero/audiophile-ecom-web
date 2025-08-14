import { Product } from "@/models/Product";
import CategoryPageItem from "../items/CategoryPageItem";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="mt-16 mb-32 flex flex-col items-center gap-32">
      {products.map((product) => (
        <CategoryPageItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
