import Button from "../ui/Button";
import useCart from "../../hooks/useCart";
import type { Product } from "../../types/product";

interface AddToCartButtonProps {
  product: Product;
  quantity: number;
}

const AddToCartButton = ({ product, quantity }: AddToCartButtonProps) => {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart(product, quantity);
  };

  return <Button onClick={handleClick}>Add to Cart</Button>;
};

export default AddToCartButton;
