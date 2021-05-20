import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IIncomesState, TIncomeReducers } from 'store/reducers/incomes/types';
import { TReducersState } from 'utils/types';

const initialState: IIncomesState = {
  showDialog: false,
  incomeSum: 0,
};

const hydrate = createAction<TReducersState>(HYDRATE);

const incomesSlice = createSlice<IIncomesState, TIncomeReducers>({
  name: 'incomes',
  initialState,
  reducers: {
    addIncome: () => {},
    showEditDialog: (state) => {
      state.showDialog = true;
    },
    hideEditDialog: (state) => {
      state.showDialog = false;
    },
    setIncomeSum: (state, { payload }) => {
      state.incomeSum = payload;
    },
    resetIncomeData: (state) => {
      state.incomeSum = 0;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...action.payload.incomes,
        ...state,
      };
    });
  },
});

const { actions, reducer } = incomesSlice;

export const { addIncome, showEditDialog, hideEditDialog, setIncomeSum, resetIncomeData } = actions;
export default reducer;
