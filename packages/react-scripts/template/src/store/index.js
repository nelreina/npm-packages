import { createStore } from '@nelreina/web-redux';

import rootReducer from './rootReducer';
export const store = createStore(
  rootReducer,
  {},
  'https://api.github.com/repos/nelreina/npm-packages'
);
export default store;
