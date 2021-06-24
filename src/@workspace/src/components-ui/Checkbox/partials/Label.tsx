/** @format */

// #region ::: IMPORT
import styled from 'styled-components';
import { TStyled } from '../../../theme';
// #endregion

interface Props extends TStyled {
  disabled?: boolean;
}

export const Label = styled.label<Props>`
  opacity: ${({ disabled }: Props) => (disabled ? '0.5' : '1')};
  align-items: top;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  touch-action: manipulation;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: ${({ theme }): string => theme.colors.light.primary};
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
`;
