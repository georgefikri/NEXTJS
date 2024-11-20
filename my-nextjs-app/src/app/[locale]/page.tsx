// src/app/[locale]/page.tsx
export default async function LocalePage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const messages = require(`@/locales/${locale}.json`);

  return (
    <main>
      <h1>{messages['welcome']}</h1>
      <p>{messages['description']}</p>
    </main>
  );
}
