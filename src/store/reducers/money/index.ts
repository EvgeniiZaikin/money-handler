import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IMoneyState, TMoneyReducers } from 'store/reducers/money/types';
import { TReducersState } from 'utils/types';

const initialState: IMoneyState = {
  showEditMoneyDialog: false,
  typeEditMoneyDialog: '',
};

const hydrate = createAction<TReducersState>(HYDRATE);

const moneySlice = createSlice<IMoneyState, TMoneyReducers>({
  name: 'auth',
  initialState,
  reducers: {
    showEditMoneyDialog: (state) => {
      state.showEditMoneyDialog = true;
    },
    hideEditMoneyDialog: (state) => {
      state.showEditMoneyDialog = false;
    },
    setTypeEditMoneyDialog: (state, { payload }) => {
      state.typeEditMoneyDialog = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.money,
      };
    });
  },
});

const { actions, reducer } = moneySlice;

export const { showEditMoneyDialog, hideEditMoneyDialog, setTypeEditMoneyDialog } = actions;
export default reducer;
