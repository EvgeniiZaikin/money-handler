import { FC, PropsWithChildren } from 'react';

import { Box, Container } from '@material-ui/core';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import { useStyles } from './AppLayout.styles';

const AppLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { container, content } = useStyles();

  return (
    <Container disableGutters className={container}>
      <Header />
      <Box className={content}>{children}</Box>
      <Footer />
    </Container>
  );
};

export { AppLayout };
