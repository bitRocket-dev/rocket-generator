/** @format */

import styled from 'styled-components';
import { TStyled } from '../../../theme';
import { TColor } from '../../../theme/maps/general/mapColors';
import { TFontSize } from '../../../theme/maps/fonts/mapFontsSizes';
import { TFontWeight } from '../../../theme/maps/fonts/mapFontsWeights';
import { TFontTag } from '../../../theme/maps/fonts/mapFontsTag';
import { Formatter } from './Formatter';
import { TFontTransform } from '../../../theme/maps/fonts/mapFontsTransforms';

interface Props extends TStyled {
  color: TColor;
  size: TFontSize;
  weight: TFontWeight;
  tag?: TFontTag;
  transform?: TFontTransform;
  noWrap?: boolean;
  underline?: boolean;
}

export const Typography = styled(Formatter)<Props>`
  color: ${({ theme, color }: Props) => theme.colors.light[color]};
  font-size: ${({ theme, size }: Props) => theme.fonts.size[size]};
  font-weight: ${({ theme, weight }: Props) => theme.fonts.weight[weight]};
  text-overflow: ellipsis;
  overflow: hidden;
  ${({ noWrap }: Props) => !noWrap && 'white-space:no-wrap ;'}
  ${({ theme, transform }: Props) => transform && `text-transform: ${theme.fonts.transform[transform]}`};
  ${({ underline }: Props) => underline && 'text-decoration:underline;'}
`;

Typography.displayName = 'Typography';
