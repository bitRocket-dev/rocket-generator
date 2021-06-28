/** @format */

// #region ::: IMPORT
import styled from 'styled-components';
import { TStyled } from '../../../@theme';
// #endregion

interface Props {
  isFilter: boolean;
  theme: TStyled;
  hasBackground?: boolean;
}

export const DateInputField = styled.input<Props>`
  height: 30px;
  padding: 10px;
  appearance: none;
  border: ${({ theme, isFilter }): string =>
    !isFilter ? `1px solid ${theme.colors.borderInput}` : `1px solid ${theme.colors.borderFilter}`};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  width: 100%;
  position: relative;
  color: ${({ theme }): string => theme.colors.textGreyDark};
  background-color: ${({ theme }): string => theme.colors.backgroundInput};
`;
