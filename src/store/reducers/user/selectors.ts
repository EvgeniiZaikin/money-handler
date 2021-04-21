import { TReducersState } from 'utils/types';

export const getIsAuth = (state: TReducersState) => state.user.isAuth;
