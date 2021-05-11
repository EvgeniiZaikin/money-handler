import { CaseReducer } from '@reduxjs/toolkit';

export interface IBackdropState {
  show: boolean;
}

export type TBackdropReducers = {
  showBackdrop: CaseReducer<IBackdropState>;
  hideBackdrop: CaseReducer<IBackdropState>;
};
