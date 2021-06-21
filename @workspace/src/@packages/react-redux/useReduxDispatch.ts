/** @format */

import { useContext } from 'react';
import { ReduxStoreContext } from './Provider';

export const useReduxDispatch = () => {
  const store: any = useContext(ReduxStoreContext);
  return store.dispatch;
};
