'use client';
import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { localization } from '@/consts/loadMessage';

const Header = ({ locale }: { locale: string }) => {
  const messages = localization(locale);
  const isRTL = locale === 'ar';

  return (
    <header className="bg-blue-500 text-white p-4 flex">
      <div className="container mx-auto flex items-center">
        {/* Adjust alignment based on locale */}
        <h1 className={`text-3xl font-bold ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
          {messages['myWebsite'] || 'My Website'}
        </h1>
        <div className={`flex items-center ${isRTL ? 'order-first' : 'order-last'}`}>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
