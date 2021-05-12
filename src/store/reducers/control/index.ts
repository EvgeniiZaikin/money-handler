import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IControlState, TControlReducers } from 'store/reducers/control/types';
import { TReducersState } from 'utils/types';

const initialState: IControlState = {
  categories: [],
  showDialog: false,
  expenseType: '',
  expenseSum: 0,
  expenseCategory: '',
};

const hydrate = createAction<TReducersState>(HYDRATE);

const controlSlice = createSlice<IControlState, TControlReducers>({
  name: 'control',
  initialState,
  reducers: {
    getCategories: () => {},
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
    showEditDialog: (state) => {
      state.showDialog = true;
    },
    hideEditDialog: (state) => {
      state.showDialog = false;
    },
    setExpenseType: (state, { payload }) => {
      state.expenseType = payload;
    },
    addExpense: () => {},
    setExpenseSum: (state, { payload }) => {
      state.expenseSum = payload;
    },
    setExpenseCategory: (state, { payload }) => {
      state.expenseCategory = payload;
    },
    resetExpenseData: (state) => {
      state.expenseType = '';
      state.expenseSum = 0;
      state.expenseCategory = '';
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.control,
      };
    });
  },
});

const { actions, reducer } = controlSlice;

export const {
  addExpense,
  getCategories,
  setCategories,
  showEditDialog,
  hideEditDialog,
  setExpenseCategory,
  setExpenseType,
  setExpenseSum,
  resetExpenseData,
} = actions;
export default reducer;
