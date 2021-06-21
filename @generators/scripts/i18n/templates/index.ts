/** @format */

const getFromLocalStorage = (ref: string): any => {
  if (!ref) return {};
  const storage: any = localStorage.getItem(ref);
  return storage ? JSON.parse(storage) : {};
};

export type TLocale = 'it' | 'en';

export const i18nGetLocaleDefault = ({ appName, keyStore }: { appName: string; keyStore: string }): TLocale => {
  const localState = getFromLocalStorage(appName);
  const localeCached = localState[keyStore];
  if (localeCached) return localeCached;
  const browserLocale = window.navigator.language;
  const localeFormatted = browserLocale.substring(0, 2);
  if (localeFormatted !== 'it' && localeFormatted !== 'en') return 'it';
  return localeFormatted;
};
