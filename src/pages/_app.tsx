import { useEffect } from 'react';
import Head from 'next/head';
import { AppContext, AppProps } from 'next/app';

import { CssBaseline } from '@material-ui/core';

import { wrapper } from 'store';
import { AppLayout } from 'components/AppLayout';
import { EditMoneyDialog } from 'components/EditMoneyDialog';
import { Backdrop } from 'components/Backdrop';
import { Snackbar } from 'components/Snackbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content={`width=device-width, minimum-scale=1.0, initial-scale=1.0, 
                            maximum-scale=1.0, user-scalable=no, viewport-fit=cover`}
        />
        <title>Money handler - ваш личный финансовый управляющий</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <CssBaseline />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      <EditMoneyDialog />
      <Backdrop />
      <Snackbar />
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: {
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      pathname: ctx.pathname,
    },
  };
};

export default wrapper.withRedux(MyApp);
