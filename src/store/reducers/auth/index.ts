import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IAuthState, TAuthReducers } from 'store/reducers/auth/types';
import { TReducersState } from 'utils/types';

const initialState: IAuthState = {
  code: '',
  userIsAuth: false,
};

const hydrate = createAction<TReducersState>(HYDRATE);

const authSlice = createSlice<IAuthState, TAuthReducers>({
  name: 'auth',
  initialState,
  reducers: {
    setAuthCode: (state, { payload }) => {
      state.code += payload;
    },
    resetAuthCode: (state) => {
      state.code = '';
    },
    login: (state) => {
      state.userIsAuth = true;
    },
    logout: (state) => {
      state.userIsAuth = false;
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

const { actions, reducer } = authSlice;

export const { setAuthCode, resetAuthCode, login, logout } = actions;
export default reducer;
