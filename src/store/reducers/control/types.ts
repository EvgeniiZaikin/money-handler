import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

import { TCategory } from 'utils/types';

export interface IControlState {
  categories: TCategory[];
}

export type TControlReducers = {
  getCategories: CaseReducer<IControlState>;
  setCategories: CaseReducer<IControlState, PayloadAction<TCategory[]>>;
};
