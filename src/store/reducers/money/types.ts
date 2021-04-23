import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export interface IMoneyState {
  showEditMoneyDialog: boolean;
  typeEditMoneyDialog: string;
}

export type TMoneyReducers = {
  showEditMoneyDialog: CaseReducer<IMoneyState>;
  hideEditMoneyDialog: CaseReducer<IMoneyState>;
  setTypeEditMoneyDialog: CaseReducer<IMoneyState, PayloadAction<string>>;
};
