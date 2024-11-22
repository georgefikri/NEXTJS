import { useUserContext } from '../context/UserContext';

// hook to get username

export const useUser = () => {
  const { user } = useUserContext();
  return user;
};

// hook to get login and logout actions
export const useUserActions = () => {
  const { login, logout } = useUserContext();
  return { login, logout };
};
