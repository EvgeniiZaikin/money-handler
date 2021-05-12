import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

import { TCategory } from 'utils/types';

export interface IControlState {
  categories: TCategory[];
  showDialog: boolean;
  expenseType: string;
  expenseSum: number;
  expenseCategory: string;
}

export type TControlReducers = {
  getCategories: CaseReducer<IControlState>;
  setCategories: CaseReducer<IControlState, PayloadAction<TCategory[]>>;
  showEditDialog: CaseReducer<IControlState>;
  hideEditDialog: CaseReducer<IControlState>;
  setExpenseType: CaseReducer<IControlState, PayloadAction<string>>;
  addExpense: CaseReducer<IControlState>;
  setExpenseSum: CaseReducer<IControlState, PayloadAction<number>>;
  setExpenseCategory: CaseReducer<IControlState, PayloadAction<string>>;
  resetExpenseData: CaseReducer<IControlState>;
};
