/** @format */

import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { themeGeneral } from "./@theme";
import { ThemeGlobalStyle } from "./@theme/GlobalStyle";
interface Props {
  children: JSX.Element;
}
export const ProviderTheme: FC<Props> = ({ children }) => (
  <ThemeProvider theme={themeGeneral}>
    <ThemeGlobalStyle />
    {children}
  </ThemeProvider>
);
