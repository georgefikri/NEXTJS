'use client';

// next.js provides this component with props.error
export default function Error({ error }) {
  return (
    <main className="error">
      <h1>Failed to fetch meals</h1>
      <p>{error.message}</p>
    </main>
  );
}
