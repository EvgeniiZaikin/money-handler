import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IAuthState } from 'store/reducers/user/types';
import { TReducersState } from 'utils/types';

const initialState: IAuthState = {
  isAuth: false,
};

const hydrate = createAction<TReducersState>(HYDRATE);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: IAuthState) => {
      state.isAuth = true;
    },
    logout: (state: IAuthState) => {
      state.isAuth = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      };
    });
  },
});

const { actions, reducer } = userSlice;

export const { login, logout } = actions;
export default reducer;
