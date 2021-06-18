/** @format */

export const utilityGetFromLocalStorage = (ref: string): Object => {
  if (!ref) return {};
  const storage: any = localStorage.getItem(ref);
  return storage ? JSON.parse(storage) : {};
};
