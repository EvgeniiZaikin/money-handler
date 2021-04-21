import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content={`width=device-width, minimum-scale=1.0, initial-scale=1.0, 
                            maximum-scale=1.0, user-scalable=no, viewport-fit=cover`}
      />
      <title>Money handler app</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>

    <Component {...pageProps} />
  </>
);

export default MyApp;
