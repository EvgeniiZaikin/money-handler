import { CaseReducer } from '@reduxjs/toolkit';

export interface IUserState {
  isAuth: boolean;
}

export type TAuthReducers = {
  login: CaseReducer<IUserState>;
  logout: CaseReducer<IUserState>;
};
