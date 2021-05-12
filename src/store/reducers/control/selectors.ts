import { TReducersState } from 'utils/types';

export const getCategories = (state: TReducersState) => state.control.categories;
export const getIsShowingDialog = (state: TReducersState) => state.control.showDialog;
export const getExpenseType = (state: TReducersState) => state.control.expenseType;
