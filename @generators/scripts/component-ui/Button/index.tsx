/** @format */

import { SyntheticEvent, FC, memo } from "react";
import styled from "styled-components";
import { TStyled } from "../@theme";
import { TIcon, UIIcon } from "../Icon";
import { TSize } from "./helpers/declaration";
import { utilityGetFontSize } from "./helpers/utilityGetFontSize";

interface PropsWrapper extends TStyled {
  disabled?: boolean;
  variant?: "primary";
}

const Button = styled.button<PropsWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  cursor: ${({ disabled }: PropsWrapper) =>
    disabled ? "not-allowed" : "pointer"};
  font-weight: 700;
  border: none;
  border-radius: 16px;
  ${({ variant, theme, disabled }: PropsWrapper) =>
    variant === "primary" &&
    `background-color: ${
      disabled ? theme.colors.light.inactive : theme.colors.dark.primary
    };
    color: ${theme.colors.light.secondary};
    `};
  &:hover {
    background-color: ${({ theme, disabled }: PropsWrapper) =>
      disabled ? "grey" : theme.colors.dark.inactive};
    color: ${({ theme, disabled }: PropsWrapper) =>
      disabled && theme.colors.light.secondary};
  }
`;

interface PropsShared {
  disabled?: boolean;
  variant?: "primary";
  onClick?: (event: SyntheticEvent) => void;
  size?: TSize;
}

interface PropsWithIcon extends PropsShared {
  icon: TIcon;
  text?: PropsWithText["text"];
}

interface PropsWithText extends PropsShared {
  text: string;
  icon?: PropsWithIcon["icon"];
}

export type Props = PropsWithIcon | PropsWithText;

export const UIButton: FC<Props> = memo(
  ({ disabled, variant, onClick, icon, text, size = "md" }): JSX.Element => {
    const { fontSize } = utilityGetFontSize(size);
    return (
      <Button disabled={disabled} variant={variant} onClick={onClick}>
        {icon && (
          <>
            <div style={{ margin: "0 0.40rem" }}>
              <UIIcon size={size} icon={icon} />
            </div>
          </>
        )}
        {text && <span style={{ fontSize: `${fontSize}px` }}>{text}</span>}
      </Button>
    );
  }
);
