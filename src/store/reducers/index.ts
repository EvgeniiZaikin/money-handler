import { combineReducers } from 'redux';
import auth from 'store/reducers/auth';
import backdrop from 'store/reducers/backdrop';
import control from 'store/reducers/control';
import header from 'store/reducers/header';
import footer from 'store/reducers/footer';
import snackbar from 'store/reducers/snackbar';

export default combineReducers({
  auth,
  backdrop,
  control,
  header,
  footer,
  snackbar,
});
