// app/products/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchProducts, Product } from '@/lib/graphql';
import ProductDetail from '@/components/Products/ProductDetail';
import FeaturesSection from '@/components/Home-Components/FeaturesSection';

export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(({ data }) => {
      const foundProduct =
        data.products.find((p: Product) => p.id === productId) || null;
      setProduct(foundProduct);
      setLoading(false);
    });
  }, [productId]);

  if (loading) {
    return <div className="p-8 text-gray-500">Loading product...</div>;
  }

  if (!product) {
    return <div className="p-8 text-red-500">Product not found</div>;
  }

  return (
    <div className="space-y-8 p-8">
      <ProductDetail product={product} />
      <FeaturesSection />
    </div>
  );
}
