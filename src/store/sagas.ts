import { all } from 'redux-saga/effects';

import { controlSagas } from 'store/reducers/control/sagas';
import { headerSagas } from 'store/reducers/header/sagas';

export default function* root() {
  yield all([controlSagas(), headerSagas()]);
}
