import { all } from 'redux-saga/effects';

import { controlSagas } from 'store/reducers/control/sagas';
import { dynamicSagas } from 'store/reducers/dynamic/sagas';
import { headerSagas } from 'store/reducers/header/sagas';
import { incomeSagas } from 'store/reducers/incomes/sagas';
import { settingsSagas } from 'store/reducers/settings/sagas';
import { statisticSagas } from 'store/reducers/statistic/sagas';

export default function* root() {
  yield all([controlSagas(), headerSagas(), dynamicSagas(), incomeSagas(), settingsSagas(), statisticSagas()]);
}
