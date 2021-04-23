import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPage } from 'next';
import Head from 'next/head';

import { getIsAuth } from 'store/reducers/user/selectors';
import { login } from 'store/reducers/user';
import { AuthFabs } from 'components/AuthFabs';

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

export default IndexPage;
