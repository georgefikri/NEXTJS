'use client';

import { useUser, useUserActions } from '@/store/hooks/useUser';

const Users = () => {
  const user = useUser();
  const { login, logout } = useUserActions();

  return (
    <>
      <h1>user name {user ? user : 'no username found'}</h1>
      <button onClick={() => login('george')}>login</button>
      <button onClick={logout}>logout</button>
    </>
  );
};

export default Users;
