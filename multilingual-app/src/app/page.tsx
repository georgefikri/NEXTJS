import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default function RootPage() {
  const headerList = headers();
  const acceptLanguage = headerList.get('accept-language') || '';
  const supportedLocales = ['en', 'ar'];

  const preferredLocale = supportedLocales.find((locale) =>
    acceptLanguage.startsWith(locale)
  );

  redirect(`/${preferredLocale || 'en'}`);
}
