'use client';

import Button from '@/sharedComponents/Button';
import { useUser, useUserActions } from '@/store/hooks/useUser';

const Users = () => {
  const user = useUser();
  const { login, logout } = useUserActions();

  return (
    <div className="flex flex-col">
      <h1>user name {user ? user : 'no username found'}</h1>
      <div className="flex gap-2">
        <Button
          variant="primary"
          size="medium"
          onClick={() => login('george')}
          className="shadow"
        >
          login
        </Button>
        <Button variant="danger" size="medium" onClick={logout} className="shadow">
          logout
        </Button>
      </div>
    </div>
  );
};

export default Users;
