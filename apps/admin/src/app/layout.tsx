import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import AppClientWrapper from '../global/AppWrapper/AppClientWrapper';
import AppServerWrapper from '../global/AppWrapper/AppServerWrapper';
import React from 'react';

export const metadata: Metadata = {
  title: 'OSOS',
  description: 'OSOS Description',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('222');
  const locale = await getLocale();
  const x: number = 5;
  return (
    <html lang={locale}>
      <AppClientWrapper>
        <AppServerWrapper>
          {children} {x}
        </AppServerWrapper>
      </AppClientWrapper>
    </html>
  );
}
