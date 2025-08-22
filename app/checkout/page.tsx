'use client';

import { useCart } from '@/components/CartContext';
import { useState } from 'react';

export default function CheckoutPage() {
    const { cartItems, cartItemCount, totalPrice, removeFromCart, clearCart } = useCart();

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        payment: 'cod', // default: Cash on Delivery
    });

    if (cartItems.length === 0) {
        return (
            <div className="p-8 text-center text-gray-500">
                Your cart is empty. <br />
                <a href="/products" className="text-blue-600 underline">
                    Continue Shopping
                </a>
            </div>
        );
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, payment: e.target.value });
    };

    const handlePlaceOrder = () => {
        alert(`Order placed successfully!\n
      Name: ${form.name}
      Email: ${form.email}
      Phone: ${form.phone}
      Address: ${form.address}
      Payment: ${form.payment}
      Total: $${totalPrice.toFixed(2)}
    `);
        clearCart();
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Order Summary */}
                <div className="bg-white shadow-lg rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <ul className="divide-y divide-gray-200">
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex justify-between items-center py-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="w-16 h-16 rounded object-cover"
                                    />
                                    <div>
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-sm text-gray-500">
                                            ${item.price.toFixed(2)} × {item.quantity}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="font-semibold">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </span>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700 text-sm"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-between items-center mt-6 text-lg font-bold">
                        <span>Total ({cartItemCount} items):</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                </div>

                {/* Billing Form */}
                <div className="bg-white shadow-lg rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Shipping Address"
                            value={form.address}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                        />

                        {/* Payment Method */}
                        <div>
                            <h3 className="font-medium mb-2">Payment Method</h3>
                            <label className="flex items-center gap-2 mb-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    checked={form.payment === 'cod'}
                                    onChange={handlePaymentChange}
                                />
                                Cash on Delivery
                            </label>
                            <label className="flex items-center gap-2 mb-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="card"
                                    checked={form.payment === 'card'}
                                    onChange={handlePaymentChange}
                                />
                                Credit / Debit Card
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="paypal"
                                    checked={form.payment === 'paypal'}
                                    onChange={handlePaymentChange}
                                />
                                PayPal
                            </label>
                        </div>

                        <button
                            type="button"
                            onClick={handlePlaceOrder}
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium shadow transition"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
