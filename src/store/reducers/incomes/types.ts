import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export interface IIncomesState {
  showDialog: boolean;
  incomeSum: number;
}

export type TIncomeReducers = {
  showEditDialog: CaseReducer<IIncomesState>;
  hideEditDialog: CaseReducer<IIncomesState>;
  addIncome: CaseReducer<IIncomesState>;
  setIncomeSum: CaseReducer<IIncomesState, PayloadAction<number>>;
  resetIncomeData: CaseReducer<IIncomesState>;
};
