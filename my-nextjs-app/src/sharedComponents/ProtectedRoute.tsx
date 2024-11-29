'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useUserContext } from '@/store/context/UserContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useUserContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user && !pathname.endsWith('/login')) {
      const currentLocale = pathname.split('/')[1] || 'en';
      router.replace(`/${currentLocale}/login`);
    }
  }, [user, router, pathname]);

  // Ensure ProtectedRoute doesn't block the login page rendering
  if (!user && pathname.endsWith('/login')) {
    return <>{children}</>;
  }

  if (!user) {
    return <p>Redirecting...</p>; // Show a loading message during redirection
  }

  return <>{children}</>;
};

export default ProtectedRoute;
