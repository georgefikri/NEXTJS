'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error('Error captured:', error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong</h1>
      <p className="text-lg text-gray-600 mb-6">
        we are  sorry, but an unexpected error occurred. Please try again later.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={reset}
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition"
        >
          Retry
        </button>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-2 bg-green-600 text-white font-medium rounded-md shadow hover:bg-green-700 transition"
        >
          Go to Homepage
        </button>
      </div>
    </main>
  );
}
