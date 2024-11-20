import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default function RootPage() {
  const headerList = headers();
  const acceptLanguage = headerList.get('accept-language') || '';
  const supportedLocales = ['en', 'ar'];

  // Extract the preferred language from the Accept-Language header
  const preferredLocale = supportedLocales.find((locale) =>
    acceptLanguage.startsWith(locale)
  );

  // Redirect to the preferred or default locale
  redirect(`/${preferredLocale || 'en'}`);
}
