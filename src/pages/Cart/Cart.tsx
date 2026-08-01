import useCart from "../../hooks/useCart";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
