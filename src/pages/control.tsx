import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { connect } from 'react-redux';

import { ControlPanel } from 'components/ControlPanel';
import { TReducersState } from 'utils/types';
import { setSelectedItemIndex } from 'store/reducers/footer';
import { isBrowser } from 'utils/functions';
import { ROUTES } from 'constants/pages';

const ControlPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Money Handler - контроль денежных средств</title>
      </Head>
      <ControlPanel />
    </>
  );
};

ControlPage.getInitialProps = async ({ res, store }: NextPageContext<TReducersState>) => {
  if (!isBrowser() && !store.getState().auth.userIsAuth && res) {
    res.writeHead(302, { Location: ROUTES.ROOT });
    res.end();
  }

  store.dispatch(setSelectedItemIndex(0));

  return {};
};

export default connect()(ControlPage);
