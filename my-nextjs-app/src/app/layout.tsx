import { ReactNode } from 'react';

export default function RootLayout({
  children,
  locale = 'en',
}: {
  children: ReactNode;
  locale: string;
}) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
