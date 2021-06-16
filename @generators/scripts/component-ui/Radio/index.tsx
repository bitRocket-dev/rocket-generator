/** @format */

import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { TStyled } from "../@theme";

//#region ::: PARTIALS

export interface PropsLabel extends TStyled {
  disabled?: boolean;
}

const Label = styled.label<PropsLabel>`
  display: inline-block;
  vertical-align: middle;
  width: fit-content;
  & :hover {
    ${({ disabled }: PropsLabel) =>
      !disabled &&
      `background: ${({ theme }: TStyled) => theme.colors.dark.primary};`}
  }
`;

const Icon = styled.div<TStyled>`
  background: ${({ theme }: TStyled) => theme.colors.dark.primary};
  border-radius: 20px;
  height: 10px;
  width: 10px;

  ${Label} & :hover {
    background: ${({ theme }: TStyled) => theme.colors.dark.primary};
  }
`;

const HiddenRadio = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

interface PropsStyledRadio extends TStyled {
  checked: boolean;
  disabled?: boolean;
}

const StyledRadio = styled.div<PropsStyledRadio>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: 1px solid
    ${({ disabled, theme }: PropsStyledRadio) =>
      disabled ? theme.colors.dark.secondary : theme.colors.dark.primary};
  border-radius: 20px;
  transition: all 150ms;
  background: ${({ disabled, theme }: PropsStyledRadio) =>
    disabled ? theme.colors.dark.bgInactive : theme.colors.dark.secondary};
  &:hover {
    background: ${({ theme, checked }: PropsStyledRadio) =>
      checked ? theme.colors.light.bgInactive : theme.colors.dark.bgInactive};
    ${({ theme, disabled }: PropsStyledRadio) =>
      disabled && `background: ${theme.colors.dark.bgInactive}`};
  }
  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 1px
      ${({ theme }: PropsStyledRadio) => theme.colors.dark.primary};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

//#endregion

export interface Props {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const UIRadioButton: FC<Props> = ({
  checked,
  onChange,
  disabled,
}): JSX.Element => (
  <Label>
    <HiddenRadio
      checked={disabled ? false : checked}
      onChange={onChange}
      disabled={disabled}
    />
    <StyledRadio checked={disabled ? false : checked} disabled={disabled}>
      <Icon>
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledRadio>
  </Label>
);

UIRadioButton.displayName = "UIRadioButton";
