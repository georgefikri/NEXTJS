import LanguageSwitcher from '@/components/LanguageSwitcher';
import { loadMessages } from '@/lib/locale';
export default async function LocalePage({ params }: { params: { locale: string } }) {
  const messages = await loadMessages(params.locale);

  return (
    <main>
      <LanguageSwitcher />

      <h1>{messages['welcome']}</h1>
      <p>{messages['description']}</p>
    </main>
  );
}
