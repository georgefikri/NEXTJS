'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useUserContext } from '@/store/context/UserContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isInitialized } = useUserContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isInitialized && !user && !pathname.endsWith('/login')) {
      const currentLocale = pathname.split('/')[1] || 'en';
      router.replace(`/${currentLocale}/login`);
    }
  }, [user, isInitialized, router, pathname]);

  // Wait for initialization before rendering or redirecting
  if (!isInitialized) {
    return <p>Loading...</p>; // Show a loading message while initializing
  }

  if (!user && pathname.endsWith('/login')) {
    return <>{children}</>; // Allow the login page to render
  }

  if (!user) {
    return <p>Redirecting...</p>; // Redirect during authentication check
  }

  return <>{children}</>; // Render the children if user is authenticated
};

export default ProtectedRoute;
