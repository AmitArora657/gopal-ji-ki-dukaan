import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { cart, clearCart } = useCart();

  const customer = location.state?.customer;

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const [upiId, setUpiId] = useState("");
  const [upiVerified, setUpiVerified] = useState(false);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
  });

  const [selectedBank, setSelectedBank] = useState("");

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const shipping = 0;
  const total = subtotal + shipping;

  //UPI -----------------------------

  const handleVerifyUpi = () => {
    const isValidUpi = /^[\w.-]+@[\w.-]+$/.test(upiId);

    if (!isValidUpi) {
      setUpiVerified(false);
      return;
    }

    setUpiVerified(true);
  };

  // Card -----------------------------

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isCardValid =
    cardDetails.cardNumber.replace(/\s/g, "").length === 16 &&
    cardDetails.cardholderName.trim().length > 2 &&
    /^\d{2}\/\d{2}$/.test(cardDetails.expiryDate) &&
    /^\d{3}$/.test(cardDetails.cvv);

  // Net Banking -----------------------------

  const handleBankChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBank(e.target.value);
  };

  const handlePaymentSuccess = (paymentMethod: string) => {
    const order = {
      orderId: `GJKD-${Date.now()}`,
      paymentMethod,
      total,
      customer,
      items: cart,
    };

    clearCart();

    navigate("/order-confirmation", {
      state: {
        order,
      },
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold">Payment</h1>

      <p className="mb-8 text-gray-600">
        Complete your payment to place the order.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* =========================
            LEFT SECTION
        ========================== */}

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
              {/* =========================
                  UPI
              ========================== */}

              <div className="rounded-md border p-4">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={selectedPaymentMethod === "upi"}
                    onChange={(e) => {
                      setSelectedPaymentMethod(e.target.value);
                      setUpiVerified(false);
                    }}
                  />

                  <div>
                    <p className="font-medium">UPI</p>

                    <p className="text-sm text-gray-500">Pay using UPI</p>
                  </div>
                </label>

                {selectedPaymentMethod === "upi" && (
                  <div className="mt-4">
                    <label className="mb-1 block text-sm font-medium">
                      UPI ID
                    </label>

                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => {
                        setUpiId(e.target.value);
                        setUpiVerified(false);
                      }}
                      placeholder="example@upi"
                      className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
                    />

                    {!upiVerified && (
                      <button
                        type="button"
                        onClick={handleVerifyUpi}
                        className="mt-4 rounded-md bg-gray-800 px-5 py-2 font-medium text-white hover:bg-gray-900"
                      >
                        Verify UPI
                      </button>
                    )}

                    {upiVerified && (
                      <div className="mt-4">
                        <p className="mb-4 text-sm font-medium text-green-600">
                          ✓ UPI ID verified
                        </p>

                        <button
                          type="button"
                          className="w-full rounded-md bg-red-800 px-6 py-3 font-semibold text-white hover:bg-red-900"
                          onClick={() => handlePaymentSuccess("UPI")}
                        >
                          Pay Now ₹{total}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* =========================
                  CARD
              ========================== */}

              <div className="rounded-md border p-4">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={selectedPaymentMethod === "card"}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  />

                  <div>
                    <p className="font-medium">Credit / Debit Card</p>

                    <p className="text-sm text-gray-500">
                      Visa, Mastercard and more
                    </p>
                  </div>
                </label>

                {selectedPaymentMethod === "card" && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Card Number
                      </label>

                      <input
                        type="text"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleCardChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Cardholder Name
                      </label>

                      <input
                        type="text"
                        name="cardholderName"
                        value={cardDetails.cardholderName}
                        onChange={handleCardChange}
                        placeholder="Name on card"
                        className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium">
                          Expiry Date
                        </label>

                        <input
                          type="text"
                          name="expiryDate"
                          value={cardDetails.expiryDate}
                          onChange={handleCardChange}
                          placeholder="MM/YY"
                          className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium">
                          CVV
                        </label>

                        <input
                          type="password"
                          name="cvv"
                          value={cardDetails.cvv}
                          onChange={handleCardChange}
                          placeholder="•••"
                          maxLength={3}
                          className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
                        />
                      </div>
                    </div>

                    {isCardValid && (
                      <button
                        type="button"
                        onClick={() => handlePaymentSuccess("Card")}
                        className="w-full rounded-md bg-red-800 px-6 py-3 font-semibold text-white hover:bg-red-900"
                      >
                        Pay Now ₹{total}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* =========================
                  NET BANKING
              ========================== */}

              <div className="rounded-md border p-4">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    disabled={true}
                    name="paymentMethod"
                    value="netbanking"
                    checked={selectedPaymentMethod === "netbanking"}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  />

                  <div>
                    <p className="font-medium">Net Banking</p>

                    <p className="text-sm text-gray-500">
                      Pay using your bank account
                    </p>
                  </div>
                </label>

                {selectedPaymentMethod === "netbanking" && (
                  <div className="mt-4">
                    <label className="mb-1 block text-sm font-medium">
                      Select Bank
                    </label>

                    <select
                      value={selectedBank}
                      onChange={handleBankChange}
                      className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
                    >
                      <option value="">Select your bank</option>

                      <option value="sbi">State Bank of India</option>

                      <option value="hdfc">HDFC Bank</option>

                      <option value="icici">ICICI Bank</option>

                      <option value="axis">Axis Bank</option>
                    </select>

                    {selectedBank && (
                      <button
                        type="button"
                        className="mt-4 w-full rounded-md bg-red-800 px-6 py-3 font-semibold text-white hover:bg-red-900"
                      >
                        Continue to Bank
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* =========================
                  CASH ON DELIVERY
              ========================== */}

              <div className="rounded-md border p-4">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={selectedPaymentMethod === "cod"}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  />

                  <div>
                    <p className="font-medium">Cash on Delivery</p>

                    <p className="text-sm text-gray-500">
                      Pay when your order is delivered
                    </p>
                  </div>
                </label>

                {selectedPaymentMethod === "cod" && (
                  <div className="mt-4">
                    <div className="rounded-md bg-gray-50 p-4 text-sm text-gray-600">
                      You will pay ₹{total} when your order is delivered.
                    </div>

                    <button
                      type="button"
                      onClick={() => handlePaymentSuccess("COD")}
                      className="mt-4 w-full rounded-md bg-red-800 px-6 py-3 font-semibold text-white hover:bg-red-900"
                    >
                      Place Order ₹{total}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT SECTION
        ========================== */}

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

          <p className="mt-6 text-center text-sm text-gray-500">
            🔒 Your payment is secure
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
