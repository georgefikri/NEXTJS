import { Suspense } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by you.',
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals
          <span className={styles.highlight}> by You </span>
        </h1>
        <p className={styles.cta}>
          <Link href="/meals/share">share your own meals</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={
            <div className={styles.loading}>
              <p>Loading...</p>
            </div>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
