/** @format */

// #region ::: IMPORT
import styled from 'styled-components';
import { TStyled } from '../../@theme';
// #endregion

interface PropsStyled extends TStyled {
  isChecked: boolean;
}

export const Slider = styled.span<PropsStyled>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 100px;
  background-color: white;
  border: ${({ theme }: PropsStyled): string => `1px solid ${theme.colors.dark.primary}`};
  &:before {
    z-index: 1;
    position: absolute;
    content: '';
    width: 26px;
    height: 26px;
    left: 2px;
    bottom: 1px;
    background-color: ${({ isChecked, theme }: PropsStyled): string | false =>
      isChecked ? theme.colors.dark.primary : theme.colors.dark.primary};
    border-radius: 50%;
    ${({ isChecked }: PropsStyled): string | false => isChecked && `transform: translateX(22px)`};
  }
`;
