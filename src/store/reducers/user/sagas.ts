import { all, delay, takeEvery } from 'redux-saga/effects';

import { login } from 'store/reducers/user';

function* loginSaga() {
  console.log('Enter into login saga!');
  yield delay(2500);
  console.log('Exit from login saga!');
}

function* onLoginSaga() {
  yield takeEvery(login.toString(), loginSaga);
}

export function* userSagas() {
  yield all([onLoginSaga()]);
}
