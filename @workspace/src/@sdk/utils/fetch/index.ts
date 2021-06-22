/** @format */

import {fetchGET} from './fetchGET';
import fetchPOST from './fetchPOST';
import fetchDELETE from './fetchDELETE';
import fetchPUT from './fetchPUT';

export interface TFetch {
  get: (url: string) => Promise<any>;
  post: (url: string, params: any) => Promise<any>;
  delete: (url: string) => Promise<any>;
  put: (url: string, params?: any) => Promise<any>;
}

export const fetch: TFetch = {
  get: fetchGET,
  post: fetchPOST,
  delete: fetchDELETE,
  put: fetchPUT,
};
