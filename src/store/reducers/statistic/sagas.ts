import { db } from 'database/firebase';
import { all, put, takeEvery } from 'redux-saga/effects';

import {
  getStatisticData,
  setExplanation,
  setProgress,
  setShowProgress,
  setStatisticList,
} from 'store/reducers/statistic';
import { firebaseConverter } from 'utils/functions';
import { TFirebaseCategory, TFirebaseDocument, TFirebaseExpense, TFirebaseSnapshot } from 'utils/types';
import { TStatisticListItem } from './types';

function* getStatisticDataSaga() {
  yield put(setShowProgress(true));

  const list: { [key: string]: TStatisticListItem } = {};

  yield put(setExplanation('Формирование периода'));

  const now = new Date();
  const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
  const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  yield put(setProgress(5));
  yield put(setExplanation('Получение данных по расходам'));

  const expenses: TFirebaseSnapshot<TFirebaseExpense> = yield db
    .collection('expenses')
    .where('datetime', '>=', startDate)
    .where('datetime', '<', endDate)
    .withConverter(firebaseConverter<TFirebaseExpense>())
    .get();

  yield put(setProgress(20));
  yield put(setExplanation('Обработка данных по расходам'));

  for (const doc of expenses.docs) {
    const { sum, category } = doc.data();

    const cat: TFirebaseDocument<TFirebaseCategory> = yield category
      .withConverter(firebaseConverter<TFirebaseCategory>())
      .get();
    const { id } = cat;
    const { label, image } = cat.data();

    if (list[id]) {
      const prevData = list[id];
      list[id] = {
        ...list[id],
        sum: prevData.sum + sum,
        count: prevData.count + 1,
      };
    } else {
      list[id] = {
        label,
        sum,
        image,
        count: 1,
      };
    }
  }

  yield put(setProgress(50));
  yield put(setExplanation('Получение списка категорий'));

  const categories: TFirebaseSnapshot<TFirebaseCategory> = yield db
    .collection('categories')
    .withConverter(firebaseConverter<TFirebaseCategory>())
    .get();

  yield put(setProgress(65));
  yield put(setExplanation('Обработка списка категорий'));

  for (const doc of categories.docs) {
    const { id } = doc;

    if (!list[id]) {
      const { label, image } = doc.data();

      list[id] = {
        label,
        sum: 0,
        image,
        count: 0,
      };
    }
  }

  yield put(setProgress(80));
  yield put(setExplanation('Подготовка конечного результата'));

  const data: TStatisticListItem[] = Object.values(list).sort((first, second) => second.sum - first.sum);

  yield put(setProgress(90));
  yield put(setExplanation('Сохранение конечного результата'));

  yield put(setStatisticList(data));

  yield put(setProgress(100));
  yield put(setShowProgress(false));
}

function* onGetStatisticDataSaga() {
  yield takeEvery(getStatisticData.toString(), getStatisticDataSaga);
}

export function* statisticSagas() {
  yield all([onGetStatisticDataSaga()]);
}
