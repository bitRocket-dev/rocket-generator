/** @format */

// #region ::: IMPORT
import styled from "styled-components";
import { TStyled } from "../../@theme";
// #endregion

interface Props extends TStyled {
  isVisible?: boolean;
}

export const TabInner = styled.div<Props>`
  width: 100%;
  height: calc(100% - 55px);
  overflow-x: hidden;
  overflow-y: auto;
`;
