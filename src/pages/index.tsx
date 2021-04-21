import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPage } from 'next';
import Head from 'next/head';
import uniqid from 'uniqid';

import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { getIsAuth } from 'store/reducers/user/selectors';
import { login } from 'store/reducers/user';

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

  return (
    <>
      <Head>
        <title>Money Handler - авторизация</title>
      </Head>
      <div>
        <h1>Hello Money Handler!</h1>
        <p>User login status: {`${isAuth}`}</p>
        <Grid container>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => (
            <Grid key={uniqid()} item xs={4} className={classes.block}>
              <Fab color="primary">{item}</Fab>
            </Grid>
          ))}
        </Grid>
        <Box className={classes.block} paddingTop=".5rem">
          <Fab color="primary">0</Fab>
        </Box>
        <Box>
          <Button className={classes.demo}>демо</Button>
        </Box>
        <div>{process.env.AUTH_CODE}</div>
      </div>
    </>
  );
};

export default IndexPage;
