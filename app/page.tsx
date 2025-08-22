
'use client';

import { useState, useEffect } from 'react';
import { fetchProducts, Product } from '../lib/graphql';
import HeroSection from '@/components/Home-Components/HeroSection';
import ProductsSection from '@/components/Home-Components/ProductsSection';
import FeaturesSection from '@/components/Home-Components/FeaturesSection';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts().then(({ data }) => {
      setProducts(data.products);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
        <ProductsSection
          heading="Featured Products"
          products={products}
          loading={loading}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <FeaturesSection />
      </div>
    </div>
  );
}
