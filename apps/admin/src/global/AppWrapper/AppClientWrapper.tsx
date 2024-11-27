'use client';
import React from 'react';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import Cookies from 'js-cookie';

function AppWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const darkMode = Cookies.get('darkMode') === 'true';
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <body className={darkMode ? 'dark' : 'light'}>{children}</body>
      </Provider>
    </QueryClientProvider>
  );
}

export default AppWrapper;
