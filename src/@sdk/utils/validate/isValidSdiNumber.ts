/** @format */

import memoize from 'fast-memoize';

export const INPUT_MAX_LENGHT_SDI_NUMBER = 7;

export const utilityIsValidSdiNumber = memoize((sdiNumber: string): boolean => {
  if (!sdiNumber) return true;
  if (sdiNumber.length > INPUT_MAX_LENGHT_SDI_NUMBER) return false;
  const regex = /^[a-zA-Z0-9\-_]{0,7}$/;
  return regex.test(sdiNumber);
});
