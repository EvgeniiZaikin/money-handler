import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { ISettingsState, TSettingsReducers } from 'store/reducers/settings/types';
import { TReducersState } from 'utils/types';

const initialState: ISettingsState = {
  showDialog: false,
  salary: 0,
};

const hydrate = createAction<TReducersState>(HYDRATE);

const settingsSlice = createSlice<ISettingsState, TSettingsReducers>({
  name: 'settings',
  initialState,
  reducers: {
    updateSalary: () => {},
    showEditDialog: (state) => {
      state.showDialog = true;
    },
    hideEditDialog: (state) => {
      state.showDialog = false;
    },
    setSalarySum: (state, { payload }) => {
      state.salary = payload;
    },
    resetSalaryData: (state) => {
      state.salary = 0;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...action.payload.settings,
        ...state,
      };
    });
  },
});

const { actions, reducer } = settingsSlice;

export const { updateSalary, showEditDialog, hideEditDialog, setSalarySum, resetSalaryData } = actions;
export default reducer;
