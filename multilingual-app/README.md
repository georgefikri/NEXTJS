# My Next.js Multilingual App

A simple Next.js project supporting English and Arabic languages.

## Project Description

This project demonstrates a multilingual setup in Next.js using dynamic routing and client-side logic for locale management.

---

## Key Features

1. **Dynamic Routing**: Locale-based routing handled via the App Router.
2. **Client-Side Logic**: Redirecting users to their preferred locale using `next/navigation`'s `redirect()` method.
3. **Localization Implementation**: Locale-based content rendering using JSON files.
4. **Middleware Issue Fix**: Addressing inconsistencies with Next.js Middleware across versions.
5. **Tailwind CSS**: Styling components using Tailwind CSS.
6. **Reusable Components**: Added a sharedComponents directory for reusable components (src/sharedComponents).
- Button Component: A custom Button component for consistent styling across the app.
- Input Component: A custom Input component for consistent styling across the app.
- Localize Link Component : A custom LocalizeLink component for locale-based routing.
- ProtectedRoute Component : A custom ProtectedRoute component for protected routes.
7. **Authentication** : Login/logout functionality with protected routes to secure pages.
8. **Environment-Based User Management**: Credentials are stored securely in environment variables (.env.local).
9. **Separation of Concerns**: Organized code into separate directories for better readability and maintainability, logic is separated from the UI.

## Authentication

### Login Functionality

We implemented a login system where:

1. **Users enter credentials** on a login page.
2. **Authentication logic validates** the credentials against a list stored in environment variables.
3. **Authenticated users** are given access to protected pages.

### Protected Routes

- Routes are protected using a ProtectedRoute component that:
- Checks the authentication state (via a UserContext).
- Redirects unauthenticated users to the login page.

### Logout Functionality

- A Logout button was added to the header.
- Clicking the button: ( Invalidates the session by clearing the token , Redirects the user back to the login page)

## Environment-Based User Credentials

### Environment Variable Setup

- User credentials are stored in the **.env.local** file in the format:

```tsx
USERS=user123:password123,admin:admin123,guest:guest123
```

- Format: username:password pairs separated by commas.
- The validateCredentials function parses this environment variable to verify users.

## How Protected Routes Work

1. ProtectedRoute Component:

- Wraps around children components.
- Checks the user state from UserContext.
- Redirects unauthenticated users to the login page based on the current locale.

2. Authentication Flow:

- Users log in using valid credentials, which sets the user state in UserContext.
- Logging out clears the user state and redirects the user to the login page.

### ProtectedRoute Component

```tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useUserContext } from '@/store/context/UserContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useUserContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user && !pathname.endsWith('/login')) {
      const currentLocale = pathname.split('/')[1] || 'en';
      router.replace(`/${currentLocale}/login`);
    }
  }, [user, router, pathname]);

  if (!user && pathname.endsWith('/login')) {
    return <>{children}</>; // Allow login page to render
  }

  if (!user) {
    return <p>Redirecting...</p>; // Show redirecting message
  }

  return <>{children}</>;
};

export default ProtectedRoute;
```

# Issues and fixed

## Language Issue and Fix

### **The Issue:**

We encountered challenges with **Next.js Middleware** due to inconsistent behavior across versions:

1. Middleware wasn't fully recognized in versions like `13.5.1`.
2. Partial functionality was observed in `13.4.12`, but it wasn't reliable for locale redirection.

### **Our Solution:**

Instead of relying on middleware, we implemented:

1. **Dynamic Routing**: Locale-based routing handled via the App Router.
2. **Client-Side Logic**: Redirecting users to their preferred locale using `next/navigation`'s `redirect()` method.

## Localization Implementation

### Locale Page Example

```tsx
export default async function LocalePage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const messages = (await import(`@/locales/${locale}.json`)).default;

  return (
    <main>
      <h1>{messages['welcome']}</h1>
      <p>{messages['description']}</p>
    </main>
  );
}
```

### Locale Layout Example

```tsx
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  const supportedLocales = ['en', 'ar'];

  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  const messages = (await import(`../../locales/${locale}.json`)).default;

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}
```

### Root Layout Example

```tsx
import { ReactNode } from 'react';

export default function RootLayout({
  children,
  locale = 'en', // Default locale
}: {
  children: ReactNode;
  locale: string;
}) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
```

## Addressing Middleware Issues

During implementation, middleware inconsistencies in Next.js versions posed challenges:

- Middleware did not reliably redirect users based on locales in versions such as `13.5.1`.
- As a workaround, dynamic routing and client-side logic were used for locale management, ensuring consistent behavior.
