import { loadMessages } from '@/lib/locale';


export const localization = (locale: string) => {
  const messages = loadMessages(locale);
  return messages;
};
