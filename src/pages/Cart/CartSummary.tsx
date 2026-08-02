import Button from "../../components/ui/Button";

interface CartSummaryProps {
  subtotal: number;
}

const CartSummary = ({ subtotal }: CartSummaryProps) => {
  return (
    <div className="h-fit rounded-lg border p-6">
      <h2 className="mb-6 text-2xl font-semibold">Order Summary</h2>

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>₹ {subtotal}</span>
      </div>

      <div className="mt-3 flex justify-between">
        <span>Shipping</span>
        <span className="text-green-600">Free</span>
      </div>

      <hr className="my-6" />

      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>
        <span>₹ {subtotal}</span>
      </div>

      <Button className="mt-6 w-full">Proceed to Checkout</Button>
    </div>
  );
};

export default CartSummary;
