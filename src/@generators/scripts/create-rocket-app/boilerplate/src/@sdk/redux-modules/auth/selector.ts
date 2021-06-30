/** @format */

import { TStore } from '../../declarations/store';

export const selectorIsAuthenticated = (store: TStore): boolean => store.auth;
