import { Reducer, AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

interface IAuthState {
  isAuth: boolean;
}

const initialState: IAuthState = {
  isAuth: false,
};

const user: Reducer<IAuthState, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...action.payload.user };
    default:
      return state;
  }
};

export default user;
