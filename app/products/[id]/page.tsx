// ✅ Improvements Made
// Removed dangerouslySetInnerHTML, rendering product.name safely.
// Added proper TypeScript type for Product.
// Added loading state for better UX.
// Removed SQL interpolation (even in comments) to highlight SQL injection risk.
// Styled page using Tailwind for readability.

'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '../../../components/CartContext'; 


interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate fetching product data
    const fetchProduct = async () => {
      const data: Product = {
        id: productId,
        name: `Product ${productId}`,
        price: 99.99,
        description:
          'This is a detailed description of the product. Highlight key features, specifications, and any other relevant details for the customer.',
        imageUrl: '/placeholder.png', // Replace with actual image URL
      };
      setProduct(data);
    };

    fetchProduct();
  }, [productId]);

  if (!product)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading product...</p>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="relative w-full h-80 md:h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow">
        <Image
          src={product.imageUrl || '/placeholder.png'}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-700 mb-2">ID: {product.id}</p>
          <p className="text-green-600 font-bold text-2xl mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full md:w-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
