import { all, put, takeEvery } from 'redux-saga/effects';

import { db } from 'database/firebase';
import { getCategories, setCategories } from 'store/reducers/control';
import { showBackdrop, hideBackdrop } from 'store/reducers/backdrop';
import { firebaseConverter } from 'utils/functions';
import { TCategory, TFirebaseCategory, TFirebaseDocument, TFirebaseType } from 'utils/types';

function* getCategoriesSaga() {
  yield put(showBackdrop());
  const result: TCategory[] = [];

  const unsub = db.collection('categories').withConverter(firebaseConverter<TFirebaseCategory>());
  const { docs } = yield unsub.get();
  for (const doc of docs) {
    const { id } = doc;
    const { label, type } = doc.data();

    const categoryType: TFirebaseDocument<TFirebaseType> = yield type
      .withConverter(firebaseConverter<TFirebaseType>())
      .get();

    result.push({ id, label, type: categoryType.data().label });
  }

  yield put(setCategories(result));
  console.log('SAGA RESULT', result);
  yield put(hideBackdrop());
}

function* onGetCategoriesSagaSaga() {
  yield takeEvery(getCategories.toString(), getCategoriesSaga);
}

export function* controlSagas() {
  yield all([onGetCategoriesSagaSaga()]);
}
