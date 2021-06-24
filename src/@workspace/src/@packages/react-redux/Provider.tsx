/** @format */

import React, { createContext } from 'react';
import { Store } from 'redux';

export const ReduxStoreContext = createContext({});

interface Props {
  store: Store;
  children: JSX.Element;
}

export const ReduxProvider = ({ store, children }: Props): JSX.Element => (
  <ReduxStoreContext.Provider value={store}>{children}</ReduxStoreContext.Provider>
);
