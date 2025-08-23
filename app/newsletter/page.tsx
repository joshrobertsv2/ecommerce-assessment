import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter | StyleStore',
};

export default function NewsletterPage() {
  return (
    <main className="container mx-auto px-4 py-12 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Newsletter</h1>
      <p className="text-lg text-gray-600 max-w-2xl">This page is under construction. Sign up for our newsletter soon to get the latest updates, news, and special offers.</p>
    </main>
  );
}
