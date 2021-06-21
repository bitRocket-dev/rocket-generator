/** @format */
import { Translation } from '../translate';

interface Translations {
  'example.message': Translation;
}

export const translationsGeneral: Translations = {
  'example.message': { it: 'Benvenuto', en: 'Welcome' },
};

export type TTranslationsGeneral = keyof Translations;
