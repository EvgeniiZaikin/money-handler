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
import {
  TFirebaseDocument,
  TFirebaseExpense,
  TFirebaseIncome,
  TFirebaseSettingsIncome,
  TFirebaseSnapshot,
} from 'utils/types';
import { TLineChartBlock } from 'store/reducers/dynamic/types';

function* getDynamicSaga() {
  yield put(setLoading(true));

  yield put(setProgressValue(5));
  yield put(setExplanation('Формирование временного диапазона'));

  const now = new Date();
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

  const incomes: TFirebaseSnapshot<TFirebaseIncome> = yield db
    .collection('incomes')
    .where('datetime', '>=', startDate)
    .where('datetime', '<', endDate)
    .withConverter(firebaseConverter<TFirebaseIncome>())
    .get();

  let allIncomesSum = incomes.docs.reduce((value, item) => {
    const { sum } = item.data();
    return value + sum;
  }, 0);

  yield put(setProgressValue(80));
  yield put(setExplanation('Формирование данных для диаграммы соотношения расходов и доходов'));

  if (allIncomesSum === 0) {
    const salary: TFirebaseDocument<TFirebaseSettingsIncome> = yield db
      .collection('settings')
      .withConverter(firebaseConverter<TFirebaseSettingsIncome>())
      .doc('income')
      .get();

    allIncomesSum = salary.data().sum;
  }

  let expensesPercent: string = '0';
  if (expensesSum > 0) {
    expensesPercent = ((expensesSum / allIncomesSum) * 100).toFixed(2);
  }

  const incomesArea = allIncomesSum / (expensesSum + allIncomesSum);

  let expensesArea = 0;
  if (expensesSum > 0) {
    expensesArea = expensesSum / (expensesSum + allIncomesSum);
  }

  const pieChartData = [
    { country: 'Доходы', area: incomesArea },
    { country: 'Расходы', area: expensesArea },
  ];

  yield put(setExpensesPercent(expensesPercent));
  yield put(setPieChartData(pieChartData));

  yield put(setProgressValue(90));
  yield put(setExplanation('Формирование данных для линейной диаграммы'));

  const currentMonthIndex = new Date().getMonth();

  const lineChartData: TLineChartBlock[] = [];
  for (let i = 1; i <= 12; i++) {
    lineChartData.push({
      month: i,
      incomes: 0,
      expenses: 0,
    });
  }

  expenses.docs.forEach((item) => {
    const { sum, datetime } = item.data();
    const index = datetime.toDate().getMonth();
    lineChartData[index].expenses += sum;
  });

  incomes.docs.forEach((item) => {
    const { sum, datetime } = item.data();
    const index = datetime.toDate().getMonth();
    lineChartData[index].incomes += sum;
  });

  if (lineChartData[currentMonthIndex].incomes === 0) {
    lineChartData[currentMonthIndex].incomes = allIncomesSum;
  }

  yield put(setLineChartData(lineChartData));

  yield put(setLoading(false));
}

function* onGetDynamicSaga() {
  yield takeEvery(getDynamicData.toString(), getDynamicSaga);
}

export function* dynamicSagas() {
  yield all([onGetDynamicSaga()]);
}
