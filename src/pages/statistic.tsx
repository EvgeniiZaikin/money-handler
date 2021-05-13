import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { connect } from 'react-redux';

import { StatisticList } from 'components/StatisticList';
import { TReducersState } from 'utils/types';
import { setSelectedItemIndex } from 'store/reducers/footer';
import { isBrowser } from 'utils/functions';

const StatisticPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Money Handler - статистика</title>
      </Head>
      <StatisticList />
    </>
  );
};

StatisticPage.getInitialProps = async ({ res, store }: NextPageContext<TReducersState>) => {
  if (!isBrowser() && !store.getState().auth.userIsAuth) {
    res.writeHead(302, { Location: '/' });
    res.end();
  }

  store.dispatch(setSelectedItemIndex(1));

  return {};
};

export default connect()(StatisticPage);
