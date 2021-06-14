/** @format */

import { useState } from 'react';

export const useSessionStorage = (key: string, initialValue: string) => {
  function getFromSessionStorage() {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  }
  const prevSessionStorage = getFromSessionStorage();
  const [storedValue, setStoredValue] = useState(prevSessionStorage);

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {}
  };

  return [storedValue, setValue];
};
