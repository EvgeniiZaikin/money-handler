import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export interface IHeaderState {
  sum: number;
  income: number;
  loading: boolean;
}

export type THeaderReducers = {
  getSum: CaseReducer<IHeaderState>;
  setSum: CaseReducer<IHeaderState, PayloadAction<number>>;
  setIncome: CaseReducer<IHeaderState, PayloadAction<number>>;
  setLoading: CaseReducer<IHeaderState, PayloadAction<boolean>>;
};
