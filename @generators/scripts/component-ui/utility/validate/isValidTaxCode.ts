/** @format */

import memoize from 'fast-memoize';

export const INPUT_MAX_LENGHT_TAXCODE = 16;

export const utilityIsValidTaxCode = memoize((taxCode: string): boolean => {
  if (!taxCode) return false;
  if (taxCode.length !== INPUT_MAX_LENGHT_TAXCODE) return false;
  const regex =
    /^([A-Za-z]{6}[0-9lmnpqrstuvLMNPQRSTUV]{2}[abcdehlmprstABCDEHLMPRST]{1}[0-9lmnpqrstuvLMNPQRSTUV]{2}[A-Za-z]{1}[0-9lmnpqrstuvLMNPQRSTUV]{3}[A-Za-z]{1})$|([0-9]{11})$/;
  return regex.test(taxCode);
});
