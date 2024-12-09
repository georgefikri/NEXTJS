import Counter from '@/components/Counter/Counter';
import { localization } from '@/consts/loadMessage';
import LocalizedLink from '@/sharedComponents/LocalizedLink';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

interface LocalePageProps {
  readonly params: {
    locale: string;
  };
}

export default function LocalePage({params}: LocalePageProps) {
  const messages = localization(params.locale);
  return (
    <main className='container mx-auto flex pt-4 flex-col'>
      <Counter />

      <LocalizedLink 
        href="/posts" 
        locale={params.locale}   
        className="my-2 inline-block w-fit px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200">
        {messages['seeAllPosts']}
      </LocalizedLink>
    </main>
  );
}
