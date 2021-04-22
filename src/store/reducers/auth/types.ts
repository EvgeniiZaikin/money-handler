import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  code: string;
}

export type TAuthReducers = {
  setAuthCode: CaseReducer<IAuthState, PayloadAction<string>>;
};
