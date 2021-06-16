/** @format */

import memoize from 'fast-memoize';

export const INPUT_MIN_YEAR = 2000;
export const INPUT_MAX_YEAR = 2999;

export const utilityIsValidYear = memoize((year: string): boolean => {
  if (!year) return true;
  const regex = /^(?:[0-9]\d*|)$/;
  if (!year) return true;
  else if (regex.test(year)) {
    if (parseInt(year) >= INPUT_MIN_YEAR && parseInt(year) <= INPUT_MAX_YEAR) return true;
    else return false;
  }
  return false;
});
