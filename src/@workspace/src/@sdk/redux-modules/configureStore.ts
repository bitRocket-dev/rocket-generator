/** @format */

import { createStore, applyMiddleware, Store, CombinedState } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { middlewareSaga } from './middlewares/middlewareSaga';
import { middlewares } from './middlewares';
import { watchers } from './watchers';
import { utilityGetFromLocalStorage } from '../utils/cache/getFromLocalStorage';
import { IS_DEVELOPMENT, NAME_APP } from '../declarations/general';
import { TStore } from '../declarations/store';
import { reducers } from './reducers';

export const configureStore = (): Store<CombinedState<TStore>> => {
  let prevStore = utilityGetFromLocalStorage(NAME_APP);

  const enhancer = IS_DEVELOPMENT
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  const store = createStore(reducers, prevStore, enhancer);

  watchers.forEach(watcher => middlewareSaga.run(watcher));

  return store;
};
