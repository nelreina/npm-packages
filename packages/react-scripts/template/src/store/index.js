import { createStoreDOM } from '@nelreina/web-redux';

import rootReducer from './rootReducer';
export const store = createStoreDOM(rootReducer, {}, '/api');
export default store;
