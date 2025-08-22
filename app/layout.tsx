// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../components/CartContext";
import { Footer } from "./common/Footer";
import { Header } from "./common/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StyleStore - E-Commerce",
  description: "A simple e-commerce demo application built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
