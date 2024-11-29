'use client';
import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { localization } from '@/consts/loadMessage';
import { logout } from '@/services/Auth/Auth';
import { useUserContext } from '@/store/context/UserContext';
import { useRouter } from 'next/navigation';

const Header = ({ locale }: { locale: string }) => {
  const messages = localization(locale);
  const isRTL = locale === 'ar';
  const { user, clearUser } = useUserContext();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      clearUser();
      const currentLocale = locale || 'en';
      router.replace(`/${currentLocale}/login`);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="bg-blue-500 text-white p-4 flex mb-4">
      <div className="container mx-auto flex items-center">
        <h1 className={`text-3xl font-bold ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
          {messages['myWebsite'] || 'My Website'}
        </h1>
        <div
          className={`flex items-center ${isRTL ? 'order-first' : 'order-last'} gap-4`}
        >
          <LanguageSwitcher />
          {user && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
