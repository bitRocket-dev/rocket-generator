exports.translate = () => {
  return `
import { TLocale } from './declarations';
import { translations } from './translations';

  export type TTranslation

  export const t = ({ id, locale }: { id: TTranslation; locale: TLocale }): string => {
    if (!translations[locale][id]) {
      console.warn('MISS TRANSLATION FOR ID', id);
      return id;
    }
    return translations[locale][id];
  };
  `;
};
