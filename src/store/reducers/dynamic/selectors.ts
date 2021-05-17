import { TReducersState } from 'utils/types';

export const getIsLoading = (state: TReducersState) => state.dynamic.loading;
export const getExplanation = (state: TReducersState) => state.dynamic.explanation;
export const getPieChartData = (state: TReducersState) => state.dynamic.pieChartData;
export const getProgressValue = (state: TReducersState) => state.dynamic.progressValue;
export const getExpensesPercent = (state: TReducersState) => state.dynamic.expensesPercent;
