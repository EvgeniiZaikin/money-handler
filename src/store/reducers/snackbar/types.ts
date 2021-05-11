import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export enum TSnackbar {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export interface ISnackbarState {
  show: boolean;
  message: string;
  type: TSnackbar;
}

export type TSnackbarReducers = {
  showSnackbar: CaseReducer<ISnackbarState, PayloadAction<{ message: string; type: TSnackbar }>>;
  hideSnackbar: CaseReducer<ISnackbarState>;
};
