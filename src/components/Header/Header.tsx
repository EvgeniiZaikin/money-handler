import { FC } from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { useStyles } from './Header.styles';

const Header: FC = () => {
  const { header } = useStyles();

  return (
    <AppBar position="static" className={header}>
      <Toolbar>
        <Typography variant="h6">Money Handler</Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
