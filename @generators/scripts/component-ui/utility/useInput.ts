/** @format */

import { ChangeEvent, useState } from 'react';

export const useInput = (
  initialValue: string = '',
  functionToValidate: (text: string) => boolean = () => true,
  blockDuringWriting: boolean = false,
): [string, (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, boolean] => {
  const [value, setValue] = useState(initialValue);
  const isValid = !value || functionToValidate(value);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const text = event.target.value;
    const isValidType = functionToValidate(text);
    if (!blockDuringWriting) setValue(text);
    else if (isValidType) setValue(text);
  };

  return [value, onChange, isValid];
};
