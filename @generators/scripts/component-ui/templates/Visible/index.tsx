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
  dataCy?: string;
  children: JSX.Element;
  type: "desktop" | "mobile";
}

export const UIVisible: FC<Props> = memo(
  ({ children, type, dataCy = "UIVisible" }): JSX.Element => {
    return type === "desktop" ? (
      <WrapperDesktop data-cy={dataCy}>{children}</WrapperDesktop>
    ) : (
      <WrapperMobile data-cy={dataCy}>{children}</WrapperMobile>
    );
  }
);

UIVisible.displayName = "UIVisible";
