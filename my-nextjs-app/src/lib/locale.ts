export const loadMessages = async (locale: string): Promise<Record<string, string>> => {
  try {
    const messages = (await import(`@/locales/${locale}.json`)).default;
    return messages;
  } catch (error) {
    console.error(`Error loading localization messages for locale: ${locale}`, error);
    return {
      welcome: 'Welcome (Fallback)',
      description: 'This is a fallback description.',
    }; // Fallback messages
  }
};
