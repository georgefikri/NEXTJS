
# My Next.js App

A multilingual web application built with Next.js, implementing robust localization support using dynamic routes and server-side translations.

## Project Overview

Lorem ipsum dolor sit amet, consectetur adipiscing elit. This project demonstrates how to manage locales effectively using Next.js's App Router, React Context for state management, and a custom localization utility.

## Key Features

- Language-based routing with dynamic locale support.
- Middleware-free locale redirection (to address version limitations).
- Centralized state management with React Context and hooks.
- Simplified localization using JSON files for translation storage.

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

## Attachments

Below are screenshots showcasing key snippets for localization logic:

### Locale Page Logic
![Locale Page](./middleware1.png)

### Locale Layout Logic
![Locale Layout](./middleware2.png)

### Root Layout Logic
![Root Layout](./middleware3.png)
