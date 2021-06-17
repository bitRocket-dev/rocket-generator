/** @format */

import memoize from 'fast-memoize';

export const INPUT_MAX_LENGHT_PASSWORD = 30;

export const utilityIsValidPassword = memoize((password: string): boolean => {
  if (!password) return false;
  if (password.length > INPUT_MAX_LENGHT_PASSWORD) return false;
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).{8,}/;
  return regex.test(password);
});
