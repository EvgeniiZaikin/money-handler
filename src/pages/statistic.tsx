import { NextPage } from 'next';
import Head from 'next/head';

import { StatisticList } from 'components/StatisticList';

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

export default StatisticPage;
