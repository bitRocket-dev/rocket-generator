/** @format */

import { NAME_APP } from '../../declarations/general';
import { utilityGetFromLocalStorage } from '../cache/getFromLocalStorage';

export const createConfigurationHeader = (): any => {
  const localeStore = utilityGetFromLocalStorage(NAME_APP);
  // @ts-ignore
  const token = (localeStore && localeStore?.access_token) || '';
  const configHeader: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (token) configHeader.Authorization = `Bearer ${token}`;
  return configHeader;
};
