/** @format */

import { TLocale } from '.';
import { translations } from './translations';
import { TTranslationsGeneral } from './translations/general';

export type Translation = { it: string; en: string };

export type TTranslation = TTranslationsGeneral;

interface Params {
  id: TTranslation;
  locale: TLocale;
}

export const t = ({ id, locale }: Params): string => {
  if (!translations[id][locale]) {
    console.warn('MISS TRANSLATION FOR ID', id);
    return id;
  }
  return translations[id][locale];
};
