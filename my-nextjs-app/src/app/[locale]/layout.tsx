// src/app/[locale]/layout.tsx
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

// This will be called server-side to determine the available locales
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

  const messages = (await import(`@/locales/${locale}.json`)).default;

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}
