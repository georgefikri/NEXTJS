'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login as authLogin } from '@/services/Auth/Auth';
import { useUserContext } from '@/store/context/UserContext';
import LoginForm from '@/components/LoginForm/LoginForm';

const LoginPage = () => {
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useUserContext();
  const router = useRouter();

  const handleLogin = async (userName: string, password: string) => {
    setError(null);

    try {
      const isLoggedIn = await authLogin(userName, password);
      if (isLoggedIn) {
        setUser(userName); // Set the user in context and localStorage
        router.replace('/'); // Redirect to the home page
      }
    } catch {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <LoginForm onSubmit={handleLogin} error={error} />
    </main>
  );
};

export default LoginPage;
