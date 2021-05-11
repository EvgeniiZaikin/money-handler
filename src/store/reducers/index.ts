import { combineReducers } from 'redux';
import auth from 'store/reducers/auth';
import backdrop from 'store/reducers/backdrop';
import control from 'store/reducers/control';
import user from 'store/reducers/user';
import money from 'store/reducers/money';
import footer from 'store/reducers/footer';

export default combineReducers({
  auth,
  backdrop,
  control,
  user,
  money,
  footer,
});
