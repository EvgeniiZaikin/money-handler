import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';

import reducers from 'store/reducers';
import { TReducersState } from 'utils/types';

const makeStore: MakeStore<TReducersState> = () =>
  configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
  });

export const wrapper = createWrapper<TReducersState>(makeStore, { debug: true });
