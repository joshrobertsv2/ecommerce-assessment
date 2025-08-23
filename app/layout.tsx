/*
- Cleaned up the layout file for clarity and maintainability.
- Componentized the layout structure to separate concerns and improve reusability.
*/


// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '../components/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simple E-Commerce Demo',
  description: 'A simple e-commerce demo application.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <CartProvider>
          <Header/>
          <main>{children}</main>
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
