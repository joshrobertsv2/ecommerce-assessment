/*
- Converted the Home page to a Server Component to fetch data on the server, improving initial load time and SEO.
- Data is now passed as a prop to `ProductGridClient`, which handles all client-side interactions like searching.
- This separates server-side data fetching from client-side state management, following Next.js best practices.
- Removed the "Why Choose Us?" section and moved it into a separate, reusable component for better modularity.
*/

import { fetchProducts, Product } from '../lib/graphql';
import ProductGridClient from '@/components/ProductGridClient';
import WhyChooseUs from '@/components/WhyChooseUs';

export default async function Home() {
  const { data } = await fetchProducts();
  const products: Product[] = data.products || [];

  return (
    <main className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='container mx-auto px-4 py-8'>
        {/* Hero Section */}
        <section className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Welcome to Our Store
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Discover our curated collection of premium products, carefully
            selected for style and quality.
          </p>
        </section>

        {/* Products Section */}
        <ProductGridClient products={products} />

        {/* Features Section */}
        <WhyChooseUs />
      </div>
    </main>
  );
}