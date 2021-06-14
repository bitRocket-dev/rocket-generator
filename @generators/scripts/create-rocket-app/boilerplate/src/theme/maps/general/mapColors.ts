/** @format */

export interface TColorsValues {}

export type TColor = keyof TColorsValues;

export interface TColorsMap {
  light: TColorsValues;
  dark: TColorsValues;
}

export const mapColors: TColorsMap = {
  light: {},
  dark: {},
};
