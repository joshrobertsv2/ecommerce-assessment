import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sale | StyleStore',
};

export default function SalePage() {
  return (
    <main className="container mx-auto px-4 py-12 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Sale</h1>
      <p className="text-lg text-gray-600 max-w-2xl">Our sale page is currently empty, but check back soon for great deals on your favorite products!</p>
    </main>
  );
}
