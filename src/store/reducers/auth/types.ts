import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  code: string;
  userIsAuth: boolean;
}

export type TAuthReducers = {
  setAuthCode: CaseReducer<IAuthState, PayloadAction<string>>;
  resetAuthCode: CaseReducer<IAuthState>;
  login: CaseReducer<IAuthState>;
  logout: CaseReducer<IAuthState>;
};
