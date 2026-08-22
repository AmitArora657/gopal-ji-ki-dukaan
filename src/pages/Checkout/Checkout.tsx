import useCart from "../../hooks/useCart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const { cart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pinCode: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pinCode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      pinCode: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.pinCode.trim()) {
      newErrors.pinCode = "PIN code is required";
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = "PIN code must be 6 digits";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    navigate("/payment", {
      state: {
        customer: formData,
      },
    });
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Customer Information */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-6 text-2xl font-semibold">Delivery Information</h2>

          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="mb-1 block text-sm font-medium">Address</label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
                rows={4}
                className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address}</p>
              )}
            </div>

            {/* City + PIN Code */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">City</label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  PIN Code
                </label>

                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="PIN Code"
                  className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
                />
                {errors.pinCode && (
                  <p className="mt-1 text-sm text-red-600">{errors.pinCode}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-6 text-2xl font-semibold">Order Summary</h2>

          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-16 w-16 rounded-md object-cover"
                  />

                  <div>
                    <p className="font-medium">{item.product.name}</p>

                    <p className="text-sm text-gray-500">
                      ₹{item.product.price} × {item.quantity}
                    </p>
                  </div>
                </div>

                <p className="font-medium">
                  ₹{item.product.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="my-6 border-t" />

          <div className="space-y-3">
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
            onClick={handlePlaceOrder}
            className="mt-6 w-full rounded-md bg-red-800 px-6 py-3 font-semibold text-white transition hover:bg-red-900"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
