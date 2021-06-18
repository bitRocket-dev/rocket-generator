/** @format */

import styled from "styled-components";
import { TStyled } from "../../@theme";

interface Props extends TStyled {
  fluid?: boolean;
  disabled?: boolean;
}

export const Wrapper = styled.div<Props>`
  cursor: ${({ disabled }: Props) => (disabled ? "not-allowed" : "pointer")};
  width: ${({ fluid }: Props) => (fluid ? "100%" : "auto")};
  & + & {
    margin-left: 0.5rem;
  }
`;
