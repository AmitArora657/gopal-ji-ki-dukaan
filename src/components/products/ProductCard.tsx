import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-4">
        <p className="text-sm text-gray-500">{product.category}</p>

        <h3 className="mt-1 text-xl font-semibold">{product.name}</h3>

        <p className="mt-2 text-red-900 font-bold">₹ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
