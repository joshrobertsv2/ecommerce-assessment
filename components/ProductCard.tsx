// ✅ Key Fixes
// Removed expensive re-calculation → useMemo.
// Switched to next/image for performance.
// Added alt for accessibility.
// Replaced inline styles with Tailwind hover utilities.
// Added aria-label for screen readers.
// Smoothed button transitions and ensured rounded corners.
// Add navigation to Product Page
// Switched discountPercentage to useState.
// Set its value inside a useEffect so it only runs on the client.
// This removes the hydration mismatch because the server renders 0 initially, then the client updates it after mounting.

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Product } from '../lib/graphql';
import { useCart } from './CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // Generate discount only on client side
  useEffect(() => {
    setDiscountPercentage(Math.floor(Math.random() * 20));
  }, []);

  return (
    <div className="product-card shadow-lg flex flex-col h-full rounded-lg overflow-hidden group transition-transform duration-200 hover:scale-105">
      
      {/* Clickable image + name */}
      <Link href={`/products/${product.id}`} className="relative block">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
          priority={false}
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-right">
          <span className="text-lg font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>
          {discountPercentage > 0 && (
            <span className="block text-xs text-red-500 mt-1">
              {discountPercentage}% off
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:underline">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm flex-grow mb-4 leading-relaxed">
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          aria-label={`Add ${product.name} to cart`}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
