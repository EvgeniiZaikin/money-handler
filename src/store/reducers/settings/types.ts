import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export interface ISettingsState {
  showDialog: boolean;
  salary: number;
}

export type TSettingsReducers = {
  showEditDialog: CaseReducer<ISettingsState>;
  hideEditDialog: CaseReducer<ISettingsState>;
  updateSalary: CaseReducer<ISettingsState>;
  setSalarySum: CaseReducer<ISettingsState, PayloadAction<number>>;
  resetSalaryData: CaseReducer<ISettingsState>;
};
