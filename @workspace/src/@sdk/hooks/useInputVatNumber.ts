/** @format */

import { ChangeEvent, useState, useEffect } from 'react';

export const useInputVatNumber = (
  initialValue: string = '',
  apiValidateVatNumber: () => Promise<boolean>,
): [string, (event: ChangeEvent<HTMLInputElement>) => void, boolean] => {
  const [validation, setValidation] = useState(true);
  const [vatNumber, setVatNumber] = useState(initialValue);
  const isValidVatNumber = vatNumber && vatNumber.length > 0 ? validation : true;

  let timer: any;

  const checkVatNumber = async (text: string): Promise<void> => {
    const isValidText = /^[0-9]{11}$/.test(text);
    if (isValidText) {
      const response = await apiValidateVatNumber();
      setValidation(response);
    }
  };

  useEffect(() => {
    if (vatNumber && vatNumber.length !== 11) setValidation(false);
  }, [vatNumber]);

  const debounceOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const text = event.target.value;

    setVatNumber(text);
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (text && text.length === 11) checkVatNumber(text);
    }, 100);
  };

  return [vatNumber, debounceOnChange, isValidVatNumber];
};
