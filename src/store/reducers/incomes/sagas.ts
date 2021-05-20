import { all, put, select, takeEvery } from 'redux-saga/effects';
import firebase from 'firebase';

import { getIncomeSum } from 'store/reducers/incomes/selectors';
import { addIncome, hideEditDialog, resetIncomeData } from 'store/reducers/incomes';
import { TSnackbar } from 'store/reducers/snackbar/types';
import { showSnackbar } from 'store/reducers/snackbar';
import { firebaseConverter } from 'utils/functions';
import { hideBackdrop, showBackdrop } from 'store/reducers/backdrop';
import { db } from 'database/firebase';
import { TFirebaseIncome } from 'utils/types';
import { getSum } from 'store/reducers/header';
import { getDynamicData } from 'store/reducers/dynamic';

function* addIncomeSaga() {
  const sum: number = yield select(getIncomeSum);

  if (sum > 0) {
    yield put(hideEditDialog());
    yield put(showBackdrop());

    const unsub = db.collection('incomes').withConverter(firebaseConverter<TFirebaseIncome>());
    yield unsub.add({
      sum,
      datetime: firebase.firestore.Timestamp.fromDate(new Date()),
    });

    yield put(resetIncomeData());
    yield put(hideBackdrop());

    yield put(getSum());
    yield put(getDynamicData());
  } else {
    const message = sum < 0 ? 'Сумма не может быть отрицательной' : 'Сумма не может быть нулём';
    yield put(showSnackbar({ message, type: TSnackbar.ERROR }));
  }
}

function* onAddIncomeSaga() {
  yield takeEvery(addIncome.toString(), addIncomeSaga);
}

export function* incomeSagas() {
  yield all([onAddIncomeSaga()]);
}
