import { useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { connect } from 'react-redux';

import { MoneyFabs } from 'components/MoneyFabs';
import { TCategories, TFirebaseCategory, TFirebaseDocument, TFirebaseType, TReducersState } from 'utils/types';
import { setSelectedItemIndex } from 'store/reducers/footer';
import { firebaseConverter, isBrowser } from 'utils/functions';
import { db } from 'database/firebase';

const ControlPage: NextPage = () => {
  useEffect(() => {
    async function showCategories() {
      const result: TCategories = [];

      const unsub = db.collection('categories').withConverter(firebaseConverter<TFirebaseCategory>());
      const { docs } = await unsub.get();
      for await (const doc of docs) {
        const { id } = doc;
        const { label, type } = doc.data();

        const categoryType: TFirebaseDocument<TFirebaseType> = await type
          .withConverter(firebaseConverter<TFirebaseType>())
          .get();

        result.push({ id, label, type: categoryType.data().label });
      }

      console.log(result);
    }

    showCategories();
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
