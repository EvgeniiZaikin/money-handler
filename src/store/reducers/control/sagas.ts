import { all, put, select, takeEvery } from 'redux-saga/effects';
import firebase from 'firebase';

import { db } from 'database/firebase';
import {
  addExpense,
  getCategories,
  hideEditDialog,
  resetExpenseData,
  setCategories,
  setLoading,
  resetLoading,
  setProgressValue,
  setExplanation,
} from 'store/reducers/control';
import { showBackdrop, hideBackdrop } from 'store/reducers/backdrop';
import { firebaseConverter } from 'utils/functions';
import {
  TCategory,
  TFirebaseCategory,
  TFirebaseCollection,
  TFirebaseExpense,
  TFirebaseSnapshot,
  TFirebaseDocument,
} from 'utils/types';
import { getExpenseCategory, getExpenseSum } from 'store/reducers/control/selectors';
import { showSnackbar } from 'store/reducers/snackbar';
import { TSnackbar } from 'store/reducers/snackbar/types';
import { getSum } from 'store/reducers/header';

function* getCategoriesSaga() {
  yield put(setLoading(true));
  const result: TCategory[] = [];

  yield put(setProgressValue(10));
  yield put(setExplanation('Получение данных о категориях расходов'));

  const unsub: TFirebaseCollection = db.collection('categories').withConverter(firebaseConverter<TFirebaseCategory>());
  const { docs }: TFirebaseSnapshot<TFirebaseCategory> = yield unsub.get();
  for (const doc of docs) {
    const { id } = doc;
    const { image, label, popularity } = doc.data();
    result.push({ id, label, image, popularity });
  }

  result.sort((first, second) => second.popularity - first.popularity);

  yield put(setCategories(result));
  yield put(resetLoading());
}

function* addExpenseSaga() {
  const sum: number = yield select(getExpenseSum);
  const category: string = yield select(getExpenseCategory);

  if (sum > 0) {
    yield put(hideEditDialog());
    yield put(showBackdrop());

    const unsub = db.collection('expenses').withConverter(firebaseConverter<TFirebaseExpense>());
    yield unsub.add({
      sum,
      datetime: firebase.firestore.Timestamp.fromDate(new Date()),
      category: db.doc(`categories/${category}`),
    });

    const cat: TFirebaseDocument<TFirebaseCategory> = yield db
      .collection('categories')
      .withConverter(firebaseConverter<TFirebaseCategory>())
      .doc(category)
      .get();
    db.doc(`categories/${category}`).update({ popularity: cat.data().popularity + 1 });

    yield put(resetExpenseData());
    yield put(hideBackdrop());

    yield put(getSum());
  } else {
    const message = sum < 0 ? 'Сумма не может быть отрицательной' : 'Сумма не может быть нулём';
    yield put(showSnackbar({ message, type: TSnackbar.ERROR }));
  }
}

function* onGetCategoriesSagaSaga() {
  yield takeEvery(getCategories.toString(), getCategoriesSaga);
}

function* onAddExpenseSaga() {
  yield takeEvery(addExpense.toString(), addExpenseSaga);
}

export function* controlSagas() {
  yield all([onGetCategoriesSagaSaga(), onAddExpenseSaga()]);
}
