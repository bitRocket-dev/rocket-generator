/** @format */

exports.sagas = name => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return `
    import { call, put } from 'redux-saga/effects';
    import {
      api${formattedName}Create,
      api${formattedName}Delete,
      api${formattedName}Detail,
      api${formattedName}List,
      api${formattedName}Update,
    } from "./api";
    import {
      action${formattedName}CreateFailure,
      action${formattedName}CreateRequest,
      action${formattedName}CreateSuccess,
      action${formattedName}DeleteFailure,
      action${formattedName}DeleteRequest,
      action${formattedName}DeleteSuccess,
      action${formattedName}DetailFailure,
      action${formattedName}DetailRequest,
      action${formattedName}DetailSuccess,
      action${formattedName}ListFailure,
      action${formattedName}ListRequest,
      action${formattedName}ListSucces,
      action${formattedName}UpdateFailure,
      action${formattedName}UpdateRequest,
      action${formattedName}UpdateSucces,
    } from './actions';
  
    export function* saga${formattedName}List(action: ReturnType<typeof action${formattedName}ListRequest>): Generator {
      try {
        const payload: any = yield call(api${formattedName}List);
        yield put(action${formattedName}ListSucces(payload));
      } catch (error) {
        yield put(action${formattedName}ListFailure(error));
      }
    }
    
    export function* saga${formattedName}Detail(action: ReturnType<typeof action${formattedName}DetailRequest>): Generator {
      try {
        const payload: any = yield call(api${formattedName}Detail, action.payload);
        yield put(action${formattedName}DetailSuccess(payload));
      } catch (error) {
        yield put(action${formattedName}DetailFailure(error));
      }
    }
    
    export function* saga${formattedName}Create(action: ReturnType<typeof action${formattedName}CreateRequest>): Generator {
      try {
        const payload: any = yield call(api${formattedName}Create, action.payload);
        yield put(action${formattedName}CreateSuccess(payload));
      } catch (error) {
        yield put(action${formattedName}CreateFailure(error));
      }
    }
    
    export function* saga${formattedName}Update(action: ReturnType<typeof action${formattedName}UpdateRequest>): Generator {
      try {
        const payload: any = yield call(api${formattedName}Update, action.payload);
        yield put(action${formattedName}UpdateSucces(payload));
      } catch (error) {
        yield put(action${formattedName}UpdateFailure(error));
      }
    }
    
    export function* saga${formattedName}Delete(action: ReturnType<typeof action${formattedName}DeleteRequest>): Generator {
      try {
        const payload: any = yield call(api${formattedName}Delete, action.payload);
        yield put(action${formattedName}DeleteSuccess(payload));
      } catch (error) {
        yield put(action${formattedName}DeleteFailure(error));
      }
    }
    
    `;
};
