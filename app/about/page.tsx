import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | StyleStore',
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-600 max-w-2xl">This page is under construction. Check back soon for more information about our company, our mission, and the team behind StyleStore.</p>
    </main>
  );
}
