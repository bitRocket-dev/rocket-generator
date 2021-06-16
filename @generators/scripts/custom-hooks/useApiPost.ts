/** @format */

import { useState, useEffect } from 'react';

export const useApiPost = (url: string, body: any) => {
  const [payload, setPayload] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    (async url => {
      try {
        const response = await fetch(url, {
          body,
          method: 'POST',
        });
        const result = await response.json();
        setPayload(result);
      } catch (errors) {
        setErrors(errors);
      }
    })(url);
  }, [body, url]);

  return [payload, errors];
};
