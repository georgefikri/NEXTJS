'use client';

import Input from '@/sharedComponents/Input';
import React, { useState } from 'react';

interface LoginFormProps {
  onSubmit: (userName: string, password: string) => void;
  error: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(userName, password);
  };

  return (
    <div className="w-full max-w-sm bg-white p-8 shadow-lg rounded-md">
      <h1 className="text-2xl font-bold text-center text-blue-500 mb-6">Login</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            label="UserName"
            id="username"
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your user name"
          />
        </div>
        <div>
          <Input
            label="password"
            id="password"
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
