import Head from 'next/head';
import { AppProps } from 'next/app';

import { wrapper } from 'store';

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

export default wrapper.withRedux(MyApp);
