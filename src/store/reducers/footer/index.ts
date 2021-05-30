import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IFooterState, TFooterReducers } from 'store/reducers/footer/types';
import { TReducersState } from 'utils/types';

const initialState: IFooterState = {
  selectedItemIndex: null,
};

const hydrate = createAction<TReducersState>(HYDRATE);

const footerSlice = createSlice<IFooterState, TFooterReducers>({
  name: 'footer',
  initialState,
  reducers: {
    setSelectedItemIndex: (state, { payload }) => {
      state.selectedItemIndex = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...action.payload.footer,
        ...state,
      };
    });
  },
});

const { actions, reducer } = footerSlice;

export const { setSelectedItemIndex } = actions;
export default reducer;
