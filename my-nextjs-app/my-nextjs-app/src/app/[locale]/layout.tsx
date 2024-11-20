import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  // List of supported locales
  const supportedLocales = ['en', 'ar'];
  if (!supportedLocales.includes(locale)) {
    // Handle unsupported locales
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}
