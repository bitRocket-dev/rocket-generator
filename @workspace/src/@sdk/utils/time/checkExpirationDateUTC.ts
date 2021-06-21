/** @format */

export const utilityCheckExpirationDateUTC = (timeUTC?: Date): boolean => {
  if (!timeUTC) return false;
  const timestamp = new Date(timeUTC);
  return timestamp.getTime() > new Date().getTime();
};
