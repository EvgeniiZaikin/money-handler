import { all } from 'redux-saga/effects';

import { userSagas } from 'store/reducers/user/sagas';

export default function* root() {
  yield all([userSagas()]);
}
