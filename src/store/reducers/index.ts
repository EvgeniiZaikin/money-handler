import { combineReducers } from 'redux';
import auth from 'store/reducers/auth';
import user from 'store/reducers/user';
import money from 'store/reducers/money';
import footer from 'store/reducers/footer';

export default combineReducers({
  auth,
  user,
  money,
  footer,
});
