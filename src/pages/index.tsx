import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPage } from 'next';
import Head from 'next/head';

import { Box, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { getIsAuth } from 'store/reducers/user/selectors';
import { login } from 'store/reducers/user';
import { AuthFabs } from 'components/AuthFabs';

const useStyles = makeStyles(() =>
  createStyles({
    block: {
      textAlign: 'center',
    },
    demo: {
      color: '#808080',
    },
  })
);

const IndexPage: NextPage = () => {
  const classes = useStyles();

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
      <div>
        <AuthFabs />
        <Box>
          <Button className={classes.demo}>демо</Button>
        </Box>
      </div>
    </>
  );
};

export default IndexPage;
