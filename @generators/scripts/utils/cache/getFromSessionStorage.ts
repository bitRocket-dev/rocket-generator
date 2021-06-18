/** @format */

export const utilityGetFromSessionStorage = (ref: string): Object => {
  const storage: string | null = sessionStorage.getItem(ref);
  return storage ? JSON.parse(storage) : {};
};
