import { TReducersState } from 'utils/types';

export const getIsShowingDialog = (state: TReducersState) => state.settings.showDialog;
export const getSalarySum = (state: TReducersState) => state.settings.salary;
