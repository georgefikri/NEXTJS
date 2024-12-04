
import enMessages from '@/locales/en.json';
import arMessages from '@/locales/ar.json';

const localizationMessages: Record<string, Record<string, string>> = {
  en: enMessages,
  ar: arMessages,
};

export const loadMessages = (locale: string): Record<string, string> => {
  if (localizationMessages[locale]) {
    return localizationMessages[locale];
  }
  console.error(`Localization for locale "${locale}" not found.`);
  return {
    welcome: 'Welcome (Fallback)',
    description: 'This is a fallback description.',
  };
};
