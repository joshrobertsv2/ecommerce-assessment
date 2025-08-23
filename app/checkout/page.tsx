import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout | StyleStore',
};

export default function CheckoutPage() {
  return (
    <main className="container mx-auto px-4 py-12 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Checkout</h1>
      <p className="text-lg text-gray-600 max-w-2xl">This is the checkout page. This feature is currently under construction. Soon you will be able to complete your purchase here.</p>
    </main>
  );
}
