'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './reduxStore/store';

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
};
