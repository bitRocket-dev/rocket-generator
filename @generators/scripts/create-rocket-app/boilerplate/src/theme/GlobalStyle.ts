/** @format */

import { createGlobalStyle } from 'styled-components';
import { mediaQuery } from './mediaQuery';
import './normalize.css';

export const ThemeGlobalStyle = createGlobalStyle`
  html {
    font-size: 100% !important;
    ${mediaQuery.sm`
        font-size: 100% !important;
      `};
    ${mediaQuery.md`
        font-size: 90% !important;
      `};
    ${mediaQuery.lg`
        font-size: 90% !important;
      `};
    ${mediaQuery.xl`
        font-size: 95% !important;
      `};
   }
`;
