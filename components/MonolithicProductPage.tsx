// Fully responsive grid (sm:grid-cols-2, lg:grid-cols-3)
// Dynamic range max for price filter
// Uses next/image for optimized images
// Tailwind for styling instead of inline styles
// useMemo ensures filtering and sorting don’t cause unnecessary re-renders


'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';
import { useCart } from './CartContext';

export default function MonolithicProductPage({ products }: any) {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('name');
  const [filterPrice, setFilterPrice] = useState(1000);

  const filteredProducts = useMemo(() => {
    return products
      ?.filter(
        (product: any) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          product.price <= filterPrice
      )
      .slice()
      .sort((a: any, b: any) => {
        if (sortOrder === 'name') return a.name.localeCompare(b.name);
        if (sortOrder === 'price') return a.price - b.price;
        return 0;
      });
  }, [products, searchTerm, sortOrder, filterPrice]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>

        <div className="flex flex-col">
          <label className="mb-1">Max Price: ${filterPrice}</label>
          <input
            type="range"
            min="0"
            max={Math.max(...products.map((p: any) => p.price), 1000)}
            value={filterPrice}
            onChange={(e) => setFilterPrice(Number(e.target.value))}
            className="w-48"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts?.map((product: any) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />

            <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600 mt-1">{product.description}</p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-green-600 font-bold text-lg">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
