import { combineReducers } from 'redux';
import auth from 'store/reducers/auth';
import backdrop from 'store/reducers/backdrop';
import control from 'store/reducers/control';
import user from 'store/reducers/user';
import footer from 'store/reducers/footer';
import snackbar from 'store/reducers/snackbar';

export default combineReducers({
  auth,
  backdrop,
  control,
  user,
  footer,
  snackbar,
});
