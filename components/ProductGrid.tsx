/*
- This is a new, reusable component for displaying a grid of products.
- It receives a list of products and renders them using the `ProductCard` component.
- It includes a message for when no products match the filters.
- It ensures React's `key` prop best practice is followed by using `product.id`.
*/

import React from 'react';
import { Product } from '@/lib/graphql';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
