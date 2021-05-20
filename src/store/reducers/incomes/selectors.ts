import { TReducersState } from 'utils/types';

export const getIsShowingDialog = (state: TReducersState) => state.incomes.showDialog;
export const getIncomeSum = (state: TReducersState) => state.incomes.incomeSum;
