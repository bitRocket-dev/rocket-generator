/** @format */

import { createConfigurationHeader } from './config';

export const fetchPOST = async (url: string, params: any): Promise<any> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: createConfigurationHeader(),
    body: JSON.stringify(params),
  });
  return response ? response.json() : null;
};
