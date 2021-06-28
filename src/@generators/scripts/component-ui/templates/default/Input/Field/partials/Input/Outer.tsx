/** @format */

// #region ::: IMPORT
import styled from 'styled-components';
import { TStyled } from '../../../../@theme';
// #endregion

interface Props extends TStyled {
  isValid: boolean;
  prefix?: string;
}

export const Outer = styled.div<Props>`
  border: 1px solid
    ${({ theme, isValid }: Props) => (!isValid ? `${theme.colors.light.error}` : `${theme.colors.light.borderInput}`)};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
`;
