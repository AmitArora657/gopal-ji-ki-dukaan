import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const order = location.state?.order;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="rounded-lg border p-8 text-center">
        <div className="mb-6 text-5xl">✓</div>

        <h1 className="mb-3 text-3xl font-bold">Order Placed Successfully!</h1>

        <p className="mb-8 text-gray-600">
          Thank you for shopping with गोपाल जी की दुकान.
        </p>

        <div className="mb-8 rounded-md bg-gray-50 p-6 text-left">
          <h2 className="mb-4 text-xl font-semibold">Order Details</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Order ID</span>
              <span className="font-medium">
                {order?.orderId || "GJKD-10001"}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Payment Method</span>
              <span className="font-medium">
                {order?.paymentMethod || "Cash on Delivery"}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total Amount</span>
              <span className="font-bold">₹{order?.total || 0}</span>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-md border p-6 text-left">
          <h2 className="mb-4 text-xl font-semibold">Delivery Address</h2>

          <div className="space-y-1 text-gray-600">
            <p className="font-medium text-gray-900">
              {order?.customer?.fullName}
            </p>

            <p>{order?.customer?.address}</p>

            <p>
              {order?.customer?.city} - {order?.customer?.pinCode}
            </p>

            <p>Phone: {order?.customer?.phone}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate("/products")}
          className="rounded-md bg-red-800 px-6 py-3 font-semibold text-white transition hover:bg-red-900"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
