import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header/Header';

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

  return (
    <>
      <Header locale={locale} />
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
    </>
  );
}
