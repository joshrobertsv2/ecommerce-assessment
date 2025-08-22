'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { Product } from '../lib/graphql';
import { useCart } from './CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  // Expensive calc → memoized so it runs once per product
  const discountPercentage = useMemo(() => {
    let calculation = 0;
    for (let i = 0; i < 50000; i++) {
      calculation += Math.sin(i) * Math.cos(i);
    }
    return Math.round(Math.random() * 20);
  }, [product.id]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group flex flex-col rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />

        {/* Price & Discount Badge */}
        <div className="absolute top-3 right-3 text-right">
          <span className="block bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow">
            ${product.price.toFixed(2)}
          </span>
          {discountPercentage > 0 && (
            <span className="block mt-2 bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-full shadow-sm">
              {discountPercentage}% OFF
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm flex-grow mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
