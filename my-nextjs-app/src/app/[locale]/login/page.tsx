'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/store/context/UserContext';
import LoginForm from '@/components/LoginForm/LoginForm';
import { loginService } from '@/services/Login/loginService';

const LoginPage = () => {
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useUserContext();
  const router = useRouter();

  const handleLogin = async (userName: string, password: string) => {
    setError(null); // Clear previous errors

    const { success, error: loginError } = await loginService(userName, password);

    if (success) {
      setUser(userName); 
      router.replace('/'); 
    } else {
      setError(loginError || 'Login failed. Please try again.');
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <LoginForm onSubmit={handleLogin} error={error} />
    </main>
  );
};

export default LoginPage;
