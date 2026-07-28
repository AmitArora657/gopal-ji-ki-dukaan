import type { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg"
    >
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
