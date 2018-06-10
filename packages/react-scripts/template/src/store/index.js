import { createStore } from '@nelreina/web-redux';

import rootReducer from './rootReducer';
export const store = createStore(rootReducer, {}, '/api');
export default store;
