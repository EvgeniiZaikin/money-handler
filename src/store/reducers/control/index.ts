import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IControlState, TControlReducers } from 'store/reducers/control/types';
import { TReducersState } from 'utils/types';

const initialState: IControlState = {
  categories: [],
};

const hydrate = createAction<TReducersState>(HYDRATE);

const authSlice = createSlice<IControlState, TControlReducers>({
  name: 'auth',
  initialState,
  reducers: {
    getCategories: () => {},
    setCategories: (state, { payload }) => {
      state.categories = payload;
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

const { actions, reducer } = authSlice;

export const { getCategories, setCategories } = actions;
export default reducer;
