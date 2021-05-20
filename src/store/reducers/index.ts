import { combineReducers } from 'redux';
import auth from 'store/reducers/auth';
import backdrop from 'store/reducers/backdrop';
import control from 'store/reducers/control';
import dynamic from 'store/reducers/dynamic';
import header from 'store/reducers/header';
import footer from 'store/reducers/footer';
import incomes from 'store/reducers/incomes';
import snackbar from 'store/reducers/snackbar';
import statistic from 'store/reducers/statistic';

export default combineReducers({
  auth,
  backdrop,
  control,
  dynamic,
  header,
  footer,
  incomes,
  snackbar,
  statistic,
});
