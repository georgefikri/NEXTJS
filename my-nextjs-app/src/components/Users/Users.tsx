'use client';

import Button from '@/sharedComponents/Button';

import { useUserContext } from '@/store/context/UserContext';
import { login as authLogin, logout as authLogout } from '@/services/Auth/Auth';

const Users = () => {
  const { user, setUser, clearUser } = useUserContext();

  const handleLogin = async () => {
    try {
      const isLoggedIn = await authLogin('user123', 'password123');
      if (isLoggedIn) setUser('user123');
    } catch {
      console.log('error while login ');
    }
  };

  const handleLogout = async () => {
    try {
      await authLogout();
      clearUser();
    } catch {
      console.error('Logout failed');
    }
  };

  return (
    <div className="flex flex-col">
      <h1>User: {user || 'No user logged in'}</h1>
      <div className="flex gap-2">
        <Button variant="primary" size="medium" onClick={handleLogin} className="shadow">
          login
        </Button>
        <Button variant="danger" size="medium" onClick={handleLogout} className="shadow">
          logout
        </Button>
      </div>
    </div>
  );
};

export default Users;
