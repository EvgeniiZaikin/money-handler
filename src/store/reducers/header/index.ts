import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IHeaderState, THeaderReducers } from 'store/reducers/header/types';
import { TReducersState } from 'utils/types';

const initialState: IHeaderState = {
  sum: 0,
  income: 0,
  loading: false,
  isSalary: false,
};

const hydrate = createAction<TReducersState>(HYDRATE);

const headerSlice = createSlice<IHeaderState, THeaderReducers>({
  name: 'header',
  initialState,
  reducers: {
    getSum: () => {},
    setSum: (state, { payload }) => {
      state.sum = payload;
    },
    setIncome: (state, { payload }) => {
      state.income = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setIsSalary: (state, { payload }) => {
      state.isSalary = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...action.payload.header,
        ...state,
      };
    });
  },
});

const { actions, reducer } = headerSlice;

export const { getSum, setSum, setIncome, setLoading, setIsSalary } = actions;

export default reducer;
