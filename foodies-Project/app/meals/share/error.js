'use client';

// next.js provides this component with props.error
export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occured</h1>
      <p>Failed to create meal</p>
    </main>
  );
}
