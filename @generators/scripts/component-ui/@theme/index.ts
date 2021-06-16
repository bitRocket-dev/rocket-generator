/** @format */

import { mapSpacing, TSpacingValues } from './maps/general/mapSpacing';
import { mapColors, TColorsMap } from './maps/general/mapColors';
import { mapFonts, TFontValues } from './maps/fonts';
import { mapZIndex, TZIndexValues } from './maps/general/mapZIndex';

export interface TTheme {
  fonts: TFontValues;
  spacing: TSpacingValues;
  colors: TColorsMap;
  zIndex: TZIndexValues;
}

export const themeGeneral: TTheme = {
  fonts: mapFonts,
  spacing: mapSpacing,
  colors: mapColors,
  zIndex: mapZIndex,
};

export interface TStyled {
  theme: TTheme;
}
