import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | StyleStore',
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 max-w-2xl">Have questions? We'd love to hear from you. This page is under construction, but soon you'll find our contact form and details here.</p>
    </main>
  );
}
