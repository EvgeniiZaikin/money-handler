import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { connect } from 'react-redux';

import { MoneyFabs } from 'components/MoneyFabs';
import { TReducersState } from 'utils/types';
import { setSelectedItemIndex } from 'store/reducers/footer';

const ControlPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Money Handler - контроль денежных средств</title>
      </Head>
      <MoneyFabs />
    </>
  );
};

ControlPage.getInitialProps = async ({ store }: NextPageContext<TReducersState>) => {
  store.dispatch(setSelectedItemIndex(0));

  return {};
};

export default connect()(ControlPage);
