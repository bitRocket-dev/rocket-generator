/** @format */

// #region ::: IMPORT
import React, { ChangeEvent, FC, memo, SyntheticEvent, useState } from "react";
import { ErrorRow } from "./partials/ErrorRow";
import { PasswordToggle } from "./partials/PasswordToggle";
import { Input } from "./partials/Input";
import { UIText } from "../../Text";
import { UIColumn } from "../../Grid/Column";
import { UIRow } from "../../Grid/Row";
// #endregion

export interface Props {
  dataCy: string;
  disabled?: boolean;
  errorMessage?: string;
  isRequired?: boolean;
  label?: string;
  maxLength?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  prefix?: string;
  type: "text" | "password";
  isValid: boolean;
  value: string;
}

export const InputField: FC<Props> = memo(
  ({
    dataCy = "InputField",
    disabled,
    errorMessage,
    isRequired,
    label,
    maxLength,
    onChange,
    placeholder = "",
    prefix,
    type = "text",
    isValid = true,
    value = "",
  }: Props): JSX.Element => {
    const [hidePassword, setHidePassword] = useState(false);
    const isPassword = type === "password";
    const labelPassword = hidePassword ? "Nascondi" : "Mostra";
    const inputLabel = label ? (isRequired ? `${label}*` : label) : "";

    const handlePassword = (event: SyntheticEvent): void => {
      event.preventDefault();
      setHidePassword(!hidePassword);
    };

    return (
      <>
        <UIRow flex>
          <UIColumn
            md={8}
            flex
            justifyContent="flex-start"
            alignItems="flex-end"
            fluid
          >
            {inputLabel && (
              <UIText text={inputLabel} variant="caption" noWrap={false} />
            )}
          </UIColumn>
          <UIColumn
            md={4}
            flex
            justifyContent="flex-end"
            alignItems="flex-end"
            fluid
          >
            {isPassword && (
              <PasswordToggle onClick={handlePassword}>
                <UIText
                  text={labelPassword}
                  variant="caption"
                  color="primary"
                />
              </PasswordToggle>
            )}
          </UIColumn>
        </UIRow>
        <Input
          type={hidePassword ? "text" : type}
          data-cy={dataCy}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          isValid={isValid}
          prefix={prefix}
        />
        {errorMessage && !isValid && (
          <ErrorRow>
            <span>{errorMessage}</span>
          </ErrorRow>
        )}
      </>
    );
  }
);

InputField.displayName = "InputField";
