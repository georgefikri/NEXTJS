import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header/Header';
import ProtectedRoute from '@/sharedComponents/ProtectedRoute';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default function LocaleLayout({
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

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <Header locale={locale} />
        <ProtectedRoute>{children}</ProtectedRoute>
      </body>
    </html>
  );
}
