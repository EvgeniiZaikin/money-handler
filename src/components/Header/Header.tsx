import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { logout } from 'store/reducers/user';
import { getIsAuth } from 'store/reducers/user/selectors';

import { useStyles } from './Header.styles';

const Header: FC = () => {
  const { header, title } = useStyles();
  const dispatch = useDispatch();

  const userIsAuth: boolean = useSelector(getIsAuth);

  const handleExit = () => {
    dispatch(logout());
    Router.push('/');
  };

  return (
    <AppBar position="static" className={header}>
      <Toolbar>
        <Typography variant="h6" className={title}>
          Money Handler
        </Typography>
        {userIsAuth && (
          <IconButton onClick={handleExit} color="inherit">
            <ExitToAppIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export { Header };
