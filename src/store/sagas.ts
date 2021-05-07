import { all } from 'redux-saga/effects';

import { controlSagas } from 'store/reducers/control/sagas';
import { userSagas } from 'store/reducers/user/sagas';

export default function* root() {
  yield all([controlSagas(), userSagas()]);
}
