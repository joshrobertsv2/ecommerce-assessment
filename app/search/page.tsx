/*
- Converted the page to a Server Component to improve initial load performance.
- Removed `dangerouslySetInnerHTML` to fix both Reflected and Stored XSS vulnerabilities.
- The search query is now safely rendered as text.
- Delegated all client-side state management (comment form) to the `SearchClient` component, following the separation of concerns principle.
*/

import SearchClient from '@/components/SearchClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Results | StyleStore',
};

type SearchPageProps = {
  searchParams: {
    q?: string;
  };
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Search Results</h1>

      <div className="mb-8 p-4 bg-gray-100 rounded-lg">
        {query ? (
          <p className="text-lg">
            You searched for: <strong className="font-semibold">{query}</strong>
          </p>
        ) : (
          <p className="text-lg">Please enter a search term.</p>
        )}
      </div>

      <SearchClient />
    </main>
  );
}