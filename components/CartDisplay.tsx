'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useCart } from './CartContext';
import { useRouter } from 'next/navigation';

function CartItemRow({ item, onRemove }: { item: any; onRemove: (id: string) => void }) {

  return (
    <div
      key={item.id}
      className="flex items-center justify-between p-2 bg-gray-50 rounded-lg shadow-sm"
    >
      <div className="flex items-center space-x-3">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-12 h-12 object-cover rounded"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">{item.name}</p>
          <p className="text-xs text-gray-500">
            ${item.price.toFixed(2)} × {item.quantity}
          </p>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.name} from cart`}
        className="text-red-500 hover:text-red-700 p-1 rounded transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}

export default function CartDisplay() {
  const { cartItems, cartItemCount, totalPrice, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setIsOpen(false);
  }, []);

  const handleCheckout = () => {
    router.push("/checkout");
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  return (
    <div className="relative">
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7M7 13h10m0 0l1.5 7M7 13v8a2 2 0 002 2h8a2 2 0 002-2v-8"
          />
        </svg>
        <span>Cart ({cartItemCount})</span>
        {totalPrice > 0 && (
          <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs">
            ${totalPrice.toFixed(2)}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute right-0 mt-3 w-96 bg-white border border-gray-200 rounded-lg shadow-xl z-50 animate-fadeIn"
          role="dialog"
          aria-label="Shopping cart"
        >
          <div className="p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Shopping Cart</h3>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close cart"
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart items */}
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <CartItemRow key={item.id} item={item} onRemove={removeFromCart} />
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-lg font-bold text-blue-600">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium shadow transition"
                    >
                      Checkout
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium transition"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
