import { FC, MouseEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

import { Box, Fab, Grid } from '@material-ui/core';

import { setAuthCode } from 'store/reducers/auth';
import { getAuthCode } from 'store/reducers/auth/selectors';
import { useStyles } from './AuthFabs.styles';

const AuthFabs: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const authCode = useSelector(getAuthCode);
  useEffect(() => {
    if (authCode.length >= 4) {
      alert('Процедура авторизации');
    }
  }, [authCode]);

  const handleSetCode = (event: MouseEvent<HTMLElement>) => {
    const digit: string = event.currentTarget.textContent;
    dispatch(setAuthCode(digit));
  };

  return (
    <>
      <Box className={classes.block}>
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
      <Box className={classes.block}>
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
      <Box className={classes.block}>
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
      <Box className={classes.block}>
        <Fab color="primary" onClick={handleSetCode}>
          0
        </Fab>
      </Box>
    </>
  );
};

export { AuthFabs };