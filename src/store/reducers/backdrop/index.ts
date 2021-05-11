import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IBackdropState, TBackdropReducers } from 'store/reducers/backdrop/types';
import { TReducersState } from 'utils/types';

const initialState: IBackdropState = {
  show: false,
};

const hydrate = createAction<TReducersState>(HYDRATE);

const backdropSlice = createSlice<IBackdropState, TBackdropReducers>({
  name: 'backdrop',
  initialState,
  reducers: {
    showBackdrop: (state) => {
      state.show = true;
    },
    hideBackdrop: (state) => {
      state.show = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.backdrop,
        show: state.show,
      };
    });
  },
});

const { actions, reducer } = backdropSlice;

export const { showBackdrop, hideBackdrop } = actions;
export default reducer;
