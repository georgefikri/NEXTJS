import { NextResponse } from 'next/server';
import { destroyAuthToken } from '@/services/Auth/Auth';

export async function POST() {
  const response = NextResponse.json({ message: 'Logout successful' });

  const clearedToken = destroyAuthToken();

  response.cookies.set('auth_token', clearedToken, {
    httpOnly: true,
    path: '/',
    maxAge: -1,
  });

  return response;
}
