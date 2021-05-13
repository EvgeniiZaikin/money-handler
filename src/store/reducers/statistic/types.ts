import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type TStatisticListItem = {
  label: string;
  sum: number;
  image: string;
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
