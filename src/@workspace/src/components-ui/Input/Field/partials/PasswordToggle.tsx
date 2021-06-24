/** @format */

// #region ::: IMPORT
import styled from 'styled-components';
import { TStyled } from '../../../../theme';
// #endregion

export const PasswordToggle = styled.div<TStyled>`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }): string => theme.colors.primaryDark};
  }
`;
