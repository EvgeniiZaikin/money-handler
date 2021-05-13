import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { connect } from 'react-redux';

import { MoneyFabs } from 'components/MoneyFabs';
import { TReducersState } from 'utils/types';
import { setSelectedItemIndex } from 'store/reducers/footer';
import { isBrowser } from 'utils/functions';

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

ControlPage.getInitialProps = async ({ res, store }: NextPageContext<TReducersState>) => {
  if (!isBrowser() && !store.getState().auth.userIsAuth) {
    res.writeHead(302, { Location: '/' });
    res.end();
  }

  store.dispatch(setSelectedItemIndex(0));

  return {};
};

export default connect()(ControlPage);
