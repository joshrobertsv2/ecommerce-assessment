/*
- NOTE: This file should be renamed to `RefactoredProductPage.tsx`.
- Refactored the monolithic product page into a well-structured client component.
- Replaced all inline styles with Tailwind CSS utility classes for consistency and maintainability.
- Broke down the UI into smaller, reusable components: `ProductFilters` for controls and `ProductGrid` for the product list.
- Optimized performance by memoizing the filtered and sorted product list using `useMemo`. This prevents expensive recalculations on every render.
*/

'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '@/lib/graphql';
import ProductFilters from './ProductFilters';
import ProductGrid from './ProductGrid';

interface RefactoredProductPageProps {
  products: Product[];
}

export default function RefactoredProductPage({ products }: RefactoredProductPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('name');
  const [filterPrice, setFilterPrice] = useState(500);

  const filteredAndSortedProducts = useMemo(() => {
    return products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          product.price <= filterPrice
      )
      .sort((a, b) => {
        if (sortOrder === 'price-asc') return a.price - b.price;
        if (sortOrder === 'price-desc') return b.price - a.price;
        // Default to sorting by name
        return a.name.localeCompare(b.name);
      });
  }, [products, searchTerm, sortOrder, filterPrice]);

  return (
    <main className='container mx-auto px-4 py-8 bg-gray-50 min-h-screen'>
      <header className='mb-8'>
        <h1 className='text-4xl font-bold text-gray-900'>Product Catalog</h1>
      </header>

      <ProductFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        filterPrice={filterPrice}
        setFilterPrice={setFilterPrice}
      />

      <ProductGrid products={filteredAndSortedProducts} />
    </main>
  );
}