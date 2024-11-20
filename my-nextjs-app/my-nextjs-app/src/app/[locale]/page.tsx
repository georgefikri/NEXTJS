import { notFound } from 'next/navigation';
export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const supportedLocales = ['en', 'ar'];
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  const messages = (await import(`@/locales/${locale}.json`)).default;

  return (
    <main>
      <h1>{messages['welcome']}</h1>
      <p>{messages['description']}</p>
    </main>
  );
}
