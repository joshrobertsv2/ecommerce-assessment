/*
- This page serves as the main product catalog.
- It fetches all products on the server using `fetchProducts`.
- It utilizes the `RefactoredProductPage` component to display the products with filtering and sorting capabilities.
*/

import { fetchProducts } from '@/lib/graphql';
import RefactoredProductPage from '@/components/MonolithicProductPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Products | StyleStore',
  description: 'Browse our full collection of premium products.',
};

export default async function ProductsPage() {
  const { data } = await fetchProducts();

  return <RefactoredProductPage products={data.products} />;
}
