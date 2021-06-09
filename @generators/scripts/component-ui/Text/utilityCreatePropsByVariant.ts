/** @format */

import { TFontSize, TFontVariant } from '../../theme/maps/fonts/mapFontsSizes';
import { TFontWeight } from '../../theme/maps/fonts/mapFontsWeights';
import { TFontTag } from '../../theme/maps/fonts/mapFontsTag';
import { TFontTransform } from '../../theme/maps/fonts/mapFontsTransforms';

interface TextProps {
  size: TFontSize;
  weight: TFontWeight;
  tag: TFontTag;
  transform?: TFontTransform;
}

export const utilityCreatePropsByVariant = (variant: TFontVariant): TextProps => {
  switch (variant) {
    case 'display':
      return {
        tag: 'h1',
        weight: 'black',
        size: 'display',
      };
    case 'header':
      return {
        tag: 'h2',
        weight: 'black',
        size: 'header',
      };
    case 'title':
      return {
        tag: 'h3',
        weight: 'medium',
        size: 'title',
      };
    case 'subtitle':
      return {
        tag: 'h4',
        weight: 'bold',
        size: 'subtitle',
      };
    case 'caption':
      return {
        tag: 'p',
        weight: 'regular',
        size: 'caption',
      };
    default:
      return {
        tag: 'span',
        weight: 'regular',
        size: 'caption',
      };
  }
};
