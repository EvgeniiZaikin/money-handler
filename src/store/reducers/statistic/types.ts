import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { TExpense } from 'utils/types';

export type TStatisticListItem = {
  label: string;
  sum: number;
  image: string;
  expenses: TExpense[];
};

export interface IStatisticState {
  list: TStatisticListItem[];
  progress: number;
  showProgress: boolean;
  explanation: string;
}

export type TStatisticReducers = {
  getStatisticData: CaseReducer<IStatisticState>;
  setStatisticList: CaseReducer<IStatisticState, PayloadAction<TStatisticListItem[]>>;
  setProgress: CaseReducer<IStatisticState, PayloadAction<number>>;
  setShowProgress: CaseReducer<IStatisticState, PayloadAction<boolean>>;
  setExplanation: CaseReducer<IStatisticState, PayloadAction<string>>;
};
