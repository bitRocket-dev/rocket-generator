/** @format */

import { FC } from "react";
import styled from "styled-components";
import { TStyled } from "../@theme";

interface propsStyled extends TStyled {
  orientation: "left" | "right" | "top" | "bottom";
}

const Tooltip = styled.div<propsStyled>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  border: solid 1px ${({ theme }: TStyled) => theme.colors.dark.primary};
  min-height: 40px;
  color: ${({ theme }: TStyled) => theme.colors.dark.primary};
  background: ${({ theme }: TStyled) => theme.colors.dark.secondary};
  border-radius: 5px;
  :after {
    ${({ orientation, theme }: propsStyled) =>
      orientation === "left" &&
      `content: ' ';
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -8px;
    border-width: 8px 11px;
    border-style: solid;
    border-color: transparent ${theme.colors.dark.primary} transparent transparent`};

    ${({ orientation, theme }: propsStyled) =>
      orientation === "right" &&
      `content: ' ';
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -8px;
    border-width: 8px 11px;
    border-style: solid;
    border-color: transparent  transparent transparent ${theme.colors.dark.primary}`}

    ${({ orientation, theme }: propsStyled) =>
      orientation === "bottom" &&
      `content: ' ';
    position: absolute;
    top: 100%;
    border-width: 8px 11px;
    border-style: solid;
    border-color:${theme.colors.dark.primary} transparent  transparent transparent `}

${({ orientation, theme }: propsStyled) =>
      orientation === "top" &&
      `content: ' ';
    position: fixed;    
    top: -1px;
    border-width: 8px 11px;
    border-style: solid;
    border-color: transparent  transparent ${theme.colors.dark.primary} transparent `}
  }
`;

export interface Props {
  dataCy?: string;
  text?: string;
  orientation?: "left" | "right" | "top" | "bottom";
}

export const UITooltip: FC<Props> = ({
  dataCy = "UITooltip",
  text,
  orientation = "left",
}): JSX.Element => {
  return (
    <Tooltip data-cy={dataCy} orientation={orientation}>
      {text}
    </Tooltip>
  );
};
