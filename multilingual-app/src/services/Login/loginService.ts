import { login as authLogin } from '@/services/Auth/Auth';

export const loginService = async (
    userName: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {

    try {
        const isLoggedIn = await authLogin(userName, password);
        if(isLoggedIn) {
            return { success: true };
        } else {
            return { success: false, error: 'Login failed. Please check your credentials.' };
        }
    } catch  {
        console.error('Login failed. Please check your credentials.');
        return { success: false, error: 'Login failed. Please check your credentials.' };
    }
}