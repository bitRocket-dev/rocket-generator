/** @format */

const ROUTE_ROOT = '/';
const ROUTE_HOME = '/home';
const ROUTE_LOGIN = '/login';
const ROUTE_NOT_FOUND = '/404';

export type TRoute = typeof ROUTE_ROOT | typeof ROUTE_HOME | typeof ROUTE_LOGIN | typeof ROUTE_NOT_FOUND;
