/** @format */

// #region ::: IMPORT
import styled from "styled-components";
import { TStyled } from "../../@theme";
import { Icon } from "./Icon";
// #endregion

interface PropsStyled extends TStyled {
  checked: boolean;
  disabled?: boolean;
}

export const StyledCheckbox = styled.div<PropsStyled>`
  display: grid;
  width: 25px;
  height: 25px;
  border: ${({ theme }: PropsStyled): string =>
    `1px solid ${theme.colors.light.primary}`};
  border-radius: 20px;
  transition: all 150ms;
  background: ${({ theme, disabled }: PropsStyled): string =>
    disabled
      ? ` ${theme.colors.light.bgInactive}`
      : ` ${theme.colors.light.secondary}`};

  ${Icon} {
    visibility: ${({ checked }: PropsStyled) =>
      checked ? "visible" : "hidden"};
    background-color: ${({ theme }: PropsStyled): string =>
      theme.colors.light.primary};
    opacity: ${({ disabled }: PropsStyled): number => (disabled ? 0.5 : 1)};
    border-radius: 20px;
  }

  padding: 3px;
`;
