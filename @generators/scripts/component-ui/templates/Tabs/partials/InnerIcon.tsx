/** @format */

// #region ::: IMPORT
import styled from "styled-components";
import { TStyled } from "../../@theme";
// #endregion

export const InnerIcon = styled.div<TStyled>`
  height: 30px;
  width: 30px;
  margin-left: -20px;
  margin-top: -30px;
  background-color: ${({ theme }: TStyled): string =>
    theme.colors.dark.primary};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
