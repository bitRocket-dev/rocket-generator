/** @format */

import createSagaMiddleware from 'redux-saga';

export const middlewareSaga = createSagaMiddleware();

export const middlewares = [middlewareSaga];
