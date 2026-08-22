import { useNavigate } from "react-router-dom";

import useCart from "../../hooks/useCart";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="rounded-lg border p-10 text-center">
          <h2 className="mb-3 text-2xl font-semibold">Your cart is empty</h2>

          <p className="mb-6 text-gray-500">
            Add some products to your cart before proceeding to checkout.
          </p>

          <button
            type="button"
            onClick={() => navigate("/products")}
            className="rounded-md bg-red-800 px-6 py-3 font-semibold text-white transition hover:bg-red-900"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>

          <CartSummary subtotal={subtotal} />
        </>
      )}
    </div>
  );
};

export default Cart;
