import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media | StyleStore',
};

export default function SocialPage() {
  return (
    <main className="container mx-auto px-4 py-12 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Follow Us</h1>
      <p className="text-lg text-gray-600 max-w-2xl">This page is under construction. Soon you will find links to all our social media channels. Stay connected!</p>
    </main>
  );
}
