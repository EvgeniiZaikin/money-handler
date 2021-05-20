import { all, put, takeEvery } from 'redux-saga/effects';

import { db } from 'database/firebase';
import { firebaseConverter } from 'utils/functions';
import {
  TFirebaseDocument,
  TFirebaseExpense,
  TFirebaseIncome,
  TFirebaseSettingsIncome,
  TFirebaseSnapshot,
} from 'utils/types';
import { getSum, setIncome, setIsSalary, setLoading, setSum } from 'store/reducers/header';

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

  const incomes: TFirebaseSnapshot<TFirebaseIncome> = yield db
    .collection('incomes')
    .where('datetime', '>=', startDate)
    .where('datetime', '<', endDate)
    .withConverter(firebaseConverter<TFirebaseIncome>())
    .get();

  if (incomes.docs.length) {
    const revenue: number = incomes.docs.reduce(
      (result: number, item: TFirebaseDocument<TFirebaseIncome>) => result + item.data().sum,
      0
    );
    yield put(setIncome(revenue));
    yield put(setIsSalary(false));
  } else {
    const salary: TFirebaseDocument<TFirebaseSettingsIncome> = yield db
      .collection('settings')
      .withConverter(firebaseConverter<TFirebaseSettingsIncome>())
      .doc('income')
      .get();
    yield put(setIncome(salary.data().sum));
    yield put(setIsSalary(true));
  }

  yield put(setLoading(false));
}

function* onGetSumSaga() {
  yield takeEvery(getSum.toString(), getSumSaga);
}

export function* headerSagas() {
  yield all([onGetSumSaga()]);
}
