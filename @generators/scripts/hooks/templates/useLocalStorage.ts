/** @format */

import { useState } from "react";

export const useLocalStorage = (key: string, initialValue: string) => {
  function getFromLocalStorage() {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  }
  const prevLocalStorage = getFromLocalStorage();
  const [storedValue, setStoredValue] = useState(prevLocalStorage);

  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
