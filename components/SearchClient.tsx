// components/SearchClient.tsx

/*
- This new client component encapsulates the state and logic for the comment section on the search page.
- It handles user input and comment submission, preventing the main page component from needing to be a client component.
- Comments are rendered safely as text to prevent XSS.
*/

'use client';

import { useState } from 'react';

export default function SearchClient() {
  const [userInput, setUserInput] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
        setComments([...comments, userInput]);
        setUserInput('');
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl mb-4">Leave a Comment</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Write your comment here..."
        />
        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Comment
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Comments</h3>
        {comments.length > 0 ? (
            <div className="space-y-3">
                {comments.map((comment, idx) => (
                    <div key={idx} className="p-3 bg-white border border-gray-200 rounded-lg">
                        {comment}
                    </div>
                ))}
            </div>
        ) : (
            <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
}
