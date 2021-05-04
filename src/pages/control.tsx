import { useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { connect } from 'react-redux';

import { MoneyFabs } from 'components/MoneyFabs';
import { TReducersState } from 'utils/types';
import { setSelectedItemIndex } from 'store/reducers/footer';
import { isBrowser } from 'utils/functions';
import { db } from 'database/firebase';

const ControlPage: NextPage = () => {
  useEffect(() => {
    const unsub = db.collection('categories').onSnapshot((snapshot) => {
      const allBooks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(allBooks);
    });
    return () => {
      console.log('cleanup');
      unsub();
    };
  }, []);

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
  if (!isBrowser() && !store.getState().user.isAuth) {
    res.writeHead(302, { Location: '/' });
    res.end();
  }

  store.dispatch(setSelectedItemIndex(0));

  return {};
};

export default connect()(ControlPage);
