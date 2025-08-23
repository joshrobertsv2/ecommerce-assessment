/*
- Replaced all `<a>` tags with Next.js `<Link>` so navigation is faster and smoother.
- Made sure all links go to real routes (like `/` for Home).
- Updated the nav link keys to use the label (e.g., "Home") instead of the index for better stability.
*/

import React from "react";
import CartDisplay from "./CartDisplay";
import Link from "next/link";

export const Header = () => {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
            </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">StyleStore</h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                {link.label}
                </Link>
            ))
            }
        </nav>

        <CartDisplay />
        </div>
    </header>
    );
};

