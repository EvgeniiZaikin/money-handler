import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { ISnackbarState, TSnackbarReducers, TSnackbar } from 'store/reducers/snackbar/types';
import { TReducersState } from 'utils/types';

const initialState: ISnackbarState = {
  show: false,
  message: '',
  type: TSnackbar.INFO,
};

const hydrate = createAction<TReducersState>(HYDRATE);

const snackbarSlice = createSlice<ISnackbarState, TSnackbarReducers>({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (state, { payload }) => {
      state.show = true;
      state.message = payload.message;
      state.type = payload.type;
    },
    hideSnackbar: (state) => {
      state.show = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...action.payload.snackbar,
        ...state,
      };
    });
  },
});

const { actions, reducer } = snackbarSlice;

export const { showSnackbar, hideSnackbar } = actions;
export default reducer;
