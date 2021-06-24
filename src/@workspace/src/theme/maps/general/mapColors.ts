/** @format */

export interface TColorsValues {
  primary: string;
  secondary: string;
  bgInactive: string;
  inactive: string;
  error: string;
  borderInput: string;
}

export type TColor = keyof TColorsValues;

export interface TColorsMap {
  light: TColorsValues;
  dark: TColorsValues;
}

export const mapColors: TColorsMap = {
  light: {
    primary: '#1D4A6B',
    secondary: '#fffefe',
    bgInactive: '#BAC8D2',
    inactive: '#696969',
    error: '#FF5856',
    borderInput: '#ccc',
  },
  dark: {
    primary: '#2D7AB3',
    secondary: '#fffefe',
    bgInactive: '#BAC8D2',
    inactive: '#696969',
    error: '#FF5856',
    borderInput: '#ccc',
  },
};
