import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { auth } from 'nelreina-web-utils';

import app from './reducers/app';

export default combineReducers({
  app,
  auth,
  form: formReducer
});
