import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { connect } from 'react-redux';

import { setSelectedItemIndex } from 'store/reducers/footer';
import { TReducersState } from 'utils/types';

const DynamicPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Money Handler - динамика</title>
      </Head>
      <h1>Страница динамики доходов и расходов!</h1>
    </>
  );
};

DynamicPage.getInitialProps = async ({ store }: NextPageContext<TReducersState>) => {
  store.dispatch(setSelectedItemIndex(2));

  return {};
};

export default connect()(DynamicPage);
