// app/page.tsx (Server Component, no "use client")
// ✅ Key Fixes Made
// Move data fetching to server component (Home).
// Add error handling (?? [] fallback).
// Split ProductGrid into client component for search/filter.
// Remove key={index} → use product.id.
// Use useMemo with .toSorted() for performance.
// Add accessibility (<label>, aria-labelledby, aria-hidden).
// Extracted FeatureCard to reduce duplication.
// Added empty-state message.

import { fetchProducts } from '../lib/graphql';
import ProductGrid from '../components/ProductGrid';

export default async function Home() {
  const { data } = await fetchProducts();
  const products = data?.products ?? [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium products, carefully
            selected for style and quality.
          </p>
        </div>

        {/* Products Section */}
        <ProductGrid products={products} />

        {/* Features Section */}
        <section
          aria-labelledby="features-heading"
          className="mt-16 py-12 bg-white rounded-xl shadow-sm"
        >
          <h2
            id="features-heading"
            className="text-2xl font-bold text-gray-900 text-center mb-8"
          >
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-6">
            {/* Free Shipping */}
            <FeatureCard
              title="Free Shipping"
              description="Free shipping on all orders over $50"
              color="blue"
              iconPath="M5 8h14M5 8a2 2 0..."
            />
            {/* Quality Guaranteed */}
            <FeatureCard
              title="Quality Guaranteed"
              description="30-day money-back guarantee"
              color="green"
              iconPath="M9 12l2 2 4-4m6 2..."
            />
            {/* 24/7 Support */}
            <FeatureCard
              title="24/7 Support"
              description="Round-the-clock customer support"
              color="purple"
              iconPath="M18.364 5.636l-3.536..."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  color,
  iconPath,
}: {
  title: string;
  description: string;
  color: string;
  iconPath: string;
}) {
  return (
    <div className="text-center">
      <div
        className={`bg-${color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
      >
        <svg
          className={`w-8 h-8 text-${color}-600`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}