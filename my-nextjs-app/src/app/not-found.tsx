'use client';

import { loadMessages } from '@/lib/locale';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();

  // Extract the current locale dynamically from the URL
  const supportedLocales = ['en', 'ar'];
  const segments = pathname.split('/');
  const currentLocale = supportedLocales.includes(segments[1]) ? segments[1] : 'en';
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  const redirectToHome = () => {
    router.push(`/${currentLocale}`);
  };

  

  useEffect(() => {
    const fetchMessages = async () => {
      const localizedMessages = await loadMessages(currentLocale);
      setMessages(localizedMessages);
    };
    fetchMessages();
  }, [currentLocale]);

    if (!messages) {
      return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
          <p className="text-lg text-gray-600">Loading...</p>
        </main>
      );
    }

    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">{messages['notFoundTitle'] || 'Page Not Found'}</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          {messages['notFoundDescription'] || 'Sorry, the page you are looking for does not exist or has been moved.'}
        </p>
        <button
          onClick={redirectToHome}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition"
        >
          {messages['goToHomepage'] || 'Go to Homepage'}
        </button>
      </main>
    );
}
