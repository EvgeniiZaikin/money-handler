import { TReducersState } from 'utils/types';

export const getIsShowEditMoneyDialog = (state: TReducersState) => state.money.showEditMoneyDialog;
export const getTypeEditMoneyDialog = (state: TReducersState) => state.money.typeEditMoneyDialog;
