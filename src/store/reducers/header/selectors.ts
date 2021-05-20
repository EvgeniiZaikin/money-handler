import { TReducersState } from 'utils/types';

export const getActualExpensesSum = (state: TReducersState) => state.header.sum;
export const getIncome = (state: TReducersState) => state.header.income;
export const getLoadingStatus = (state: TReducersState) => state.header.loading;
export const getIsSalary = (state: TReducersState) => state.header.isSalary;
