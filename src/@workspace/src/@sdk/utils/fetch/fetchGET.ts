/** @format */

import { createConfigurationHeader } from './config';
import { fetchWithRetries } from './helpers/general';

const fetchGET = async (url: string): Promise<any> => {
  const response = await fetchWithRetries(url, {
    method: 'GET',
    headers: createConfigurationHeader(),
  });

  return response ?? null;
};

export default fetchGET;
