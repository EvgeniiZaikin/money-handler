import { createStore } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';

import reducers from 'store/reducers';
import { TReducersState } from 'utils/types';

export const makeStore: MakeStore<TReducersState> = () => createStore(reducers);
export const wrapper = createWrapper<TReducersState>(makeStore, { debug: true });
