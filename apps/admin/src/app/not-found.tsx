import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFoundPage() {
  const t = useTranslations();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {t('welcome')}
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for could not be found.</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go back to Home
      </Link>
    </div>
  );
}
