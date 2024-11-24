import Counter from '@/components/Counter';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Users from '@/components/Users';
import { loadMessages } from '@/lib/locale';

export default  function LocalePage({ params }: { params: { locale: string } }) {
  const messages = loadMessages(params.locale);

  return (
    <main>
      <LanguageSwitcher />

      <h1>{messages['welcome']}</h1>
      <p>{messages['description']}</p>

      <Counter />
      <Users />
    </main>
  );
}
