import ProductCard from "./ProductCard";
import { products } from "../../data/products";

const ProductGrid = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
