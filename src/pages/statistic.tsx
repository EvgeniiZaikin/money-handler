import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { connect } from 'react-redux';

import { StatisticList } from 'components/StatisticList';
import { TReducersState } from 'utils/types';
import { setSelectedItemIndex } from 'store/reducers/footer';

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

StatisticPage.getInitialProps = async ({ store }: NextPageContext<TReducersState>) => {
  store.dispatch(setSelectedItemIndex(1));

  return {};
};

export default connect()(StatisticPage);
