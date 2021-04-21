import { FC, PropsWithChildren } from 'react';

import { Container } from '@material-ui/core';

import { Header } from 'components/Header';

const AppLayout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Container disableGutters>
    <Header />
    {children}
  </Container>
);

export { AppLayout };
