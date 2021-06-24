/** @format */

export const utilitySaveToLocalStorage = (ref: string, data: Object | Array<any>): void =>
  localStorage.setItem(ref, JSON.stringify(data));
