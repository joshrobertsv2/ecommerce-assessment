'use client';

import { Product } from '@/lib/graphql';
import ProductCard from '@/components/ProductCard';

interface ProductsSectionProps {
    heading?: string;
    products: Product[];
    loading: boolean;
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

export default function ProductsSection({
    heading,
    products,
    loading,
    searchTerm,
    setSearchTerm,
}: ProductsSectionProps) {
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = filteredProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
    );
    console.log('sortedProducts', sortedProducts);

    return (
        <div className="mb-8">
            <h2 className="text-3xl text-center font-semibold text-gray-900 mb-6">
                {heading}
            </h2>

            {/* Search bar */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Product grid */}
            {loading ? (
                <p className="text-center text-gray-500">Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sortedProducts.map((product: Product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
