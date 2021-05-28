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
  loading: false,
  progressValue: 0,
  explanation: '',
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
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setProgressValue: (state, { payload }) => {
      state.progressValue = payload;
    },
    setExplanation: (state, { payload }) => {
      state.explanation = payload;
    },
    resetLoading: (state) => {
      state.loading = false;
      state.progressValue = 0;
      state.explanation = '';
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
  setLoading,
  setExplanation,
  resetLoading,
  setProgressValue,
} = actions;
export default reducer;
