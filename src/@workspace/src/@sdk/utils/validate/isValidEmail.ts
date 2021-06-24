/** @format */

import memoize from 'fast-memoize';

export const INPUT_MAX_LENGTH_EMAIL = 30;

export const utilityIsValidEmail = memoize((email: string): boolean => {
  if (!email) return true;
  if (email.length > INPUT_MAX_LENGTH_EMAIL) return false;
  const regex =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
});
