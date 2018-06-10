import { createStoreDOM } from 'nelreina-web-utils';

import rootReducer from './rootReducer';
export const store = createStoreDOM(rootReducer, {}, '/api');
export default store;
