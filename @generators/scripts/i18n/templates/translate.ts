/** @format */

import translations from "..";
import { TLocale } from "./declaration";
import { TTranslationsExample } from "./translation/Example";

export type TTranslation = TTranslationsExample;

export const t = ({
  id,
  locale,
}: {
  id: TTranslation;
  locale: TLocale;
}): string => {
  if (!translations[locale][id]) {
    console.warn("MISS TRANSLATION FOR ID", id);
    return id;
  }
  return translations[locale][id];
};
