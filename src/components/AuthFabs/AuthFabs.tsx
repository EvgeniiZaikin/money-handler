import { FC, MouseEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import Router from 'next/router';

import { Box, Fab, Grid } from '@material-ui/core';

import { setAuthCode, resetAuthCode } from 'store/reducers/auth';
import { getAuthCode } from 'store/reducers/auth/selectors';
import { login } from 'store/reducers/user';
import { showSnackbar } from 'store/reducers/snackbar';
import { TSnackbar } from 'store/reducers/snackbar/types';

import { useStyles } from './AuthFabs.styles';

const AuthFabs: FC = () => {
  const { container } = useStyles();

  const dispatch = useDispatch();
  const authCode = useSelector(getAuthCode);

  useEffect(() => {
    if (authCode.length >= 4) {
      if (process.env.AUTH_CODE === authCode) {
        dispatch(login());
        Router.push('/control');
      } else {
        dispatch(resetAuthCode());
        dispatch(showSnackbar({ message: 'Код введён не верно', type: TSnackbar.ERROR }));
      }
    }
  }, [authCode, dispatch]);

  const handleSetCode = (event: MouseEvent<HTMLElement>) => {
    const digit: string = event.currentTarget.textContent;
    dispatch(setAuthCode(digit));
  };

  return (
    <Box className={container}>
      <Box textAlign="center" marginBottom="2rem">
        <Grid container>
          {[1, 2, 3].map((item: number) => (
            <Grid key={uniqid()} item xs={4}>
              <Fab color="primary" onClick={handleSetCode}>
                {item}
              </Fab>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box textAlign="center" marginBottom="2rem">
        <Grid container>
          {[4, 5, 6].map((item: number) => (
            <Grid key={uniqid()} item xs={4}>
              <Fab color="primary" onClick={handleSetCode}>
                {item}
              </Fab>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box textAlign="center" marginBottom="2rem">
        <Grid container>
          {[7, 8, 9].map((item: number) => (
            <Grid key={uniqid()} item xs={4}>
              <Fab color="primary" onClick={handleSetCode}>
                {item}
              </Fab>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box textAlign="center">
        <Fab color="primary" onClick={handleSetCode}>
          0
        </Fab>
      </Box>
    </Box>
  );
};

export { AuthFabs };
