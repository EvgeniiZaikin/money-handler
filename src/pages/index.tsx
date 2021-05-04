import { connect } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import { AuthFabs } from 'components/AuthFabs';
import { TReducersState } from 'utils/types';
import { setSelectedItemIndex } from 'store/reducers/footer';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Money Handler - авторизация</title>
      </Head>
      <AuthFabs />
    </>
  );
};

IndexPage.getInitialProps = async ({ store }: NextPageContext<TReducersState>) => {
  store.dispatch(setSelectedItemIndex(null));

  return {};
};

export default connect()(IndexPage);
