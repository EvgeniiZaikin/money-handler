import { all, put, takeEvery } from 'redux-saga/effects';

import { db } from 'database/firebase';
import {
  getDynamicData,
  setExpensesPercent,
  setExplanation,
  setLineChartData,
  setLoading,
  setPieChartData,
  setProgressValue,
} from 'store/reducers/dynamic';
import { firebaseConverter } from 'utils/functions';
import { TFirebaseDocument, TFirebaseExpense, TFirebaseSettingsIncome, TFirebaseSnapshot } from 'utils/types';
import { TLineChartBlock } from 'store/reducers/dynamic/types';

function* getDynamicSaga() {
  yield put(setLoading(true));

  yield put(setProgressValue(5));
  yield put(setExplanation('Формирование временного диапазона'));

  const now = new Date();
  const month = now.getMonth() + 1;
  const startDate = new Date(now.getFullYear(), 0, 1);
  const endDate = new Date(now.getFullYear() + 1, 0, 1);

  yield put(setProgressValue(10));
  yield put(setExplanation('Получение данных о расходах'));

  const expenses: TFirebaseSnapshot<TFirebaseExpense> = yield db
    .collection('expenses')
    .where('datetime', '>=', startDate)
    .where('datetime', '<', endDate)
    .withConverter(firebaseConverter<TFirebaseExpense>())
    .get();

  yield put(setProgressValue(45));
  yield put(setExplanation('Обработка данных расходов'));

  const expensesSum = expenses.docs.reduce((value, item) => {
    const { sum } = item.data();
    return value + sum;
  }, 0);

  yield put(setProgressValue(70));
  yield put(setExplanation('Получение данных о доходе'));

  const income: TFirebaseDocument<TFirebaseSettingsIncome> = yield db
    .collection('settings')
    .withConverter(firebaseConverter<TFirebaseSettingsIncome>())
    .doc('income')
    .get();

  const { sum: incomeSum } = income.data();

  yield put(setProgressValue(80));
  yield put(setExplanation('Формирование данных для диаграммы соотношения расходов и доходов'));

  const expensesPercent = ((expensesSum / (incomeSum * month)) * 100).toFixed(2);

  const pieChartData = [
    { country: 'Доходы', area: 100 - Number(expensesPercent) },
    { country: 'Расходы', area: Number(expensesPercent) },
  ];

  yield put(setExpensesPercent(expensesPercent));
  yield put(setPieChartData(pieChartData));

  yield put(setProgressValue(90));
  yield put(setExplanation('Формирование данных для линейной диаграммы'));

  const lineChartData: TLineChartBlock[] = [];
  for (let i = 1; i <= 12; i++) {
    lineChartData.push({
      month: i,
      income: incomeSum,
      expenses: 0,
    });
  }

  expenses.docs.forEach((item) => {
    const { sum, datetime } = item.data();
    const index = datetime.toDate().getMonth();
    lineChartData[index].expenses += sum;
  });

  yield put(setLineChartData(lineChartData));

  yield put(setLoading(false));
}

function* onGetDynamicSaga() {
  yield takeEvery(getDynamicData.toString(), getDynamicSaga);
}

export function* dynamicSagas() {
  yield all([onGetDynamicSaga()]);
}
