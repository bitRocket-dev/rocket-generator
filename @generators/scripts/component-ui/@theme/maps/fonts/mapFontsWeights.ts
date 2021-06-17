/** @format */

export interface TFontWeightValues {
  regular: string;
  medium: string;
  bold: string;
  black: string;
}

export type TFontWeight = keyof TFontWeightValues;

export const mapFontsWeights: TFontWeightValues = {
  regular: '400',
  medium: '500',
  bold: '700',
  black: '900',
};
