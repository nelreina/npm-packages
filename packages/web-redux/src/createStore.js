import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Api from '@nelreina/web-api';
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispaching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

export default (
  rootReducer,
  initialState = {},
  host = '',
  production = false
) => {
  const api = new Api(host);
  let middelwares;
  if (production) {
    middelwares = applyMiddleware(thunk.withExtraArgument(api));
  } else {
    middelwares = applyMiddleware(thunk.withExtraArgument(api), logger);
  }

  const enhancer = composeWithDevTools(middelwares);

  return createStore(rootReducer, initialState, enhancer);
};
