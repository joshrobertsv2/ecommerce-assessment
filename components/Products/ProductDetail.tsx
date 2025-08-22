// components/ProductDetail.tsx
'use client';

import { Product } from '@/lib/graphql';
import { useCart } from '@/components/CartContext';

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const { addToCart } = useCart();

    return (
        <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {product.description}
                </p>
                <div className="flex items-center mb-6">
                    <span className="text-2xl font-bold text-blue-600">
                        ${product.price?.toFixed(2)}
                    </span>
                    <span className="ml-3 text-sm text-red-500 font-medium bg-red-100 px-2 py-1 rounded-full">
                        20% OFF
                    </span>
                </div>

                <button
                    onClick={() => addToCart(product)}
                    className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow transition-all"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
