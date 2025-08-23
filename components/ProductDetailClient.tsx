// components/ProductDetailClient.tsx

/*
- This is a new client component created to handle user interactions on the product detail page.
- It receives server-fetched product data as props.
- Features the `AddToCart` button, which uses the `useCart` context to manage cart state.
- Uses `next/image` for optimized image rendering.
- Separates client-side concerns from the server-side data fetching logic in the page component.
*/

'use client';

import { Product } from '@/lib/graphql';
import { useCart } from '@/components/CartContext';
import Image from 'next/image';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col h-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <div className="mt-auto">
            <p className="text-3xl font-semibold text-green-600 mb-6">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-lg transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
