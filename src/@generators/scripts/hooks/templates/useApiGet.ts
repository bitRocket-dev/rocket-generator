/** @format */

import { useState, useEffect } from 'react';

export const useApiGet = (url: string) => {
  const [payload, setPayload] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    (async url => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setPayload(result);
      } catch (errors) {
        setErrors(errors);
      }
    })(url);
  }, [url]);

  return [payload, errors];
};
