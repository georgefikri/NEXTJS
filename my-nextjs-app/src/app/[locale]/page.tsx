import Counter from '@/components/Counter/Counter';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default function LocalePage() {
  return (
    <main>
      <Counter />
    </main>
  );
}
