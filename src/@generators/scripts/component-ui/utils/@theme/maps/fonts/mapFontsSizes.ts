/** @format */

export interface TFontSizeValues {
  display: string;
  header: string;
  title: string;
  subtitle: string;
  caption: string;
}

export const mapFontsSize: TFontSizeValues = {
  display: '50px',
  header: '28px',
  title: '21px',
  subtitle: '16px',
  caption: '14px',
};

export type TFontVariant = keyof TFontSizeValues;
export type TFontSize = keyof TFontSizeValues;
