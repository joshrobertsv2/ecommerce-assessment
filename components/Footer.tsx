/*
- Refactored the component to be more DRY (Don't Repeat Yourself).
- Moved the footer link data into a structured array (`footerLinkColumns`).
- Used a `.map()` loop to render the link columns dynamically, removing repetitive JSX.
- This makes the component cleaner, more maintainable, and easier to update.
*/

import React from 'react';
import Link from 'next/link';

const footerLinkColumns = [
  {
    title: 'SHOP',
    links: [
      { label: 'All Products', href: '/products' },
      { label: 'New Arrivals', href: '/products' },
      { label: 'Sale', href: '/sale' },
    ],
  },
  {
    title: 'SUPPORT',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
    ],
  },
  {
    title: 'CONNECT',
    links: [
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'Social Media', href: '/social' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8 mt-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>StyleStore</h3>
            <p className='text-gray-400'>
              Your destination for premium fashion and lifestyle products.
            </p>
          </div>

          {footerLinkColumns.map((column) => (
            <div key={column.title}>
              <h4 className='text-sm font-semibold mb-3 text-gray-300 uppercase'>
                {column.title}
              </h4>
              <ul className='space-y-2 text-sm text-gray-400'>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className='hover:text-white transition-colors'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
        <div className='border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm'>
          <p>&copy; {new Date().getFullYear()} StyleStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

