/** @format */

import { useEffect, useState } from 'react';

export const useCancelableFetch = (url: string, body: any) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { ...body, signal: abortController.signal })
      .then(response => {
        if (response.status > 299) throw new Error(response.statusText);
        return response;
      })
      .then(response => response.json())
      .then(setData)
      .catch(({ message, name }) => name !== 'AbortError' && setError(message));

    return () => abortController.abort();
  }, [url, body]);

  return [data, error];
};
