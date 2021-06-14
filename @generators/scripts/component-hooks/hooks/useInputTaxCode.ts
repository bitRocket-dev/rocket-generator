/** @format */

import { ChangeEvent, useState, useEffect } from 'react';

export const useInputTaxCode = (
  initialValue: string = '',
  apiValidation: () => Promise<boolean>,
): [string, (event: ChangeEvent<HTMLInputElement>) => void, boolean] => {
  const [validation, setValidation] = useState(true);
  const [taxCode, setTaxCode] = useState(initialValue);
  const isValidTaxCode = taxCode && taxCode.length > 0 ? validation : true;

  let timer: any;

  const checkTaxCode = async (text: string): Promise<void> => {
    const regEx =
      /^([A-Za-z]{6}[0-9lmnpqrstuvLMNPQRSTUV]{2}[abcdehlmprstABCDEHLMPRST]{1}[0-9lmnpqrstuvLMNPQRSTUV]{2}[A-Za-z]{1}[0-9lmnpqrstuvLMNPQRSTUV]{3}[A-Za-z]{1})$|([0-9]{11})$/;
    const isValidText = regEx.test(text);
    if (isValidText) {
      const response = await apiValidation();
      if (response) setValidation(response);
    }
  };

  useEffect(() => {
    if (taxCode && taxCode.length !== 16) setValidation(false);
  }, [taxCode]);

  const debounceOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const text = event.target.value;
    setTaxCode(text);
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (text && text.length === 16) checkTaxCode(text);
    }, 100);
  };

  return [taxCode, debounceOnChange, isValidTaxCode];
};
