import { FC } from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header: FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Money Handler</Typography>
    </Toolbar>
  </AppBar>
);

export { Header };
