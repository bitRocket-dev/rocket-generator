/** @format */

import memoize from 'fast-memoize';

export const INPUT_MAX_LENGHT_VATNUMBER = 11;

export const utilityIsValidVatNumber = memoize((vatNumber: string): boolean => {
  if (!vatNumber) return false;
  if (vatNumber.length !== INPUT_MAX_LENGHT_VATNUMBER) return false;
  const regex = /^[0-9]{11}$/;
  return regex.test(vatNumber);
});
