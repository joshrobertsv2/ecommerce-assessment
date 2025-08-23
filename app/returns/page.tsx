import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Returns Policy | StyleStore',
};

export default function ReturnsPage() {
  return (
    <main className="container mx-auto px-4 py-12 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Returns Policy</h1>
      <p className="text-lg text-gray-600 max-w-2xl">This page is under construction. Our returns policy will be detailed here soon, including instructions on how to process a return.</p>
    </main>
  );
}
