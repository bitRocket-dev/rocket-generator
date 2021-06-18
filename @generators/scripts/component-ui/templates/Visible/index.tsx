/** @format */

import { FC, memo } from "react";
import styled from "styled-components";
import { TStyled } from "../@theme";
import { mediaQuery } from "../@theme/mediaQuery";

// #region ::: PARTIALS
const WrapperDesktop = styled.div<TStyled>`
  display: none;
  ${mediaQuery.md`
    display: inherit;
  `};
`;

const WrapperMobile = styled.div<TStyled>`
  ${mediaQuery.md`
    display:none;
  `};
`;
// #endregion

export interface Props {
  children: JSX.Element;
  type: "desktop" | "mobile";
}

export const UIVisible: FC<Props> = memo(({ children, type }): JSX.Element => {
  return type === "desktop" ? (
    <WrapperDesktop>{children}</WrapperDesktop>
  ) : (
    <WrapperMobile>{children}</WrapperMobile>
  );
});

UIVisible.displayName = "UIVisible";
