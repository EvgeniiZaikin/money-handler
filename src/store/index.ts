import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducers from 'store/reducers';
import sagas from 'store/sagas';
import { TReducersState } from 'utils/types';
import { isDevelop } from 'utils/functions';

const sagaMiddleware = createSagaMiddleware();

const makeStore: MakeStore<TReducersState> = () => {
  const store = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware],
    devTools: isDevelop(),
  });

  sagaMiddleware.run(sagas);

  return store;
};

export const wrapper = createWrapper<TReducersState>(makeStore, { debug: isDevelop() });
