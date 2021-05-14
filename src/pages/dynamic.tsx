import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { connect } from 'react-redux';

import { LineChart } from 'components/LineChart';
import { setSelectedItemIndex } from 'store/reducers/footer';
import { isBrowser } from 'utils/functions';
import { TReducersState } from 'utils/types';

const DynamicPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Money Handler - динамика</title>
      </Head>
      <LineChart />
    </>
  );
};

DynamicPage.getInitialProps = async ({ res, store }: NextPageContext<TReducersState>) => {
  if (!isBrowser() && !store.getState().auth.userIsAuth) {
    res.writeHead(302, { Location: '/' });
    res.end();
  }

  store.dispatch(setSelectedItemIndex(2));

  return {};
};

export default connect()(DynamicPage);
