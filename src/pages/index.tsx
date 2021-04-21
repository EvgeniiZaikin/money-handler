import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPage } from 'next';
import Head from 'next/head';
import uniqid from 'uniqid';

import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { getIsAuth } from 'store/reducers/user/selectors';
import { login } from 'store/reducers/user';

const useStyles = makeStyles(() =>
  createStyles({
    block: {
      textAlign: 'center',
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
    <div>
      <h1>Hello Money Handler!</h1>
      <p>User login status: {`${isAuth}`}</p>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => (
          <Grid key={uniqid()} item xs={4} className={classes.block}>
            <Fab color="primary">{item}</Fab>
          </Grid>
        ))}
      </Grid>
      <Box className={classes.block} paddingTop="1rem">
        <Fab color="primary">0</Fab>
      </Box>
    </div>
  );
};

export default IndexPage;
