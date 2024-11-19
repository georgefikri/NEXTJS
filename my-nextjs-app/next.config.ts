import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable strict mode for catching errors early
  generateEtags: false, // Prevent caching issues
  i18n: {
    locales: ['en', 'ar'], // Supported locales
    defaultLocale: 'en', // Default locale
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store, max-age=0, must-revalidate', // Disable caching
        },
      ],
    },
  ],
  rewrites: async () => {
    return {
      beforeFiles: [], // Add any rewrites that should run before files
      afterFiles: [
        {
          source: '/:path*',
          destination: '/:path*',
          has: [
            {
              type: 'header',
              key: 'x-ignore-grammarly',
              value: 'true',
            },
          ],
        },
      ],
      fallback: [], // Add any fallback rewrites if needed
    };
  },
};

export default nextConfig;
