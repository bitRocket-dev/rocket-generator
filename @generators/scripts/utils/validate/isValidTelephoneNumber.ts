/** @format */

import memoize from 'fast-memoize';

export const INPUT_MAX_LENGHT_PHONE_NUMBER = 13;

export const utilityIsValidTelephoneNumber = memoize((phoneNumber: string): boolean => {
  if (!phoneNumber) return true;
  if (phoneNumber.length > INPUT_MAX_LENGHT_PHONE_NUMBER) return false;
  const regex = /^(?:[0-9]\d*|)$/;
  return regex.test(phoneNumber);
});
