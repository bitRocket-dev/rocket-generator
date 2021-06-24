/** @format */
import { createConfigurationHeader } from './config';

const fetchPUT = async (url: string, params?: any): Promise<any> => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: createConfigurationHeader(),
    body: JSON.stringify(params),
  });

  return response ? response.json() : null;
};

export default fetchPUT;
