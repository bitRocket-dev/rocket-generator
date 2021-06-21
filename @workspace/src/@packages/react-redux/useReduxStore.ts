/** @format */

import { useContext, useRef, useEffect, useReducer, useMemo } from 'react';
import { Store } from 'redux';
import { ReduxStoreContext } from './Provider';

const forcedReducer = (state?: any) => !state;
const useForceUpdate = () => useReducer(forcedReducer, false)[1];

export const useReduxStore = () => {
  const forceUpdate = useForceUpdate();
  // @ts-ignore
  const store: Store = useContext(ReduxStoreContext);
  const state = useRef(store.getState());
  const used = useRef({});
  const handler = useMemo(
    () => ({
      get: (target: any, name: any) => {
        // @ts-ignore
        used.current[name] = true;
        return target[name];
      },
    }),
    [],
  );
  useEffect(() => {
    const callback = () => {
      const nextState = store.getState();
      const changed = Object.keys(used.current).find(key => state.current[key] !== nextState[key]);
      if (changed) {
        state.current = nextState;
        // @ts-ignore
        forceUpdate();
      }
    };
    const unsubscribe = store.subscribe(callback);
    return unsubscribe;
  }, [forceUpdate, store]);
  return new Proxy(state.current, handler);
};
