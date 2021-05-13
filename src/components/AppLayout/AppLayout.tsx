import { FC, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

import { Box, Container } from '@material-ui/core';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Spacer } from 'components/AppLayout/Spacer';
import { getUserIsAuth } from 'store/reducers/auth/selectors';

import { useStyles } from './AppLayout.styles';

const AppLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { container, content } = useStyles();
  const userIsAuth: boolean = useSelector(getUserIsAuth);

  return (
    <Container disableGutters className={container}>
      {userIsAuth ? <Header /> : <Spacer />}
      <Box className={content}>{children}</Box>
      {userIsAuth ? <Footer /> : <Spacer />}
    </Container>
  );
};

export { AppLayout };
