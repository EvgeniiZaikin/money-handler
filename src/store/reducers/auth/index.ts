import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IAuthState, TAuthReducers } from 'store/reducers/auth/types';
import { TReducersState } from 'utils/types';

const initialState: IAuthState = {
  code: '',
};

const hydrate = createAction<TReducersState>(HYDRATE);

const userSlice = createSlice<IAuthState, TAuthReducers>({
  name: 'auth',
  initialState,
  reducers: {
    setAuthCode: (state, { payload }) => {
      state.code += payload;
    },
    resetAuthCode: (state) => {
      state.code = '';
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    });
  },
});

const { actions, reducer } = userSlice;

export const { setAuthCode, resetAuthCode } = actions;
export default reducer;
