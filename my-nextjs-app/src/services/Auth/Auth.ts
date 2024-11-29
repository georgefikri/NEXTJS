// Function to parse users from environment variables
const getUsersFromEnv = (): { userName: string; password: string }[] => {
  const usersEnv = process.env.USERS; // Get users from environment variables
  if (!usersEnv) {
    console.error('No USERS environment variable found!');
    return [];
  }

  return usersEnv.split(',').map((user) => {
    const [userName, password] = user.split(':');
    return { userName, password };
  });
};

export const login = async (userName: string, password: string): Promise<boolean> => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userName, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return true;
};

export const logout = async (): Promise<void> => {
  await fetch('/api/auth/logout', { method: 'POST' });
};

// Function to validate user credentials
export const validateCredentials = (userName: string, password: string): boolean => {
  const users = getUsersFromEnv(); // Fetch users from environment variables
  return users.some((user) => user.userName === userName && user.password === password);
};

// Function to create an authentication token
export const createAuthToken = (): string => {
  return 'mock_token';
};

// Function to destroy an authentication token
export const destroyAuthToken = (): string => {
  return '';
};
