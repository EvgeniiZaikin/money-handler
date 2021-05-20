import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type TPieChartBlock = {
  country: string;
  area: number;
};

export type TLineChartBlock = {
  month: number;
  incomes: number;
  expenses: number;
};

export interface IDynamicState {
  explanation: string;
  expensesPercent: string;
  lineChartData: TLineChartBlock[];
  loading: boolean;
  pieChartData: TPieChartBlock[];
  progressValue: number;
}

export type TDynamicReducers = {
  getDynamicData: CaseReducer<IDynamicState>;
  setExplanation: CaseReducer<IDynamicState, PayloadAction<string>>;
  setExpensesPercent: CaseReducer<IDynamicState, PayloadAction<string>>;
  setLineChartData: CaseReducer<IDynamicState, PayloadAction<TLineChartBlock[]>>;
  setLoading: CaseReducer<IDynamicState, PayloadAction<boolean>>;
  setPieChartData: CaseReducer<IDynamicState, PayloadAction<TPieChartBlock[]>>;
  setProgressValue: CaseReducer<IDynamicState, PayloadAction<number>>;
};
