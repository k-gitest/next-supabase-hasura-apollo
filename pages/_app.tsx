'use client';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import hasuraClient from '../lib/hasura';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={hasuraClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
