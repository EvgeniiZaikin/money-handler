import { all, put, select, takeEvery } from 'redux-saga/effects';
import firebase from 'firebase';

import { db } from 'database/firebase';
import { addExpense, getCategories, hideEditDialog, resetExpenseData, setCategories } from 'store/reducers/control';
import { showBackdrop, hideBackdrop } from 'store/reducers/backdrop';
import { firebaseConverter } from 'utils/functions';
import { TCategory, TFirebaseCategory, TFirebaseExpense } from 'utils/types';
import { getExpenseCategory, getExpenseSum } from 'store/reducers/control/selectors';
import { showSnackbar } from 'store/reducers/snackbar';
import { TSnackbar } from 'store/reducers/snackbar/types';
import { getSum } from 'store/reducers/header';

function* getCategoriesSaga() {
  yield put(showBackdrop());
  const result: TCategory[] = [];

  const unsub = db.collection('categories').withConverter(firebaseConverter<TFirebaseCategory>());
  const { docs } = yield unsub.get();
  for (const doc of docs) {
    const { id } = doc;
    const { image, label } = doc.data();
    // const { image, label, type } = doc.data();

    // const categoryType: TFirebaseDocument<TFirebaseType> = yield type
    //   .withConverter(firebaseConverter<TFirebaseType>())
    //   .get();

    // result.push({ id, image, label, type: categoryType.data().label });
    result.push({ id, label, image });
  }

  yield put(setCategories(result));
  yield put(hideBackdrop());
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
