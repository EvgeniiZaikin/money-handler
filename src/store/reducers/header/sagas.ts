import { all, put, takeEvery } from 'redux-saga/effects';

import { db } from 'database/firebase';
import { firebaseConverter } from 'utils/functions';
import { TFirebaseDocument, TFirebaseExpense, TFirebaseSettingsIncome, TFirebaseSnapshot } from 'utils/types';
import { getSum, setIncome, setLoading, setSum } from 'store/reducers/header';

function* getSumSaga() {
  yield put(setLoading(true));

  const now = new Date();
  const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
  const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  const expenses: TFirebaseSnapshot<TFirebaseExpense> = yield db
    .collection('expenses')
    .where('datetime', '>=', startDate)
    .where('datetime', '<', endDate)
    .withConverter(firebaseConverter<TFirebaseExpense>())
    .get();

  const sum: number = expenses.docs.reduce(
    (result: number, item: TFirebaseDocument<TFirebaseExpense>) => result + item.data().sum,
    0
  );

  yield put(setSum(sum));

  const income: TFirebaseDocument<TFirebaseSettingsIncome> = yield db
    .collection('settings')
    .withConverter(firebaseConverter<TFirebaseSettingsIncome>())
    .doc('income')
    .get();
  yield put(setIncome(income.data().sum));

  yield put(setLoading(false));
}

function* onGetSumSaga() {
  yield takeEvery(getSum.toString(), getSumSaga);
}

export function* headerSagas() {
  yield all([onGetSumSaga()]);
}
