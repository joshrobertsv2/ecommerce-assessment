/*
- Refactored to use Server Components for data fetching, improving performance and SEO.
- Replaced the vulnerable raw SQL query with a safe data fetching function `fetchProductById`.
- Removed `dangerouslySetInnerHTML` to prevent XSS vulnerabilities.
- Implemented `generateMetadata` to dynamically set the page title and description based on product data.
- Added `notFound()` to handle cases where a product with the given ID does not exist.
- Separated concerns by fetching data on the server and passing it to a dedicated client component (`ProductDetailClient`) for interactive elements.
*/

import { fetchProductById } from '@/lib/graphql';
import ProductDetailClient from '@/components/ProductDetailClient';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchProductById(params.id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | StyleStore`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await fetchProductById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}