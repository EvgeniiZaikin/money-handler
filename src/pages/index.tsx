import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPage } from 'next';
import Head from 'next/head';

import { getIsAuth } from 'store/reducers/user/selectors';
import { login } from 'store/reducers/user';

const IndexPage: NextPage = () => {
  const isAuth: boolean = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Money handler - ваш личный финансовый управляющий</title>
      </Head>
      <h1>Hello Money Handler!</h1>
      <p>User login status: {`${isAuth}`}</p>
    </div>
  );
};

export default IndexPage;
