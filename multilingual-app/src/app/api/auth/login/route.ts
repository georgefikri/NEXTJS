import { NextResponse } from 'next/server';
import { validateCredentials, createAuthToken } from '@/services/Auth/Auth';

export async function POST(request: Request) {
  const { userName, password } = await request.json();

  if (validateCredentials(userName, password)) {
    const response = NextResponse.json({ messsage: 'Login Successfully' });

    const token = createAuthToken();
    response.cookies.set('auth_token', token, { httpOnly: true, path: '/' });

    return response;
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
