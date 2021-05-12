import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IControlState, TControlReducers } from 'store/reducers/control/types';
import { TReducersState } from 'utils/types';

const initialState: IControlState = {
  categories: [],
  showDialog: false,
  expenseType: '',
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
    resetExpenseType: (state) => {
      state.expenseType = '';
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
  getCategories,
  setCategories,
  showEditDialog,
  hideEditDialog,
  setExpenseType,
  resetExpenseType,
} = actions;
export default reducer;
