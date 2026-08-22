import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { cart } = useCart();

  const customer = location.state?.customer;

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold">Payment</h1>

      <p className="mb-8 text-gray-600">
        Complete your payment to place the order.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Left Section */}
        <div className="space-y-8">
          {/* Delivery Address */}
          <div className="rounded-lg border p-6">
            <h2 className="mb-6 text-2xl font-semibold">Delivery Address</h2>

            <div className="space-y-1 text-gray-700">
              <p className="font-medium">{customer?.fullName}</p>

              <p>{customer?.address}</p>

              <p>
                {customer?.city} - {customer?.pinCode}
              </p>

              <p>Phone: {customer?.phone}</p>

              <p>Email: {customer?.email}</p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/checkout")}
              className="mt-5 text-sm font-medium text-red-800 hover:underline"
            >
              ← Change Address
            </button>
          </div>

          {/* Payment Method */}
          <div className="rounded-lg border p-6">
            <h2 className="mb-6 text-2xl font-semibold">Payment Method</h2>

            <div className="space-y-4">
              <label className="flex cursor-pointer items-center gap-3 rounded-md border p-4">
                <input type="radio" name="paymentMethod" />
                <div>
                  <p className="font-medium">UPI</p>
                  <p className="text-sm text-gray-500">Pay using UPI</p>
                </div>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-md border p-4">
                <input type="radio" name="paymentMethod" />
                <div>
                  <p className="font-medium">Credit / Debit Card</p>
                  <p className="text-sm text-gray-500">
                    Visa, Mastercard and more
                  </p>
                </div>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-md border p-4">
                <input type="radio" name="paymentMethod" />
                <div>
                  <p className="font-medium">Net Banking</p>
                  <p className="text-sm text-gray-500">
                    Pay using your bank account
                  </p>
                </div>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-md border p-4">
                <input type="radio" name="paymentMethod" />
                <div>
                  <p className="font-medium">Cash on Delivery</p>
                  <p className="text-sm text-gray-500">
                    Pay when your order is delivered
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="h-fit rounded-lg border p-6">
          <h2 className="mb-6 text-2xl font-semibold">Payment Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-md bg-red-800 px-6 py-3 font-semibold text-white transition hover:bg-red-900"
          >
            Pay Now ₹{total}
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
            🔒 Your payment is secure
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
