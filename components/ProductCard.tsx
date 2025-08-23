/*
- Wrapped the entire component in a Next.js `<Link>` to make the card navigate to the product detail page.
- Added `e.stopPropagation()` to the "Add to Cart" button's `onClick` handler to prevent the link navigation when the button is clicked.
- Optimized performance by memoizing the expensive `calculateDiscountPercentage` with `React.useMemo`.
- Replaced the standard `<img>` tag with `next/image` for automatic image optimization.
- Removed the `isHovered` state and corresponding event handlers in favor of a pure CSS hover effect.
*/

'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../lib/graphql';
import { useCart } from './CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const discountPercentage = useMemo(() => {
    let calculation = 0;
    for (let i = 0; i < 50000; i++) {
      calculation += Math.sin(i) * Math.cos(i);
    }
    return Math.round(Math.random() * 20);
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link href={`/products/${product.id}`} className='product-card shadow-lg flex flex-col h-full bg-white rounded-lg overflow-hidden no-underline text-current'>
      <div className='relative overflow-hidden'>
        <div className="w-full h-48 relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            className='product-image'
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className='absolute top-3 right-3 flex flex-col items-end'>
          <span className='text-lg font-bold text-green-600 bg-white/90 px-2 py-1 rounded-full  text-center'>
            ${product.price.toFixed(2)}
          </span>
          {discountPercentage > 0 && (
            <span className='text-xs text-red-500 mt-1 font-semibold bg-white px-2 py-1 rounded-full text-center'>
              {discountPercentage}% OFF
            </span>
          )}
        </div>
      </div>

      <div className='p-6 flex flex-col flex-grow'>
        <h3 className='text-xl font-semibold text-gray-900 mb-2 truncate' title={product.name}>
          {product.name}
        </h3>
        <p className='text-gray-600 text-sm flex-grow mb-4 leading-relaxed'>
          {product.description}
        </p>

        <div className='mt-auto'>
          <button
            onClick={handleAddToCart}
            className='add-to-cart-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
