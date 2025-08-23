// components/ProductFilters.tsx

/*
- This is a new, reusable component extracted from the monolithic product page.
- It encapsulates all the UI and logic for filtering and sorting the product list.
- It receives state and state-setters as props from its parent component, making it a controlled component.
- All styling is done with Tailwind CSS for consistency.
*/

'use client';

import React from 'react';

interface ProductFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
  filterPrice: number;
  setFilterPrice: (price: number) => void;
}

export default function ProductFilters({
  searchTerm,
  setSearchTerm,
  sortOrder,
  setSortOrder,
  filterPrice,
  setFilterPrice,
}: ProductFiltersProps) {
  return (
    <div className="mb-8 p-4 bg-gray-100 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        {/* Search Input */}
        <div>
          <label htmlFor="search-input" className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <input
            id="search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Sort Select */}
        <div>
          <label htmlFor="sort-order" className="block text-sm font-medium text-gray-700 mb-1">
            Sort by
          </label>
          <select
            id="sort-order"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="name">Name</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Price Range Slider */}
        <div>
          <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-1">
            Max Price: <span className="font-bold text-gray-900">${filterPrice}</span>
          </label>
          <input
            id="price-range"
            type="range"
            min="0"
            max="500"
            step="10"
            value={filterPrice}
            onChange={(e) => setFilterPrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
