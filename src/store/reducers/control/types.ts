import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

import { TCategory } from 'utils/types';

export interface IControlState {
  categories: TCategory[];
  showDialog: boolean;
  expenseType: string;
}

export type TControlReducers = {
  getCategories: CaseReducer<IControlState>;
  setCategories: CaseReducer<IControlState, PayloadAction<TCategory[]>>;
  showEditDialog: CaseReducer<IControlState>;
  hideEditDialog: CaseReducer<IControlState>;
  setExpenseType: CaseReducer<IControlState, PayloadAction<string>>;
  resetExpenseType: CaseReducer<IControlState>;
};
