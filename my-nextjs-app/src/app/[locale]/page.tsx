import Counter from '@/components/Counter/Counter';
import Users from '@/components/Users/Users';

export default function LocalePage() {
  return (
    <main className="container mx-auto flex flex-col">
      <Counter />
      <Users />
    </main>
  );
}
