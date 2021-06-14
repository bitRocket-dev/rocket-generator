/** @format */

import { createConfigurationHeader } from '../config';
import { fetchWithRetries } from './fetchWithRetries';

export const fetchGET = async (url: string): Promise<any> => {
  const response = await fetchWithRetries(url, {
    method: 'GET',
    headers: createConfigurationHeader(),
  });

  return response ?? null;
};
