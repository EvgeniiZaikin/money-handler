import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export interface IFooterState {
  selectedItemIndex: number | null;
}

export type TFooterReducers = {
  setSelectedItemIndex: CaseReducer<IFooterState, PayloadAction<number | null>>;
};
