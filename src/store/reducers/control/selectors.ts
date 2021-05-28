import { TReducersState } from 'utils/types';

export const getCategories = (state: TReducersState) => state.control.categories;
export const getIsShowingDialog = (state: TReducersState) => state.control.showDialog;
export const getExpenseType = (state: TReducersState) => state.control.expenseType;
export const getExpenseSum = (state: TReducersState) => state.control.expenseSum;
export const getExpenseCategory = (state: TReducersState) => state.control.expenseCategory;
export const getIsLoading = (state: TReducersState) => state.control.loading;
export const getExplanation = (state: TReducersState) => state.control.explanation;
export const getProgressValue = (state: TReducersState) => state.control.progressValue;
