/** @format */

export const utilitySaveToSessionStorage = (ref: string, data: Object | Array<any>): void =>
  sessionStorage.setItem(ref, JSON.stringify(data));
