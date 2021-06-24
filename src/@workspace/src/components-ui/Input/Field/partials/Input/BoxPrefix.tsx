/** @format */

// #region ::: IMPORT
import styled from 'styled-components';
import { TStyled } from '../../../../../theme';
// #endregion

export const BoxPrefix = styled.div<TStyled>`
  background-color: ${({ theme }): string => `${theme.colors.backgroundInputBoxPrefix}`};
  width: 32px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  color: black;
`;
