'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1];

  const changeLanguage = (locale: string) => {
    if (locale !== currentLocale) {
      const newPath = `/${locale}${pathname.substring(currentLocale.length + 1)}`;
      router.push(newPath);
    }
  };

  return (
    <div>
      <button
        onClick={() => changeLanguage('en')}
        style={{ fontWeight: currentLocale === 'en' ? 'bold' : 'normal' }}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        style={{ fontWeight: currentLocale === 'ar' ? 'bold' : 'normal' }}
      >
        العربية
      </button>
    </div>
  );
}
