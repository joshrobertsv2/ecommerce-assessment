// components/ProductGridClient.tsx

/*
- This new client component receives the full list of products from its parent server component.
- It manages the `searchTerm` state for filtering products on the client side.
- Uses `useMemo` to efficiently filter and sort products only when the product list or search term changes, preventing unnecessary re-renders.
- Correctly uses the unique `product.id` as the `key` for each item in the list, which is a React best practice for dynamic lists.
- Renders the grid of `ProductCard` components or a "not found" message if the search yields no results.
*/

'use client';

import { useState, useMemo } from 'react';
import { Product } from '../lib/graphql';
import ProductCard from './ProductCard';

interface ProductGridClientProps {
    products: Product[];
}

export default function ProductGridClient({ products }: ProductGridClientProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);

    const sortedProducts = useMemo(() => {
        return [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
    }, [filteredProducts]);

    return (
        <section aria-labelledby="products-heading">
            <div className="mb-8">
                <h2 id="products-heading" className="text-2xl font-semibold text-gray-900 mb-6">
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
                {sortedProducts.length > 0 ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {sortedProducts.map((product: Product) => (
                            <li key={product.id}>
                                <ProductCard product={product} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No products found matching your search.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
