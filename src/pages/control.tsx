import { NextPage } from 'next';
import Head from 'next/head';

import { MoneyFabs } from 'components/MoneyFabs';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Money Handler - контроль денежных средств</title>
      </Head>
      <MoneyFabs />
    </>
  );
};

export default IndexPage;
