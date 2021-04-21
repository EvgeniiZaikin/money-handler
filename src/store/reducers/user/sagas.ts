import { all, delay, put, takeEvery } from 'redux-saga/effects';

import { login, logout } from 'store/reducers/user';

function* loginSaga() {
  console.log('Enter into login saga!');
  yield delay(2500);
  console.log('Exit from login saga!');
  yield put(logout());
  console.log('Finish login saga!');
}

function* onLoginSaga() {
  yield takeEvery(login.toString(), loginSaga);
}

export function* userSagas() {
  yield all([onLoginSaga()]);
}
