/** @format */

// #region ::: IMPORT
import React, { ChangeEvent, Dispatch, FC, memo, SetStateAction } from "react";
import styled from "styled-components";
import { TStyled } from "../../../../@theme";
import { BoxPrefix } from "./BoxPrefix";
import { Outer } from "./Outer";
// #endregion

// #region ::: PARTIALS
interface TProps extends TStyled {
  isValid: boolean;
  prefix?: string;
  uppercase?: boolean;
  disabled?: boolean;
  textCenter?: boolean;
}

const UIInput = styled.input<TProps>`
  font-size: 12px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  height: 28px;
  padding: 0 10px;
  border: none;
  color: ${({ theme }) => theme.colors.textGreyDark};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.backgroundDisabled : theme.colors.backgroundInput};
  ${({ uppercase }: TProps) => uppercase && `text-transform: uppercase`};
  ${({ disabled }) => disabled && "cursor: not-allowed"};
  ::placeholder {
    color: ${({ theme }) => theme.colors.textGreyLight};
  }
`;
// #endregion

export interface Props {
  dataCy: string;
  disabled?: boolean;
  info?: string;
  isRequired?: boolean;
  label?: string;
  maxLength?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  prefix?: string;
  type?: string;
  isValid?: boolean;
  value?: string;
}

export const Input: FC<Props> = memo(
  ({
    placeholder,
    dataCy = "Input",
    value = "",
    disabled,
    onChange,
    maxLength,
    isValid = true,
    prefix,
    type,
  }): JSX.Element => (
    <Outer isValid={isValid} prefix={prefix}>
      {prefix && <BoxPrefix>{prefix}</BoxPrefix>}
      <UIInput
        data-cy={dataCy}
        disabled={disabled}
        maxLength={maxLength}
        onChange={onChange}
        placeholder={placeholder}
        prefix={prefix}
        type={type}
        isValid={isValid}
        value={value}
      />
    </Outer>
  )
);

Input.displayName = "Input";
