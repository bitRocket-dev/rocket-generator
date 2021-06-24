/** @format */

import { createConfigurationHeader } from './config';

export const fetchDELETE = async (url: string): Promise<any> => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: createConfigurationHeader(),
  });

  return response ? response.json() : null;
};
