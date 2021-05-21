import { all, put, select, takeEvery } from 'redux-saga/effects';

import { hideEditDialog, resetSalaryData, updateSalary } from 'store/reducers/settings';
import { getSalarySum } from 'store/reducers/settings/selectors';
import { showSnackbar } from 'store/reducers/snackbar';
import { TSnackbar } from 'store/reducers/snackbar/types';
import { hideBackdrop, showBackdrop } from 'store/reducers/backdrop';
import { getSum } from 'store/reducers/header';
import { db } from 'database/firebase';

function* updateSalarySaga() {
  const sum: number = yield select(getSalarySum);

  if (sum > 0) {
    yield put(hideEditDialog());
    yield put(showBackdrop());

    db.doc('/settings/income').update({ sum });

    yield put(resetSalaryData());
    yield put(hideBackdrop());

    yield put(getSum());
  } else {
    const message = sum < 0 ? 'Сумма не может быть отрицательной' : 'Сумма не может быть нулём';
    yield put(showSnackbar({ message, type: TSnackbar.ERROR }));
  }
}

function* onUpdateSalarySaga() {
  yield takeEvery(updateSalary.toString(), updateSalarySaga);
}

export function* settingsSagas() {
  yield all([onUpdateSalarySaga()]);
}
