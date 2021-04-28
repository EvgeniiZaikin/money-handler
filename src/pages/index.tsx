import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import { getIsAuth } from 'store/reducers/user/selectors';
import { login } from 'store/reducers/user';
import { AuthFabs } from 'components/AuthFabs';
import { TReducersState } from 'utils/types';
import { setSelectedItemIndex } from 'store/reducers/footer';

const IndexPage: NextPage = () => {
  const isAuth: boolean = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login());
  }, [dispatch]);

  console.log(isAuth);
  console.log(process.env.AUTH_CODE);

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
