import { FC, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

import { Box, Container } from '@material-ui/core';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { getIsAuth } from 'store/reducers/user/selectors';

import { useStyles } from './AppLayout.styles';

const AppLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { container, content } = useStyles();
  const userIsAuth: boolean = useSelector(getIsAuth);

  return (
    <Container disableGutters className={container}>
      <Header />
      <Box className={content}>{children}</Box>
      {userIsAuth && <Footer />}
    </Container>
  );
};

export { AppLayout };
