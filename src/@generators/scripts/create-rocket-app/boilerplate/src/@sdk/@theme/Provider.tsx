/** @format */

import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeGeneral } from '.';
import { ThemeGlobalStyle } from './GlobalStyle';
interface Props {
  children: JSX.Element;
}
export const ProviderTheme: FC<Props> = ({ children }) => (
  <ThemeProvider theme={themeGeneral}>
    <ThemeGlobalStyle />
    {children}
  </ThemeProvider>
);
