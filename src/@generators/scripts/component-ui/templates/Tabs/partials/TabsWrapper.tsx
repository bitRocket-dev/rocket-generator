/** @format */

// #region ::: IMPORT
import styled from 'styled-components';
import { TStyled } from '../../@theme';
// #endregion

export const TabsWrapper = styled.div<TStyled>`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  height: 55px;
  width: 100%;
  background: ${({ theme }): string => theme.colors.backgroundTabs};
  border-bottom: ${({ theme }): string => `1px solid ${theme.colors.borderRow}`};
`;
