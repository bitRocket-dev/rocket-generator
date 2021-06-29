/** @format */

export const utilityCreateStoreKey = (name: string): string => {
  const nameActionTypeLower = name.charAt(0).toUpperCase() + name.slice(1);
  return `${nameActionTypeLower}: any`;
};
