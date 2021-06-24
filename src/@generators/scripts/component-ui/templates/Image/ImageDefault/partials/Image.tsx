/** @format */

// #region ::: IMPORT

import styled from 'styled-components';
import { TStyled } from '../../../@theme';
// #endregion

interface Props extends TStyled {
  height?: number;
  width?: number;
  src?: string;
  borderRadius?: number;
  hasDarkBackground: boolean;
}

export const Image = styled.div<Props>`
  width: ${({ width }: Props): string | false | undefined => (width ? `${width}px` : '100%')};
  height: ${({ height }: Props): string | false | undefined => (height ? `${height}px` : '100%')};
  background-image: ${({ src }: Props): string => `url(${src})`};
  ${({ borderRadius }: Props): string | 0 | undefined => borderRadius && `border-radius: ${borderRadius}px`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ hasDarkBackground }): string | false => hasDarkBackground && `mix-blend-mode: multiply;`};
`;
