import '@repo/common/src/styles/index.css';
import { useTranslations } from 'next-intl';
import { Card } from '@repo/ui/card';

export default function Home() {
  const t = useTranslations();

  return (
    <div>
      <main className="bg-green-200 dark:bg-green-950">
        <Card
          title={t('welcome')}
          children="this is children"
          href="some href"
        />
      </main>
    </div>
  );
}
