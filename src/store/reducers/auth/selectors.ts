import { TReducersState } from 'utils/types';

export const getAuthCode = (state: TReducersState) => state.auth.code;
export const getUserIsAuth = (state: TReducersState) => state.auth.userIsAuth;
