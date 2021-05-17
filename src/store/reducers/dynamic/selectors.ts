import { TReducersState } from 'utils/types';

export const getIsLoading = (state: TReducersState) => state.dynamic.loading;
export const getExplanation = (state: TReducersState) => state.dynamic.explanation;
export const getLineChartData = (state: TReducersState) => state.dynamic.lineChartData;
export const getPieChartData = (state: TReducersState) => state.dynamic.pieChartData;
export const getProgressValue = (state: TReducersState) => state.dynamic.progressValue;
export const getExpensesPercent = (state: TReducersState) => state.dynamic.expensesPercent;
