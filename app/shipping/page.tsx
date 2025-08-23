import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping Information | StyleStore',
};

export default function ShippingPage() {
  return (
    <main className="container mx-auto px-4 py-12 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
      <p className="text-lg text-gray-600 max-w-2xl">This page is under construction. Please check back later for details on our shipping policies, rates, and delivery times.</p>
    </main>
  );
}
