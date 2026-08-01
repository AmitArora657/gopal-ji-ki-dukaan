import type { CartItem as CartItemType } from "../../types/cart";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="flex items-center gap-6 rounded-lg border p-4">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="h-24 w-24 rounded object-cover"
      />

      <div className="flex-1">
        <h2 className="text-xl font-semibold">{item.product.name}</h2>

        <p className="text-gray-600">₹ {item.product.price}</p>

        <p>Quantity: {item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
