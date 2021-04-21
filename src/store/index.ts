import { createStore } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';

import reducers from './reducers';

export type ReducersState = ReturnType<typeof reducers>;

export const makeStore: MakeStore<ReducersState> = () => createStore(reducers);
export const wrapper = createWrapper<ReducersState>(makeStore, { debug: true });
