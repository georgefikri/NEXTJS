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
      {
      currentLocale === 'en' ? (
        <button
          onClick={() => changeLanguage('ar')}
        >
          العربية
        </button>
      ) : (
        <button
          onClick={() => changeLanguage('en')}
        >
          English
        </button>
      )
      }

    </div>
  );
}
