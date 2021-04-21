import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';

import reducers from 'store/reducers';
import { TReducersState } from 'utils/types';
import { isDevelop } from 'utils/functions';

const makeStore: MakeStore<TReducersState> = () =>
  configureStore({
    reducer: reducers,
    devTools: isDevelop(),
  });

export const wrapper = createWrapper<TReducersState>(makeStore, { debug: isDevelop() });
