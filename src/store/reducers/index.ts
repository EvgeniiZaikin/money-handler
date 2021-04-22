import { combineReducers } from 'redux';
import auth from 'store/reducers/auth';
import user from 'store/reducers/user';

export default combineReducers({
  auth,
  user,
});
