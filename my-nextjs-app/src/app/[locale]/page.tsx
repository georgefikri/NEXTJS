// src/app/[locale]/page.tsx
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
