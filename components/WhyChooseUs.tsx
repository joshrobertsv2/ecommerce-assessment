/*
- This is a new component extracted from the main page to improve modularity and reusability.
- It contains the "Why Choose Us?" section, keeping the main page component cleaner.
- All styling is self-contained within this component using Tailwind CSS.
*/

import React from 'react';

const features = [
  {
    title: 'Free Shipping',
    description: 'Free shipping on all orders over $50',
    icon: (
      <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' />
      </svg>
    ),
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Quality Guaranteed',
    description: '30-day money-back guarantee',
    icon: (
      <svg className='w-8 h-8 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
    bgColor: 'bg-green-100',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer support',
    icon: (
      <svg className='w-8 h-8 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z' />
      </svg>
    ),
    bgColor: 'bg-purple-100',
  },
];

export default function WhyChooseUs() {
  return (
    <section className='mt-16 py-12 bg-white rounded-xl shadow-sm'>
      <div className='max-w-4xl mx-auto px-6'>
        <h3 className='text-2xl font-bold text-gray-900 text-center mb-8'>
          Why Choose Us?
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature) => (
            <div key={feature.title} className='text-center'>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${feature.bgColor}`}>
                {feature.icon}
              </div>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                {feature.title}
              </h4>
              <p className='text-gray-600'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
