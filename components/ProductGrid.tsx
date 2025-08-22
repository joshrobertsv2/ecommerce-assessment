// ✅ Key Fixes:
// Replaced toSorted() with .slice().sort() for broader compatibility.
// Ensured filtering and sorting happen client-side.
// Still relies on ProductCard being fully client-safe for hydration.

'use client';

import { useState, useMemo } from 'react';
import { Product } from '../lib/graphql';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice() // create a shallow copy before sorting
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [products, searchTerm]);

  return (
    <section aria-labelledby="products-heading" className="mb-8">
      <h2
        id="products-heading"
        className="text-2xl font-semibold text-gray-900 mb-6"
      >
        Featured Products
      </h2>

      <div className="mb-4">
        <label htmlFor="search" className="sr-only">
          Search products
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
